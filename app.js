/**
 * App.js - Placement Skill Gap Analysis Agent Core Logic
 * Handles state management, routing, assessment engine, score calculation, 
 * recommendation logic, roadmap generation, PDF exporting, and local DB synchronization.
 */

// Initialize local DB if empty with high-fidelity mock students
if (!localStorage.getItem('placement_students')) {
  const MOCK_STUDENTS = [
    {
      name: "Aditya Sharma",
      email: "aditya@placement.com",
      phone: "9876543210",
      college: "IIT Bombay",
      branch: "Computer Science",
      year: "4",
      cgpa: 9.2,
      skills: ["Java", "Data Structures", "Algorithms", "React"],
      languages: ["C++", "Java", "Python"],
      goal: "Software Development Engineer (SDE)",
      dreamCompany: "Google",
      resumeName: "aditya_resume.pdf",
      careerPath: "IT Companies",
      assessmentCompleted: true,
      assessmentResult: {
        percentage: 90,
        totalCorrect: 9,
        totalWrong: 1,
        accuracy: 90,
        scores: { technical: 100, aptitude: 100, communication: 50 },
        readiness: {
          technical: "Excellent",
          communication: "Average",
          aptitude: "Excellent",
          interview: "Good",
          placementLevel: "Ready for Product Companies",
          companies: ["Google", "Microsoft", "Amazon", "Adobe", "Atlassian"]
        },
        skills: {
          strong: ["OOP", "DBMS", "Data Structures", "Quantitative", "Logical Reasoning"],
          weak: ["Professional Writing"],
          missing: ["Professional Writing"]
        },
        roadmap: {
          timeline: [
            {
              week: "Week 1",
              focus: "Professional Email Writing & Corporate Tone",
              tasks: [
                "Read 10 examples of critical incident reporting mails.",
                "Practice writing response drafts for client conflict scenarios.",
                "Study corporate phrasing rules."
              ]
            },
            {
              week: "Week 2",
              focus: "System Design Basics & Scalability",
              tasks: [
                "Understand horizontal vs vertical scaling, load balancers.",
                "Draw simple structural systems for a URL Shortener."
              ]
            },
            {
              week: "Week 3",
              focus: "Advanced Data Structures & Graph Traversal",
              tasks: [
                "Solve 10 hard questions on Trees and Graphs.",
                "Review sliding window subarray problems."
              ]
            },
            {
              week: "Week 4",
              focus: "Mock Interviews & Resume Review",
              tasks: [
                "Conduct 2 peer behavioral mock sessions.",
                "Tailor resume templates using Harvard formats."
              ]
            }
          ],
          resources: {
            courses: [{ name: "Professional Writing", provider: "Coursera", link: "https://www.coursera.org" }],
            youtube: [{ name: "TechLead Communication Tips", channel: "YouTube", link: "https://www.youtube.com" }],
            practice: [{ name: "LeetCode Premium", link: "https://leetcode.com" }]
          }
        },
        detailedBreakdown: [
          {
            questionText: "Which of the following is NOT an inherent property of Object-Oriented Programming (OOP)?",
            options: ["Encapsulation", "Polymorphism", "Compilation", "Inheritance"],
            correctIndex: 2,
            userIndex: 2,
            isCorrect: true,
            category: "Technical",
            subCategory: "OOP",
            difficulty: "Easy",
            explanation: "Compilation is a translation process where source code is compiled into machine code. The four core principles of OOP are Encapsulation, Polymorphism, Inheritance, and Abstraction."
          },
          {
            questionText: "In a relational database system, what does the ACID property 'Atomicity' guarantee?",
            options: [
              "That transactions are processed concurrently without interference.",
              "That all operations in a transaction are completed successfully, or none are.",
              "That the data remains in a valid state after any transaction.",
              "That completed transactions persist even in the event of a system crash."
            ],
            correctIndex: 1,
            userIndex: 1,
            isCorrect: true,
            category: "Technical",
            subCategory: "DBMS",
            explanation: "Atomicity ensures that a transaction is treated as a single, indivisible unit: either all of its modifications are performed, or none of them are (all-or-nothing)."
          },
          {
            questionText: "Consider a table 'Employees' with a column 'Salary'. Which SQL query correctly finds the third highest salary?",
            options: [
              "SELECT Salary FROM Employees ORDER BY Salary DESC LIMIT 1 OFFSET 2;",
              "SELECT DISTINCT Salary FROM Employees ORDER BY Salary DESC LIMIT 1 OFFSET 2;",
              "SELECT DISTINCT Salary FROM Employees ORDER BY Salary DESC LIMIT 3;",
              "SELECT Salary FROM Employees WHERE Salary = (SELECT MAX(Salary) FROM Employees);"
            ],
            correctIndex: 1,
            userIndex: 1,
            isCorrect: true,
            category: "Technical",
            subCategory: "SQL",
            explanation: "To find the 3rd highest salary, we must filter out duplicate salaries using DISTINCT, order them in descending order, skip the first 2 using OFFSET 2, and take the next 1 using LIMIT 1."
          },
          {
            questionText: "What is the worst-case time complexity of searching for an element in a binary search tree (BST)?",
            options: ["O(log n)", "O(n log n)", "O(n)", "O(1)"],
            correctIndex: 2,
            userIndex: 2,
            isCorrect: true,
            category: "Technical",
            subCategory: "Data Structures",
            explanation: "In the worst case, a binary search tree can become skewed (like a linked list). In this case, searching for an element requires traversing all nodes, resulting in a time complexity of O(n)."
          },
          {
            questionText: "Which layer of the OSI model is responsible for logical addressing and routing packets across multiple networks?",
            options: ["Data Link Layer", "Transport Layer", "Network Layer", "Physical Layer"],
            correctIndex: 2,
            userIndex: 2,
            isCorrect: true,
            category: "Technical",
            subCategory: "Computer Networks",
            explanation: "The Network Layer is responsible for addressing (IP addresses) and routing packets from the source host to the destination host across interconnected networks."
          },
          {
            questionText: "What is a 'deadlock' in operating systems?",
            options: [
              "A state where a process has terminated but its entry remains in the process table.",
              "A condition where two or more processes are unable to proceed because each is waiting for the other to release a resource.",
              "A situation where high-priority processes monopolize the CPU, causing lower-priority processes to starve.",
              "A memory management issue occurring due to fragmentation."
            ],
            correctIndex: 1,
            userIndex: 1,
            isCorrect: true,
            category: "Technical",
            subCategory: "Operating Systems",
            explanation: "Deadlock is a scenario where processes are blocked permanently because they hold resources while waiting for resources held by other processes in a circular dependency."
          },
          {
            questionText: "A train running at a speed of 60 km/h crosses a pole in 9 seconds. What is the length of the train?",
            options: ["120 meters", "150 meters", "180 meters", "324 meters"],
            correctIndex: 1,
            userIndex: 1,
            isCorrect: true,
            category: "Aptitude",
            subCategory: "Quantitative",
            explanation: "First, convert speed to meters/second: 60 km/h = 60 * (5/18) m/s = 50/3 m/s. Length of train = Speed * Time = (50/3) * 9 = 150 meters."
          },
          {
            questionText: "If 'A + B' means A is the brother of B; 'A - B' means A is the sister of B; and 'A * B' means A is the father of B, which of the following means that C is the son of M?",
            options: ["M * N - C", "M * C + N", "C + N * M", "M * N + C"],
            correctIndex: 1,
            userIndex: 1,
            isCorrect: true,
            category: "Aptitude",
            subCategory: "Logical Reasoning",
            explanation: "In 'M * C + N': M is the father of C (from M * C). C is the brother of N (from C + N). Since M is the father and C is male (brother), C must be the son of M."
          },
          {
            questionText: "A client reports an urgent bug on a Friday afternoon right as you are preparing to log off. Which email response is most appropriate?",
            options: [
              "Ignore the email until Monday morning to preserve your weekend work-life balance.",
              "Write back immediately saying: 'We will look into this on Monday. Have a nice weekend.'",
              "Send a professional acknowledgment: 'Thank you for raising this. I am registering the ticket now. Our team will triage this based on critical impact, and we will update you first thing Monday morning.'",
              "Reply defensively, explaining that late Friday reports are against standard operating procedures."
            ],
            correctIndex: 2,
            userIndex: 1,
            isCorrect: false,
            category: "Communication",
            subCategory: "Professional Writing",
            explanation: "An professional email should acknowledge receipt, show ownership, set expectations clearly, and avoid defensive phrasing or silent treatment."
          },
          {
            questionText: "During a project team meeting, a colleague disagrees with your technical design proposal and criticizes it in front of others. How should you react?",
            options: [
              "Interrupt them immediately and point out flaws in their own past projects.",
              "Listen calmly, thank them for their feedback, and ask them to explain their specific concerns so you can address them objectively.",
              "Stay silent and register a formal complaint with the HR department after the meeting.",
              "Walk out of the meeting to show that unprofessional behavior will not be tolerated."
            ],
            correctIndex: 1,
            userIndex: 1,
            isCorrect: true,
            category: "Communication",
            subCategory: "Conflict Resolution",
            explanation: "Active listening, maintaining composure, and focusing on technical facts instead of personal insults are key elements of workplace conflict resolution."
          }
        ]
      }
    },
    {
      name: "Priya Patel",
      email: "priya@placement.com",
      phone: "9876543211",
      college: "BITS Pilani",
      branch: "Electronics",
      year: "4",
      cgpa: 8.8,
      skills: ["Verilog", "Embedded C", "Arduino"],
      languages: ["C", "C++", "Python"],
      goal: "Embedded Systems Engineer",
      dreamCompany: "Intel",
      resumeName: "priya_ece_resume.pdf",
      careerPath: "Core Engineering - Electronics",
      assessmentCompleted: true,
      assessmentResult: {
        percentage: 80,
        totalCorrect: 8,
        totalWrong: 2,
        accuracy: 80,
        scores: { technical: 83, aptitude: 50, communication: 100 },
        readiness: {
          technical: "Good",
          communication: "Excellent",
          aptitude: "Average",
          interview: "Good",
          placementLevel: "Ready for High-tier Service & Product Companies",
          companies: ["TCS Digital", "Zoho", "Oracle", "Accenture", "Intel"]
        },
        skills: {
          strong: ["Digital Electronics", "Embedded Systems", "Signals", "Colleague Collaboration"],
          weak: ["Aptitude"],
          missing: ["Aptitude"]
        },
        roadmap: {
          timeline: [
            {
              week: "Week 1",
              focus: "Quantitative Aptitude & Clock Problems",
              tasks: [
                "Practice clock frequency arithmetic and time delay modules.",
                "Complete 15 word problems on speed and work ratios."
              ]
            },
            {
              week: "Week 2",
              focus: "Analog Circuits & Op-Amps",
              tasks: [
                "Revise gain, feedback loops, and frequency responses.",
                "Simulate standard circuits on Multisim/LTSpice."
              ]
            },
            {
              week: "Week 3",
              focus: "Logical Deduction & Chart Analysis",
              tasks: [
                "Solve 10 seating arrangement grids on IndiaBIX."
              ]
            },
            {
              week: "Week 4",
              focus: "Behavioral Prep & Mock Runs",
              tasks: [
                "Use STAR format for highlighting core internships.",
                "Conduct visual whiteboard sessions."
              ]
            }
          ],
          resources: {
            courses: [{ name: "Advanced Aptitude Coaching", provider: "Udemy", link: "https://www.udemy.com" }],
            youtube: [{ name: "IndiaBIX Math Lectures", channel: "YouTube", link: "https://www.youtube.com" }],
            practice: [{ name: "IndiaBIX Portal", link: "https://www.indiabix.com" }]
          }
        },
        detailedBreakdown: []
      }
    },
    {
      name: "Rahul Kumar",
      email: "rahul@placement.com",
      phone: "9876543212",
      college: "DTU Delhi",
      branch: "Mechanical",
      year: "4",
      cgpa: 7.4,
      skills: ["AutoCAD", "Thermodynamics", "Materials Science"],
      languages: ["C", "MATLAB"],
      goal: "Design & Plant Maintenance Engineer",
      dreamCompany: "Tata Motors",
      resumeName: "rahul_mech.pdf",
      careerPath: "Core Engineering - Mechanical",
      assessmentCompleted: true,
      assessmentResult: {
        percentage: 60,
        totalCorrect: 6,
        totalWrong: 4,
        accuracy: 60,
        scores: { technical: 50, aptitude: 100, communication: 50 },
        readiness: {
          technical: "Average",
          communication: "Average",
          aptitude: "Excellent",
          interview: "Average",
          placementLevel: "Needs Additional Preparation",
          companies: ["Focus on foundational concepts first. Re-evaluate in 4 weeks."]
        },
        skills: {
          strong: ["Aptitude", "Thermodynamics", "Fluid Mechanics"],
          weak: ["Strength of Materials", "Manufacturing", "Presentation Skills"],
          missing: ["Strength of Materials", "Manufacturing"]
        },
        roadmap: {
          timeline: [
            {
              week: "Week 1",
              focus: "Strength of Materials & Beam Deflection",
              tasks: [
                "Revise Euler-Bernoulli beam theory and shear force diagrams.",
                "Practice 15 structural bending questions from GATE archives."
              ]
            },
            {
              week: "Week 2",
              focus: "Metal Machining & Built-Up Edge Effects",
              tasks: [
                "Study tool wear mechanisms and surface finish parameters.",
                "Review orthogonal metal cutting equations."
              ]
            },
            {
              week: "Week 3",
              focus: "Technical Presentation & Stakeholder Delivery",
              tasks: [
                "Practice abstracting mathematical models into simple slides.",
                "Deliver a mock design review presentation to a peer."
              ]
            },
            {
              week: "Week 4",
              focus: "Resume Review & Foundations Re-eval",
              tasks: [
                "Rewrite resume projects, highlighting quantifiable design inputs.",
                "Complete a full length mechanical practice test."
              ]
            }
          ],
          resources: {
            courses: [{ name: "Strength of Materials Basics", provider: "NPTEL", link: "https://nptel.ac.in" }],
            youtube: [{ name: "NPTEL Mechanical Series", channel: "YouTube", link: "https://www.youtube.com" }],
            practice: [{ name: "IndiaBIX Mechanical Questions", link: "https://www.indiabix.com" }]
          }
        },
        detailedBreakdown: []
      }
    }
  ];
  localStorage.setItem('placement_students', JSON.stringify(MOCK_STUDENTS));
}

