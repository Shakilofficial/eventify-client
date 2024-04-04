import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { getToken, saveUser } from "../../api/auth";
import { imageUpload } from "../../api/utils";
import signupImg from "../../assets/register.svg";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  //form submit handler
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];

    try {
      //upload image
      const imageData = await imageUpload(image);
      //user registration
      const result = await createUser(email, password);
      //save username & profile photo
      await updateUserProfile(name, imageData?.data?.display_url);
      console.log(result);
      //save user data in database
      const dbResponse = await saveUser(result?.user);
      console.log(dbResponse);
      //result.user.email

      //get token
      await getToken(result?.user?.email);
      navigate("/");
      toast.success("Successfully SignUp");
    } catch (err) {
      toast.error(err?.message);
    }
  };

  return (
    <section className="bg-gray-50 min-h-screen flex box-border justify-center items-center">
      <Helmet>
        <title>EventiFy | Sign Up</title>
      </Helmet>
      <div className="bg-gradient-to-l from-rose-100 to-amber-100 rounded-2xl flex max-w-5xl p-5 items-center">
        <div className="md:w-1/2 text-center font-mons p-8">
          <h2 className="font-bold font-vive text-4xl lg:text-5xl text-amber-600">
            Register
          </h2>
          <p className="text-sm mt-4 font-mons text-amber-600">
            New Here? Please Register now.
          </p>

          <form
            onSubmit={handleSubmit}
            action=""
            className="flex flex-col gap-4"
          >
            <input
              className="p-2 mt-8 rounded-xl text-sm border"
              type="text"
              name="name"
              placeholder="Name"
            />
            <input
              className="p-2 rounded-xl text-sm border"
              required
              type="file"
              id="image"
              name="image"
              accept="image/*"
            />
            <input
              className="p-2 rounded-xl text-sm border"
              type="email"
              name="email"
              placeholder="Email"
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl text-sm border w-full"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <button
              className="bg-gradient-to-l from-rose-400 to-amber-300 text-white font-semibold py-2 rounded-xl hover:scale-105 duration-300 hover:bg-rose-600"
              type="submit"
            >
              Register
            </button>
          </form>
          <div className="mt-4 text-sm flex justify-between items-center container-mr">
            <p className="mr-3">Already have an account?</p>
            <Link
              to="/login"
              className="hover:border text-amber-900 font-semibold bg-gradient-to-r from-rose-300 to-amber-200 rounded-xl py-2 px-5 hover:scale-110"
            >
              Login
            </Link>
          </div>
        </div>
        <div className="md:block hidden w-1/2">
          <img
            className="rounded-2xl h-[380px] max-h-[1600px]"
            src={signupImg}
            alt="login form image"
          />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
