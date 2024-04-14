"use client";
import React from "react";
import PlanMyTripEmail from "~/components/emails/PlanMyTripEmail";

import { Button } from "~/components/ui/button";
// import { api } from "~/utils/api";

const Index = () => {
  //   const emailRouter = api.subscriber.send.useMutation();
  //   const sendEmail = () => {
  //     try {
  //       emailRouter.mutateAsync();
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  return (
    <section>
      <PlanMyTripEmail
        tripType="Kilimanjaro"
        addOns="Memorable Experience"
        planningProcess="Ready to book"
        numberOfGuests="22"
        budget="8000+"
        dateofTravel="23/89/2021"
        additionalPlans="Not really"
        mustSeePlans="Serengeti"
        additionalComments="not at the moment"
        firstName="Brighton"
        lastName="Mboya"
        email="Brighton@gmail.com"
      />
      <div className="flex items-center justify-center">
        {/* <Button className="w-[100px]" onClick={sendEmail}>
          {emailRouter.isLoading ? "Sending..." : "Send"}
        </Button> */}
      </div>
    </section>
  );
};

export default Index;
