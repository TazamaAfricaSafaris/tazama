"use client";
import React from "react";
import CustomSafarisEmail from "~/components/emails/CustomSafaris";
import PlanMyTripEmail from "~/components/emails/PlanMyTripEmail";
import { Button } from "~/components/ui/button";
import { api } from "~/lib/api";
import Email from "~/components/emails/LemoshoEmail";
const Index = () => {
  return (
    <section>
     

      {/* <CustomSafarisEmail
        fullNames="Brighton MBoya"
        phoneNumber="+250680321763"
        peopleInTheGroup={12}
        date="23/08/2123"
        howFar="Still researching"
        additionalComments="n/a"
        email="Brighton@gmail.com"
      /> */}
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
      {/* <div className="flex items-center justify-center">
        <Button className="w-[100px]" onClick={sendEmail}>
          {emailRouter.isLoading ? "Sending..." : "Send"}
        </Button>
      </div> */}
    </section>
  );
};

export default Index;
