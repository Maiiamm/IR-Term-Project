import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { getRecipeById, searchRecipes } from "./recipeSearch";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query((opts) => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),
  recipes: router({
    search: publicProcedure
      .input(
        z.object({
          query: z.string().default(""),
          pantry: z.array(z.string()).default([]),
          filters: z
            .object({
              diet: z.string().optional(),
              time: z.string().optional(),
              sort: z.enum(["match", "fast", "rating"]).optional(),
            })
            .default({}),
        }),
      )
      .query(({ input }) => searchRecipes(input.query, input.pantry, input.filters)),
    byId: publicProcedure.input(z.object({ id: z.string() })).query(({ input }) => getRecipeById(input.id)),
  }),
});

export type AppRouter = typeof appRouter;
