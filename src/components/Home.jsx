import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* <label classNameName="swap  swap-rotate ml-5">
        <input type="checkbox" />
        <div classNameName="swap-on card bg-success w-52 h-52 flex items-center justify-center   text-2xl font-bold">
          Dim
        </div>
        <div classNameName="swap-off card bg-warning w-52 h-52 flex items-center justify-center text-2xl font-bold ">
          winter
        </div>
      </label> */}
      {/*   Hero */}
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/*  Grid   */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
              Start your journey with{" "}
              <span className="blue-text-gradient">Preline</span>
            </h1>
            <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
              Hand-picked professionals and expertly crafted components,
              designed for any kind of entrepreneur.
            </p>

            {/*   Buttons   */}
            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
              <Link
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                to="calculator"
              >
                Get started
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
              <Link
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                to="/about-us"
              >
                Contact Developer
              </Link>
            </div>
            {/*  End Buttons   */}

            {/*   Review   */}

            {/*  End Review  */}
          </div>
          {/*  End Col  */}

          <div className="relative ms-4">
            <img
              className="w-full rounded-md"
              src="/cal5.jpg"
              alt="Image Description"
            />
            <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0"></div>

            {/*  SVG  */}
            <div className="absolute bottom-0 start-0">
              <svg
                className="w-2/3 ms-auto h-auto text-white dark:text-gray-900"
                width="630"
                height="451"
                viewBox="0 0 630 451"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="531"
                  y="352"
                  width="99"
                  height="99"
                  fill="currentColor"
                />
                <rect
                  x="140"
                  y="352"
                  width="106"
                  height="99"
                  fill="currentColor"
                />
                <rect
                  x="482"
                  y="402"
                  width="64"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="433"
                  y="402"
                  width="63"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="384"
                  y="352"
                  width="49"
                  height="50"
                  fill="currentColor"
                />
                <rect
                  x="531"
                  y="328"
                  width="50"
                  height="50"
                  fill="currentColor"
                />
                <rect
                  x="99"
                  y="303"
                  width="49"
                  height="58"
                  fill="currentColor"
                />
                <rect
                  x="99"
                  y="352"
                  width="49"
                  height="50"
                  fill="currentColor"
                />
                <rect
                  x="99"
                  y="392"
                  width="49"
                  height="59"
                  fill="currentColor"
                />
                <rect
                  x="44"
                  y="402"
                  width="66"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="234"
                  y="402"
                  width="62"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="334"
                  y="303"
                  width="50"
                  height="49"
                  fill="currentColor"
                />
                <rect x="581" width="49" height="49" fill="currentColor" />
                <rect x="581" width="49" height="64" fill="currentColor" />
                <rect
                  x="482"
                  y="123"
                  width="49"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="507"
                  y="124"
                  width="49"
                  height="24"
                  fill="currentColor"
                />
                <rect
                  x="531"
                  y="49"
                  width="99"
                  height="99"
                  fill="currentColor"
                />
              </svg>
            </div>
            {/*  End SVG--> */}
          </div>
          {/*  End Col  */}
        </div>
        {/*  End Grid  */}

        {/*  Features  */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/*  Grid  */}
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
            <div className="lg:col-span-7">
              {/*  Grid  */}
              <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
                <div className="col-span-4">
                  <img className="rounded-xl" src="/cal4.jpg " />
                </div>
                {/*  End Col  */}

                <div className="col-span-3">
                  <img
                    className="rounded-xl"
                    src="/cal7.jpg "
                    alt="Image Description"
                  />
                </div>
                {/*  End Col  */}

                <div className="col-span-5">
                  <img
                    className="rounded-xl"
                    src="/cal3.jpg "
                    alt="Image Description"
                  />
                </div>
                {/*  End Col  */}
              </div>
              {/*  End Grid  */}
            </div>
            {/*  End Col  */}

            <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
              <div className="space-y-6 sm:space-y-8">
                {/*  Title  */}
                <div className="space-y-2 md:space-y-4">
                  <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
                    Collaborative tools to design user experience
                  </h2>
                  <p className="text-gray-500">
                    Use our tools to explore your ideas and make your vision
                    come true. Then share your work easily.
                  </p>
                </div>
                {/*  End Title  */}

                {/*  List  */}
                <ul role="list" className="space-y-2 sm:space-y-4">
                  <li className="flex space-x-3">
                    {/*  Solid Check  */}
                    <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-green-200 text-green-600 dark:bg-green-300 dark:text-blue-500">
                      <svg
                        className="flex-shrink-0 h-3.5 w-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {/*  End Solid Check  */}

                    <span className="text-sm sm:text-base text-gray-500">
                      <span className="font-bold">Less routine</span> – more
                      creativity
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    {/*  Solid Check  */}
                    <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full  bg-green-200 text-green-600 dark:bg-green-300 dark:text-blue-500">
                      <svg
                        className="flex-shrink-0 h-3.5 w-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {/*  End Solid Check  */}

                    <span className="text-sm sm:text-base text-gray-500">
                      Hundreds of thousands saved
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    {/*  Solid Check  */}
                    <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full  bg-green-200 text-green-600 dark:bg-green-300 dark:text-blue-500">
                      <svg
                        className="flex-shrink-0 h-3.5 w-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {/*  End Solid Check  */}

                    <span className="text-sm sm:text-base text-gray-500">
                      Scale budgets{" "}
                      <span className="font-bold">efficiently</span>
                    </span>
                  </li>
                </ul>
                {/*  End List  */}
              </div>
            </div>
            {/*  End Col  */}
          </div>
          {/*  End Grid  */}
        </div>
        {/*  End Features  */}

        {/*  Testimonials  */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/*  Grid  */}
          <div className="md:grid md:grid-cols-2 md:gap-10 lg:gap-16 md:items-center">
            <div className="hidden md:block mb-24 md:mb-0 sm:px-6">
              <div className="relative">
                <img
                  className="rounded-xl"
                  src="/user1.jpeg"
                  alt="user image"
                />

                {/*  SVG Element  */}
                <div className="absolute bottom-0 start-0 -z-[1] translate-y-10 -translate-x-14">
                  <svg
                    className="max-w-[10rem] h-auto text-slate-400 dark:text-slate-700"
                    width="696"
                    height="653"
                    viewBox="0 0 696 653"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="72.5" cy="29.5" r="29.5" fill="currentColor" />
                    <circle cx="171.5" cy="29.5" r="29.5" fill="currentColor" />
                    <circle cx="270.5" cy="29.5" r="29.5" fill="currentColor" />
                    <circle cx="369.5" cy="29.5" r="29.5" fill="currentColor" />
                    <circle cx="468.5" cy="29.5" r="29.5" fill="currentColor" />
                    <circle cx="567.5" cy="29.5" r="29.5" fill="currentColor" />
                    <circle cx="666.5" cy="29.5" r="29.5" fill="currentColor" />
                    <circle cx="29.5" cy="128.5" r="29.5" fill="currentColor" />
                    <circle
                      cx="128.5"
                      cy="128.5"
                      r="29.5"
                      fill="currentColor"
                    />
                    <circle
                      cx="227.5"
                      cy="128.5"
                      r="29.5"
                      fill="currentColor"
                    />
                    <circle
                      cx="326.5"
                      cy="128.5"
                      r="29.5"
                      fill="currentColor"
                    />
                    <circle
                      cx="425.5"
                      cy="128.5"
                      r="29.5"
                      fill="currentColor"
                    />
                    <circle
                      cx="524.5"
                      cy="128.5"
                      r="29.5"
                      fill="currentColor"
                    />
                    <circle
                      cx="623.5"
                      cy="128.5"
                      r="29.5"
                      fill="currentColor"
                    />
                    <circle cx="72.5" cy="227.5" r="29.5" fill="currentColor" />
                    <circle
                      cx="171.5"
                      cy="227.5"
                      r="29.5"
                      fill="currentColor"
                    />
                    <circle
                      cx="270.5"
                      cy="227.5"
                      r="29.5"
                      fill="currentColor"
                    />
                    <circle
                      cx="369.5"
                      cy="227.5"
                      r="29.5"
                      fill="currentColor"
                    />
                    <circle
                      cx="468.5"
                      cy="227.5"
                      r="29.5"
                      fill="currentColor"
                    />
                    <circle
                      cx="567.5"
                      cy="227.5"
                      r="29.5"
                      fill="currentColor"
                    />
                    <circle
                      cx="666.5"
                      cy="227.5"
                      r="29.5"
                      fill="currentColor"
                    />
                    <circle cx="29.5" cy="326.5" r="29.5" fill="currentColor" />
                    <circle
                      cx="128.5"
                      cy="326.5"
                      r="29.5"
                      fill="currentColor"
                    />
                    <circle
                      cx="227.5"
                      cy="326.5"
                      r="29.5"
                      fill="currentColor"
                    />
                    <circle
                      cx="326.5"
                      cy="326.5"
                      r="29.5"
                      fill="currentColor"
                    />
                    <circle
                      cx="425.5"
                      cy="326.5"
                      r="29.5"
                      fill="currentColor"
                    />
                    <circle
                      cx="524.5"
                      cy="326.5"
                      r="29.5"
                      fill="currentColor"
                    />
                    <circle
                      cx="623.5"
                      cy="326.5"
                      r="29.5"
                      fill="currentColor"
                    />
                    <circle cx="72.5" cy="425.5" r="29.5" fill="currentColor" />
                    <circle
                      cx="171.5"
                      cy="425.5"
                      r="29.5"
                      fill="currentColor"
                    />
                    <circle
                      cx="270.5"
                      cy="425.5"
                      r="29.5"
                      fill="currentColor"
                    />
                    <circle
                      cx="369.5"
                      cy="425.5"
                      r="29.5"
                      fill="currentColor"
                    />
                    <circle
                      cx="468.5"
                      cy="425.5"
                      r="29.5"
                      fill="currentColor"
                    />
                    <circle
                      cx="567.5"
                      cy="425.5"
                      r="29.5"
                      fill="currentColor"
                    />
                    <circle
                      cx="666.5"
                      cy="425.5"
                      r="29.5"
                      fill="currentColor"
                    />
                    <circle cx="29.5" cy="524.5" r="29.5" fill="currentColor" />
                    <circle
                      cx="128.5"
                      cy="524.5"
                      r="29.5"
                      fill="currentColor"
                    />
                    <circle
                      cx="227.5"
                      cy="524.5"
                      r="29.5"
                      fill="currentColor"
                    />
                    <circle
                      cx="326.5"
                      cy="524.5"
                      r="29.5"
                      fill="currentColor"
                    />
                    <circle
                      cx="425.5"
                      cy="524.5"
                      r="29.5"
                      fill="currentColor"
                    />
                    <circle
                      cx="524.5"
                      cy="524.5"
                      r="29.5"
                      fill="currentColor"
                    />
                    <circle
                      cx="623.5"
                      cy="524.5"
                      r="29.5"
                      fill="currentColor"
                    />
                    <circle cx="72.5" cy="623.5" r="29.5" fill="currentColor" />
                    <circle
                      cx="171.5"
                      cy="623.5"
                      r="29.5"
                      fill="currentColor"
                    />
                    <circle
                      cx="270.5"
                      cy="623.5"
                      r="29.5"
                      fill="currentColor"
                    />
                    <circle
                      cx="369.5"
                      cy="623.5"
                      r="29.5"
                      fill="currentColor"
                    />
                    <circle
                      cx="468.5"
                      cy="623.5"
                      r="29.5"
                      fill="currentColor"
                    />
                    <circle
                      cx="567.5"
                      cy="623.5"
                      r="29.5"
                      fill="currentColor"
                    />
                    <circle
                      cx="666.5"
                      cy="623.5"
                      r="29.5"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                {/*  End SVG Element  */}
              </div>
            </div>
            {/*  End Col  */}

            <div>
              {/*  Blockquote  */}
              <blockquote className="relative">
                <svg
                  className="absolute top-0 start-0 transform -translate-x-8 -translate-y-4 h-24 w-24 text-gray-200 dark:text-gray-700"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                    fill="currentColor"
                  />
                </svg>

                <div className="relative z-10">
                  <p className="text-xs font-semibold text-gray-500 tracking-wide uppercase mb-3 dark:text-gray-200">
                    Featured client
                  </p>

                  <p className="text-xl font-medium italic text-gray-800 md:text-2xl md:leading-normal xl:text-3xl xl:leading-normal dark:text-gray-200">
                    To say that switching to Preline has been life-changing is
                    an understatement. My business has tripled and I got my life
                    back.
                  </p>
                </div>

                <footer className="mt-6">
                  <div className="flex items-center">
                    <div className="md:hidden flex-shrink-0">
                      <img
                        className="h-12 w-12 rounded-full"
                        src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                        alt="Image Description"
                      />
                    </div>
                    <div className="ms-4 md:ms-0">
                      <div className="text-base font-semibold text-gray-800 dark:text-gray-200">
                        Nicole Grazioso
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Director Payments & Risk | Airbnb
                      </div>
                    </div>
                  </div>
                </footer>

                <div className="mt-8 lg:mt-14">
                  <Link
                    className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    to="calculator"
                  >
                    Get started
                    <svg
                      className="flex-shrink-0 w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </Link>
                </div>
              </blockquote>
              {/*  End Blockquote  */}
            </div>
            {/*  End Col  */}
          </div>
          {/*  End Grid  */}
        </div>
        {/*  End Testimonials  */}
      </div>
      {/*  End Hero  */}
    </>
  );
};
export default Home;
