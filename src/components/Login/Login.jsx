import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getToken, saveUser } from "../../api/auth";
import loginImg from "../../assets/login.svg";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signIn, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  // form submit handler
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      //2. User Login
      const result = await signIn(email, password);
      //5. get token
      await getToken(result?.user?.email);

      navigate(from, { replace: true });
      toast.success("Login Successful");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  // Handle Google Signin
  const handleGoogleSignIn = async () => {
    try {
      //2. User Registration using google
      const result = await signInWithGoogle();

      //4. save user data in database
      const dbResponse = await saveUser(result?.user);
      console.log(dbResponse);

      //5. get token
      await getToken(result?.user?.email);
      navigate(from, { replace: true });
      toast.success("Login Successful");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  return (
    <section className="bg-gray-50 min-h-screen flex box-border justify-center items-center">
      <Helmet>
        <title>EventiFy | Login</title>
      </Helmet>
      <div className="bg-gradient-to-r from-rose-100 to-amber-100 rounded-2xl flex max-w-5xl p-5 items-center">
        <div className="md:w-1/2 text-center font-mons p-8">
          <h2 className="font-bold font-vive text-4xl lg:text-5xl text-amber-600">
            Login
          </h2>
          <p className="text-sm mt-4 font-mons text-amber-600">
            If you already a member, Please Login.
          </p>

          <form
            onSubmit={handleSubmit}
            action=""
            className="flex flex-col gap-4"
          >
            <input
              className="p-2 mt-8 rounded-xl text-sm border"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl text-sm border w-full"
                type="password"
                name="password"
                id="password"
                placeholder="********"
                required
              />
            </div>
            <button
              className="bg-gradient-to-l from-rose-400 to-amber-300 text-white font-semibold py-2 rounded-xl hover:scale-105 duration-300 hover:bg-rose-600"
              type="submit"
            >
              Login
            </button>
          </form>
          <div className="mt-6  items-center text-gray-100">
            <hr className="border-gray-300" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-300" />
          </div>
          <button
            onClick={handleGoogleSignIn}
            className="bg-gradient-to-r from-rose-300 to-amber-200  text-black border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 hover:bg-rose-400 font-medium"
          >
            <svg
              className="mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="25px"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            Login with Google
          </button>

          <div className="mt-4 text-sm flex justify-between items-center container-mr">
            <p className="mr-3">Do not have an account? </p>
            <Link
              to="/signup"
              className="hover:border text-amber-900 font-semibold bg-gradient-to-r from-rose-300 to-amber-200 rounded-xl py-2 px-5 hover:scale-110"
            >
              Register
            </Link>
          </div>
        </div>
        <div className="md:block hidden w-1/2">
          <img
            className="rounded-2xl h-[380px] max-h-[1600px]"
            src={loginImg}
            alt="login form image"
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
