import { createTRPCRouter, publicProcedure } from "../trpc";
import { Resend } from "resend";
import { planMyTripSchema } from "~/components/forms/all-forms/plan-my-trip/AllQuestions";
import PlanMyTripEmail from "~/components/emails/PlanMyTripEmail";
import posthog from "posthog-js";
import AppendNewLeads from "~/lib/google-sheets";
import { format } from "date-fns";
import { env } from "~/env";

const resend = new Resend(env.NEXT_PUBLIC_RESEND_KEY);
export const emailRouter = createTRPCRouter({
  send: publicProcedure.input(planMyTripSchema).mutation(async ({ input }) => {
    try {
      const response = await resend.emails.send({
        from: "info@tazamaafricasafari.com",
        to: "info@tazamaafricasafari.com",
        cc: ["jaff@tazamaafricasafari.com", "james@tazamaafricasafari.com"],
        subject: "New Form Enquiry",
        react: PlanMyTripEmail({
          tripType: input.tripType,
          addOns: input.addOns,
          planningProcess: input.planningProcess,
          numberOfGuests: input.numberOfGuests,
          budget: input.budget,
          dateofTravel: input.dateofTravel,
          additionalPlans: input.additionalPlans,
          mustSeePlans: input.mustSeePlans,
          additionalComments: input.additionalComments,
          firstName: input.firstName,
          lastName: input.lastName,
          email: input.email,
        }),
      });
      return AppendNewLeads(
        env.NEXT_PUBLIC_GOOGLE_SHEET_ID,
        "plan_my_trip_leads",
        [
          input.firstName || "",
          input.lastName || "",
          input.email || "",
          input.budget || "",
          input.numberOfGuests || "",
          input.tripType || "",
          input.addOns || "",
          input.planningProcess || "",
          input.mustSeePlans || "",
          input.dateofTravel || "",
          input.additionalComments || "",
          input.additionalPlans || "",
          format(new Date(), "PPP"),
        ],
      );
      // console.log("the Response", response);
      // return response;
    } catch (cause) {
      console.log(cause);
      posthog.capture("Email failed to get sent");
    }
  }),
});
