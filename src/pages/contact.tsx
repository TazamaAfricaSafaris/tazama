import React, { ChangeEvent } from "react";
import PrimaryHeader from "~/components/PrimaryHeader";
import { Input } from "~/components/Form";
import HeadSEO from "~/components/ui/Head";
import posthog from "posthog-js";
import { base_keywords } from "~/lib/constants";
import { api } from "~/lib/api";
import { useRouter } from "next/router";
import { Toaster } from "~/components/ui/toaster";
import { useToast } from "~/hooks/useToast";
import { ToastAction } from "~/components/ui/Toast";

const ContactPage = () => {
  const [email, setEmail] = React.useState<string>("");
  const [fullNames, setFullNames] = React.useState("");

  const [message, setMessage] = React.useState<string>("");
  const router = useRouter();
  const { toast } = useToast();

  const { isLoading, mutateAsync } = api.contactEmail.send.useMutation({
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

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutateAsync({
      email: email,
      message: message,
      fullNames: fullNames,
    });
  };
  return (
    <>
      <Toaster />
      <HeadSEO
        title="Contact Tazama Africa for your Dream Safari Experience"
        keywords={base_keywords}
      />
      <PrimaryHeader image="contact.webp" title="Contact Us" />
      <div className="mx-auto mt-36 max-sm:mt-28">
        <div className="text-center">
          <p className="mx-auto mb-10 mt-3 max-w-4xl px-4 text-5xl max-sm:text-3xl leading-[3.7rem] font-serif text-primary">
            We'd love to hear from you. Simply fill in the form below or reach
            out directly to us through one of our contacts listed below.
          </p>

          <p className="text-2xl max-sm:text-lg">
            Email:&nbsp;
            <a href="mailto:info@tazamaafricasafari.com">info@tazamaafricasafari.com</a>
          </p>
          <p className="text-2xl mt-2 max-sm:text-lg">
            Phone:&nbsp;
            <a href="tel:+255744400043">
              (255)744400043
            </a>
          </p>
        </div>

        <div className="mx-auto my-20 max-w-4xl px-4">
          <h3 className="text-4xl text-primary">Contact Us</h3>

          <form
            // action="https://formsubmit.co/jaff@tazamaafricasafari.com"
            method="POST"
            className="mx-auto mt-8 flex w-full flex-col gap-8"
            onSubmit={onSubmit}
          >
            <Input
              required
              type="text"
              name="fullName"
              value={fullNames}
              label="Full Names*"
              placeholder="Enter your full Names"
              onChange={(e) => setFullNames(e.target.value)}
            />

            <Input
              required
              type="email"
              name="email"
              value={email}
              label="Email Address*"
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="flex w-full flex-col gap-2">
              <label htmlFor="message" className="text-[#484848]">
                Message*
              </label>
              <textarea
                className=" h-36 rounded-lg border-none px-4 py-3 shadow-sm placeholder:text-gray-300 focus:ring-[#A87133]"
                placeholder="Write your message here"
                required
                name="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            {/* Hidden components necessary for submititng the form to the email */}
            {/* <input
              type="hidden"
              name="_subject"
              value="New Tazama Trip Inquiry"
            ></input>
            <input
              type="hidden"
              name="_cc"
              value="james@tazamaafricasafari.com"
            ></input>
            <input
              type="hidden"
              name="_cc"
              value="info@tazamaafricasafari.com"
            ></input>
            <input
              type="hidden"
              name="_next"
              value="https://www.tazamaafricasafari.com/thank-you"
            ></input> */}

            <button
              type="submit"
              disabled={isLoading}
              onClick={() => {
                posthog.capture("contact-form", { property: "Contact form" });
              }}
              className=" w-[10rem] rounded-lg bg-[#A87133] px-4 py-2 text-white hover:border hover:border-[#A87133] hover:bg-transparent hover:text-[#A87133]"
            >
              Submit Form
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
