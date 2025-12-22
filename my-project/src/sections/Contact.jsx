import { useState } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setStatus("Please fix the errors above.");
      return;
    }

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch(() => {
        setStatus("Failed to send message. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen relative bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center justify-center gap-16"
    >
      <ParticlesBackground />

      {/* Left side content */}
      <div className="flex-1 text-center md:text-left max-w-md">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-400 mb-8">
          Share your project details and ideas. I’ll get back to you soon.
        </p>
        <div className="space-y-3 text-gray-300">
          <p>
            📧 <span className="font-semibold">Email:</span>{" "}
            adarshkumar23724@gmail.com
          </p>
          <p>
            📍 <span className="font-semibold">Location:</span> Hyderabad, India
          </p>
        </div>
      </div>

      {/* Right side form */}
      <div className="flex-1 w-full max-w-lg">
        <form
          onSubmit={handleSubmit}
          className="bg-white/20 text-white rounded-2xl p-10 shadow-xl space-y-6 backdrop-blur-md"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Enter your name"
              required
            />
            {errors.name && <p className="text-red-300 text-sm">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Enter your email"
              required
            />
            {errors.email && (
              <p className="text-red-300 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Tell me about your project..."
              required
            />
            {errors.message && (
              <p className="text-red-300 text-sm">{errors.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-pink-500 hover:bg-pink-600 transition-colors font-semibold text-white shadow-md"
          >
            Send Message
          </button>

          {status && <p className="text-center mt-4 text-pink-500">{status}</p>}
        </form>
      </div>
    </section>
  );
}