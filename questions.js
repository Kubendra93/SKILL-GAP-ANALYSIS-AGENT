/**
 * Question Bank for Skill Gap Analysis Agent
 * Contains questions for IT and Core Engineering (Mechanical, Civil, Electrical, Electronics)
 * Question Distribution: 6 Technical, 2 Aptitude, 2 Communication
 */

const QUESTION_BANK = {
  // ==========================================
  // IT CAREER PATH QUESTIONS
  // ==========================================
  it: {
    technical: [
      {
        question: "Which of the following is NOT an inherent property of Object-Oriented Programming (OOP)?",
        options: ["Encapsulation", "Polymorphism", "Compilation", "Inheritance"],
        correctIndex: 2,
        difficulty: "Easy",
        subCategory: "OOP",
        explanation: "Compilation is a translation process where source code is compiled into machine code. The four core principles of OOP are Encapsulation, Polymorphism, Inheritance, and Abstraction."
      },
      {
        question: "In a relational database system, what does the ACID property 'Atomicity' guarantee?",
        options: [
          "That transactions are processed concurrently without interference.",
          "That all operations in a transaction are completed successfully, or none are.",
          "That the data remains in a valid state after any transaction.",
          "That completed transactions persist even in the event of a system crash."
        ],
        correctIndex: 1,
        difficulty: "Medium",
        subCategory: "DBMS",
        explanation: "Atomicity ensures that a transaction is treated as a single, indivisible unit: either all of its modifications are performed, or none of them are (all-or-nothing)."
      },
      {
        question: "Consider a table 'Employees' with a column 'Salary'. Which SQL query correctly finds the third highest salary?",
        options: [
          "SELECT Salary FROM Employees ORDER BY Salary DESC LIMIT 1 OFFSET 2;",
          "SELECT DISTINCT Salary FROM Employees ORDER BY Salary DESC LIMIT 1 OFFSET 2;",
          "SELECT DISTINCT Salary FROM Employees ORDER BY Salary DESC LIMIT 3;",
          "SELECT Salary FROM Employees WHERE Salary = (SELECT MAX(Salary) FROM Employees);"
        ],
        correctIndex: 1,
        difficulty: "Hard",
        subCategory: "SQL",
        explanation: "To find the 3rd highest salary, we must filter out duplicate salaries using DISTINCT, order them in descending order, skip the first 2 using OFFSET 2, and take the next 1 using LIMIT 1."
      },
      {
        question: "What is the worst-case time complexity of searching for an element in a binary search tree (BST)?",
        options: ["O(log n)", "O(n log n)", "O(n)", "O(1)"],
        correctIndex: 2,
        difficulty: "Medium",
        subCategory: "Data Structures",
        explanation: "In the worst case, a binary search tree can become skewed (like a linked list). In this case, searching for an element requires traversing all nodes, resulting in a time complexity of O(n)."
      },
      {
        question: "Which layer of the OSI model is responsible for logical addressing and routing packets across multiple networks?",
        options: ["Data Link Layer", "Transport Layer", "Network Layer", "Physical Layer"],
        correctIndex: 2,
        difficulty: "Easy",
        subCategory: "Computer Networks",
        explanation: "The Network Layer is responsible for addressing (IP addresses) and routing packets from the source host to the destination host across interconnected networks."
      },
      {
        question: "What is a 'deadlock' in operating systems?",
        options: [
          "A state where a process has terminated but its entry remains in the process table.",
          "A condition where two or more processes are unable to proceed because each is waiting for the other to release a resource.",
          "A situation where high-priority processes monopolize the CPU, causing lower-priority processes to starve.",
          "A memory management issue occurring due to fragmentation."
        ],
        correctIndex: 1,
        difficulty: "Medium",
        subCategory: "Operating Systems",
        explanation: "Deadlock is a scenario where processes are blocked permanently because they hold resources while waiting for resources held by other processes in a circular dependency."
      },
      {
        question: "Which data structure is typically used to implement Breadth-First Search (BFS) on a graph?",
        options: ["Stack", "Queue", "Priority Queue", "Hash Table"],
        correctIndex: 1,
        difficulty: "Easy",
        subCategory: "Data Structures",
        explanation: "BFS uses a Queue (First-In, First-Out) data structure to keep track of nodes to visit next in a level-order traversal."
      },
      {
        question: "What does the 'volatile' keyword signify in programming languages like C or Java?",
        options: [
          "It marks variables that cannot be modified after initialization.",
          "It signals to the compiler that a variable's value can change unexpectedly, preventing the compiler from caching it in registers.",
          "It allocates memory for a variable in the stack instead of the heap.",
          "It secures variables from concurrent read operations."
        ],
        correctIndex: 1,
        difficulty: "Hard",
        subCategory: "Programming",
        explanation: "The volatile keyword instructs the compiler that the value of the variable can be changed by code outside the control of the local scope (such as an interrupt handler or concurrent thread), forcing it to read directly from memory each time."
      }
    ],
    aptitude: [
      {
        question: "A train running at a speed of 60 km/h crosses a pole in 9 seconds. What is the length of the train?",
        options: ["120 meters", "150 meters", "180 meters", "324 meters"],
        correctIndex: 1,
        difficulty: "Medium",
        subCategory: "Quantitative",
        explanation: "First, convert speed to meters/second: 60 km/h = 60 * (5/18) m/s = 50/3 m/s. Length of train = Speed * Time = (50/3) * 9 = 150 meters."
      },
      {
        question: "If 'A + B' means A is the brother of B; 'A - B' means A is the sister of B; and 'A * B' means A is the father of B, which of the following means that C is the son of M?",
        options: ["M * N - C", "M * C + N", "C + N * M", "M * N + C"],
        correctIndex: 1,
        difficulty: "Hard",
        subCategory: "Logical Reasoning",
        explanation: "In 'M * C + N': M is the father of C (from M * C). C is the brother of N (from C + N). Since M is the father and C is male (brother), C must be the son of M."
      },
      {
        question: "A, B, and C can do a piece of work in 20, 30, and 60 days respectively. In how many days can A do the work if he is assisted by B and C on every third day?",
        options: ["12 days", "15 days", "16 days", "18 days"],
        correctIndex: 1,
        difficulty: "Hard",
        subCategory: "Quantitative",
        explanation: "Work done by A in 1 day = 1/20. Work done by B in 1 day = 1/30. Work done by C in 1 day = 1/60. Work done in first 2 days by A = 2 * (1/20) = 1/10. Work done on 3rd day by A+B+C = 1/20 + 1/30 + 1/60 = (3+2+1)/60 = 6/60 = 1/10. Total work in a 3-day cycle = 1/10 + 1/10 = 1/5. To complete 100% of the work (1), it takes 5 cycles * 3 days = 15 days."
      }
    ],
    communication: [
      {
        question: "A client reports an urgent bug on a Friday afternoon right as you are preparing to log off. Which email response is most appropriate?",
        options: [
          "Ignore the email until Monday morning to preserve your weekend work-life balance.",
          "Write back immediately saying: 'We will look into this on Monday. Have a nice weekend.'",
          "Send a professional acknowledgment: 'Thank you for raising this. I am registering the ticket now. Our team will triage this based on critical impact, and we will update you first thing Monday morning.'",
          "Reply defensively, explaining that late Friday reports are against standard operating procedures."
        ],
        correctIndex: 2,
        difficulty: "Easy",
        subCategory: "Professional Writing",
        explanation: "An professional email should acknowledge receipt, show ownership, set expectations clearly, and avoid defensive phrasing or silent treatment."
      },
      {
        question: "During a project team meeting, a colleague disagrees with your technical design proposal and criticizes it in front of others. How should you react?",
        options: [
          "Interrupt them immediately and point out flaws in their own past projects.",
          "Listen calmly, thank them for their feedback, and ask them to explain their specific concerns so you can address them objectively.",
          "Stay silent and register a formal complaint with the HR department after the meeting.",
          "Walk out of the meeting to show that unprofessional behavior will not be tolerated."
        ],
        correctIndex: 1,
        difficulty: "Medium",
        subCategory: "Conflict Resolution",
        explanation: "Active listening, maintaining composure, and focusing on technical facts instead of personal insults are key elements of workplace conflict resolution."
      }
    ]
  },

  // ==========================================
  // CORE MECHANICAL ENGINEERING QUESTIONS
  // ==========================================
  mechanical: {
    technical: [
      {
        question: "Which of the following thermodynamic cycles operates on two isothermal and two isentropic (reversible adiabatic) processes?",
        options: ["Otto Cycle", "Rankine Cycle", "Carnot Cycle", "Brayton Cycle"],
        correctIndex: 2,
        difficulty: "Easy",
        subCategory: "Thermodynamics",
        explanation: "The Carnot cycle consists of four reversible processes: two isothermal (constant temperature) processes and two adiabatic (constant entropy) processes."
      },
      {
        question: "What does the Euler-Bernoulli beam theory assume about plane sections perpendicular to the axis of the beam after bending?",
        options: [
          "They become warped and non-planar.",
          "They remain plane and perpendicular to the neutral axis.",
          "They remain plane but rotate relative to the neutral axis.",
          "They shift horizontally along the neutral axis."
        ],
        correctIndex: 1,
        difficulty: "Medium",
        subCategory: "Strength of Materials",
        explanation: "A fundamental assumption of Euler-Bernoulli beam theory is that plane sections originally perpendicular to the beam axis remain plane and perpendicular to the axis after bending."
      },
      {
        question: "Which dimensionless parameter represents the ratio of inertial forces to viscous forces in fluid flow?",
        options: ["Nusselt Number", "Reynolds Number", "Prandtl Number", "Froude Number"],
        correctIndex: 1,
        difficulty: "Easy",
        subCategory: "Fluid Mechanics",
        explanation: "The Reynolds number (Re = rho*v*d/mu) is a dimensionless quantity that characterizes flow regimes by comparing inertial forces to viscous drag forces."
      },
      {
        question: "In metal cutting operations, how does built-up edge (BUE) formation affect surface finish?",
        options: [
          "It improves the surface finish by acting as a protective barrier.",
          "It has no impact on surface roughness.",
          "It deteriorates the surface finish and causes dimensional inaccuracy.",
          "It increases tool life by reducing friction."
        ],
        correctIndex: 2,
        difficulty: "Medium",
        subCategory: "Manufacturing",
        explanation: "Built-up edge (BUE) consists of work materials adhering to the cutting edge of the tool. It changes tool geometry, degrades tool life, and ruins the surface finish of the workpiece."
      },
      {
        question: "What is the primary function of a regenerator in a gas turbine power plant operating on a regenerative Brayton cycle?",
        options: [
          "To cool the compressed air before it enters the combustion chamber.",
          "To heat the compressed air leaving the compressor using exhaust gases from the turbine.",
          "To increase the pressure of the exhaust gases.",
          "To condense the working fluid back into liquid state."
        ],
        correctIndex: 1,
        difficulty: "Hard",
        subCategory: "Thermodynamics",
        explanation: "A regenerator is a heat exchanger that recovers waste heat from the turbine exhaust gases to preheat the compressed air entering the combustor, thereby reducing fuel consumption."
      },
      {
        question: "For a linear elastic material, what is the relationship between Young's Modulus (E), Shear Modulus (G), and Poisson's ratio (v)?",
        options: [
          "E = G * (1 + v)",
          "E = 2G * (1 + v)",
          "G = 2E * (1 + v)",
          "E = 3G * (1 - v)"
        ],
        correctIndex: 1,
        difficulty: "Hard",
        subCategory: "Strength of Materials",
        explanation: "The elastic constants are mathematically related by the formula E = 2G(1 + v), representing the link between tensile elastic stiffness and shear stiffness."
      }
    ],
    aptitude: [
      {
        question: "A gear wheel of 20 teeth drives another gear wheel of 40 teeth. If the driving gear rotates at 1200 RPM, what is the rotational speed of the driven gear?",
        options: ["2400 RPM", "1200 RPM", "600 RPM", "300 RPM"],
        correctIndex: 2,
        difficulty: "Easy",
        subCategory: "Aptitude",
        explanation: "Gear ratio = N1/N2 = T2/T1. Therefore, N2 = N1 * (T1/T2) = 1200 * (20/40) = 600 RPM."
      },
      {
        question: "Choose the term that completes the series logically: M3, P6, S11, V18, ?",
        options: ["Y27", "Y25", "Z27", "X25"],
        correctIndex: 0,
        difficulty: "Medium",
        subCategory: "Logical Reasoning",
        explanation: "Letters: M (+3) -> P (+3) -> S (+3) -> V (+3) -> Y. Numbers: 3 (+3) -> 6 (+5) -> 11 (+7) -> 18 (+9) -> 27. The next term is Y27."
      }
    ],
    communication: [
      {
        question: "When presenting a mechanical design review to non-technical stakeholders, what is the best strategy?",
        options: [
          "Focus on differential equations and finite element analysis matrices to prove competence.",
          "Use simple, conceptual diagrams, relate decisions to cost and timeline metrics, and explain features in terms of user benefits.",
          "Request that the stakeholders complete a CAD training module before the presentation.",
          "Keep the presentation extremely brief and tell them details are proprietary."
        ],
        correctIndex: 1,
        difficulty: "Easy",
        subCategory: "Presentation Skills",
        explanation: "Communicating engineering concepts to non-engineers requires abstracting mathematical details, using visuals, and translating features into business values (cost, reliability, timeline)."
      },
      {
        question: "You spot a potential safety hazard in a colleague's machine setup on the shop floor. How should you address it?",
        options: [
          "Report them to the factory supervisor immediately without speaking to them.",
          "Point out the hazard to them immediately and constructively, referencing standard safety protocols.",
          "Wait to see if an incident occurs to verify if your assumption was correct.",
          "Take a photo and share it on local workplace chat channels to raise awareness."
        ],
        correctIndex: 1,
        difficulty: "Medium",
        subCategory: "Shopfloor Communication",
        explanation: "On-site safety issues require immediate, direct, constructive feedback to prevent physical incidents, while maintaining mutual respect."
      }
    ]
  },

  // ==========================================
  // CORE CIVIL ENGINEERING QUESTIONS
  // ==========================================
  civil: {
    technical: [
      {
        question: "What is the primary purpose of adding reinforcement steel in Reinforced Cement Concrete (RCC) structures?",
        options: [
          "To increase the compressive strength of the concrete.",
          "To provide high tensile strength that concrete lacks.",
          "To speed up the curing process.",
          "To prevent water absorption by the concrete matrix."
        ],
        correctIndex: 1,
        difficulty: "Easy",
        subCategory: "RCC",
        explanation: "Concrete has excellent compressive strength but very low tensile strength. Steel bars are embedded in concrete to carry tensile stresses."
      },
      {
        question: "In surveying, what is the difference between a True Meridian and a Magnetic Meridian called?",
        options: ["Magnetic Declination", "Magnetic Dip", "True Bearing", "Local Attraction"],
        correctIndex: 0,
        difficulty: "Easy",
        subCategory: "Surveying",
        explanation: "Magnetic Declination is the horizontal angle between the true meridian (geographic North) and the magnetic meridian (direction shown by a compass needle) at a given location."
      },
      {
        question: "Which of the following test methods is used to evaluate the consistency or workability of fresh concrete?",
        options: ["Slump Test", "Core Test", "Rebound Hammer Test", "Split Tensile Test"],
        correctIndex: 0,
        difficulty: "Easy",
        subCategory: "Soil Mechanics",
        explanation: "The slump test is the most common test conducted on-site to measure the consistency, fluid-like behavior, and workability of fresh concrete batches before placement."
      },
      {
        question: "Which soil classification exhibits the phenomenon known as 'sensitivity' (a significant loss of shear strength upon disturbance)?",
        options: ["Coarse gravel", "Clean sands", "Flocculated clays", "Organic silts"],
        correctIndex: 2,
        difficulty: "Medium",
        subCategory: "Soil Mechanics",
        explanation: "Sensitivity is a property of fine-grained clayey soils where structural rearrangement (disturbing the flocculated fabric) causes a large loss of undisturbed shear strength without moisture change."
      },
      {
        question: "In structural analysis, what does a 'statically indeterminate' structure refer to?",
        options: [
          "A structure that will collapse under any external load.",
          "A structure that cannot be analyzed using static equilibrium equations alone.",
          "A structure with no supports or reaction forces.",
          "A structure where loading values change randomly over time."
        ],
        correctIndex: 1,
        difficulty: "Medium",
        subCategory: "Structural Analysis",
        explanation: "A structure is statically indeterminate if the number of unknown reaction forces and internal forces exceeds the number of available independent static equilibrium equations."
      },
      {
        question: "In environmental engineering, what is the biochemical oxygen demand (BOD) parameter a measure of?",
        options: [
          "The total dissolved oxygen available in a river system.",
          "The quantity of oxygen required by aerobic microorganisms to decompose organic matter present in a water sample.",
          "The chemical oxidizability of inorganic compounds in wastewater.",
          "The rate of oxygen replenishment from the atmosphere."
        ],
        correctIndex: 1,
        difficulty: "Medium",
        subCategory: "Environmental Engineering",
        explanation: "BOD measures the amount of oxygen required by aerobic microbes to biologically degrade organic pollutants in a water body over a specific period (typically 5 days at 20 degrees Celsius)."
      }
    ],
    aptitude: [
      {
        question: "A scale on a civil engineering blueprint is given as 1:250. If a boundary line measures 12 cm on the map, what is its actual length on the ground?",
        options: ["3 meters", "30 meters", "300 meters", "2.5 kilometers"],
        correctIndex: 1,
        difficulty: "Easy",
        subCategory: "Aptitude",
        explanation: "Blueprint Scale = 1:250. Map measurement = 12 cm. Actual length = 12 * 250 cm = 3000 cm = 30 meters."
      },
      {
        question: "A structural column is designed to support a maximum load of 500 kN. If a safety factor of 2.5 is used, what is the safe working load limit for this column?",
        options: ["1250 kN", "500 kN", "200 kN", "125 kN"],
        correctIndex: 2,
        difficulty: "Medium",
        subCategory: "Aptitude",
        explanation: "Safe Working Load = Maximum/Ultimate Load / Factor of Safety = 500 kN / 2.5 = 200 kN."
      }
    ],
    communication: [
      {
        question: "During a site inspection, you notice a concrete delivery batching truck pouring concrete that has visible signs of segregation and excess water. How do you address the site supervisor?",
        options: [
          "Stay silent to maintain a friendly relationship with the contractor.",
          "Demand immediately that the supervisor sign a liability waiver and continue pouring.",
          "Instruct the supervisor to halt the pour immediately, explain the technical reasons (strength loss, durability issues), and request a slump test to verify specification compliance.",
          "Write a letter to your head office and wait for their mail response before stopping the process."
        ],
        correctIndex: 2,
        difficulty: "Medium",
        subCategory: "Site Supervision",
        explanation: "Civil engineers must intervene actively when materials fail specifications, giving concrete technical justifications and using immediate diagnostic tests (like the slump test) to resolve disputes."
      },
      {
        question: "How should you present a draft environmental impact report to a local community panel concerned about a new bypass road construction?",
        options: [
          "Provide only thick binder volumes of civil designs, assuming they will not read it.",
          "Avoid using technical jargon, display comparative maps of flora/fauna impacts, list planned noise barriers, and answer questions transparently.",
          "Defend the project, telling the panel that economic development overrides environmental preservation.",
          "Tell them that the government has already finalized all decisions and the session is purely formal."
        ],
        correctIndex: 1,
        difficulty: "Medium",
        subCategory: "Community Liaison",
        explanation: "Public communication on infrastructure requires empathy, clarity, transparency regarding environmental concerns, and a focus on mitigation strategies rather than defensive engineering metrics."
      }
    ]
  },

  // ==========================================
  // CORE ELECTRICAL ENGINEERING QUESTIONS
  // ==========================================
  electrical: {
    technical: [
      {
        question: "Which of the following theorems states that any linear, bilateral circuit with voltage/current sources can be replaced by an equivalent circuit containing a single voltage source in series with an equivalent resistance?",
        options: ["Norton's Theorem", "Superposition Theorem", "Thevenin's Theorem", "Maximum Power Transfer Theorem"],
        correctIndex: 2,
        difficulty: "Easy",
        subCategory: "Network Theory",
        explanation: "Thevenin's theorem states that any linear network can be reduced to an equivalent circuit with a single independent voltage source (Vth) in series with a single resistor (Rth)."
      },
      {
        question: "What is the primary purpose of the laminations in the iron core of an electrical power transformer?",
        options: [
          "To reduce copper winding losses.",
          "To reduce eddy current heating losses.",
          "To improve the insulation rating of the transformer oil.",
          "To minimize hysteresis losses."
        ],
        correctIndex: 1,
        difficulty: "Medium",
        subCategory: "Electrical Machines",
        explanation: "Eddy currents flow in the core material due to induced voltages. Slicing the iron core into thin laminations coated with varnish increases path resistance, drastically reducing eddy current loops and thermal losses."
      },
      {
        question: "Under what condition does maximum power transfer occur from a source with internal impedance Zs = Rs + jXs to a load with impedance Zl = Rl + jXl?",
        options: [
          "Zl is equal to Zs",
          "Rl is equal to Rs and Xl is equal to 0",
          "Zl is the complex conjugate of Zs (Zl = Zs*)",
          "Rl is equal to 0"
        ],
        correctIndex: 2,
        difficulty: "Medium",
        subCategory: "Network Theory",
        explanation: "Maximum power is transferred when the load impedance is the complex conjugate of the source impedance, meaning Rl = Rs and Xl = -Xs (canceling out reactive components)."
      },
      {
        question: "In control systems, how does adding a pole at the origin (forming a Type-1 system instead of Type-0) affect steady-state error to a step input?",
        options: [
          "It doubles the steady-state error.",
          "It makes the steady-state error zero.",
          "It makes the system unstable for any input.",
          "It has no impact on steady-state error."
        ],
        correctIndex: 1,
        difficulty: "Medium",
        subCategory: "Control Systems",
        explanation: "Adding an integrator (pole at the origin 1/s) increases the system type. For a Type-1 system, the steady-state error to a step input becomes zero."
      },
      {
        question: "What is the function of 'damper windings' in a synchronous motor?",
        options: [
          "To cool the rotor coils during overload states.",
          "To suppress rotor hunting oscillations and make the motor self-starting.",
          "To increase magnetic flux density in the stator slots.",
          "To step down voltage during startup sequences."
        ],
        correctIndex: 1,
        difficulty: "Hard",
        subCategory: "Electrical Machines",
        explanation: "Synchronous motors are not self-starting. Damper windings placed on the rotor poles act like an induction cage to generate starting torque and damp rotor oscillations (hunting) near synchronous speed."
      },
      {
        question: "Why is Bundled Conductor technology widely adopted in high-voltage AC transmission lines?",
        options: [
          "To reduce mechanical tension on towers.",
          "To increase the overall line resistance.",
          "To reduce corona discharge loss, radio interference, and line inductance.",
          "To prevent animal collisions with the wires."
        ],
        correctIndex: 2,
        difficulty: "Hard",
        subCategory: "Power Systems",
        explanation: "Bundling multiple sub-conductors per phase increases the self-GMD (geometric mean distance) of the phase, which lowers the electric field gradient at the conductor surface, reducing corona losses, noise, and inductance."
      }
    ],
    aptitude: [
      {
        question: "A power consumer has a load of 10 kW operating at a power factor of 0.8 lagging. What is the apparent power rating in kVA?",
        options: ["8 kVA", "10 kVA", "12.5 kVA", "15 kVA"],
        correctIndex: 2,
        difficulty: "Easy",
        subCategory: "Aptitude",
        explanation: "Apparent Power (S in kVA) = Active Power (P in kW) / Power Factor = 10 kW / 0.8 = 12.5 kVA."
      },
      {
        question: "Two resistors of 10 ohms and 15 ohms are connected in parallel. This parallel pair is connected in series with a 4-ohm resistor. What is the equivalent resistance of this entire network?",
        options: ["29 ohms", "10 ohms", "12 ohms", "6 ohms"],
        correctIndex: 1,
        difficulty: "Easy",
        subCategory: "Aptitude",
        explanation: "Parallel combination: Rp = (10 * 15) / (10 + 15) = 150 / 25 = 6 ohms. Series connection: R_total = Rp + 4 = 6 + 4 = 10 ohms."
      }
    ],
    communication: [
      {
        question: "During a power substation commissioning meeting, a subcontractor suggests skipping a grounding (earthing) grid resistance test to meet the deadline, stating 'similar projects never had issues'. How do you respond?",
        options: [
          "Agree to skip the test if they sign a safety waiver email.",
          "Firmly decline: 'Substation earthing grid safety checks are mandatory regulatory steps to protect lives and equipment. The test must proceed, but let us optimize the schedule to run it concurrently with visual checks.'",
          "Report the contractor immediately to the local police for regulatory evasion.",
          "Leave the decision completely to the client representative, staying quiet."
        ],
        correctIndex: 1,
        difficulty: "Medium",
        subCategory: "Safety Compliance",
        explanation: "Safety protocols in electrical systems are absolute. A professional response must reject shortcuts calmly and firmly, citing regulatory codes, while attempting to solve schedule constraints constructively."
      },
      {
        question: "You need to explain a complex control loop modification to plant operators who have hands-on experience but no formal control theory degrees. How do you describe a proportional-integral (PI) controller?",
        options: [
          "Define it mathematically using Laplace transforms: G(s) = Kp + Ki/s.",
          "Explain it using physical analogies: Proportional acts like a spring restoring force based on current offset, while Integral accumulates past errors like a reservoir to completely remove the offset over time.",
          "Tell them it is a proprietary black-box code module that they do not need to understand.",
          "Give them the mathematical code script file and tell them to study it."
        ],
        correctIndex: 1,
        difficulty: "Medium",
        subCategory: "Training & Instruction",
        explanation: "Training technicians requires translating abstract mathematical structures (like derivatives or integrals) into concrete physical analogies (springs, reservoirs, levers) they can relate to plant hardware."
      }
    ]
  },

  // ==========================================
  // CORE ELECTRONICS ENGINEERING QUESTIONS
  // ==========================================
  electronics: {
    technical: [
      {
        question: "In digital electronics, what is the output of an exclusive-OR (XOR) gate if its inputs are A = 1 and B = 1?",
        options: ["0", "1", "High impedance", "Indeterminate"],
        correctIndex: 0,
        difficulty: "Easy",
        subCategory: "Digital Electronics",
        explanation: "An XOR gate output is true (1) only if the inputs are different. If both inputs are high (1), the output is false (0)."
      },
      {
        question: "What is the main operating mode of a bipolar junction transistor (BJT) when it acts as an amplifier in a circuit?",
        options: ["Cutoff Region", "Saturation Region", "Active Region", "Reverse-Active Region"],
        correctIndex: 2,
        difficulty: "Easy",
        subCategory: "Analog Electronics",
        explanation: "For a BJT to operate as an amplifier, the emitter-base junction must be forward-biased and the collector-base junction must be reverse-biased. This is the Active Region."
      },
      {
        question: "What is a major advantage of utilizing an I2C (Inter-Integrated Circuit) communication protocol over SPI (Serial Peripheral Interface) in microcontroller designs?",
        options: [
          "I2C is significantly faster in data throughput than SPI.",
          "I2C uses only 2 signal wires (SDA and SCL) regardless of the number of peripheral devices, saving GPIO pins.",
          "I2C does not require pull-up resistors on signal lines.",
          "I2C supports full-duplex communication while SPI is strictly half-duplex."
        ],
        correctIndex: 1,
        difficulty: "Medium",
        subCategory: "Embedded Systems",
        explanation: "I2C uses a shared bus with 2 wires (Serial Data and Serial Clock) with addressable devices. SPI requires a dedicated Chip Select (CS) pin for each peripheral, leading to high pin count as devices increase."
      },
      {
        question: "What is the Nyquist rate for sampling a continuous-time signal with a maximum frequency of 5 kHz without aliasing?",
        options: ["2.5 kHz", "5 kHz", "10 kHz", "20 kHz"],
        correctIndex: 2,
        difficulty: "Easy",
        subCategory: "Signals",
        explanation: "The Nyquist sampling theorem states that the sampling frequency (fs) must be at least twice the maximum frequency component (fm) of the signal to prevent aliasing. Thus, fs = 2 * 5 kHz = 10 kHz."
      },
      {
        question: "Which of the following represents the open-loop gain and input resistance characteristics of an ideal Operational Amplifier (Op-Amp)?",
        options: [
          "Gain = 0, Input Resistance = 0",
          "Gain = Infinity, Input Resistance = 0",
          "Gain = Infinity, Input Resistance = Infinity",
          "Gain = 1, Input Resistance = 10k ohms"
        ],
        correctIndex: 2,
        difficulty: "Easy",
        subCategory: "Analog Electronics",
        explanation: "An ideal operational amplifier exhibits infinite open-loop voltage gain, infinite input impedance (drawing zero input current), and zero output impedance."
      },
      {
        question: "How does a Watchdog Timer (WDT) enhance reliability in an embedded firmware application?",
        options: [
          "It increases the main clock frequency during CPU intensive loops.",
          "It periodically resets the microcontroller if the application code hangs or crashes, preventing indefinite locking.",
          "It encrypts variables stored in flash memory.",
          "It acts as a hardware firewall to block external bus noise."
        ],
        correctIndex: 1,
        difficulty: "Medium",
        subCategory: "Embedded Systems",
        explanation: "A Watchdog Timer is a hardware timer that must be cleared periodically by code. If the code freezes, the timer overflows and triggers a hardware reset, restoring the processor to operation."
      }
    ],
    aptitude: [
      {
        question: "A digital system clock has a frequency of 50 MHz. What is the clock period (the duration of one cycle)?",
        options: ["20 microseconds", "20 nanoseconds", "50 nanoseconds", "2 nanoseconds"],
        correctIndex: 1,
        difficulty: "Medium",
        subCategory: "Aptitude",
        explanation: "Period T = 1 / Frequency = 1 / (50 * 10^6 Hz) = 0.02 * 10^-6 seconds = 20 nanoseconds."
      },
      {
        question: "Convert the binary number 110101 into its decimal representation.",
        options: ["53", "45", "51", "49"],
        correctIndex: 0,
        difficulty: "Easy",
        subCategory: "Aptitude",
        explanation: "110101 in binary = (1 * 2^5) + (1 * 2^4) + (0 * 2^3) + (1 * 2^2) + (0 * 2^1) + (1 * 2^0) = 32 + 16 + 0 + 4 + 0 + 1 = 53."
      }
    ],
    communication: [
      {
        question: "During a circuit board debugging session, your prototype shows an unexpected voltage ripple. You suspect the layout design of your senior team member has issues. How do you raise this?",
        options: [
          "Tell the project manager that the senior engineer designed a bad board and the project will be delayed.",
          "Prepare scope capture screenshots of the ripple, document the trace loop inductance calculations, and schedule a brief design sync: 'Hi, I observed some ripple on the supply rail; could you help me check if we can optimize the ground return path together?'",
          "Re-route the board layout in secret and order new boards without telling anyone.",
          "Post the issue on online engineering forums criticizing your senior's skills."
        ],
        correctIndex: 1,
        difficulty: "Medium",
        subCategory: "Colleague Collaboration",
        explanation: "Collaborating with senior staff requires backing observations with objective measurements (oscilloscope plots, math) and asking for collaborative review rather than making direct critiques."
      },
      {
        question: "A firmware project you are code-leading is falling behind schedule. How do you communicate this status to the engineering director?",
        options: [
          "Avoid listing the project in weekly status emails, hoping to catch up next week.",
          "Send an early update: 'We are facing a 1-week slip due to memory leak debugging on the RTOS. We have isolated the issue to the buffer allocation and are applying a fix. Here is our adjusted testing timeline.'",
          "Submit a report stating everything is on schedule, then blame compiler updates if you miss the deadline.",
          "Request that the director double the development team size immediately without explanation."
        ],
        correctIndex: 1,
        difficulty: "Medium",
        subCategory: "Status Reporting",
        explanation: "Professional reporting requires proactive updates when delays occur, describing the root cause, actions being taken, and providing a revised schedule."
      }
    ]
  }
};

// Export to window object for browser access
if (typeof window !== 'undefined') {
  window.QUESTION_BANK = QUESTION_BANK;
}