// Global App State
const state = {
  currentUser: null,
  activeView: 'login-view',
  assessment: {
    questions: [],
    userAnswers: [], // stores index of chosen options (0-3) or null
    currentIndex: 0,
    timeRemaining: 600, // 10 minutes in seconds
    timerId: null
  }
};

// Router Helper: Switch between screen views
function showView(viewId) {
  // Clear active views
  document.querySelectorAll('.view-panel').forEach(panel => {
    panel.classList.remove('active');
  });

  // Activate designated view
  const targetPanel = document.getElementById(viewId);
  if (targetPanel) {
    targetPanel.classList.add('active');
    state.activeView = viewId;
  }

  // Smooth scroll to top of page
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Update header/nav actions display
  updateHeaderNav();
}

// Helper to update navigation bar states (badges, logout btns, etc.)
function updateHeaderNav() {
  const userSection = document.getElementById('header-user-section');
  const logoutBtn = document.getElementById('logout-btn');
  const adminBtn = document.getElementById('admin-toggle-btn');
  
  if (state.currentUser) {
    userSection.style.display = 'flex';
    userSection.querySelector('.user-name').textContent = state.currentUser.name;
    userSection.querySelector('.avatar').textContent = state.currentUser.name.charAt(0).toUpperCase();
    logoutBtn.style.display = 'inline-flex';
    
    // Admin dashboard visibility
    if (state.currentUser.email === 'admin@placement.com') {
      adminBtn.style.display = 'inline-flex';
      adminBtn.textContent = state.activeView === 'admin-dashboard-view' ? 'Student View' : 'Admin Panel';
    } else {
      adminBtn.style.display = 'none';
    }
  } else {
    userSection.style.display = 'none';
    logoutBtn.style.display = 'none';
    adminBtn.style.display = 'none';
  }
}

