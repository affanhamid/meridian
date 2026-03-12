import { query } from "./_generated/server";
import { v } from "convex/values";

export const getQuestionsByTopic = query({
  args: { topicSlug: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("questions")
      .withIndex("by_topic", (q) => q.eq("topicSlug", args.topicSlug))
      .collect();
  },
});

export const getAllQuestions = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("questions").collect();
  },
});
