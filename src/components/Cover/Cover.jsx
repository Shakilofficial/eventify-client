/* eslint-disable react/prop-types */
import { Parallax } from "react-parallax";
import Heading from "../Heading/Heading";

const Cover = ({ img }) => {
  return (
    <section className="my-10">
      <Heading
        title="Snapshot of Latest Event"
        subtitle="TechForward 2024 successfully concluded its annual gathering last weekend, attracting over 5,000 attendees from around the globe."
      ></Heading>
      <Parallax bgImage={img} bgImageAlt="the cover" strength={-500}>
        <div className="flex items-center justify-center min-h-[550px] relative">
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
          <div className="text-center z-10">
            <div
              className="mx-auto px-4 py-12 max-w-5xl bg-black bg-opacity-70 rounded-lg shadow-xl"
              style={{ backdropFilter: "blur(5px)" }}
            >
              <div className="container flex flex-col justify-center p-4 mx-auto">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                  <img
                    className="object-cover w-full dark:bg-gray-500 aspect-square"
                    src="https://i.ibb.co/rMzQ6RT/15647371421474-01.jpg"
                  />
                  <img
                    className="object-cover w-full dark:bg-gray-500 aspect-square"
                    src="https://i.ibb.co/D5jhmhP/15647372361866-01.jpg"
                  />
                  <img
                    className="object-cover w-full dark:bg-gray-500 aspect-square"
                    src="https://i.ibb.co/8stJDMp/Corporate-Event-Planning.jpg"
                  />
                  <img
                    className="object-cover w-full dark:bg-gray-500 aspect-square"
                    src="https://i.ibb.co/QFjS49X/15647369476465-01.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default Cover;
