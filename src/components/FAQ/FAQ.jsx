import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Heading from "../Heading/Heading";

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/faqs")
      .then((res) => res.json())
      .then((data) => setFaqs(data));
  }, []);

  return (
    <div>
      <Heading
        title="Frequently Asked Questions"
        subtitle="Find Answers to Common Queries"
      />

      <div className="max-w-5xl container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <div className="space-y-4 text-center">
          {faqs.map((faq, index) => (
            <motion.details
              key={index}
              className="w-full border rounded-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <summary className="bg-gradient-to-r from-rose-50 to-amber-100 px-4 py-6 text-lg font-mons font-semibold text-amber-800 focus:outline-none border bottom-2 focus-visible:ri">
                {faq.question}
              </summary>
              <p className="px-4 font-mons py-6 pt-2 ml-4 -mt-2">
                {faq.answer}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