// ==========================================
// FORM VALIDATION & REGISTRATION
// ==========================================
function handleRegister(event) {
  event.preventDefault();
  
  const fields = [
    { id: 'reg-name', errorId: 'err-name', validate: val => val.trim().length > 2 },
    { id: 'reg-email', errorId: 'err-email', validate: val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) },
    { id: 'reg-phone', errorId: 'err-phone', validate: val => /^\d{10}$/.test(val) },
    { id: 'reg-college', errorId: 'err-college', validate: val => val.trim().length > 2 },
    { id: 'reg-cgpa', errorId: 'err-cgpa', validate: val => {
        const num = parseFloat(val);
        return !isNaN(num) && num >= 0 && num <= 10;
      }
    },
    { id: 'reg-skills', errorId: 'err-skills', validate: val => val.trim().length > 0 },
    { id: 'reg-languages', errorId: 'err-languages', validate: val => val.trim().length > 0 },
    { id: 'reg-goal', errorId: 'err-goal', validate: val => val.trim().length > 0 },
    { id: 'reg-dream-company', errorId: 'err-dream-company', validate: val => val.trim().length > 0 }
  ];

  let isValid = true;

  fields.forEach(field => {
    const input = document.getElementById(field.id);
    const errorEl = document.getElementById(field.errorId);
    if (!field.validate(input.value)) {
      errorEl.style.display = 'block';
      input.style.borderColor = 'var(--error-color)';
      isValid = false;
    } else {
      errorEl.style.display = 'none';
      input.style.borderColor = 'var(--border-color)';
    }
  });

  if (!isValid) return;

  // Compile student model
  const student = {
    name: document.getElementById('reg-name').value.trim(),
    email: document.getElementById('reg-email').value.trim().toLowerCase(),
    phone: document.getElementById('reg-phone').value.trim(),
    college: document.getElementById('reg-college').value.trim(),
    branch: document.getElementById('reg-branch').value,
    year: document.getElementById('reg-year').value,
    cgpa: parseFloat(document.getElementById('reg-cgpa').value),
    skills: document.getElementById('reg-skills').value.split(',').map(s => s.trim()),
    languages: document.getElementById('reg-languages').value.split(',').map(s => s.trim()),
    goal: document.getElementById('reg-goal').value.trim(),
    dreamCompany: document.getElementById('reg-dream-company').value.trim(),
    resumeName: document.getElementById('reg-resume').files[0] ? document.getElementById('reg-resume').files[0].name : 'No resume uploaded',
    assessmentCompleted: false,
    assessmentResult: null
  };

  // Check if admin is signing in
  if (student.email === 'admin@placement.com') {
    state.currentUser = student;
    saveStudentToDB(student);
    showView('admin-dashboard-view');
    renderAdminDashboard();
    return;
  }

  // Load existing student or save new
  const saved = getStudentFromDB(student.email);
  if (saved) {
    state.currentUser = saved;
  } else {
    state.currentUser = student;
    saveStudentToDB(student);
  }

  // Determine path
  if (state.currentUser.assessmentCompleted) {
    renderDashboard();
    showView('dashboard-view');
  } else {
    showView('career-selection-view');
  }
}

