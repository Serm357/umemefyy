import calcGif from "../assets/images/calculator-8495.gif";

const Features = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/*  Grid  */}
      <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
        <div className="lg:col-span-7">
          {/*  Grid  */}
          <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
            <div className="col-span-4">
              <img className="rounded-xl" src={calcGif} />
            </div>
            {/*  End Col  */}

            <div className="col-span-3">
              <img
                className="rounded-xl"
                src={calcGif}
                alt="calculator image"
              />
            </div>
            {/*  End Col  */}

            <div className="col-span-5">
              <img
                className="rounded-xl"
                src={calcGif}
                alt="calculator image"
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
              <h2 className="font-bold text-3xl lg:text-4xl text-headingColor dark:text-headingColor">
                App bora zaidi ya kufuatilia matumizi yako ya Umeme
              </h2>
              <p className="text-primaryColor">
                Tumia App hii kuokoa muda na mahesabu magumu juu ya matumizi
                yako ya umeme kwa usahihi bila hitilafu.
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
                <span className="text-sm sm:text-base text-primaryColor">
                  Jua
                  <span className="font-bold mx-1 text-green-600">
                    Units
                  </span>{" "}
                  unazo takiwa kulipa
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

                <span className="text-sm sm:text-base text-primaryColor">
                  Jua{" "}
                  <span className="font-bold mx-1 text-green-600">Pesa</span>
                  sahihi ya Kulipa
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

                <span className="text-sm sm:text-base text-primaryColor">
                  Pata Huduma zote bila malipo
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
  );
};
export default Features;
