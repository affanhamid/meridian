import { mutation } from "./_generated/server";

export const seedAll = mutation({
  args: {},
  handler: async (ctx) => {
    // Check if already seeded
    const existing = await ctx.db.query("topics").first();
    if (existing) {
      throw new Error("Database already seeded. Clear tables first if you want to re-seed.");
    }

    // Seed topics
    await ctx.db.insert("topics", {
      slug: "nerve-supply-of-the-hand",
      title: "Nerve Supply of the Hand",
      category: "anatomy",
      description: "Median, ulnar, and radial nerve distributions in the hand",
      contentPath: "nerve-supply-of-the-hand.md",
      status: "published",
      order: 1,
    });

    await ctx.db.insert("topics", {
      slug: "femoral-triangle",
      title: "Femoral Triangle",
      category: "anatomy",
      description: "Boundaries, contents, and clinical relevance of the femoral triangle",
      contentPath: "femoral-triangle.md",
      status: "published",
      order: 2,
    });

    await ctx.db.insert("topics", {
      slug: "beta-blockers",
      title: "Beta-Blockers",
      category: "physiology",
      description: "Mechanism of action, indications, and contraindications",
      contentPath: "beta-blockers.md",
      status: "published",
      order: 1,
    });

    // Seed questions
    await ctx.db.insert("questions", {
      topicSlug: "nerve-supply-of-the-hand",
      stem: "A 32-year-old carpenter presents to the emergency department after lacerating his wrist on a piece of sheet metal. On examination, he is unable to abduct his index finger and has loss of sensation over the palmar surface of his little finger. He can still oppose his thumb normally. Which muscle is most likely affected by the nerve injury?",
      options: [
        "A: Abductor pollicis brevis",
        "B: First dorsal interosseous",
        "C: Flexor pollicis longus",
        "D: Opponens pollicis",
        "E: Second lumbrical",
      ],
      correctIndex: 1,
      explanation:
        "The inability to abduct the index finger indicates loss of first dorsal interosseous function, and the sensory loss over the little finger confirms an ulnar nerve injury. All interossei are supplied by the deep branch of the ulnar nerve. Thumb opposition is preserved because opponens pollicis is supplied by the median nerve, which is intact.",
      difficulty: "medium",
      order: 1,
    });

    await ctx.db.insert("questions", {
      topicSlug: "femoral-triangle",
      stem: "A 58-year-old woman requires emergency femoral artery catheterisation. The interventional radiologist palpates the femoral pulse at the mid-inguinal point and prepares to insert the catheter. Which structure lies immediately lateral to the femoral artery at this level?",
      options: [
        "A: Femoral vein",
        "B: Femoral canal",
        "C: Femoral nerve",
        "D: Great saphenous vein",
        "E: Pectineus muscle",
      ],
      correctIndex: 2,
      explanation:
        "Within the femoral triangle, the structures are arranged lateral to medial as NAVY: Nerve, Artery, Vein, Y-fronts (lymphatics). The femoral nerve lies immediately lateral to the femoral artery. Importantly, the femoral nerve lies outside the femoral sheath, while the artery and vein are enclosed within it.",
      difficulty: "medium",
      order: 2,
    });

    await ctx.db.insert("questions", {
      topicSlug: "beta-blockers",
      stem: "A 45-year-old man with well-controlled asthma is admitted for an elective cholecystectomy. His preoperative ECG shows a heart rate of 102 bpm with atrial fibrillation. The anaesthetist wishes to start a beta-blocker for rate control. Which of the following agents is the most appropriate choice?",
      options: [
        "A: Propranolol",
        "B: Carvedilol",
        "C: Atenolol",
        "D: Labetalol",
        "E: Sotalol",
      ],
      correctIndex: 2,
      explanation:
        "Atenolol is a cardioselective (beta-1 selective) beta-blocker, making it the safest choice for a patient with asthma. Propranolol, carvedilol, and labetalol are non-selective and block beta-2 receptors in bronchial smooth muscle, risking bronchospasm. While no beta-blocker is completely safe in asthma, cardioselective agents are preferred.",
      difficulty: "medium",
      order: 3,
    });
  },
});