// Database Helpers (LocalStorage Wrapper)
function getStudentFromDB(email) {
  const list = JSON.parse(localStorage.getItem('placement_students'));
  return list.find(s => s.email === email.toLowerCase()) || null;
}

function saveStudentToDB(student) {
  const list = JSON.parse(localStorage.getItem('placement_students'));
  const idx = list.findIndex(s => s.email === student.email);
  if (idx !== -1) {
    list[idx] = student;
  } else {
    list.push(student);
  }
  localStorage.setItem('placement_students', JSON.stringify(list));
}

// Session login utility
function handleLogin(event) {
  event.preventDefault();
  const emailInput = document.getElementById('login-email');
  const email = emailInput.value.trim().toLowerCase();
  const errorEl = document.getElementById('login-error');

  if (email === 'admin@placement.com') {
    const adminUser = { name: 'Placement Administrator', email: 'admin@placement.com' };
    state.currentUser = adminUser;
    showView('admin-dashboard-view');
    renderAdminDashboard();
    return;
  }

  const student = getStudentFromDB(email);
  if (student) {
    state.currentUser = student;
    errorEl.style.display = 'none';
    if (student.assessmentCompleted) {
      renderDashboard();
      showView('dashboard-view');
    } else {
      showView('career-selection-view');
    }
  } else {
    errorEl.textContent = "Student not registered. Please sign up below.";
    errorEl.style.display = 'block';
  }
}

// ==========================================
// ASSESSMENT GENERATION ENGINE
// ==========================================
function selectCareerPath(path) {
  // Reset Assessment State
  state.assessment.currentIndex = 0;
  state.assessment.timeRemaining = 600;
  state.assessment.userAnswers = Array(10).fill(null);
  
  // Pick source questions based on path & branch
  let techPool = [];
  let aptPool = [];
  let commPool = [];

  if (path === 'it') {
    techPool = QUESTION_BANK.it.technical;
    aptPool = QUESTION_BANK.it.aptitude;
    commPool = QUESTION_BANK.it.communication;
    state.currentUser.careerPath = 'IT Companies';
  } else {
    // Core Engineering: mechanical, civil, electrical, electronics
    const branch = state.currentUser.branch.toLowerCase();
    let poolKey = 'mechanical';
    if (QUESTION_BANK[branch]) {
      poolKey = branch;
    }
    techPool = QUESTION_BANK[poolKey].technical;
    aptPool = QUESTION_BANK[poolKey].aptitude;
    commPool = QUESTION_BANK[poolKey].communication;
    state.currentUser.careerPath = `Core Engineering - ${state.currentUser.branch}`;
  }

  // Shuffle pools & slice (6 Tech, 2 Aptitude, 2 Communication)
  const selectedTech = shuffleArray(techPool).slice(0, 6).map(q => ({ ...q, type: 'Technical' }));
  const selectedApt = shuffleArray(aptPool).slice(0, 2).map(q => ({ ...q, type: 'Aptitude' }));
  const selectedComm = shuffleArray(commPool).slice(0, 2).map(q => ({ ...q, type: 'Communication' }));

  // Join questions
  state.assessment.questions = [...selectedTech, ...selectedApt, ...selectedComm];

  // Start countdown timer
  startTimer();

  // Show test screen
  showView('assessment-view');
  renderQuestion();
}

function startTimer() {
  if (state.assessment.timerId) clearInterval(state.assessment.timerId);
  
  const timerDisplay = document.getElementById('timer-countdown');
  
  state.assessment.timerId = setInterval(() => {
    state.assessment.timeRemaining--;
    
    // Calculate minutes and seconds
    const minutes = Math.floor(state.assessment.timeRemaining / 60);
    const seconds = state.assessment.timeRemaining % 60;
    
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    if (state.assessment.timeRemaining <= 60) {
      document.getElementById('assessment-timer').style.color = 'var(--error-color)';
      document.getElementById('assessment-timer').style.background = 'var(--error-light)';
    }

    if (state.assessment.timeRemaining <= 0) {
      clearInterval(state.assessment.timerId);
      alert("Time is up! Your assessment will be submitted automatically.");
      submitAssessment();
    }
  }, 1000);
}

