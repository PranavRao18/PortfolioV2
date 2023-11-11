import React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";

function Contacts() {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => { 
        const { name, value } = e.target;

        setForm({...form, [name]:[value]})
    };
    const handleSubmit = (e) => { 
        e.preventDefault();
        setLoading(true);
        emailjs.send(
            'service_u3zm2ie',
            'template_jfd95cl',
            {
                from_name: form.name,
                to_name: 'Pranav',
                from_email: form.email,
                to_email: 'pranavrao3026@gmail.com',
                message: form.message,
                reply_to: form.email,
            },
            'm9YsBuIozkA2FvSzE'
            ).then(() => {
                setLoading(false);
                alert("Thank you for messaging, I'll reply soon :)");
                setForm({
                    name: '',
                    email: '',
                    message: '',
                })
            }, (error) => {
                setLoading(false)
                console.log(error);
                alert('Something went wrong, try again later')
            })
    }
    return (
        <div className="bg-[#505020] mt-100 w-full rounded-[30px] py-10 px-10 sm:px-40">
            <motion.div variants={fadeIn('right', 'spring', 0.2, 1)}>
                <p className={`${styles.sectionSubText} text-center`}>GET IN TOUCH</p>
                <h2 className={`${styles.sectionHeadText} text-center`}>Contact Me</h2>
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-12 flex flex-col gap-8"
                >
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Name</span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className="bg-[#202010] py-4 px-6 text-white rounded-lg outline-none focus:outline-none border-none font-medium"
                        ></input>
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Email</span>
                        <input
                            type="text"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="bg-[#202010] py-4 px-6 text-white rounded-lg outline-none focus:outline-none border-none font-medium"
                        ></input>
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Message</span>
                        <textarea
                            rows="7"
                            type="text"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What's your message?"
                            className="bg-[#202010] py-4 px-6 text-white rounded-lg outline-none focus:outline-none border-none font-medium"
                        ></textarea>
                    </label>
                    <div className="flex justify-center items-center">
                        <button
                            type="submit"
                            className="bg-tertiary py-3 px-8 outline-none w-fit text-[24px] text-white font-bold rounded-xl hover:scale-110"
                        >
                            {loading ? 'Sending...' : 'Send'}
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    )
}

export default SectionWrapper(Contacts, "contact");