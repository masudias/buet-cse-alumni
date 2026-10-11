export const CONTACT_EMAIL = "info.buet.cse.alumni@gmail.com";

export const NAV = [
  { to: "/about", label: "About" },
  { to: "/directory", label: "Directory" },
  { to: "/news", label: "News & Events" },
  { to: "/stories", label: "Stories" },
  { to: "/connect", label: "Community" },
  { to: "/careers", label: "Careers" },
  { to: "/research", label: "Research" },
] as const;

export const committee = [
  ["Humayun Kabir, PhD", "Professor, Vancouver Island University, Canada"],
  ["Manzur Murshed, PhD", "Professor, Deakin University, Australia"],
  ["Khandakar Asif Hasan", "Director, Spectrum Engineering Consortium Ltd, Bangladesh"],
  ["Mahmuda Naznin, PhD", "Professor, CSE, BUET, Bangladesh"],
  ["Salekul Islam, PhD", "Professor, NSU, Bangladesh"],
  ["Md Yusuf Sarwar Uddin, PhD", "Assistant Professor, University of Missouri Kansas City, USA"],
  ["Shaila Pervin, PhD", "AI Scientist, Commonwealth Bank, Australia"],
  ["Swakkhar Shatabda, PhD", "Professor, BRAC University, Bangladesh"],
  ["Sukarna Barua", "Associate Professor, CSE, BUET, Bangladesh"],
  ["Sumaiya Nazeen, PhD", "Postdoctoral Research Fellow, Harvard Medical School, USA"],
  ["Farig Yousuf Sadeque, PhD", "Associate Professor, BRAC University, Bangladesh"],
] as const;

export const batchReps: [number, string][] = [
  [1986, "Latifur Rahman Khan"], [1987, "Badrul Munir Sarwar"], [1988, "Mustafa Kamal Hossain"],
  [1989, "Shahnaz Afroz"], [1990, "Tamanna Islam"], [1991, "Ashraful Hannan"], [1992, "Eunus Ali"],
  [1993, "Md Saroar Jahan (Likhon)"], [1994, "Ahsan Ali"], [1995, "Sohel Rahman"], [1996, "Ragib Hassan"],
  [1997, "Farhan Habib"], [1998, "Mohammad Saifur Rahman"], [1999, "Anindya Iqbal"], [2000, "Ariful Azad"],
  [2001, "Dewan M Ibtesham Shafi"], [2002, "Nafees Ahmed Kuntal"], [2003, "Syed Ishtiaque Ahmed"],
  [2004, "Md Mainul Hassan"], [2005, "Proteek Chandan Roy"], [2006, "Sheikh Al Amin Sunoyon"],
  [2007, "Maruf Morshed Khan"], [2008, "Sultan Ahmed"], [2009, "Md. Tarikul Islam Papon"],
  [2010, "Ch. Md. Rakin Haider"], [2011, "Md Saiful Islam"], [2012, "Ishita Haque"], [2013, "Shahad Ishraq"],
  [2014, "Md Toufikuzzaman"], [2015, "Mohammed Latif Siddiq"], [2016, "A.K.M. Mehedi Hasan"],
  [2017, "Sheikh Azizul Hakim"], [2018, "Md. Asif Haider"], [2019, "Sadif Ahmed"],
];

export const objectives = [
  "Connect and unite alumni at home and abroad, fostering unity, friendship and loyalty.",
  "Strengthen and promote the professional rights of alumni as a collective, formal body.",
  "Lobby for better national and international policy in computer science and engineering.",
  "Provide professional development, career advancement and social welfare opportunities.",
  "Promote research and development through seminars, symposiums and training.",
  "Contribute to the development of CSE, BUET — its faculty, staff and students.",
  "Liaise with the department and like-minded organizations at home and abroad.",
];

// Sample content — placeholder until real data is provided.
export const news = [
  { date: "2026-01-17", tag: "Governance", title: "Constitution adopted at the first AGM", body: "Alumni gathered to adopt the BCA constitution and approve the minutes of the Annual General Meeting." },
  { date: "2026-03-02", tag: "Election", title: "1st BCA Election 2026 announced", body: "Voter list preparation is underway with help from batch representatives from 1986 to 2019." },
  { date: "2026-05-20", tag: "Event", title: "Global alumni meetup — Toronto chapter", body: "North American alumni met for an evening of talks and networking." },
];

export const events = [
  { date: "Dec 12, 2026", place: "CSE Dept, BUET", title: "Annual Reunion & Picnic" },
  { date: "Nov 08, 2026", place: "Online", title: "Mentorship Kickoff: Industry & Academia" },
  { date: "Oct 24, 2026", place: "ECE Building, BUET", title: "Alumni Tech Talk: LLMs in Production" },
];

export const sampleMembers = [
  { name: "Ayesha Rahman", batch: 2008, role: "Staff Engineer", org: "Google", city: "Mountain View, USA" },
  { name: "Tanvir Hasan", batch: 2003, role: "Associate Professor", org: "University of Toronto", city: "Toronto, Canada" },
  { name: "Nusrat Jahan", batch: 2012, role: "ML Scientist", org: "Microsoft Research", city: "Redmond, USA" },
  { name: "Imran Chowdhury", batch: 1995, role: "CTO", org: "Fintech startup", city: "Dhaka, Bangladesh" },
  { name: "Farzana Kabir", batch: 2016, role: "PhD Candidate", org: "ETH Zürich", city: "Zürich, Switzerland" },
  { name: "Rafiq Islam", batch: 1990, role: "Director of Engineering", org: "Atlassian", city: "Sydney, Australia" },
];