function renderQuestion() {
  const currentIdx = state.assessment.currentIndex;
  const question = state.assessment.questions[currentIdx];
  
  // Progress indicators
  document.getElementById('current-question-num').textContent = currentIdx + 1;
  document.getElementById('total-questions-num').textContent = state.assessment.questions.length;
  
  const percentage = ((currentIdx) / state.assessment.questions.length) * 100;
  document.getElementById('assessment-progress-bar').style.width = `${percentage}%`;

  // Render question card contents
  const tagEl = document.getElementById('q-tag');
  tagEl.className = 'q-tag';
  tagEl.textContent = question.type;
  if (question.type === 'Technical') tagEl.classList.add('tech');
  else if (question.type === 'Aptitude') tagEl.classList.add('apt');
  else tagEl.classList.add('comm');

  document.getElementById('q-diff').textContent = `Difficulty: ${question.difficulty}`;
  document.getElementById('question-text').textContent = question.question;

  // Options list rendering
  const optionsList = document.getElementById('options-list');
  optionsList.innerHTML = '';
  
  question.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    if (state.assessment.userAnswers[currentIdx] === index) {
      btn.classList.add('selected');
    }
    
    const prefixes = ['A', 'B', 'C', 'D'];
    btn.innerHTML = `
      <div class="option-prefix">${prefixes[index]}</div>
      <div class="option-text">${escapeHtml(option)}</div>
    `;
    
    btn.onclick = () => selectOption(index);
    optionsList.appendChild(btn);
  });

  // Nav buttons toggles
  document.getElementById('prev-q-btn').disabled = currentIdx === 0;
  
  const nextBtn = document.getElementById('next-q-btn');
  if (currentIdx === state.assessment.questions.length - 1) {
    nextBtn.textContent = 'Submit Assessment';
    nextBtn.classList.remove('btn-primary');
    nextBtn.classList.add('btn-primary');
    nextBtn.style.backgroundColor = 'var(--success-color)';
    nextBtn.onclick = submitAssessment;
  } else {
    nextBtn.textContent = 'Next Question';
    nextBtn.style.backgroundColor = '';
    nextBtn.onclick = nextQuestion;
  }
}

function selectOption(optionIndex) {
  const currentIdx = state.assessment.currentIndex;
  state.assessment.userAnswers[currentIdx] = optionIndex;
  
  // Re-render choices to update selected state
  document.querySelectorAll('.option-btn').forEach((btn, idx) => {
    if (idx === optionIndex) {
      btn.classList.add('selected');
    } else {
      btn.classList.remove('selected');
    }
  });
}

function nextQuestion() {
  if (state.assessment.currentIndex < state.assessment.questions.length - 1) {
    state.assessment.currentIndex++;
    renderQuestion();
  }
}

function prevQuestion() {
  if (state.assessment.currentIndex > 0) {
    state.assessment.currentIndex--;
    renderQuestion();
  }
}

// ==========================================
// EVALUATION & AI RECOMMENDATION LOGIC
// ==========================================
function submitAssessment() {
  clearInterval(state.assessment.timerId);
  
  const questions = state.assessment.questions;
  const userAnswers = state.assessment.userAnswers;
  
  let techCorrect = 0, techTotal = 0;
  let aptCorrect = 0, aptTotal = 0;
  let commCorrect = 0, commTotal = 0;
  
  const itemsDetailed = [];

  questions.forEach((q, idx) => {
    const chosen = userAnswers[idx];
    const isCorrect = chosen === q.correctIndex;
    
    if (q.type === 'Technical') {
      techTotal++;
      if (isCorrect) techCorrect++;
    } else if (q.type === 'Aptitude') {
      aptTotal++;
      if (isCorrect) aptCorrect++;
    } else if (q.type === 'Communication') {
      commTotal++;
      if (isCorrect) commCorrect++;
    }

    itemsDetailed.push({
      questionText: q.question,
      options: q.options,
      correctIndex: q.correctIndex,
      userIndex: chosen,
      isCorrect: isCorrect,
      category: q.type,
      subCategory: q.subCategory,
      difficulty: q.difficulty,
      explanation: q.explanation
    });
  });

  const totalQuestions = questions.length;
  const totalCorrect = techCorrect + aptCorrect + commCorrect;
  const overallPercentage = Math.round((totalCorrect / totalQuestions) * 100);

  // Perform AI Skill Gap & Readiness Analysis
  const result = analyzeSkillGap(
    techCorrect, techTotal,
    aptCorrect, aptTotal,
    commCorrect, commTotal,
    overallPercentage,
    itemsDetailed
  );

  state.currentUser.assessmentCompleted = true;
  state.currentUser.assessmentResult = result;
  
  // Save user changes back to Mock database
  saveStudentToDB(state.currentUser);
  
  // Navigate to Dashboard
  renderDashboard();
  showView('dashboard-view');
}

