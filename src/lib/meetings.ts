export type MeetingDoc = { kind: "Agenda" | "Minutes"; file: string; format: "PDF" | "PPTX" };
export type Meeting = { no: number; date: string; iso: string; mode: string; attendance?: string; summary: string; highlights: string[]; docs: MeetingDoc[] };

const base = "/meetings/";
export const docUrl = (file: string) => base + file;

export const meetings: Meeting[] = [
  {
    no: 3, date: "October 30, 2026", iso: "2026-10-30", mode: "Online (Zoom)",
    summary: "Discussion with the interim committee, President's report on three new projects, and follow-up on September action items.",
    highlights: ["30-minute discussion with the interim committee, including Dr. Kaykobad", "Preliminary work on three projects: career support team, mental health support, entrepreneurship", "November 27 meeting confirmed; December 25 meeting cancelled with a summary to follow", "Follow-ups: website plan, Mahbub Sir memorial fund, batch reps in meetings, Bangladesh bank account, reunions in North America and Bangladesh"],
    docs: [{ kind: "Agenda", file: "BCA-EC-2026-2028_meeting-agenda-03_2026-10-30.pptx", format: "PPTX" }],
  },
  {
    no: 2, date: "September 25, 2026", iso: "2026-09-25", mode: "Online (Zoom)", attendance: "14 of 17",
    summary: "Agenda and previous minutes approved; action owners assigned for the website, memorial fund, bank account and reunions.",
    highlights: ["Website creation and maintenance plan — Mahadi, Reaz, Sarwar", "Mahbub Sir memorial fund takeover plan — Munir", "Interim committee invited to the October meeting — Zulkernine", "Two batch representatives to join each meeting from November — Rifat", "BCA bank account in Bangladesh — Rezwana, Tanzima", "Reunions in North America (Munir) and Bangladesh (Mostofa, Asif) for 2027 or 2028"],
    docs: [
      { kind: "Agenda", file: "BCA-EC-2026-2028_meeting-agenda-02_2026-09-25.pdf", format: "PDF" },
      { kind: "Minutes", file: "BCA-EC-2026-2028_meeting-minutes-02_2026-09-25.pdf", format: "PDF" },
    ],
  },
  {
    no: 1, date: "August 28, 2026", iso: "2026-08-28", mode: "Online (Zoom)", attendance: "15 of 17",
    summary: "First Executive Committee meeting: constitution rules, member introductions, and a monthly meeting schedule.",
    highlights: ["Quorum of 11; two-thirds majority for decisions; no absence from 3 consecutive meetings", "EC meets the last Friday of every month for the next six months", "Facebook group for announcements and discussion; official documents posted on the website", "Website volunteers to contact the Secretary Media and Publications (Mahadi Rahman)"],
    docs: [{ kind: "Minutes", file: "BCA-EC-2026-2028_meeting-minutes-01_2026-08-28.pdf", format: "PDF" }],
  },
];
