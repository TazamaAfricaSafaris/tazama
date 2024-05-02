import Input from "~/components/ui/input";
import z from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "~/components/ui/label";
import { api } from "~/lib/api";
import { useRouter } from "next/router";
import { useToast } from "~/hooks/useToast";
import { ToastAction } from "~/components/ui/Toast";
import { sendGTMEvent } from "@next/third-parties/google";

export const customSafarisSchema = z.object({
  fullNames: z.string().min(1),
  email: z.string().min(1),
  phoneNumber: z.string().min(1),
  peopleInTheGroup: z.number(),
  date: z.string().min(1),
  howFar: z.string().optional(),
  additionalComments: z.string().optional(),
});

type ICustomSafarisSchema = z.infer<typeof customSafarisSchema>;
export default function CustomSafarisForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICustomSafarisSchema>({
    resolver: zodResolver(customSafarisSchema),
  });

  const router = useRouter();
  const { toast } = useToast();

  const { isLoading, mutateAsync } = api.CustomEmail.send.useMutation({
    onSuccess: () => {
      router.push("/thank-you");
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: `Try adding all the details and submit again`,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
        duration: 1500,
      });
    },
  });

  const onSubmit: SubmitHandler<ICustomSafarisSchema> = (data) => {
    try {
      sendGTMEvent({ event: "form submitted", value: "custom safari trip" });
      mutateAsync(data);
    } catch (cause) {
      console.log(cause);
    }
  };

  console.log(errors);

  return (
    <section
      className="mt-8 flex flex-col items-center justify-center px-5 "
      id="customTrip"
    >
      <form
        className=" mr-5 mt-5 flex w-full flex-col gap-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className="w-full  bg-primary py-5 text-center text-2xl text-white">
          Book Your Trip
        </h3>
        <div className="lg:flex lg:space-x-10">
          <div className=" lg:w-[50%]">
            <Label>Full Names*</Label>
            <Input
              type="text"
              // placeholder="Brighton Mboya"
              className="w-full"
              {...register("fullNames")}
            />
            {errors?.fullNames && (
              <p className="text-sm text-red-500">Full names is required</p>
            )}
          </div>

          <div className="mt-8 lg:mt-0  lg:w-[50%]">
            <Label>Email Address*</Label>
            <Input
              required
              type="email"
              className=""
              // placeholder="Enter your email address"
              {...register("email")}
            />
            {errors?.email && (
              <p className="text-sm text-red-500">Email is required</p>
            )}
          </div>
        </div>

        <div className="lg:flex lg:space-x-10 ">
          <div className="lg:w-[50%]">
            <Label>Phone Number*</Label>
            <Input
              required
              type="text"
              className=""
              // placeholder="+91 780 679 212"
              {...register("phoneNumber")}
            />
            {errors?.phoneNumber && (
              <p className="text-sm text-red-500">Phone number is required</p>
            )}
          </div>

          <div className="mt-8 lg:mt-0 lg:w-[50%]">
            <Label>How many people are in your group</Label>
            <Input
              required
              type="number"
              className=""
              // placeholder="5"
              {...register("peopleInTheGroup", { valueAsNumber: true })}
            />
            {errors?.peopleInTheGroup && (
              <p className="text-sm text-red-500">
                We would like to know how many people are in your safari
              </p>
            )}
          </div>
        </div>

        <div className="lg:flex lg:space-x-10">
          <div className="lg:w-[50%]">
            <Label>When do you want to travel?</Label>
            <Input
              required
              // type="date"
              // placeholder="5"
              {...register("date")}
              className=""
            />
            {errors?.date && (
              <p className="text-sm text-red-500">
                We would like to know the date you are travelling
              </p>
            )}
          </div>

          <div className="mt-8 lg:mt-0 lg:w-[50%]">
            <Label>Still researching /ready to book?</Label>
            <Input
              required
              // type="date"
              // placeholder="5"
              {...register("howFar")}
              className=""
            />
            {errors?.howFar && (
              <p className="text-sm text-red-500">This field is required</p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="">
            Additional Comments
          </label>
          <textarea
            className=" h-36  rounded-lg border-none px-4 py-3 shadow-sm placeholder:text-gray-300 focus:ring-[#A87133]"
            // placeholder="I would also want to go to Zanzibar as well"
            name="Message"
          ></textarea>
        </div>

        <div className="flex flex-col items-center">
          <button
            type="submit"
            disabled={isLoading}
            className="w-[200px] rounded-lg bg-[#A87133] px-4 py-2 text-white hover:border hover:border-[#A87133] hover:bg-transparent hover:text-[#A87133] disabled:bg-lighter"
          >
            Submit Form
          </button>
        </div>
      </form>
    </section>
  );
}
