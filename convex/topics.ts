import { query } from "./_generated/server";
import { v } from "convex/values";

export const getAllTopics = query({
  args: {},
  handler: async (ctx) => {
    const topics = await ctx.db
      .query("topics")
      .withIndex("by_status", (q) => q.eq("status", "published"))
      .collect();
    return topics.sort((a, b) => {
      if (a.category !== b.category) return a.category.localeCompare(b.category);
      return a.order - b.order;
    });
  },
});

export const getTopicBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("topics")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();
  },
});

export const getTopicsByCategory = query({
  args: {
    category: v.union(
      v.literal("anatomy"),
      v.literal("physiology"),
      v.literal("pathology")
    ),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("topics")
      .withIndex("by_category", (q) => q.eq("category", args.category))
      .collect();
  },
});
