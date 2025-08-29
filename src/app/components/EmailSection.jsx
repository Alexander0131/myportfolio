"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      {/* Glow Background */}
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/30 to-transparent rounded-full h-80 w-80 z-0 blur-3xl absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>

      {/* Text + Socials */}
      <div className="z-10">
        <h5 className="text-xl font-bold text-textPrimary my-2">Let&apos;s Connect</h5>
        <p className="text-textSecondary mb-4 max-w-md">
          I&apos;m currently looking for new opportunities — my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll do my best to respond!
        </p>
        <div className="socials flex flex-row gap-4">
          <Link href="https://github.com/Alexander0131" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>

      {/* Contact Form */}
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-6">
              <label htmlFor="email" className="text-textPrimary block mb-2 text-sm font-medium">
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-background border border-border placeholder-textSecondary text-textPrimary text-sm rounded-lg block w-full p-2.5"
                placeholder="you@example.com"
              />
            </div>

            {/* Subject */}
            <div className="mb-6">
              <label htmlFor="subject" className="text-textPrimary block text-sm mb-2 font-medium">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-background border border-border placeholder-textSecondary text-textPrimary text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label htmlFor="message" className="text-textPrimary block text-sm mb-2 font-medium">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                required
                className="bg-background border border-border placeholder-textSecondary text-textPrimary text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-primary hover:bg-primary/80 text-white font-medium py-2.5 px-5 rounded-lg w-full transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
