import PlanMyTrip from "~/components/forms/all-forms/plan-my-trip";

export default function EnquireNow() {
  return (
    <div className="flex flex-col items-center justify-center bg-light py-20 text-center text-white">
      <h3 className="text-4xl tracking-wide">
        Craft your own memorable experience
      </h3>
      <p className="px-4 pt-5 text-lg">
        Have a conversation with our team so that we can create a more memorable
        trip for you.
      </p>
      <div className="mt-5 ">
        <PlanMyTrip />
      </div>
    </div>
  );
}
