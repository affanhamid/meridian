export interface Topic {
  slug: string;
  title: string;
  category: "Anatomy" | "Physiology" | "Pathology";
  description: string;
  explanation: string[];
  clinicalContext: string;
  highYieldPoints: string[];
  examTraps: string[];
  furtherReading: { title: string; url: string }[];
}

export interface Question {
  id: number;
  topicSlug: string;
  stem: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

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

export const topics: Topic[] = [
  {
    slug: "nerve-supply-of-the-hand",
    title: "Nerve Supply of the Hand",
    category: "Anatomy",
    description:
      "Ulnar, median, and radial nerve territories — motor and sensory distributions in the hand.",
    explanation: [
      "The hand receives its nerve supply from three major peripheral nerves: the median nerve, the ulnar nerve, and the radial nerve. Each nerve has distinct motor and sensory territories, and understanding their distributions is essential for diagnosing nerve injuries and planning surgical interventions.",
      "The median nerve enters the hand through the carpal tunnel, beneath the flexor retinaculum. It supplies motor branches to the thenar muscles (abductor pollicis brevis, opponens pollicis, and the superficial head of flexor pollicis brevis) and the lateral two lumbricals. Sensory supply covers the palmar aspect of the lateral three and a half digits and the corresponding nail beds dorsally.",
      "The ulnar nerve enters the hand via Guyon's canal (between the pisiform and the hook of hamate). Its deep branch supplies the hypothenar muscles, all interossei (palmar and dorsal), the medial two lumbricals, adductor pollicis, and the deep head of flexor pollicis brevis. The superficial branch provides sensation to the medial one and a half digits. The radial nerve supplies no intrinsic hand muscles but provides dorsal sensory innervation to the lateral three and a half digits proximal to the nail beds.",
    ],
    clinicalContext:
      "Nerve injuries in the hand are extremely common in surgical practice. A low ulnar nerve lesion produces a 'claw hand' deformity affecting the ring and little fingers due to unopposed action of the long flexors and extensors. Carpal tunnel syndrome, caused by compression of the median nerve beneath the flexor retinaculum, presents with numbness in the median nerve distribution and weakness of thenar muscles. The 'hand of benediction' sign is seen with a high median nerve lesion when attempting to make a fist. Assessment of nerve function is critical before and after any hand surgery.",
    highYieldPoints: [
      "The ulnar nerve supplies ALL interossei (4 dorsal, 3 palmar) — responsible for finger abduction and adduction",
      "Adductor pollicis is supplied by the ulnar nerve, NOT the median nerve — test with Froment's sign",
      "The median nerve supplies the LOAF muscles: Lateral two Lumbricals, Opponens pollicis, Abductor pollicis brevis, Flexor pollicis brevis (superficial head)",
      "The recurrent branch of the median nerve (motor branch to thenar eminence) is at risk during carpal tunnel decompression",
      "The radial nerve has NO motor function in the hand — it only provides dorsal cutaneous sensation",
    ],
    examTraps: [
      "Confusing ulnar vs median nerve territory: adductor pollicis is ulnar (not median), despite being a thumb muscle — remember 'all interossei are ulnar'",
      "Forgetting that the dorsal digital nerves to the lateral 3½ fingers (distal to the nail bed) come from the median nerve, not the radial nerve",
      "Assuming 'claw hand' means total loss of hand function — clawing is actually worse in low ulnar nerve lesions than high ones (the 'ulnar paradox')",
    ],
    furtherReading: [
      {
        title: "TeachMeAnatomy — Nerves of the Hand",
        url: "https://teachmeanatomy.info/upper-limb/nerves/hand/",
      },
      {
        title: "Radiopaedia — Hand Innervation",
        url: "https://radiopaedia.org/articles/innervation-of-the-hand",
      },
      {
        title: "BMJ Best Practice — Peripheral Nerve Injuries",
        url: "https://bestpractice.bmj.com/topics/en-gb/582",
      },
    ],
  },
  {
    slug: "femoral-triangle",
    title: "Femoral Triangle",
    category: "Anatomy",
    description:
      "Boundaries, contents (NAVY mnemonic), and clinical significance of the femoral triangle.",
    explanation: [
      "The femoral triangle is a subfascial space in the upper anterior thigh that serves as a major conduit for neurovascular structures passing between the abdomen and the lower limb. It is a high-yield anatomical region for the MRCS examination due to its surgical importance in vascular access, hernia repair, and understanding of groin pathology.",
      "The boundaries of the femoral triangle are: superiorly, the inguinal ligament (stretching from the anterior superior iliac spine to the pubic tubercle); laterally, the medial border of sartorius; and medially, the medial border of adductor longus. The floor is formed by iliopsoas laterally and pectineus medially. The roof is formed by the fascia lata and cribriform fascia.",
      "The contents of the femoral triangle, from lateral to medial, are remembered by the mnemonic NAVY: Nerve, Artery, Vein, Y-fronts (lymphatics). The femoral nerve lies outside the femoral sheath, while the femoral artery and vein lie within it. The femoral canal, containing lymphatics, is the most medial compartment of the femoral sheath and is the site through which femoral hernias protrude.",
    ],
    clinicalContext:
      "The femoral triangle is critically important in clinical practice. The femoral artery is the preferred site for arterial catheterisation and is palpated at the mid-inguinal point (midway between the anterior superior iliac spine and the pubic symphysis). Femoral hernias pass through the femoral canal, medial to the femoral vein, and present below and lateral to the pubic tubercle — distinguishing them from inguinal hernias which appear above and medial to the tubercle. Femoral hernias have a high risk of strangulation due to the rigid boundaries of the femoral ring. The saphenous opening (fossa ovalis) in the fascia lata is located within the femoral triangle and is the point where the great saphenous vein drains into the femoral vein.",
    highYieldPoints: [
      "Boundaries: Inguinal ligament (superior), sartorius (lateral), adductor longus (medial)",
      "Contents lateral to medial: NAVY — Nerve, Artery, Vein, Y-fronts (lymphatics/femoral canal)",
      "The femoral nerve lies OUTSIDE the femoral sheath; the artery and vein lie within it",
      "Mid-inguinal point (ASIS to pubic symphysis midpoint) = femoral artery pulsation; midpoint of inguinal ligament (ASIS to pubic tubercle) = deep inguinal ring",
      "The femoral canal is bounded by the inguinal ligament anteriorly, pectineal ligament posteriorly, lacunar ligament medially, and femoral vein laterally",
    ],
    examTraps: [
      "Confusing mid-inguinal point (femoral artery) with midpoint of inguinal ligament (deep ring) — these are different landmarks because the pubic symphysis and pubic tubercle are not the same point",
      "Stating that femoral hernias are above and medial to the pubic tubercle — that describes inguinal hernias. Femoral hernias are below and lateral to the pubic tubercle",
      "Forgetting that the femoral nerve is outside the femoral sheath — a common trick question asking which structure is NOT in the sheath",
    ],
    furtherReading: [
      {
        title: "TeachMeAnatomy — The Femoral Triangle",
        url: "https://teachmeanatomy.info/lower-limb/areas/femoral-triangle/",
      },
      {
        title: "Radiopaedia — Femoral Triangle",
        url: "https://radiopaedia.org/articles/femoral-triangle",
      },
      {
        title: "NICE CKS — Groin Hernia",
        url: "https://cks.nice.org.uk/topics/hernia-inguinal/",
      },
    ],
  },
  {
    slug: "beta-blockers",
    title: "Beta-Blockers",
    category: "Physiology",
    description:
      "Mechanism of action, selectivity, clinical uses, and key contraindications of beta-adrenoceptor antagonists.",
    explanation: [
      "Beta-adrenoceptor antagonists (beta-blockers) are a class of drugs that competitively inhibit the effects of catecholamines at beta-adrenergic receptors. They are among the most commonly prescribed medications in surgical practice, with important perioperative implications. Understanding their pharmacology is essential for the MRCS examination.",
      "Beta-1 receptors are predominantly found in the heart, where their stimulation increases heart rate (chronotropy), contractility (inotropy), and conduction velocity (dromotropy). Beta-2 receptors are found in bronchial and vascular smooth muscle, where their stimulation causes bronchodilation and vasodilation, and in the liver and skeletal muscle, where they promote glycogenolysis. Cardioselective beta-blockers (e.g., atenolol, metoprolol, bisoprolol) preferentially block beta-1 receptors, while non-selective agents (e.g., propranolol, carvedilol, labetalol) block both beta-1 and beta-2 receptors.",
      "In surgical practice, beta-blockers are used perioperatively to reduce cardiovascular risk, control heart rate in atrial fibrillation, manage hypertension, and treat thyroid storm (propranolol additionally inhibits peripheral conversion of T4 to T3). They reduce myocardial oxygen demand by lowering heart rate and contractility. However, they must be used with caution in patients with asthma, decompensated heart failure, and peripheral vascular disease.",
    ],
    clinicalContext:
      "Perioperative beta-blockade is a frequent topic in MRCS examinations. Patients already taking beta-blockers should continue them perioperatively, as abrupt withdrawal can precipitate rebound tachycardia and hypertension. In thyroid storm, propranolol is used because of its additional effect of inhibiting the peripheral conversion of T4 to T3. In phaeochromocytoma, alpha-blockade (phenoxybenzamine) must always be established BEFORE beta-blockade to prevent unopposed alpha-mediated vasoconstriction and hypertensive crisis. Esmolol, an ultra-short-acting cardioselective beta-blocker, is useful intraoperatively for rapid heart rate control.",
    highYieldPoints: [
      "Cardioselective (beta-1) agents: atenolol, metoprolol, bisoprolol, esmolol — safer in patients with mild airways disease",
      "Non-selective agents: propranolol, carvedilol, labetalol (labetalol also has alpha-blocking activity)",
      "Propranolol inhibits peripheral T4→T3 conversion — the beta-blocker of choice in thyrotoxicosis/thyroid storm",
      "In phaeochromocytoma: ALWAYS alpha-block first (phenoxybenzamine), then add beta-blocker — never beta-block alone",
      "Beta-blockers mask the sympathetic symptoms of hypoglycaemia (tachycardia, tremor) — use cautiously in insulin-dependent diabetics",
    ],
    examTraps: [
      "Giving a non-selective beta-blocker to an asthmatic patient — beta-2 blockade causes bronchospasm. Even 'cardioselective' agents lose selectivity at higher doses",
      "Starting a beta-blocker before alpha-blockade in phaeochromocytoma — causes unopposed alpha stimulation, leading to severe hypertensive crisis",
      "Forgetting that beta-blockers mask hypoglycaemia — the patient may not exhibit the usual warning signs (tachycardia, sweating is preserved as it is cholinergic)",
    ],
    furtherReading: [
      {
        title: "BNF — Beta-Adrenoceptor Blocking Drugs",
        url: "https://bnf.nice.org.uk/treatment-summaries/beta-adrenoceptor-blocking-drugs/",
      },
      {
        title: "NICE — Hypertension Management",
        url: "https://www.nice.org.uk/guidance/ng136",
      },
      {
        title: "NHS — Beta-Blockers",
        url: "https://www.nhs.uk/medicines/atenolol/",
      },
    ],
  },
];

export const questions: Question[] = [
  {
    id: 1,
    topicSlug: "nerve-supply-of-the-hand",
    stem: "A 32-year-old carpenter presents to the emergency department after lacerating his wrist on a piece of sheet metal. On examination, he is unable to abduct his index finger and has loss of sensation over the palmar surface of his little finger. He can still oppose his thumb normally. Which muscle is most likely affected by the nerve injury?",
    options: [
      "Abductor pollicis brevis",
      "First dorsal interosseous",
      "Flexor pollicis longus",
      "Opponens pollicis",
      "Second lumbrical",
    ],
    correctAnswer: 1,
    explanation:
      "The inability to abduct the index finger indicates loss of first dorsal interosseous function, and the sensory loss over the little finger confirms an ulnar nerve injury. All interossei are supplied by the deep branch of the ulnar nerve. Thumb opposition is preserved because opponens pollicis is supplied by the median nerve, which is intact. The first dorsal interosseous is the primary abductor of the index finger at the MCP joint.",
  },
  {
    id: 2,
    topicSlug: "femoral-triangle",
    stem: "A 58-year-old woman requires emergency femoral artery catheterisation. The interventional radiologist palpates the femoral pulse at the mid-inguinal point and prepares to insert the catheter. Which structure lies immediately lateral to the femoral artery at this level?",
    options: [
      "Femoral vein",
      "Femoral canal",
      "Femoral nerve",
      "Great saphenous vein",
      "Pectineus muscle",
    ],
    correctAnswer: 2,
    explanation:
      "Within the femoral triangle, the structures are arranged lateral to medial as NAVY: Nerve, Artery, Vein, Y-fronts (lymphatics). The femoral nerve lies immediately lateral to the femoral artery. Importantly, the femoral nerve lies outside the femoral sheath, while the artery and vein are enclosed within it. The femoral vein lies medial to the artery, not lateral.",
  },
  {
    id: 3,
    topicSlug: "beta-blockers",
    stem: "A 45-year-old man with well-controlled asthma is admitted for an elective cholecystectomy. His preoperative ECG shows a heart rate of 102 bpm with atrial fibrillation. The anaesthetist wishes to start a beta-blocker for rate control. Which of the following agents is the most appropriate choice?",
    options: [
      "Propranolol",
      "Carvedilol",
      "Atenolol",
      "Labetalol",
      "Sotalol",
    ],
    correctAnswer: 2,
    explanation:
      "Atenolol is a cardioselective (beta-1 selective) beta-blocker, making it the safest choice for a patient with asthma. Propranolol, carvedilol, and labetalol are non-selective and block beta-2 receptors in bronchial smooth muscle, risking bronchospasm. Sotalol is also non-selective and additionally has class III antiarrhythmic properties. While no beta-blocker is completely safe in asthma, cardioselective agents are preferred when beta-blockade is indicated.",
  },
];
