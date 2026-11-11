export const SITE = {
  name: "CD-AI Legal",
  legalName: "Chapman Digital LLC",
  url: "https://legal.chapmandigital.ai",
  app: "https://chapmandigital.ai",
  company: "https://chapmandigital.com",
  companyLegal: "https://chapmandigital.com/legal/",
};

// Order and summaries for the documents listed on the home page.
export const DOCUMENTS = [
  {
    id: "terms",
    href: "/terms/",
    summary:
      "Sets the rules for using CD-AI and its models, including Triavera AI: eligibility, acceptable use, sharing and channels, ownership of your content and outputs, model training, and binding arbitration of disputes.",
    topics: ["Acceptable use", "Content & training", "Arbitration"],
  },
  {
    id: "privacy",
    href: "/privacy/",
    summary:
      "Explains how CD-AI handles accounts, chats, uploaded files, memory, notes, channels, and shared links, including administrator access, AI processing and model training, tracking, retention, and your privacy choices.",
    topics: ["Chats & uploads", "AI providers & training", "Privacy requests"],
  },
] as const;

export const CONTACTS = [
  { label: "Support", email: "support@chapmandigital.com" },
  { label: "Legal notices", email: "legal@chapmandigital.com" },
  { label: "Privacy requests", email: "privacy@chapmandigital.com" },
];
