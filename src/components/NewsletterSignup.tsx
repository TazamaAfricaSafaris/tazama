const NewsletterSignup = () => {
  return (
    <div className="bg-[#F1EDE6] px-8 py-20 text-gray-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col justify-between md:flex-row">
          <h2 className="text-4xl ">Stay up to date</h2>
          <p className="font-now mt-3 w-96 text-left text-[#757371] md:text-2xl">
            Receive the latest news and updates.
          </p>
        </div>
        <form className="mt-20 space-y-6">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="w-full">
              <label htmlFor="first-name" className="font-now">
                First Name*
              </label>
              <input
                id="first-name"
                name="first-name"
                type="text"
                required
                className="font-now placeholder-font-now relative block w-full appearance-none border-b-2 border-gray-300 px-3 py-3 text-gray-500 text-gray-900 placeholder-gray-500 focus:border-[#A87133] focus:outline-none focus:ring-[#A87133] sm:text-sm"
              />
            </div>
            <div className="w-full">
              <label htmlFor="last-name" className="font-now">
                Last Name*
              </label>
              <input
                id="last-name"
                name="last-name"
                type="text"
                required
                className="font-now relative block w-full appearance-none border-b-2 border-gray-300 px-3 py-3 text-gray-500 text-gray-900 placeholder-gray-500 focus:border-[#A87133] focus:outline-none focus:ring-[#A87133] sm:text-sm"
              />
            </div>
            <div className="w-full sm:col-span-2 md:col-span-1">
              <label htmlFor="email-address" className="font-now">
                Email Address*
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                className="font-now relative block w-full appearance-none border-b-2 border-gray-300 px-3 py-3 text-gray-500 text-gray-900 placeholder-gray-500 focus:border-[#A87133] focus:outline-none focus:ring-[#A87133] sm:text-sm"
              />
            </div>
          </div>
          <div className="flex items-center">
            <input
              id="newsletter"
              name="newsletter"
              type="checkbox"
              className="checked-[#A87133] rounded-full rounded-full border-gray-300 text-[#A87133] focus:ring-[#A87133]"
              style={{
                width: 17.5,
                height: 17.5,
              }}
            />

            <label
              htmlFor="newsletter"
              className="font-now ml-3 text-xs font-medium text-gray-700 md:text-sm"
            >
              Sign up to receive newsletters and blog posts from Tazama Safaris.
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              required
              className="checked-[#A87133] rounded-full rounded-full border-gray-300 text-[#A87133] focus:ring-[#A87133]"
              style={{
                width: 17.5,
                height: 17.5,
              }}
            />

            <label
              htmlFor="consent"
              className="font-now ml-3 text-xs font-medium text-gray-700 md:text-sm"
            >
              I consent to my submitted data being collected and stored *
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="font-now group relative mt-8 flex justify-center rounded-md border border-transparent bg-[#A87133] px-10 py-4 text-sm text-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#A87133] focus:ring-offset-2"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSignup;
