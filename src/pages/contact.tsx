/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoArrowForward } from "react-icons/io5";
import { api } from "~/lib/api";
import { useToast } from "~/hooks/useToast";
import { Toaster } from "~/components/ui/toaster";
import { ToastAction } from "~/components/ui/Toast";
import PrimaryHeader from "~/components/PrimaryHeader";
import { base_keywords } from "~/lib/constants";

/* ─── Types ─────────────────────────────────────────────────── */
interface FormErrors {
  fullNames: string;
  email: string;
  message: string;
}

/* ─── Sub-components ─────────────────────────────────────────── */

/** Labelled text input with inline error */
function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label
        htmlFor={id}
        className="text-xs font-medium capitalize text-stone-500"
      >
        {label}
      </label>
      {children}
      {error && (
        <p className="text-xs text-red-500 mt-0.5">{error}</p>
      )}
    </div>
  );
}

/** Contact card (email + phone) */
function ContactCard({
  type,
  email,
  phone,
}: {
  type: string;
  email: string;
  phone: string;
  href?: string;
}) {
  return (
    <div className="group flex items-center justify-between gap-4 rounded-2xl border border-stone-300 bg-white p-6 transition-shadow hover:shadow-sm hover:border-primary">
      <div className="flex flex-col gap-1">
        <p className="text-xs font-medium uppercase tracking-widest text-primary">
          {type}
        </p>
        <a
          href={`mailto:${email}`}
          className="text-sm transition-colors hover:text-stone-900 hover:underline underline-offset-2"
        >
          {email}
        </a>
        <a
          href={`tel:${phone.replace(/\s/g, "")}`}
          className="text-sm text-stone-500 transition-colors hover:text-stone-800"
        >
          {phone}
        </a>
      </div>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/50 text-primary/50 transition-all group-hover:border-primary group-hover:text-primary rotate-45 group-hover:rotate-0 duration-500">
        <IoArrowForward className="-rotate-45 text-base" />
      </span>
    </div>
  );
}

/** Success confirmation screen */
function SuccessState() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-20 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/35 text-2xl text-stone-600">
        ✓
      </span>
      <div className="flex flex-col gap-2">
        <h3 className="font-serif text-3xl font-medium text-stone-800">
          Message sent!
        </h3>
        <p className="text-sm text-stone-500 max-w-xs">
          Thank you for reaching out. Our team will get back to you as soon as possible.
        </p>
      </div>
      <Link
        href="/"
        className="mt-2 rounded-lg border border-primary/35 px-5 py-2 text-sm text-stone-600 transition-colors hover:border-primary/75 hover:text-stone-900"
      >
        Back to home
      </Link>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */
