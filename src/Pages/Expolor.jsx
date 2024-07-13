import { CgProfile } from "react-icons/cg";
import { FaMapLocationDot } from "react-icons/fa6";
import { FcMoneyTransfer } from "react-icons/fc";
import { PiMapPinAreaBold } from "react-icons/pi";
import { useLoaderData, useParams } from "react-router-dom";

const Expolor = () => {
  const Data = useLoaderData(); // All Data Shows  that

  const local = useParams(); // Jason Data Show the work
  console.log(Data, local);
  const logic = Data.find((dataid) => dataid?.id == local.id);

  const { image, area, location, price, segment_name } = logic;

  return (
    <div>
      <section className="bg-gray-100 text-gray-800">
        <div className="container flex flex-col-reverse mx-auto lg:flex-row">
          <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 bg-green-600 text-gray-50">
            <div className="flex space-x-2 sm:space-x-4">
              <svg
                xmlns={image}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <div className="space-y-2">
                <div className=" flex items-center gap-3 text-lg font-medium leading-snug">
                  <div className="text-3xl">
                    <PiMapPinAreaBold />{" "}
                  </div>
                  <div className="text-3xl">Area:{area}</div>
                </div>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <svg
                xmlns={image}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <div className="space-y-2 flex items-center gap-3">
                <div className="text-3xl">
                  <FaMapLocationDot />{" "}
                </div>
                <div className="text-3xl">Location:{location}</div>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <div className="space-y-2 flex items-center">
                <div className="text-3xl">
                  <FcMoneyTransfer />{" "}
                </div>
                <div className="text-3xl">Price:{price}</div>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <div className="space-y-2">
                <div className="gap-3 flex items-center">
                  <div className="text-3xl">
                    <CgProfile />
                  </div>
                  <div className="text-3xl">owner:{segment_name}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 xl:w-3/5 bg-green-100">
            <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
              <img
                src={image}
                alt=""
                className="rounded-lg shadow-lg bg-green-500 aspect-video sm:min-h-96"
              />
            </div>
          </div>
        </div>
      </section>
      <div>
        <div className="text-4xl mb-4 text-center mt-8">
          <h1>
            <span className="text-green-400">Our</span> Facalities
          </h1>
          <h2 className="text font-blod">Facilities That Set Them Apart</h2>
          <p className="text-2xl">
            Finding the perfect land goes beyond location. Imagine a plot
            boasting not just stunning scenery, but also facilities that elevate
            your experience. This could be an observatory offering stargazing
            nights, an on-site vineyard with tastings, or even a private hiking
            trail network. These unique features add an unforgettable layer to
            your land ownership, transforming it into a haven unlike any other.
            Stay tuned as we explore these hidden gems and the incredible
            facilities that make them shine! pen_spark tune share more_vert
          </p>
        </div>
      </div>
    </div>
  );
};

export default Expolor;
