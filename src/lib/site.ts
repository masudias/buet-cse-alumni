import representatives from "./representatives.json";
export const CONTACT_EMAIL = "info.bca.alumni@grad.cse.buet.ac.bd";
export const REGISTER_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeTNKe_TQmM6e7Iwgu4NXZjbx6mWUmOgIXJHuU0fK1LpNvPEw/viewform?usp=header";
export const alumniEmail = (subject: string) => `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;

export const NAV = [
  { to: "/about", label: "About" },
  { to: "/directory", label: "Alumni Directory" },
  { to: "/news", label: "News & Events" },
  { to: "/networking", label: "Networking" },
] as const;

export const executiveCommittee = [
  ["President", "Mohammad Zulkernine"],
  ["Vice President", "Badrul Munir Sarwar"],
  ["General Secretary", "Khandakar Asif Hasan"],
  ["Joint General Secretary", "Md. Mostofa Akbar"],
  ["Secretary Finance / Treasurer", "Rezwana Reaz"],
  ["Secretary Member Relations", "Rifat Shahriyar"],
  ["Secretary Media and Publications", "Mahadi Rahman"],
  ["Secretary Social Welfare", "Mohammad Riad Ashraf"],
  ["Secretary Research and Development", "Muhammad Abdul Hakim Newton"],
  ["The Head, CSE, BUET", "Tanzima Hashem"],
  ["Member at Large", "Sanjida Islam Era"],
  ["Member at Large", "Adiba Shaira"],
  ["Member at Large", "Md Reaz Murshed Masud"],
  ["Member at Large", "Md. Asif Haider"],
  ["Member at Large", "Kazi Zaber"],
  ["Member at Large", "Muhammad Sarwar Siddique"],
  ["Member at Large", "Sadik Ahammed Siddique"],
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

export const batchReps = representatives.map(([batch, name]) => [Number(batch), String(name)] as [number, string]);

export const objectives = [
  "Connect and unite alumni at home and abroad, fostering unity, friendship and loyalty.",
  "Strengthen and promote the professional rights of alumni as a collective, formal body.",
  "Lobby for better national and international policy in computer science and engineering.",
  "Provide professional development, career advancement and social welfare opportunities.",
  "Promote research and development through seminars, symposiums and training.",
  "Contribute to the development of CSE, BUET — its faculty, staff and students.",
  "Liaise with the department and like-minded organizations at home and abroad.",
];

