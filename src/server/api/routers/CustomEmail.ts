import { createTRPCRouter, publicProcedure } from "../trpc";
import { Resend } from "resend";
import posthog from "posthog-js";
import { lemoshoRouteSchema } from "~/components/forms/all-forms/Lemosho";
import CustomSafarisEmail from "~/components/emails/CustomSafaris";
import AppendNewLeads from "~/lib/google-sheets";
import { env } from "~/env";
import { format } from "date-fns";

const resend = new Resend(env.NEXT_PUBLIC_RESEND_KEY);

export const CustomEmail = createTRPCRouter({
  send: publicProcedure
    .input(lemoshoRouteSchema)
    .mutation(async ({ input }) => {
      try {
        const response = await resend.emails.send({
          from: "james@tazamaafricasafari.com",
          to: "james@tazamaafricasafari.com",
          // cc: "jaff@tazamaafricasafari.com",
          subject: "Custom Safari Email",
          react: CustomSafarisEmail({
            email: input.email,
            fullNames: input.fullNames,
            phoneNumber: input.phoneNumber,
            peopleInTheGroup: input.peopleInTheGroup,
            date: input.date,
            howFar: input.howFar,
          }),
        });
        // console.log("the Response", response);
        // return response;

        return AppendNewLeads(env.NEXT_PUBLIC_GOOGLE_SHEET_ID, "Ad_leads", [
          input.fullNames || "",
          input.email || "",
          input.phoneNumber || "",
          input.peopleInTheGroup || "",
          input.date || "",
          input.howFar || "",
          input.additionalComments || "",
          format(new Date(), "PPP"),
          "CUSTOM SAFARI LEADS",
        ]);
      } catch (cause) {
        console.log(cause);
        posthog.capture("Email failed to get sent");
      }
    }),
});