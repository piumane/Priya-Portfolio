/* ==========================================================================
   CONTENT FILE: edit this file to update your portfolio. No other code needed.
   Rules for beginners:
   - Keep the quotes "like this" and the commas between items.
   - To add an item, copy a whole line/block, paste it below, and change the text.
   - To remove an item, delete the whole line/block.
   Text that is not here (About paragraphs, Experience, hero text) is in index.html
   under comments that say  EDIT HERE.
   ========================================================================== */

/* 1. Your links. They update every email/LinkedIn/GitHub link on the site. */
const links = {
  email: "priyamane2712@gmail.com",
  linkedin: "https://linkedin.com/in/priya-mane-8922a5373",
  github: "https://github.com/piumane"
};

/* 2. Education: ["Degree", "School", "Score"] */
const education = [
  ["Master of Computer Application", "MIT World Peace University, Pune", "8.05 CGPA"],
  ["Bachelor of Computer Science", "MMCC, Pune", "7.84 CGPA"],
  ["HSC", "MIT Junior College, Pune", "77.50%"],
  ["SSC", "Sahyadri National School, Pune", "73.80%"]
];

/* 3. Beyond Code: ["Title", "Short description"] */
const achievements = [
  ["Bharatanatyam", "Completed the Padarpan course in Bharatanatyam and performed my Arangetram, the classical dancer's debut solo recital."],
  ["Drawing", "Grade A in the Intermediate Grade Drawing Examination, Maharashtra State Board."]
];

/* 4. Projects.
   t = name, y = year, sub = one-line description, stack = technologies, pts = bullet points.
   To show buttons, add real links inside a project, for example:
     github:"https://github.com/yourname/your-repo",
     demo:"https://your-live-demo.example"
   If you leave github/demo out, no button is shown. */
const projects = [
  {
    t: "TrendTailor", y: "2026", sub: "AI outfit recommendation system", stack: ["Python", "Flask", "MySQL", "Gemini API"],
    pts: ["AI-powered outfit recommendation platform.", "Generative AI gives personalized suggestions based on user preferences and occasions.", "I designed the database, implemented the backend logic and built a responsive interface."]
  },
  {
    t: "Foodies", y: "2025", sub: "Online food ordering website", stack: ["JSP", "Servlets", "MySQL", "HTML", "CSS", "JavaScript"],
    pts: ["Menu browsing, cart management and order placement.", "Secure admin authentication.", "CRUD operations, session management and optimized SQL queries."]
  },
  {
    t: "Venture", y: "2023", sub: "Online travel booking website", stack: ["PHP", "PostgreSQL", "HTML", "CSS", "JavaScript", "AJAX"],
    pts: ["User authentication, package booking and dynamic search.", "Admin management panel.", "Responsive interfaces, backend logic, testing and debugging."]
  },
  { t: "Dr. Amardeep", y: "Internship", sub: "Internship project · Healthcare platform at HashedBit Innovations", stack: ["React.js", "JavaScript", "MySQL"], pts: ["Developed platform modules as a Software Developer Intern.", "Improved the responsive UI and integrated REST APIs.", "Resolved bugs to improve application usability."] },
  {
    t: "JobMart", y: "Internship", sub: "Internship project · Recruitment platform at HashedBit Innovations", stack: ["React.js", "Node.js", "Express.js", "MySQL"],
    pts: ["Built full-stack features for the platform.", "Dynamic FAQs and resume management.", "REST API integrations and responsive UI improvements."]
  }
];

/* 5. Skills: ["Category name", ["Skill", "Skill", ...]] */
const skills = [["Programming", ["Java", "Python", "PHP", "JavaScript"]], ["Frontend & Web", ["HTML", "CSS", "React.js", "AJAX", "JSP", "Servlets", "Responsive Design"]], ["Backend & APIs", ["Node.js", "Express.js", "Flask", "REST APIs"]], ["Databases", ["MySQL", "PostgreSQL"]], ["AI & Integration", ["Gemini API", "Prompt Engineering", "AI Integration"]], ["Tools & Core Concepts", ["Git", "GitHub", "VS Code", "Eclipse", "Jira", "OOP", "RDBMS", "Data Structures", "CRUD", "Windows", "Linux"]]];

/* 6. Certifications: ["Name", "Provider", "Date (leave \"\" if none)"] */
const certs = [["React Basics", "Meta (Coursera)", "Mar 2026"], ["Programming in Python", "Meta (Coursera)", "Sep 2025"], ["Technology Job Simulation", "Deloitte (Forage)", "Jul 2025"], ["CS205: Building with Artificial Intelligence", "Saylor Academy", ""]];
