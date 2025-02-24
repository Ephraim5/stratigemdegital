import React, { useEffect ,useState } from "react";
import { motion } from "framer-motion";
import { styles } from "./styles";
import { EarthCanvas, StarsCanvas } from "./components/canvas";
import { slideIn } from "./utils/motion";
import sendMail from "./components/Mail";

export default function About() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [business, setBusiness] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("started")
    setLoading(true);
    const response =await  sendMail(name, email, phone, business, message);
    console.log(response);
    setName("");
    setEmail("");
    setBusiness("");
    setMessage("");
    setPhone("");
    setLoading(false);
    setIsOpen(true);
    console.log("ended")
    
  };

  return (
    <div className='relative p-10 z-0 bg-[rgb(195,239,252)] flex-1 w-full h-fit overflow-hidden'>
      <StarsCanvas />
      <WriteUp />
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="bg-[rgb(195,239,252)] rounded-2xl shadow-lg p-6 w-80 flex flex-col items-center"
          >
            <div className="w-16 h-16 bg-green-100 flex items-center justify-center rounded-full mb-4 ">
              ✅
            </div>
            <h2 className="text-xl font-semibold text-gray-800">Success!</h2>
            <p className="text-gray-600 text-center mt-2">Your action was completed successfully.</p>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-5 px-6 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition"
            >
              Done
            </button>
          </motion.div>
        </div>
      )}
      <Contact handleSubmit={handleSubmit} name={name} setName={setName} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} business={business} setBusiness={setBusiness} message={message} setMessage={setMessage} loading={loading} />
    </div>
  );
}

function Contact({ handleSubmit, name, setName, phone, setPhone, email, setEmail, business, setBusiness, message, setMessage, loading }) {
  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden bg-[rgb(195,239,252)]'>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <h3 className={styles.sectionHeadText}>Contact Us</h3>
        <p className={`${styles.sectionSubText} font-extrabold text-white`}>Let’s Launch Your Digital Strategy</p>
        <p className='text-cyan-50 mt-2'>Have questions or ready to get started? Our team is here to help. Fill out the form below, and we’ll get back to you within 24 hours.</p>

        <form className='mt-12 flex flex-col gap-8' onSubmit={handleSubmit}>
          <label className='flex flex-col z-20'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder="What's your good name?" className='bg-tertiary py-4 px-6 text-white rounded-lg outline-none border-none font-medium' />
          </label>
          <label className='flex flex-col z-20'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="What's your email?" className='bg-tertiary py-4 px-6 text-white rounded-lg outline-none border-none font-medium' />
          </label>
          <label className='flex flex-col z-20'>
            <span className='text-white font-medium mb-4'>Your Phone Number</span>
            <input type='tel' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="What's your phone number?" className='bg-tertiary py-4 px-6 text-white rounded-lg outline-none border-none font-medium' />
          </label>
          <label className='flex flex-col z-20'>
            <span className='text-white font-medium mb-4'>Your Business Website</span>
            <input type='text' value={business} onChange={(e) => setBusiness(e.target.value)} placeholder="What's your Business Website?" className='bg-tertiary py-4 px-6 text-white rounded-lg outline-none border-none font-medium' />
          </label>
          <label className='flex flex-col z-20'>
            <span className='text-white font-medium mb-4'>Service Interested In</span>
            <textarea rows={7} value={message} onChange={(e) => setMessage(e.target.value)} placeholder='What Service are you interested in?' className='bg-tertiary py-4 px-6 text-white rounded-lg outline-none border-none font-medium' />
          </label>
          <button type='submit' className='bg-tertiary py-3 px-8 rounded-xl text-white font-bold shadow-md cursor-pointer z-20'>
            {loading ? "Loading..." : "Contact Us"}
          </button>
        </form>
      </motion.div>
      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas style={{ pointerEvents: "none" }} />
      </motion.div>
    </div>
  );
}

function WriteUp() {
  return (<div className='xl:mt-12 overflow-hidden bg-[rgb(195,239,252)]'>
    <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl w-full'>
      <h3 className={`${styles.sectionHeadText}`}>About Us</h3>
      <p className={`${styles.sectionSubText} font-extrabold text-white`} > Letâ€™s Launch Your Digital Strategy      </p>
    <p className={` ${styles.sectionSubText}`} > Have questions or ready to get started? Our team is here to help. Fill out the form below, and weâ€™ll get back to you within 24 hours.</p>
    </motion.div ></div >);
}
