/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable react/no-unescaped-entities */
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

  // Validate form on input change
  React.useEffect(() => {
    validateForm();
  }, [email, fullNames, message]);

  const validateForm = () => {
    const newErrors = {
      email: "",
      fullNames: "",
      message: "",
    };
    let isValid = true;

    // Validate email
    if (!email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    // Validate full names
    if (!fullNames) {
      newErrors.fullNames = "Full name is required";
      isValid = false;
    } else if (fullNames.length < 3) {
      newErrors.fullNames = "Name must be at least 3 characters";
      isValid = false;
    }

    // Validate message
    if (!message) {
      newErrors.message = "Message is required";
      isValid = false;
    } else if (message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      isValid = false;
    }

    setErrors(newErrors);
    setFormValid(isValid);
  };

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
      email,
      message,
      fullNames,
    });
  };

  return (
    <>
      <HeadSEO
        title="Contact Tazama Africa for your Dream Safari Experience"
        keywords={base_keywords}
      />
      <PrimaryHeader image="mount-kilimanjaro.webp" title="Contact Us" />
      <div className="mx-auto mt-14">
        <div className="text-center text-[#757371]">
          <p className="mx-auto mb-10 mt-3 max-w-4xl px-4 text-xl ">
            We'd love to hear from you. Simply fill in the form below or reach
            out directly to us through one of our contacts listed below.
          </p>

          <p className=" text-xl ">
            Email:&nbsp;
            <a
              href="mailto:info@tazamaafricasafari.com"
              className="hover:underline"
            >
              {" "}
              info@tazamaafricasafari.com
            </a>
          </p>
          <p className=" text-xl">
            Phone:&nbsp;
            <a href="tel:+255744400043" className="hover:underline">
              (255)744400043
            </a>
          </p>
          <p className="mt-10 text-lg md:text-xl">
            You can also send us a message by filling the form below
          </p>
        </div>

        <div className="mx-auto my-20 max-w-4xl px-4">
          <form
            className="mx-auto mt-8 flex w-full flex-col gap-8"
            onSubmit={onSubmit}
          >
            <div className="flex flex-col gap-10 mt-2">
              <div>
                <Input
                  required
                  type="text"
                  name="fullName"
                  value={fullNames}
                  label="Full Names*"
                  placeholder=""
                  onChange={(e) => setFullNames(e.target.value)}
                />
                {errors.fullNames && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullNames}</p>
                )}
              </div>

              <div>
                <Input
                  required
                  type="email"
                  name="email"
                  value={email}
                  label="Email Address*"
                  placeholder=""
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <Textarea
                  required
                  name="message"
                  value={message}
                  label="Message*"
                  onChange={(e) => setMessage(e.target.value)}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
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
              className={`w-fit rounded-lg ${isLoading ? "bg-primary/75" : "bg-primary"} px-4 py-2 text-white border hover:border-primary hover:bg-transparent hover:text-primary transition-all duration-300`}
            >
              {isLoading ? "Loading..." : "Submit Form"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
