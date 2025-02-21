import Input from "~/components/ui/input";
import FormButton from "../../components/FormButton";
import QuestionWrapper from "../../components/QuestionWrapper";
import { Button } from "~/components/ui/button";
import { Dispatch, SetStateAction } from "react";
import { UseFormRegister } from "react-hook-form";
import { PlanMyTripType } from "./AllQuestions";
import { register } from "module";

interface QuestionProps {
  // register: UseFormRegister<PlanMyTripType>;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  setValue: any;
}

export function WelcomeNote({
  currentPage,
  setCurrentPage,
}: {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}) {
  return (
    <QuestionWrapper>
      <p className=" text-xl">Let's talk about your trip to Tanzania</p>
      <Button
        className=" mt-5 text-lg text-white"
        type="button"
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Start Now
      </Button>
    </QuestionWrapper>
  );
}

export function Question1({
  currentPage,
  setCurrentPage,
  setValue,
}: QuestionProps) {
  return (
    <QuestionWrapper>
      <label className="text-xl">
        What type of trip are you interested in?<sup>*</sup>
      </label>
      <div className=" mt-5 flex flex-col space-y-5">
        <FormButton
          name="tripType"
          value="safari"
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setValue={setValue}
        >
          Safari
        </FormButton>
        <FormButton
          name="tripType"
          value="kilimanjaro"
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setValue={setValue}
        >
          Kilimanjaro
        </FormButton>
        <FormButton
          name="tripType"
          value="both"
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setValue={setValue}
        >
          Both
        </FormButton>
      </div>
    </QuestionWrapper>
  );
}

export function Question2({
  currentPage,
  setCurrentPage,
  setValue,
}: QuestionProps) {
  return (
    <QuestionWrapper>
      <label className="text-xl">
        Would you like to add any of the following?<sup>*</sup>
      </label>
      <div className=" mt-5 flex flex-col space-y-5">
        <FormButton
          name="addOns"
          value="zanzibar"
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setValue={setValue}
        >
          Zanzibar
        </FormButton>
        <FormButton
          name="addOns"
          value="gorillaTracking"
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setValue={setValue}
        >
          Gorilla Tracking
        </FormButton>
        <FormButton
          name="addOns"
          value="chimpanzeeTracking"
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setValue={setValue}
        >
          {" "}
          Chimpanzee Tracking
        </FormButton>
      </div>
    </QuestionWrapper>
  );
}

export function Question3({
  currentPage,
  setCurrentPage,
  setValue,
}: QuestionProps) {
  return (
    <QuestionWrapper>
      <label className="text-xl">
        How far along are you along in your planning process?<sup>*</sup>
      </label>
      <div className=" mt-5 flex flex-col space-y-5">
        <FormButton
          name="planningProcess"
          value="stillResearching"
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setValue={setValue}
        >
          I'm still researching
        </FormButton>
        <FormButton
          name="planningProcess"
          value="readyToBook"
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setValue={setValue}
        >
          I'm ready to book
        </FormButton>
      </div>
    </QuestionWrapper>
  );
}

export function Question4({
  register,
}: {
  register: UseFormRegister<PlanMyTripType>;
}) {
  return (
    <QuestionWrapper>
      <label className="text-xl">How many people are in your group?</label>
      <sup>*</sup>

      <Input
        className="mt-5 py-[30px] lg:w-[500px]"
        label="Type your answer here... "
        {...register("numberOfGuests")}
      />
    </QuestionWrapper>
  );
}

export function Question5({
  currentPage,
  setCurrentPage,
  setValue,
}: QuestionProps) {
  return (
    <QuestionWrapper>
      <label className="text-xl">
        What kind of budget do you expect to spend per person on this trip in
        USD (excluding international flights)?<sup>*</sup>
      </label>
      <div className=" mt-5 flex flex-col space-y-5">
        <FormButton
          name="budget"
          value="3000-5000"
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setValue={setValue}
        >
          $3,000-5,000k
        </FormButton>
        <FormButton
          name="budget"
          value="5000-8000"
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setValue={setValue}
        >
          $5,000-8,000k
        </FormButton>
        <FormButton
          name="budget"
          value="8000+"
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setValue={setValue}
        >
          $8,000+
        </FormButton>
      </div>
    </QuestionWrapper>
  );
}

export function Question6({
  register,
}: {
  register: UseFormRegister<PlanMyTripType>;
}) {
  return (
    <QuestionWrapper>
      <label className="text-xl">
        Which dates are you looking to travel?<sup>*</sup>
      </label>
      <p className="pt-3 text-sm font-light">
        If you're not sure of the exact date, just give me a rough idea of when
        you want to go
      </p>

      <Input
        className="mt-5 py-[30px] lg:w-[500px]"
        label="Type your answer here... "
        {...register("dateofTravel")}
      />
    </QuestionWrapper>
  );
}

export function Question7({
  register,
}: {
  register: UseFormRegister<PlanMyTripType>;
}) {
  return (
    <QuestionWrapper>
      <label className="text-xl">
        Is there anything you would like to tell me about your plans<sup>*</sup>
      </label>
      <p className="pt-3 text-sm font-light">
        e.g Celebrating honeymoon, travelling with children, etc
      </p>

      <Input
        className="mt-5 py-[30px] lg:w-[500px]"
        label="Type your answer here... "
        {...register("additionalPlans")}
      />
    </QuestionWrapper>
  );
}

export function Question8({
  register,
}: {
  register: UseFormRegister<PlanMyTripType>;
}) {
  return (
    <QuestionWrapper>
      <label className="text-xl">
        Any Specific Wildlife or Experiences on your must-see list?<sup>*</sup>
      </label>

      <Input
        className="mt-5 py-[30px] lg:w-[500px]"
        label="Type your answer here... "
        {...register("mustSeePlans")}
      />
    </QuestionWrapper>
  );
}

export function Question9({
  register,
}: {
  register: UseFormRegister<PlanMyTripType>;
}) {
  return (
    <QuestionWrapper>
      <label className="text-xl">Additional comments or requests</label>

      <Input
        className="mt-5 py-[30px] lg:w-[500px]"
        label="Type your answer here... "
        {...register("additionalComments")}
      />
    </QuestionWrapper>
  );
}

export function ContactForm({
  register,
}: {
  register: UseFormRegister<PlanMyTripType>;
}) {
  return (
    <section className="font-raleway space-y-4">
      <h3 className="text-xl">
        Please provide me with your contact information
      </h3>
      <div>
        <label>First Name</label>
        <Input
          {...register("firstName")}
          className="mt-2 py-[30px] placeholder:text-gray-500 lg:w-[500px]"
        />
      </div>
      <div>
        <label>Last Name</label>
        <Input
          {...register("lastName")}
          className="mt-2 py-[30px] lg:w-[500px]"
        />
      </div>

      <div>
        <label>Email</label>
        <Input {...register("email")} className="mt-2 py-[30px] lg:w-[500px]" />
      </div>
    </section>
  );
}
