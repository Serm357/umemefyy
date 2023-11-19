const PopOver = () => {
  return (
    <>
      {/* <!-- User --> */}
      <div class="hs-tooltip inline-block [--trigger:hover] sm:[--placement:right]">
        <div class="hs-tooltip-toggle max-w-xs p-3 flex items-center gap-x-3 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-slate-900 dark:border-gray-700">
          <img
            class="inline-block h-9 w-9 rounded-full"
            src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
            alt="Image Description"
          />

          {/* <!-- User Content --> */}
          <div class="grow">
            <h4 class="font-semibold text-sm text-gray-800 dark:text-white">
              Amanda Harvey
            </h4>
            <p class="text-sm text-gray-800 md:text-gray-500 dark:text-white md:dark:text-gray-500">
              amanda@email.com
            </p>
          </div>
          {/* <!-- End User Content --> */}

          {/* <!-- Popover Content --> */}
          <div
            class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible hidden opacity-0 transition-opacity inline-block absolute invisible z-10 max-w-xs w-full bg-white border border-gray-100 text-start rounded-xl shadow-md after:absolute after:top-0 after:-start-4 after:w-4 after:h-full dark:bg-gray-800 dark:border-gray-700"
            role="tooltip"
          >
            {/* <!-- Header --> */}
            <div class="py-3 px-4 border-b border-gray-200 dark:border-gray-700">
              <div class="flex items-center gap-x-3">
                <img
                  class="flex-shrink-0 inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-gray-800"
                  src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
                  alt="Image Description"
                />
                <div class="grow">
                  <h4 class="font-semibold text-gray-800 dark:text-white">
                    Amanda Harvey
                    <span class="ms-0.5 inline-flex items-center align-middle gap-x-1.5 py-0.5 px-1.5 rounded-md text-[11px] font-medium bg-gray-800 text-white dark:bg-white dark:text-gray-800">
                      PRO
                    </span>
                  </h4>
                  <p class="text-sm text-gray-500">Storyteller</p>
                </div>
              </div>
            </div>
            {/* <!-- End Header --> */}

            {/* <!-- List --> */}
            <ul class="py-3 px-4 space-y-1">
              <li>
                <div class="inline-flex items-center gap-x-3 text-sm text-gray-800 dark:text-neutral-200">
                  <svg
                    class="flex-shrink-0 w-4 h-4 text-gray-600 dark:text-neutral-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                    <path d="M10 6h4" />
                    <path d="M10 10h4" />
                    <path d="M10 14h4" />
                    <path d="M10 18h4" />
                  </svg>
                  Pixeel Ltd.
                </div>
              </li>

              <li>
                <div class="inline-flex items-center gap-x-3 text-sm text-gray-800 dark:text-neutral-200">
                  <svg
                    class="flex-shrink-0 w-4 h-4 text-gray-600 dark:text-neutral-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                    <path d="M12 18h.01" />
                  </svg>
                  (892) 312-5483
                </div>
              </li>

              <li>
                <div class="inline-flex items-center gap-x-3 text-sm text-gray-800 dark:text-neutral-200">
                  <svg
                    class="flex-shrink-0 w-4 h-4 text-gray-600 dark:text-neutral-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  amanda@email.com
                </div>
              </li>
            </ul>
            {/* <!-- End List --> */}

            {/* <!-- Footer --> */}
            <div class="py-2 px-4 flex justify-between items-center bg-gray-100 dark:bg-gray-800">
              <a
                class="inline-flex items-center gap-x-1.5 text-xs text-gray-500 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                <svg
                  class="flex-shrink-0 w-3 h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                  <line x1="4" x2="4" y1="22" y2="15" />
                </svg>
                Flag
              </a>

              <button
                type="button"
                class="py-1.5 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                Follow
              </button>
            </div>
            {/* <!-- End Footer --> */}
          </div>
          {/* <!-- End Popover Content --> */}
        </div>
      </div>
      {/* <!-- End User --> */}
    </>
  );
};
export default PopOver;
