import { createTRPCRouter, publicProcedure } from "../trpc";
import z from "zod";
import { Resend } from "resend";

export const planMyTrip = createTRPCRouter({
  record: publicProcedure
    .input(
      z.object({
        tripType: z.string().optional(),
        addOns: z.string().optional(),
        planningProcess: z.string().optional(),
        numberOfGuests: z.string().optional(),
        budget: z.string().optional(),
        dateofTravel: z.string().optional(),
        additionalPlans: z.string().optional(),
        mustSeePlans: z.string().optional(),
        additionalComments: z.string().optional(),
        firstName: z.string().optional(),
        lastName: z.string().optional(),
        email: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      try {
        const newTrip = await ctx.db.planMyTrip.create({
          data: input,
        });
        return newTrip;
      } catch (cause) {
        console.log(cause);
      }
    }),
});
