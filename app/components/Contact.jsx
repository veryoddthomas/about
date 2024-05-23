import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import PageSection from "./PageSection";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_ALPHA,
        process.env.NEXT_PUBLIC_BETA,
        {
          from_name: form.name,
          to_name: "Tom Zakrajsek",
          from_email: form.email,
          to_email: "tzakrajsek@gmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_GAMMA
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Me</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >

            {/* <button
            type='submit'
            className='bg-white py-3 px-8 rounded-xl outline-none w-fit text-tertiary font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button> */}

          <label className='flex flex-col'>
            {/* <span className='text-white font-medium mb-4'>Your Name</span> */}
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Your name here"
              className='bg-secondary-dark py-4 px-6 placeholder:text-secondarylight text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            {/* <span className='text-white font-medium mb-4'>Your email</span> */}
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Your email address here"
              className='bg-secondary-dark py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            {/* <span className='text-white font-medium mb-4'>Your Message</span> */}
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Message...'
              className='bg-secondary-dark py-4 px-6 placeholder:text-secondary text-primary-light rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className=' bg-secondary-dark py-3 px-8 rounded-xl w-fit text-primary-light font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

    </div>
  );
};

export default PageSection(Contact, "contact");
