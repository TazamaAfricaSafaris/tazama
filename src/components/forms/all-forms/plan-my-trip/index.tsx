import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogPortal,
} from "~/components/ui/dialog";
import PlanMyTripForm from "~/components/forms/all-forms/plan-my-trip/AllQuestions";
import posthog from "posthog-js";
import { useState } from "react";
import { raleway } from "~/pages/_app";

export default function PlanMyTrip() {
  const [dialopOpen, setDialopOpen] = useState(false);

  return (
    <Dialog onOpenChange={setDialopOpen} open={dialopOpen}>
      <DialogTrigger
        asChild
        className={` bg-[#A87133] px-2 font-raleway font-medium text-white`}
      >
        <Button
          className={`menu-trigger flex items-center gap-2
  rounded-md
          bg-[#A87133] px-2  text-white transition duration-200 ease-in-out md:gap-3 md:px-4 md:py-2`}
          onClick={() => {
            // sending the event that a user has opened up this form
            posthog.capture("opened-form", { property: "Plan My Trip Form" });
          }}
        >
          Plan My Trip
        </Button>
      </DialogTrigger>
      <DialogPortal>
        <DialogContent
          className={`h-screen bg-lightest font-raleway sm:max-w-[80%] lg:h-[70%] lg:w-[60%] ${raleway.variable}`}
          style={{
            fontFamily: raleway.variable,
          }}
        >
          <DialogHeader></DialogHeader>
          <PlanMyTripForm setDialogOpen={setDialopOpen} />
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
