export type Announcement = {
  title: string;
  label: string;
  details: string[];
  url?: string;
  action?: string;
  note?: string;
};

export const researchOpenings: Announcement[] = [
  {
    title: "PhD positions · Indiana University Bloomington",
    label: "Fall 2027 · Hyungsub Kim",
    details: ["Multiple PhD positions in cybersecurity for cyber-physical systems, including autonomous vehicles, drones and satellites, at the Luddy School of Informatics, Computing, and Engineering.", "Fully funded RA/TA positions include tuition, stipend and health insurance. Candidates should have strong C/C++ programming skills and foundations in operating systems, architecture and algorithms."],
    url: "https://www.linkedin.com/posts/hyungsub-kim-80571795_my-research-group-at-indiana-university-bloomington-share-7510393363863511040-tTuk/",
    action: "Read recruitment post",
  },
  {
    title: "Software Engineering & AI · UT Dallas",
    label: "Spring & Fall 2027 · Shanto Rahman",
    details: ["Assistant Professor Shanto Rahman is recruiting multiple PhD students (at least two) for Spring 2027 and Fall 2027.", "Students interested in software testing, AI/LLM-based software engineering, and reliable software and AI systems are encouraged to reach out through the recruitment post."],
    url: "https://www.linkedin.com/posts/shantorahman_utdallas-computerscience-phdpositions-share-7493869058908532736-8GNh/",
    action: "Read recruitment post",
  },
  {
    title: "Embedded & Edge Systems · Arizona State University",
    label: "Fall 2027 · Hassan Ghasemzadeh",
    details: ["The Embedded Machine Intelligence Lab is recruiting a PhD student for Fall 2027. Ideal candidates have hands-on experience with microcontrollers, hardware prototyping and embedded/edge systems.", "Research includes embedded sensing, edge AI and digital health. See the lab's opening page for requirements and application instructions."],
    url: "https://ghasemzadeh.com/opening/",
    action: "View opening & apply",
  },
  {
    title: "Algorithms & High-Performance Computing · UNC Charlotte",
    label: "New research group · Fall 2026 faculty appointment",
    details: ["A new research group in the Department of Computer Science is seeking PhD students passionate about algorithms, high-performance computing and solving challenging problems at scale.", "Research areas: scalable graph and hypergraph algorithms; streaming and dynamic algorithms; submodular function optimization; learning-augmented algorithms; and algorithms/HPC for science, including quantum computing, machine learning systems and autonomous experiments.", "Full tuition support, a competitive stipend, health insurance, computing resources and opportunities to collaborate with DOE national laboratories such as Pacific Northwest National Lab.", "Candidates should have strong algorithms, data structures and programming skills, especially C/C++. MPI, CUDA, OpenMP or theoretical CS experience is a plus. Applicants from CS, applied mathematics and related fields are welcome.", "Send a CV, unofficial transcripts and a brief statement of research interests to ferdous.csebuet@gmail.com."],
    url: "mailto:ferdous.csebuet@gmail.com?subject=PhD%20research%20interest%20at%20UNC%20Charlotte",
    action: "Email research interest",
  },
];

export const jobOpenings: Announcement[] = [
  {
    title: "Senior Full Stack Product Engineer",
    label: "Intelligent Machines · Banani, Dhaka",
    details: ["Build AI-powered enterprise SaaS products. Applicants should have 6+ years of full-stack engineering experience, ownership of production SaaS architecture and experience building scalable systems.", "Full-time: four days in office, one day working from home. Salary: BDT 180,000–200,000/month, based on experience and interview performance."],
    url: "https://forms.gle/QqW759kg4CrVw5Y99", action: "View application form",
  },
  {
    title: "Junior, Mid & Senior Engineering Roles",
    label: "IQVIA · Dhaka · Graduates only",
    details: ["Junior roles: problem-solving, C# and/or Python proficiency, communication and technical fundamentals.", "Mid/senior roles: strong C#/Python, .NET, React or Angular, and software design fundamentals. Agentic AI experience and collaboration skills are valued.", "The shared announcement offers referrals through its original poster; no contact or application link was supplied."],
    note: "Referral contact pending · Only graduates can apply",
  },
  {
    title: "Lead GCP Engineer",
    label: "AllChrono · Saudi-based startup",
    details: ["Own the application layer end-to-end and grow the team around it, reporting directly to the CTO and contributing to infrastructure development.", "AllChrono is building a luxury-watch marketplace with blockchain-verified passports, escrow-secured trades and integrated infrastructure."],
    url: "https://www.linkedin.com/jobs/view/4438526474/", action: "View job & apply",
  },
  {
    title: "Associate Product Engineer",
    label: "DeepDive · Markopolo.ai",
    details: ["An early-career role with real product ownership on a social-listening platform. Candidates should be able to question and develop an idea, ship early and use AI without giving up independent thinking or problem-solving.", "The supplied job URL was incomplete. Visit Markopolo.ai for current openings; a direct application link is pending."],
    url: "https://markopolo.ai/", action: "Visit company website",
  },
  {
    title: "Senior Software Engineer · Full Stack",
    label: "Field Nation · Uttara 12, Dhaka · Hybrid",
    details: ["Build an AWS-hosted SaaS platform with PHP and Node.js microservices, React and React Native, Kafka, event-driven architecture, observability and Kubernetes.", "Hours: 1 PM–10 PM Bangladesh time. Salary: BDT 160,000–210,000/month.", "Benefits include medical insurance, gym membership, festival bonuses, career development budget and team retreats. Send a CV to ridi.haque@fieldnation.com."],
    url: "mailto:ridi.haque@fieldnation.com?subject=Senior%20Software%20Engineer%20application", action: "Email your CV",
  },
];

