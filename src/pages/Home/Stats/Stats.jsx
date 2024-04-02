import Heading from "../../../components/Heading/Heading";

const items = [
  {
    value: "100+",
    label: "Completed Projects",
  },
  {
    value: "95%",
    label: "Client Satisfaction Rate",
  },
  {
    value: "50+",
    label: "Happy Clients",
  },
  {
    value: "20+",
    label: "Awards Won",
  },
  {
    value: "5",
    label: "Years in Business",
  },
  {
    value: "10+",
    label: "Ongoing Projects",
  },
];

const Stats = () => {
  return (
    <section>
      <Heading
        title="Key Statistics"
        subtitle="Insights into Our Performance and Achievements"
      />
      <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
        {items.map((stat, index) => (
          <div key={index} className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-mons text-rose-600 font-bold leading-none lg:text-6xl">
              {stat.value}
            </p>
            <p className="text-sm font-vive sm:text-base">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
