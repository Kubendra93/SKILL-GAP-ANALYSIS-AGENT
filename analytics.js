/**
 * Analytics.js - Admin Panel dashboard analytics rendering.
 * Aggregates mock database listings, performs data normalization, 
 * and handles Chart.js configurations.
 */

let branchChartInstance = null;
let readinessChartInstance = null;

function renderAdminDashboard() {
  const students = JSON.parse(localStorage.getItem('placement_students')) || [];
  
  // Calculate Key Performance Indicators (KPIs)
  const totalCount = students.length;
  let totalCGPA = 0;
  let testCount = 0;
  let totalScoreSum = 0;
  let passCount = 0; // Score >= 70%

  students.forEach(s => {
    totalCGPA += s.cgpa || 0;
    if (s.assessmentCompleted && s.assessmentResult) {
      testCount++;
      totalScoreSum += s.assessmentResult.percentage || 0;
      if (s.assessmentResult.percentage >= 70) {
        passCount++;
      }
    }
  });

  const avgCGPA = totalCount > 0 ? (totalCGPA / totalCount).toFixed(2) : "0.00";
  const avgScore = testCount > 0 ? Math.round(totalScoreSum / testCount) : 0;
  const successRate = testCount > 0 ? Math.round((passCount / testCount) * 100) : 0;

  // Render KPI values
  document.getElementById('admin-kpi-total').textContent = totalCount;
  document.getElementById('admin-kpi-cgpa').textContent = avgCGPA;
  document.getElementById('admin-kpi-avg-score').textContent = `${avgScore}%`;
  document.getElementById('admin-kpi-success').textContent = `${successRate}%`;

  // Render Registered Students list inside table
  const tableBody = document.getElementById('student-table-body');
  tableBody.innerHTML = '';

  if (students.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-muted);">No student records found. Register to seed the database.</td></tr>`;
  } else {
    students.forEach((s, index) => {
      const isDone = s.assessmentCompleted && s.assessmentResult;
      const scoreText = isDone ? `${s.assessmentResult.percentage}%` : 'Pending';
      
      let badgeClass = 'low';
      if (isDone) {
        if (s.assessmentResult.percentage >= 90) badgeClass = 'high';
        else if (s.assessmentResult.percentage >= 70) badgeClass = 'medium';
      }

      tableBody.innerHTML += `
        <tr>
          <td>${index + 1}</td>
          <td>
            <strong>${escapeHtml(s.name)}</strong>
            <div style="font-size: 0.75rem; color: var(--text-muted);">${escapeHtml(s.email)}</div>
          </td>
          <td>${escapeHtml(s.branch)}</td>
          <td>${s.cgpa}</td>
          <td>${escapeHtml(s.dreamCompany)}</td>
          <td>
            <span class="score-badge ${badgeClass}">${scoreText}</span>
          </td>
          <td>
            <button class="btn btn-secondary" style="padding: 0.25rem 0.5rem; font-size: 0.75rem;" onclick="viewStudentReport('${s.email}')">
              <i class="fas fa-eye"></i> View Report
            </button>
          </td>
        </tr>
      `;
    });
  }

  // Generate Charts
  renderBranchChart(students);
  renderReadinessChart(students);
}

function viewStudentReport(email) {
  const student = getStudentFromDB(email);
  if (student && student.assessmentCompleted) {
    state.currentUser = student;
    renderDashboard();
    showView('dashboard-view');
  } else {
    alert("This student has not completed the assessment yet.");
  }
}

function renderBranchChart(students) {
  const branchCounts = {};
  students.forEach(s => {
    const b = s.branch || 'Other';
    branchCounts[b] = (branchCounts[b] || 0) + 1;
  });

  const labels = Object.keys(branchCounts);
  const data = Object.values(branchCounts);

  const ctx = document.getElementById('branchDistributionChart').getContext('2d');
  
  if (branchChartInstance) {
    branchChartInstance.destroy();
  }

  const isDark = document.body.classList.contains('dark-theme');
  const labelColor = isDark ? '#d1d5db' : '#475569';

  branchChartInstance = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels.length > 0 ? labels : ['No Data'],
      datasets: [{
        data: data.length > 0 ? data : [1],
        backgroundColor: [
          '#6366f1', // Indigo
          '#ec4899', // Pink
          '#14b8a6', // Teal
          '#f59e0b', // Amber
          '#ef4444', // Red
          '#64748b'  // Slate
        ],
        borderWidth: isDark ? 2 : 1,
        borderColor: isDark ? '#111827' : '#ffffff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
          labels: {
            color: labelColor,
            font: { family: 'Plus Jakarta Sans', weight: '600' }
          }
        }
      }
    }
  });
}

function renderReadinessChart(students) {
  let readyProduct = 0;
  let readyService = 0;
  let needsPrep = 0;

  students.forEach(s => {
    if (s.assessmentCompleted && s.assessmentResult) {
      const pct = s.assessmentResult.percentage;
      if (pct >= 90) readyProduct++;
      else if (pct >= 70) readyService++;
      else needsPrep++;
    }
  });

  const ctx = document.getElementById('readinessDistributionChart').getContext('2d');
  
  if (readinessChartInstance) {
    readinessChartInstance.destroy();
  }

  const isDark = document.body.classList.contains('dark-theme');
  const labelColor = isDark ? '#d1d5db' : '#475569';
  const gridColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)';

  readinessChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Product Ready', 'Service Ready', 'Needs Preparation'],
      datasets: [{
        label: 'Number of Students',
        data: [readyProduct, readyService, needsPrep],
        backgroundColor: [
          '#10b981', // Emerald
          '#f59e0b', // Amber
          '#ef4444'  // Rose
        ],
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: labelColor, font: { family: 'Plus Jakarta Sans', weight: '600' } }
        },
        y: {
          grid: { color: gridColor },
          ticks: { 
            color: labelColor, 
            font: { family: 'Plus Jakarta Sans' },
            stepSize: 1,
            precision: 0
          }
        }
      }
    }
  });
}

// Attach functions to window scope
window.renderAdminDashboard = renderAdminDashboard;
window.viewStudentReport = viewStudentReport;
