"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaCheck } from "react-icons/fa6";
import Image from "next/image";

import abt1 from "../../public/assets/abt1.png";

const CollabForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);
    setSuccess(false);
    setErrors(null);

    const formData = new FormData(form.current);
    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const phone = formData.get("phoneNumber")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";
    const canWhatsapp = formData.get("canWhatsapp") ? "Yes" : "No";

    // Validasi manual
    if (name.length < 3) {
      setErrors("Nama minimal 3 karakter.");
      setLoading(false);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrors("Format email tidak valid.");
      setLoading(false);
      return;
    }
    const phoneRegex = /^[0-9+\s()-]{9,15}$/;
    if (!phoneRegex.test(phone)) {
      setErrors("Format nomor telepon tidak valid.");
      setLoading(false);
      return;
    }
    if (message.length < 10) {
      setErrors("Pesan harus minimal 10 karakter.");
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(
        "service_d4u39bb",
        "template_rihc5hq",
        {
          name,
          email,
          phoneNumber: phone,
          message,
          canWhatsapp,
          title: "New Collaboration Request",
        },
        "dxX11pDmRGyV1Q8pw"
      );
      setSuccess(true);
      form.current?.reset();
    } catch (error) {
      console.error(error);
      setErrors("Gagal mengirim pesan. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mt-20 px-5 py-5 md:py-24 rounded-lg flex-col md:flex-row flex justify-center md:gap-9 lg:gap-20 gap-14">
      <div className="sm:px-10 md:px-0">
        <Image
          src={abt1}
          alt="Kolaborasi PorluCoffee"
          className="rounded-2xl md:rounded-r-md md:rounded-l-4xl object-cover h-96 w-full md:h-[45rem] md:w-[40rem]"
        />
      </div>
      <div className="flex flex-col w-full md:max-w-xl lg:max-w-lg sm:px-10 md:px-0">
        <h2 className="text-4xl text-center md:text-left text-amber-950 font-outfit font-semibold mb-1">
          Jadi Partner Kami!
        </h2>
        <p className="font-quicksand text-center md:text-left text-sm md:text-base lg:text-xl text-gray-700 font-light mb-10">
          Mari menciptakan ide dan inovasi bersama PorluCoffee.
        </p>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-3 md:space-y-4 grow"
        >
          <input type="hidden" name="title" value="New Collaboration Request" />

          <div>
            <label className="block mb-1 md:mb-2 font-quicksand font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-2 py-1 md:py-2 lg:py-3 border-[0.2px] border-gray-400 font-poppins text-lg rounded-xl"
              autoComplete="off"
            />
          </div>
          <div>
            <label className="block mb-1 md:mb-2 font-quicksand font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-2 py-1 md:py-2 lg:py-3 border-[0.2px] border-gray-400 font-poppins text-lg rounded-xl"
              autoComplete="off"
            />
          </div>
          <div>
            <label className="block mb-1 md:mb-2 font-quicksand font-medium">
              Phone Number
            </label>
            <input
              type="text"
              name="phoneNumber"
              required
              className="w-full px-2 py-1 md:py-2 lg:py-3 border-[0.2px] border-gray-400 font-poppins text-lg rounded-xl"
              autoComplete="off"
            />
            <div className="flex items-center gap-2 mt-1">
              <span className="font-quicksand">
                Nomor ini aktif di WhatsApp
              </span>
              <input
                type="checkbox"
                name="canWhatsapp"
                value="Yes"
                id="canWhatsapp"
                className="accent-green-700"
              />
            </div>
          </div>
          <div>
            <label className="block mb-1 md:mb-2 font-quicksand font-medium">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full px-2 py-1 md:py-2 lg:py-3 border-[0.2px] border-gray-400 rounded-xl font-poppins text-lg resize-none"
              autoComplete="off"
            ></textarea>
          </div>

          <div>
            <p className="font-outfit text-sm md:text-base text-gray-800">
              Data dari form ini akan terkirim ke email PorluCoffee , anda akan mendapatkan
              info lebih lanjut setelah kami terima.
            </p>
            <ul className="font-outfit text-sm md:text-base text-amber-950">
              <li className="flex items-center gap-2">
                <FaCheck />
                <span>Pastikan email yang anda tulis aktif</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCheck />
                <span>
                  Gunakan nama lengkap (individu / komunitas / brand / dll)
                </span>
              </li>
            </ul>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-green-800 w-full text-white font-semibold font-poppins cursor-pointer transition px-6 py-2 rounded-lg hover:bg-green-700 disabled:bg-gray-400"
          >
            {loading ? "Mengirim..." : "Kirim"}
          </button>

          {errors && (
            <p className="mt-2 p-5 rounded-lg bg-red-700 text-gray-50 font-outfit font-bold text-center">
              {errors}
            </p>
          )}

          {success && (
            <p className="mt-2 p-5 rounded-lg bg-lime-800 text-gray-50 font-outfit font-bold text-center">
              Pesan berhasil dikirim!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default CollabForm;
