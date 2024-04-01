import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-amber-50 to-amber-100 py-12">
      <div className="container mx-auto px-4 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-5">
          {/* Logo */}
          <div className="col-span-1 md:col-span-3 lg:col-span-1">
            <div className="flex items-center justify-center lg:justify-start">
              <Logo className="h-8 w-auto text-amber-900" />
            </div>
            <p className="mt-4 text-gray-700">Bringing your events to life!</p>
          </div>

          {/* Newsletter */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-semibold text-amber-900">Subscribe</h3>
            <p className="mt-2 text-gray-700">
              Stay updated with our latest events!
            </p>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-amber-500"
              />
              <button className="mt-2 w-full bg-amber-500 text-white py-2 rounded-md hover:bg-amber-600 transition duration-300 focus:outline-none focus:bg-amber-600">
                Sign Up
              </button>
            </form>
          </div>

          {/* Company Links */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-semibold text-amber-900">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-amber-900 transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-amber-900 transition duration-300"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-amber-900 transition duration-300"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-semibold text-amber-900">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-amber-900 transition duration-300"
                >
                  Contact Information
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-amber-900 transition duration-300"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-amber-900 transition duration-300"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-300 pt-8 flex flex-col items-center md:flex-row md:justify-between md:items-center">
          <p className="text-sm text-gray-700">
            &copy; {new Date().getFullYear()} Eventify. All Rights Reserved.
          </p>
          <ul className="flex space-x-6 mt-4 md:mt-0">
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-amber-900 transition duration-300"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-amber-900 transition duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-amber-900 transition duration-300"
              >
                Cookies Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