export const benefits: Announcement[] = [
  {
    title: "LeetCode student subscription",
    label: "Interview preparation · Community referral",
    details: ["Practice problem solving and explore interview questions and experiences from technology companies. Consistent practice can help juniors and alumni build interview confidence.", "The shared referral mentions US$60 off with a BUET email address. Check LeetCode's current eligibility, pricing and offer terms before purchasing."],
    url: "https://leetcode.com/student/?refer=zaber04", action: "Check student offer",
  },
  {
    title: "CraftX · Open-source model APIs & GPUs",
    label: "Shared by Dr Adnan Arefeen · Assistant Professor, ECE, NSU",
    details: ["Built with a student, CraftX provides APIs for large open-source models, GPUs for submitting jobs and a VS Code extension for research and daily assignments. The shared announcement notes that payments through bKash are supported."],
    url: "https://craftx.corecraftsolutions.com/", action: "Visit CraftX",
  },
];

export const pastEvents: (Announcement & { date: string; place: string })[] = [
  {
    title: "ACM Chapter Khan–Bose Talk · Professor Latifur Khan",
    label: "BUET ACM Chapter · Past event", date: "5 October 2026 · 12 PM", place: "Graduate Seminar Room, ECE 503, BUET",
    details: ["Professor Latifur Khan, Department of Computer Science, UT Dallas, Fellow of IEEE, AAAS, IET and BCS, was announced as the speaker for the Khan–Bose talk.", "Organized by the BUET ACM Chapter, Department of CSE, BUET, for interested students and faculty."],
    url: "https://www.facebook.com/100063546434759/posts/1731169122344619/?mibextid=rS40aB7S9Ucbxw6v", action: "View event announcement",
  },
  {
    title: "AI and Society · Three-day short course",
    label: "North South University · Past event", date: "30 September–2 October 2026", place: "North South University",
    details: ["Professor Mor Naaman of Cornell Tech led a course on interactions between artificial intelligence, technology and society, organized by NSU's Department of ECE with the NSU ACM Student Chapter.", "Registration fee: BDT 1,500 for the full three-day course. Completion certificates, lunch and snacks were included for participants completing all modules.", "Pre-registration closed at 11:59 PM on 26 September 2026. Pre-registration did not guarantee participation; selected applicants were to receive final instructions separately."],
    url: "https://docs.google.com/forms/d/e/1FAIpQLScLuFXH6KeSvWeqecLGYSh4gf25b1I3Pm2knNjWVpSrnsmhgw/viewform?pli=1", action: "Original pre-registration form",
  },
  {
    title: "BUET Reunion UK 2026",
    label: "Alumni & families · Past event", date: "26 September 2026 · 12:30–8:30 PM", place: "Sindlesham Court, Wokingham, RG41 5EA, UK",
    details: ["BUET alumni living in or visiting the UK and their families were invited to reconnect with friends, meet fellow BUETians and create new memories in Reading."],
    url: "https://buetalumni.co.uk", action: "Visit UK alumni website",
  },
  {
    title: "When Software Artifacts Disagree",
    label: "BUET ACM Chapter · Past event", date: "8 August 2026 · 2:30 PM", place: "Graduate Seminar Room, ECE 503, CSE, BUET",
    details: ["Speaker: Zahin Wahab, PhD student in Computer Science at the University of British Columbia and Lecturer at BRAC University.", "The seminar examined how inconsistencies arise between software implementations, programming-language interpreters, code and documentation—even when a program produces plausible outputs rather than obvious crashes. Organized by BUET ACM Chapter, CSE, BUET."],
  },
  {
    title: "Generative AI & LLMs for Cybersecurity and Political Science",
    label: "BCS International Lecture Series · 03 · Past event", date: "3 August 2026 · 9:30 PM BST (UTC+6)", place: "Online · Zoom",
    details: ["Professor Latifur Khan, UT Dallas, Fellow of IEEE, AAAS, IET and BCS, delivered the announced online lecture.", "Organized by Bangladesh Computer Society with the Center for Intelligent Computing. Academics, researchers, students, IT professionals and policymakers were welcome; no registration was required.", "Original Zoom meeting ID: 959 9525 5962."],
    url: "https://bdren.zoom.us/j/95995255962", action: "Original Zoom link",
  },
];