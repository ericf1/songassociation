import { createRouter } from "./context";
import { z } from "zod";

export const userRouter = createRouter().mutation("create", {
  input: z.object({
    name: z.string(),
  }),
  async resolve({ input, ctx }) {
    return await ctx.prisma.user.create({
      data: {
        name: input.name,
      },
    });
  },
});
