"use client";

import Link from "next/link";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import "./ControlForm.css";
interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const message = `📩 Новое сообщение:\n👤 Имя: ${data.name}\n📧 Email: ${data.email}\n💬 Сообщение: ${data.message}`;

    await fetch(
      "https://api.telegram.org/bot7848664544:AAFXDNHtZl8SBVqDWeHauz7a2o5nQsiq99A/getUpdates",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: 6536652171,
          text: message,
        }),
      }
    );

    reset();
    alert("Сообщение отправлено в Telegram ✅");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-[30px] font-bold mb-5 text-white">Contact me</h2>

        <div className="mb-3">
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Your name"
            className="w-full px-3 py-2 text-sm font-semibold text-black placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          />
        </div>

        <div className="mb-3 text-white">
          Email
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="email.."
            className="w-full px-3 py-2 text-sm text-black font-semibold placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          />
        </div>

        <div className="mb-3 text-white">
          Message
          <input
            {...register("message", { required: true })}
            type="text"
            placeholder="Your message.."
            className="w-full px-3 py-2 text-sm font-semibold text-black placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          />
        </div>

        <button
          type="submit"
          className="px-6 mt-5 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400"
        >
          Send a message
        </button>
      </form>
      <div className="Link">
        <Link
          href="https://wa.me/996708151952"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-600"
        >
          <FaWhatsapp />
        </Link>
        <Link
          href="https://t.me/@Toktobekova_Nora"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram />
        </Link>
      </div>
    </div>
  );
};

export default ContactForm;