function analyzeSkillGap(techCorrect, techTotal, aptCorrect, aptTotal, commCorrect, commTotal, percentage, details) {
  // Domain Scores
  const techScore = Math.round((techCorrect / techTotal) * 100);
  const aptScore = Math.round((aptCorrect / aptTotal) * 100);
  const commScore = Math.round((commCorrect / commTotal) * 100);
  
  // Strong vs Weak skills identification based on questions incorrect/correct
  const strongSkills = [];
  const weakSkills = [];
  const missingConcepts = [];

  details.forEach(item => {
    if (item.isCorrect) {
      if (!strongSkills.includes(item.subCategory)) {
        strongSkills.push(item.subCategory);
      }
    } else {
      if (!weakSkills.includes(item.subCategory)) {
        weakSkills.push(item.subCategory);
        missingConcepts.push(item.subCategory);
      }
    }
  });

  // Edge cases if perfect score or 0 score
  if (strongSkills.length === 0) strongSkills.push("Fundamental theory");
  if (weakSkills.length === 0) {
    weakSkills.push("None detected! Challenge yourself with advanced designs");
  }

  // Interview, Tech, Comm readiness categorization
  const getLevel = (score) => {
    if (score >= 90) return 'Excellent';
    if (score >= 80) return 'Good';
    if (score >= 70) return 'Average';
    return 'Needs Improvement';
  };

  const techReadiness = getLevel(techScore);
  const commReadiness = getLevel(commScore);
  const aptReadiness = getLevel(aptScore);
  const interviewReadiness = getLevel(Math.round((techScore + commScore) / 2));

  // Placement readiness group
  let readinessLevel = '';
  let recommendedCompanies = [];
  
  if (percentage >= 90) {
    readinessLevel = 'Ready for Product Companies';
    recommendedCompanies = ['Google', 'Microsoft', 'Amazon', 'Adobe', 'Atlassian', 'Uber', 'Directi'];
  } else if (percentage >= 80) {
    readinessLevel = 'Ready for High-tier Service & Product Companies';
    recommendedCompanies = ['TCS Digital', 'Zoho', 'Oracle', 'Accenture', 'LTI Mindtree', 'Deloitte'];
  } else if (percentage >= 70) {
    readinessLevel = 'Ready for Service-Based Companies';
    recommendedCompanies = ['Infosys', 'Wipro', 'Cognizant', 'Capgemini', 'TCS Ninja', 'Tech Mahindra'];
  } else {
    readinessLevel = 'Needs Additional Preparation';
    recommendedCompanies = ['Focus on foundational concepts first. Re-evaluate in 4 weeks.'];
  }

  // Generate study Roadmap details
  const roadmap = generatePersonalizedRoadmap(weakSkills, missingConcepts, state.currentUser.branch);

  return {
    percentage: percentage,
    totalCorrect: totalCorrect = details.filter(d => d.isCorrect).length,
    totalWrong: details.length - totalCorrect,
    accuracy: Math.round((totalCorrect / details.length) * 100),
    scores: {
      technical: techScore,
      aptitude: aptScore,
      communication: commScore
    },
    readiness: {
      technical: techReadiness,
      communication: commReadiness,
      aptitude: aptReadiness,
      interview: interviewReadiness,
      placementLevel: readinessLevel,
      companies: recommendedCompanies
    },
    skills: {
      strong: strongSkills,
      weak: weakSkills,
      missing: missingConcepts
    },
    roadmap: roadmap,
    detailedBreakdown: details
  };
}

function generatePersonalizedRoadmap(weakSkills, missingConcepts, branch) {
  // Weekly structure custom tags
  const timeline = [];
  const resources = {
    courses: [],
    youtube: [],
    practice: [],
    projects: [],
    books: [],
    certifications: []
  };

  const isIT = state.currentUser.careerPath.includes("IT");

  if (isIT) {
    // IT resources mapping
    resources.courses.push({ name: "Algorithms Specialization", provider: "Coursera (Stanford)", link: "https://www.coursera.org" });
    resources.courses.push({ name: "Complete SQL Bootcamp", provider: "Udemy", link: "https://www.udemy.com" });
    resources.youtube.push({ name: "Abdul Bari (DSA)", channel: "YouTube", link: "https://www.youtube.com" });
    resources.youtube.push({ name: "Gate Smashers (OS & DBMS)", channel: "YouTube", link: "https://www.youtube.com" });
    resources.practice.push({ name: "LeetCode (SQL & Coding)", link: "https://leetcode.com" });
    resources.practice.push({ name: "GeeksforGeeks (Mock Tests)", link: "https://www.geeksforgeeks.org" });
    resources.books.push({ name: "Introduction to Algorithms", author: "Cormen" });
    resources.books.push({ name: "Database System Concepts", author: "Korth" });
    resources.certifications.push({ name: "AWS Certified Developer Associate", provider: "Amazon Web Services" });
    
    // Timeline construction
    timeline.push({
      week: "Week 1",
      focus: `Database Systems & SQL Queries (${weakSkills[0] || 'DBMS fundamentals'})`,
      tasks: [
        "Revise ACID properties, normalization rules, and basic indexing.",
        "Practice 30 SQL aggregate functions and join queries on LeetCode Database.",
        "Watch 5 Gate Smashers DBMS lectures covering relational algebra."
      ]
    });
    timeline.push({
      week: "Week 2",
      focus: `Operating Systems & Network Protocols (${weakSkills[1] || 'OS concepts'})`,
      tasks: [
        "Study process states, semaphore locks, and page replacement math.",
        "Understand TCP 3-way handshakes, subnet masks, and HTTP status codes.",
        "Build a simple custom multi-threaded socket program project."
      ]
    });
    timeline.push({
      week: "Week 3",
      focus: "Data Structures & Core Algorithms",
      tasks: [
        "Implement BST, Heap nodes, and Graph traversals (DFS/BFS) manually.",
        "Complete 15 Medium-level programming challenges on Arrays & String sliding windows.",
        "Solve core logical reasoning tests focusing on blood relations and seating charts."
      ]
    });
  } else {
    // Core Engineering resources mapping
    resources.courses.push({ name: "Mechanical/Civil Foundations", provider: "NPTEL", link: "https://nptel.ac.in" });
    resources.youtube.push({ name: "NPTEL lectures (IIT)", channel: "YouTube", link: "https://www.youtube.com" });
    resources.practice.push({ name: "IndiaBIX (Engineering Questions)", link: "https://www.indiabix.com" });
    resources.books.push({ name: `Standard Handbook for ${branch} Engineers`, author: "McGraw Hill" });
    resources.certifications.push({ name: `Professional Engineer Credentials`, provider: "National Engineering Boards" });

    timeline.push({
      week: "Week 1",
      focus: `Foundations of ${branch} Engineering & Mathematics`,
      tasks: [
        "Revise essential formulas, boundary conditions, and material matrices.",
        "Solve 20 gate level technical questions on standard materials.",
        "Complete NPTEL revision models."
      ]
    });
    timeline.push({
      week: "Week 2",
      focus: `Advanced ${branch} Designs & Industry Systems`,
      tasks: [
        "Familiarize with modeling softwares (SolidWorks/AutoCAD/MATLAB/Revit).",
        "Generate a mini-project design focusing on stress load analysis.",
        "Review manufacturing/grid operations protocols."
      ]
    });
    timeline.push({
      week: "Week 3",
      focus: "Applied Mechanics & System Calculations",
      tasks: [
        "Analyze past interview exam patterns of dream core companies.",
        "Practice quantitative problems focusing on work, speed, and ratios.",
        "Participate in physical/virtual lab system walkthroughs."
      ]
    });
  }

  // Week 4 is common - interview prep
  timeline.push({
    week: "Week 4",
    focus: "Placement Simulations & Professional Communication",
    tasks: [
      "Review resume using Harvard styling, highlight 2 core projects.",
      "Conduct a peer mock interview focusing on Star Method responses.",
      "Practice 5 situational communication scenario writes (client and manager mails)."
    ]
  });

  resources.projects.push({ name: "Smart Inventory Tracker (SQL + Python)", desc: "Builds a transactional database schema validating CRUD triggers." });
  resources.projects.push({ name: "Microprocessor-based Controller", desc: "For Electronics/Electrical. Real-time sensor parsing using RTOS parameters." });

  return {
    timeline: timeline,
    resources: resources
  };
}

