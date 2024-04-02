/* eslint-disable react/prop-types */
const Heading = ({ title, subtitle }) => {
  return (
    <div className="text-center text-amber-600 space-y-5 my-10 py-4 md:w-8/12 mx-auto">
      <h1 className="font-vive text-3xl md:text-5xl font-bold">{title}</h1>
      <div className="max-w-[200px] md:max-w-[350px] mx-auto h-1 bg-red-500 rounded-full" />
      <h4 className="font-light text-xl md:text-2xl text-neutral-500 mt-2">{subtitle}</h4>
    </div>
  );
};

export default Heading;
