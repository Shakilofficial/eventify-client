import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const BlogDetail = () => {
  const blog = useLoaderData();
  const { image, title, description, author_name, author_img, date } = blog;
  return (
    <div className="max-w-screen-xl font-mons mx-auto p-4 md:p-6">
      <Helmet>
        <title>EventiFy | Blog: {title} </title>
      </Helmet>
      <div className="overflow-hidden flex flex-col max-w-6xl mx-auto">
        <img
          className="w-full h-[600px]"
          src={image}
          alt="Sunset in the mountains"
        />
        <div className="relative -mt-24 md:-mt-20 lg:-mt-14 px-4 md:px-12 pt-5 md:pt-8 pb-16 bg-gradient-to-b from-rose-50 to-amber-50 m-10">
          <p className="font-semibold text-xl md:text-2xl text-amber-600 hover:text-rose-600 transition duration-500 ease-in-out inline-block">
            {title}
          </p>

          <div className="mt-4 font-mons flex items-center mb-3">
            <div className="flex items-center gap-1 mr-6">
              <img
                className="object-cover h-8 w-8 rounded-full"
                src={author_img}
                alt="Author Avatar"
              />
              <p className="mx-2 font-semibold">{author_name}</p>
            </div>
            <span className="font-semibold">{date}</span>
          </div>
          <p className="text-gray-900 text-justify">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