// ==========================================
// RENDER VIEWS & GRAPHS
// ==========================================
let currentRadarChart = null;

function renderDashboard() {
  const user = state.currentUser;
  const res = user.assessmentResult;

  if (!res) return;

  // Student Profile
  document.getElementById('dash-student-name').textContent = user.name;
  document.getElementById('dash-student-meta').textContent = `${user.branch} | Year ${user.year} | CGPA: ${user.cgpa}`;
  document.getElementById('dash-career-goal').textContent = `Career Goal: ${user.careerPath} | Dream: ${user.dreamCompany}`;

  // Score Percentage & Status Text
  const percentEl = document.getElementById('dash-overall-percent');
  percentEl.textContent = `${res.percentage}%`;
  
  // Set conic gradient degree for overall score ring indicator
  const circleEl = document.getElementById('dash-score-circle');
  circleEl.style.setProperty('--percentage', `${res.percentage}%`);

  // Accuracy metrics
  document.getElementById('metric-correct').textContent = res.totalCorrect;
  document.getElementById('metric-wrong').textContent = res.totalWrong;
  document.getElementById('metric-accuracy').textContent = `${res.accuracy}%`;

  // Set Placement Readiness Badges
  const badgeEl = document.getElementById('dash-readiness-badge');
  badgeEl.textContent = res.readiness.placementLevel;
  badgeEl.className = 'readiness-badge';
  if (res.percentage >= 90) {
    badgeEl.classList.add('ready-product');
  } else if (res.percentage >= 70) {
    badgeEl.classList.add('ready-service');
  } else {
    badgeEl.classList.add('needs-prep');
  }

  // Set Domain Skill Bars
  document.getElementById('bar-tech-val').textContent = `${res.scores.technical}%`;
  document.getElementById('bar-tech-fill').style.width = `${res.scores.technical}%`;
  
  document.getElementById('bar-apt-val').textContent = `${res.scores.aptitude}%`;
  document.getElementById('bar-apt-fill').style.width = `${res.scores.aptitude}%`;
  
  document.getElementById('bar-comm-val').textContent = `${res.scores.communication}%`;
  document.getElementById('bar-comm-fill').style.width = `${res.scores.communication}%`;

  // Skill analysis tagging
  const strongContainer = document.getElementById('strong-skills-list');
  strongContainer.innerHTML = '';
  res.skills.strong.forEach(skill => {
    strongContainer.innerHTML += `<span class="skill-tag strong"><i class="fas fa-check-circle"></i> ${escapeHtml(skill)}</span>`;
  });

  const weakContainer = document.getElementById('weak-skills-list');
  weakContainer.innerHTML = '';
  res.skills.weak.forEach(skill => {
    weakContainer.innerHTML += `<span class="skill-tag weak"><i class="fas fa-exclamation-triangle"></i> ${escapeHtml(skill)}</span>`;
  });

  const missingContainer = document.getElementById('missing-skills-list');
  missingContainer.innerHTML = '';
  res.skills.missing.forEach(concept => {
    missingContainer.innerHTML += `<span class="skill-tag missing"><i class="fas fa-minus-circle"></i> ${escapeHtml(concept)}</span>`;
  });

  // Recommended Companies
  const compGrid = document.getElementById('recommended-companies-grid');
  compGrid.innerHTML = '';
  res.readiness.companies.forEach(company => {
    compGrid.innerHTML += `<div class="company-logo-card">${escapeHtml(company)}</div>`;
  });

  // 4-Week Roadmap visual timelines
  const timelineContainer = document.getElementById('roadmap-timeline');
  timelineContainer.innerHTML = '';
  res.roadmap.timeline.forEach((item, index) => {
    timelineContainer.innerHTML += `
      <div class="timeline-item ${index === 0 ? 'active' : ''}">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <div class="timeline-week">${item.week}</div>
          <div class="timeline-title">${escapeHtml(item.focus)}</div>
          <div class="timeline-details">
            <ul style="padding-left: 1.25rem;">
              ${item.tasks.map(t => `<li>${escapeHtml(t)}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    `;
  });

  // Resources layout
  const coursesContainer = document.getElementById('courses-list');
  coursesContainer.innerHTML = '';
  res.roadmap.resources.courses.forEach(c => {
    coursesContainer.innerHTML += `
      <div class="resource-card">
        <span>Course</span>
        <h4>${escapeHtml(c.name)}</h4>
        <p>Provider: ${escapeHtml(c.provider)}</p>
        <a href="${c.link}" target="_blank">Access Course <i class="fas fa-external-link-alt"></i></a>
      </div>
    `;
  });

  const webContainer = document.getElementById('practice-list');
  webContainer.innerHTML = '';
  res.roadmap.resources.practice.forEach(p => {
    webContainer.innerHTML += `
      <div class="resource-card">
        <span>Practice Platform</span>
        <h4>${escapeHtml(p.name)}</h4>
        <a href="${p.link}" target="_blank">Start Practice <i class="fas fa-external-link-alt"></i></a>
      </div>
    `;
  });

  // Detailed assessment explanations review
  const reviewsContainer = document.getElementById('review-explanation-list');
  reviewsContainer.innerHTML = '';
  res.detailedBreakdown.forEach((item, index) => {
    const isCorrect = item.isCorrect;
    reviewsContainer.innerHTML += `
      <div class="explanation-item">
        <div class="exp-q-header">
          <div class="exp-status-icon ${isCorrect ? 'correct' : 'wrong'}">
            ${isCorrect ? '<i class="fas fa-check"></i>' : '<i class="fas fa-times"></i>'}
          </div>
          <div>Question ${index + 1}: ${escapeHtml(item.questionText)}</div>
        </div>
        <div class="exp-options-review">
          ${item.options.map((opt, optIdx) => {
            let stateClass = '';
            if (optIdx === item.correctIndex) stateClass = 'correct-choice';
            else if (optIdx === item.userIndex && !isCorrect) stateClass = 'wrong-choice';
            return `<div class="exp-opt ${stateClass}">${escapeHtml(opt)}</div>`;
          }).join('')}
        </div>
        <div class="exp-text">
          <strong>Skill Gap:</strong> ${item.category} - ${item.subCategory} (${item.difficulty})<br>
          <strong>Explanation:</strong> ${escapeHtml(item.explanation)}
        </div>
      </div>
    `;
  });

  // Render Chart.js dynamic dashboard charts (Radar style)
  setTimeout(() => {
    renderRadarChart(res.scores);
  }, 100);
}

function renderRadarChart(scores) {
  const ctx = document.getElementById('skillGapRadarChart').getContext('2d');
  
  if (currentRadarChart) {
    currentRadarChart.destroy();
  }

  const isDark = document.body.classList.contains('dark-theme');
  const gridColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)';
  const labelColor = isDark ? '#d1d5db' : '#475569';

  currentRadarChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Technical Knowledge', 'Quantitative & Aptitude', 'Communication Skills'],
      datasets: [{
        label: 'Your Placement Readiness (%)',
        data: [scores.technical, scores.aptitude, scores.communication],
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        borderColor: 'rgba(99, 102, 241, 0.8)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(99, 102, 241, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(99, 102, 241, 1)'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: labelColor,
            font: { family: 'Plus Jakarta Sans', weight: '600' }
          }
        }
      },
      scales: {
        r: {
          angleLines: { color: gridColor },
          grid: { color: gridColor },
          pointLabels: {
            color: labelColor,
            font: { family: 'Plus Jakarta Sans', size: 11, weight: '600' }
          },
          suggestedMin: 0,
          suggestedMax: 100,
          ticks: {
            stepSize: 20,
            backdropColor: 'transparent',
            color: labelColor
          }
        }
      }
    }
  });
}

// ==========================================
// PRINT REPORT / PDF GENERATOR
// ==========================================
function downloadReport() {
  const element = document.getElementById('report-pdf-target');
  
  // Set absolute print config style before starting
  const isDark = document.body.classList.contains('dark-theme');
  if (isDark) {
    document.body.classList.remove('dark-theme');
  }

  // Temporary show print indicator text inside the pdf
  const opt = {
    margin: [0.5, 0.5, 0.5, 0.5],
    filename: `${state.currentUser.name.replace(/\s+/g, '_')}_Placement_Readiness_Report.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, logging: false },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  // Run generation
  html2pdf().set(opt).from(element).save().then(() => {
    // Restore theme state
    if (isDark) {
      document.body.classList.add('dark-theme');
    }
  });
}

// Log out function resets global state
function handleLogout() {
  state.currentUser = null;
  state.assessment.questions = [];
  state.assessment.userAnswers = [];
  state.assessment.currentIndex = 0;
  if (state.assessment.timerId) clearInterval(state.assessment.timerId);
  
  // Reset form inputs
  document.getElementById('reg-form').reset();
  document.getElementById('login-form').reset();
  
  showView('login-view');
}

// ==========================================
// UTILITY HELPERS
// ==========================================
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function escapeHtml(str) {
  if (!str) return '';
  return str.toString()
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Listeners and bootstrap init
window.addEventListener('DOMContentLoaded', () => {
  // Bind form submits
  document.getElementById('reg-form').addEventListener('submit', handleRegister);
  document.getElementById('login-form').addEventListener('submit', handleLogin);
  
  // Toggle dark mode
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    
    // Refresh chart theme styling if visible
    if (state.activeView === 'dashboard-view' && state.currentUser && state.currentUser.assessmentResult) {
      renderRadarChart(state.currentUser.assessmentResult.scores);
    }
    if (state.activeView === 'admin-dashboard-view') {
      renderAdminDashboard();
    }
  });

  // Direct toggle buttons between registration / sign-in views
  document.getElementById('go-to-signup').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('login-card').style.display = 'none';
    document.getElementById('signup-card').style.display = 'block';
  });

  document.getElementById('go-to-login').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('signup-card').style.display = 'none';
    document.getElementById('login-card').style.display = 'block';
  });

  // Global triggers
  document.getElementById('logout-btn').addEventListener('click', handleLogout);
  document.getElementById('admin-toggle-btn').addEventListener('click', () => {
    if (state.activeView === 'admin-dashboard-view') {
      if (state.currentUser.assessmentCompleted) {
        renderDashboard();
        showView('dashboard-view');
      } else {
        showView('career-selection-view');
      }
    } else {
      showView('admin-dashboard-view');
      renderAdminDashboard();
    }
  });
});
