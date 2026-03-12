// Syllabus tree for sidebar navigation — kept client-side since it includes
// "coming soon" items that don't exist in the database yet.
export const syllabusTree = [
  {
    category: "Anatomy",
    subtopics: [
      { name: "Nerve Supply of the Hand", slug: "nerve-supply-of-the-hand" },
      { name: "Femoral Triangle", slug: "femoral-triangle" },
      { name: "Brachial Plexus", slug: null },
      { name: "Inguinal Canal", slug: null },
    ],
  },
  {
    category: "Physiology",
    subtopics: [
      { name: "Beta-Blockers", slug: "beta-blockers" },
      { name: "Cardiac Output", slug: null },
      { name: "Acid-Base Balance", slug: null },
    ],
  },
  {
    category: "Pathology",
    subtopics: [
      { name: "Wound Healing", slug: null },
      { name: "Inflammation", slug: null },
      { name: "Neoplasia", slug: null },
    ],
  },
];

// Shared category color maps
export const categoryColors: Record<string, string> = {
  anatomy: "bg-blue-50 text-blue-600",
  physiology: "bg-emerald-50 text-emerald-600",
  pathology: "bg-amber-50 text-amber-600",
};