const ContactPage = () => {
  const [fullNames, setFullNames] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [touched, setTouched] = React.useState({
    fullNames: false,
    email: false,
    message: false,
  });
  const [submitted, setSubmitted] = React.useState(false);

  const { toast } = useToast();

  /* ── Validation ── */
  const validate = React.useCallback(
    (values: { fullNames: string; email: string; message: string }) => {
      const e: FormErrors = { fullNames: "", email: "", message: "" };
      if (!values.fullNames || values.fullNames.length < 3)
        e.fullNames = "Full name must be at least 3 characters.";
      if (!values.email || !/\S+@\S+\.\S+/.test(values.email))
        e.email = "Please enter a valid email address.";
      if (!values.message || values.message.length < 10)
        e.message = "Message must be at least 10 characters.";
      return e;
    },
    []
  );

  const currentErrors = validate({ fullNames, email, message });
  const isFormValid = !Object.values(currentErrors).some(Boolean);

  const visibleErrors: FormErrors = {
    fullNames: touched.fullNames ? currentErrors.fullNames : "",
    email: touched.email ? currentErrors.email : "",
    message: touched.message ? currentErrors.message : "",
  };

  /* ── Mutation ── */
  const { isLoading, mutateAsync } = api.contactEmail.send.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      // Optionally redirect instead:
      // router.push("/thank-you");
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Please check your details and try again.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
        duration: 3000,
      });
    },
  });

  /* ── Submit ── */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Mark all fields as touched so errors surface
    setTouched({ fullNames: true, email: true, message: true });
    if (!isFormValid) return;
    mutateAsync({ email, message, fullNames });
  };

  return (
    <>
      <Head>
        <title>Contact Tazama Africa — Plan Your Dream Safari</title>
        <meta
          name="description"
          content="Contact Tazama Africa Safari to plan your dream Tanzania safari or Kilimanjaro trek. Our expert team is ready to help create your perfect adventure."
        />
        <meta
          name="keywords"
          content={`${base_keywords}, Tanzania safari contact, book safari Tanzania, safari planning, Kilimanjaro trek booking`}
        />
      </Head>

      <Toaster />

      {/* Hero banner */}
      <PrimaryHeader image="contact.webp" title="Contact Us" />

      <main className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 pb-24">

        {/* ── Section header ── */}
        <section className="mt-20 text-center">
          <span className="inline-block text-xs font-medium uppercase tracking-widest text-primary mb-4">
            Get in touch
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium leading-tight text-stone-800">
            We'd love to hear
            <br />
            <em className="italic text-primary font-normal">from you</em>
          </h2>
          <p className="mt-4 text-sm text-stone-500 max-w-md mx-auto leading-relaxed">
            Reach out for any enquiries, questions, or to start planning your
            dream safari or Kilimanjaro adventure.
          </p>
        </section>

        {/* ── Contact cards ── */}
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <ContactCard
            type="General enquiries"
            email="info@tazamaafricasafari.com"
            phone="+255 754 922 334"
          />
          <ContactCard
            type="Reservations"
            email="reservations@tazamaafricasafari.com"
            phone="+255 744 400 043"
          />
        </div>

        {/* ── Divider ── */}
        <hr className="my-14 border-stone-300" />

        {/* ── Form area ── */}
        <div className="mx-auto">
          {submitted ? (
            <SuccessState />
          ) : (
            <>
              <div className="mb-8">
                <h3 className="font-serif text-4xl font-medium text-stone-800">
                  Send us a message
                </h3>
                <p className="mt-1 text-sm text-stone-500 leading-relaxed">
                  Fill in the form below and our team will get back to you as
                  soon as possible.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-6"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4 w-full">
                  {/* Full name */}
                  <Field
                    label="Full name *"
                    id="fullNames"
                    error={visibleErrors.fullNames}
                  >
                    <input
                      id="fullNames"
                      type="text"
                      autoComplete="name"
                      placeholder="Jane Smith"
                      value={fullNames}
                      onChange={(e) => setFullNames(e.target.value)}
                      onBlur={() =>
                        setTouched((t) => ({ ...t, fullNames: true }))
                      }
                      className={`w-full rounded-full border px-4 py-3 text-sm text-stone-800 placeholder-stone-300 outline-none transition-colors focus:ring-2 focus:ring-primary ${visibleErrors.fullNames
                          ? "border-red-300 bg-red-50 focus:ring-red-100"
                          : "border-primary/35 bg-white focus:border-primary/75"
                        }`}
                    />
                  </Field>

                  {/* Email */}
                  <Field
                    label="Email address *"
                    id="email"
                    error={visibleErrors.email}
                  >
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="jane@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={() =>
                        setTouched((t) => ({ ...t, email: true }))
                      }
                      className={`w-full rounded-full border px-4 py-3 text-sm text-stone-800 placeholder-stone-300 outline-none transition-colors focus:ring-1 focus:ring-primary ${visibleErrors.email
                          ? "border-red-300 bg-red-50 focus:ring-red-100"
                          : "border-primary/35 bg-white focus:border-primary/75"
                        }`}
                    />
                  </Field>
                </div>

                {/* Message */}
                <Field
                  label="Message *"
                  id="message"
                  error={visibleErrors.message}
                >
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your safari dream…"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onBlur={() =>
                      setTouched((t) => ({ ...t, message: true }))
                    }
                    className={`w-full resize-y rounded-3xl border px-4 py-3 text-sm text-stone-800 placeholder-stone-300 outline-none transition-colors focus:ring-2 focus:ring-primary leading-relaxed ${visibleErrors.message
                        ? "border-red-300 bg-red-50 focus:ring-red-100"
                        : "border-primary/35 bg-white focus:border-primary/75"
                      }`}
                  />
                </Field>

                {/* Submit */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-medium text-white transition-all duration-200 ${isLoading
                        ? "bg-stone-400 cursor-not-allowed"
                        : "bg-primary hover:bg-primary/90 active:scale-[0.98]"
                      }`}
                  >
                    {isLoading ? (
                      <>
                        <svg
                          className="h-4 w-4 animate-spin"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="3"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                          />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        Send message
                        <IoArrowForward className="-rotate-45 text-base" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-stone-400 leading-snug">
                    We respect your privacy and never share your details.
                  </p>
                </div>
              </form>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default ContactPage;