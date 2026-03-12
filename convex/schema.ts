import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  topics: defineTable({
    slug: v.string(),
    title: v.string(),
    category: v.union(
      v.literal("anatomy"),
      v.literal("physiology"),
      v.literal("pathology")
    ),
    parentSlug: v.optional(v.string()),
    description: v.string(),
    contentPath: v.string(),
    status: v.union(v.literal("draft"), v.literal("published")),
    order: v.number(),
  })
    .index("by_slug", ["slug"])
    .index("by_category", ["category"])
    .index("by_status", ["status"]),

  questions: defineTable({
    topicSlug: v.string(),
    stem: v.string(),
    options: v.array(v.string()),
    correctIndex: v.number(),
    explanation: v.string(),
    difficulty: v.union(
      v.literal("easy"),
      v.literal("medium"),
      v.literal("hard")
    ),
    order: v.number(),
  }).index("by_topic", ["topicSlug"]),
});
