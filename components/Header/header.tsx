"use client";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [homeOpen, setHomeOpen] = useState(false);
  const [showForm, setShowForm] = useState(false); // ✅ حالة لعرض الفورم

  return (
    <header className="relative w-full bg-[#EFF6FF] ">
      {/* Desktop split background */}
      <div className="absolute inset-0 flex hidden md:flex">
        <div className="w-[72%] bg-[#EFF6FF]" />
        <div className="w-[28%] bg-white" />
      </div>

      <div className="relative max-w-7xl mx-auto flex items-center justify-between py-3 px-4 md:px-6">
        {/* Tablet & Mobile */}
        <div className="flex items-center justify-between w-full md:hidden">
          <div className="flex items-center gap-4">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <Image src="/BURGER.png" alt="Menu" width={28} height={28} />
            </button>
            <Image src="/Logo.png" alt="Logo" width={100} height={28} />
          </div>

          <div className="flex items-center bg-white rounded-full w-[200px] h-[36px] px-3 shadow-sm">
            <input
              type="text"
              placeholder="Search in here"
              className="flex-1 bg-transparent outline-none placeholder:text-[#ADC2FF] text-[13px] font-[var(--font-dmsans)]"
            />
            <Image
              src="/search2.png"
              alt="Search Icon"
              width={18}
              height={18}
            />
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <Image
              src="/Logo.png"
              alt="Logo"
              width={163}
              height={44}
              priority
            />
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center gap-3 font-[var(--font-dmsans)] text-gray-800 text-[15px]">
              <Image
                src="/location.png"
                alt="Location Icon"
                width={18}
                height={18}
              />
              <span>St. Sanguin Number 40</span>
            </div>
            <div className="flex items-center gap-3 font-[var(--font-dmsans)] text-gray-800 text-[15px]">
              <Image src="/phone.png" alt="Phone Icon" width={18} height={18} />
              <span>+1234 - 4567 - 890</span>
            </div>

            {/* ✅ الزرار اللي بيفتح الفورم */}
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-[#3366FF] text-white px-5 py-2 rounded-full text-[15px] font-[var(--font-jakarta)] font-semibold tracking-[0.15em] hover:bg-blue-600 transition"
            >
              APPOINTMENT
            </button>
          </div>
        </div>
      </div>

      {/* ✅ الفورم */}
      {/* ✅ الفورم (منقول لآخر الصفحة + z أعلى) */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-[9999]">
          <div className="bg-white shadow-lg rounded-2xl p-6 w-[90%] md:w-[500px] relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-lg"
            >
              ✕
            </button>
            <h2 className="text-[#142349] text-xl font-bold mb-4 text-center">
              Book an Appointment
            </h2>
            <form className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-[#3366FF]"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-[#3366FF]"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-[#3366FF]"
              />
              <textarea
                placeholder="Your Message"
                rows={3}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-[#3366FF]"
              ></textarea>

              <button
                type="submit"
                className="bg-[#3366FF] text-white py-2 rounded-full font-semibold hover:bg-blue-600 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* الخط الكامل */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C2D1FF]" />

      {/* قائمة الموبايل */}
      {menuOpen && (
        <div className="md:hidden bg-[#EFF6FF] shadow-lg absolute top-full left-0 w-full z-50">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            {/* Home */}
            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="text-[#142349] font-[var(--font-jakarta)] font-bold text-[15px] pb-2 border-b border-gray-300"
            >
              Home
            </a>

            {/* About Us */}
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="text-[#142349] font-[var(--font-jakarta)] font-bold text-[15px] pb-2 border-b border-gray-300"
            >
              About Us
            </a>

            {/* Services → Provide Section */}
            <a
              href="#provide"
              onClick={() => setMenuOpen(false)}
              className="text-[#142349] font-[var(--font-jakarta)] font-bold text-[15px] pb-2 border-b border-gray-300"
            >
              Services
            </a>

            {/* Pages → Our Partners */}
            <a
              href="#ourPartners"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between w-full text-[#142349] font-[var(--font-jakarta)] font-bold text-[15px] cursor-pointer pb-2 border-b border-gray-300"
            >
              Pages
              <Image
                src="/arrow-down.png"
                alt="Pages Dropdown"
                width={14}
                height={14}
              />
            </a>

            {/* Blog */}
            <a
              href="#blog"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between w-full text-[#142349] font-[var(--font-jakarta)] font-bold text-[15px] cursor-pointer pb-2 border-b border-gray-300"
            >
              Blog
              <Image
                src="/arrow-down.png"
                alt="Blog Dropdown"
                width={14}
                height={14}
              />
            </a>

            {/* Contact → Footer */}
            <a
              href="#footer"
              onClick={() => setMenuOpen(false)}
              className="text-[#142349] font-[var(--font-jakarta)] font-bold text-[15px] pb-2 border-b border-gray-300"
            >
              Contact
            </a>

            <div className="flex flex-col space-y-2 mt-2">
              <div className="flex items-center gap-2 text-[#142349] font-[var(--font-dmsans)] text-[14px]">
                <Image
                  src="/location.png"
                  alt="Location Icon"
                  width={16}
                  height={16}
                />
                <span>St. Sanguin Number 40</span>
              </div>
              <div className="flex items-center gap-2 text-[#142349] font-[var(--font-dmsans)] text-[14px]">
                <Image
                  src="/phone.png"
                  alt="Phone Icon"
                  width={16}
                  height={16}
                />
                <span>+1234 - 4567 - 890</span>
              </div>
            </div>

            <button
              onClick={() => setShowForm(!showForm)} // ✅ نفس الوظيفة للموبايل
              className="bg-[#3366FF] text-white px-4 py-2 rounded-full text-[14px] font-[var(--font-jakarta)] font-semibold tracking-[0.1em] hover:bg-blue-600 transition w-fit mt-3 mx-auto"
            >
              APPOINTMENT
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
