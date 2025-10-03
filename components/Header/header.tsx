"use client";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [homeOpen, setHomeOpen] = useState(false);

  return (
    <header className="relative w-full bg-[#EFF6FF] md:bg-transparent">
      {/* Desktop split background */}
      <div className="absolute inset-0 flex hidden md:flex">
        <div className="w-[71.5%] bg-[#EFF6FF]" />
        <div className="w-[28.5%] bg-white" />
      </div>

      <div className="relative max-w-7xl mx-auto flex items-center justify-between py-3 px-4 md:px-6">
        {/* Tablet & Mobile: Hamburger + Logo + Search */}
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
            <Image src="/search2.png" alt="Search Icon" width={18} height={18} />
          </div>
        </div>

        {/* Desktop: Logo left, Info + Appointment right */}
        <div className="hidden md:flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <Image src="/Logo.png" alt="Logo" width={163} height={44} priority />
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center gap-3 font-[var(--font-dmsans)] text-gray-800 text-[15px]">
              <Image src="/location.png" alt="Location Icon" width={18} height={18} />
              <span>St. Sanguin Number 40</span>
            </div>
            <div className="flex items-center gap-3 font-[var(--font-dmsans)] text-gray-800 text-[15px]">
              <Image src="/phone.png" alt="Phone Icon" width={18} height={18} />
              <span>+1234 - 4567 - 890</span>
            </div>
            <button className="bg-[#3366FF] text-white px-5 py-2 rounded-full text-[15px] font-[var(--font-jakarta)] font-semibold tracking-[0.15em] hover:bg-blue-600 transition">
              APPOINTMENT
            </button>
          </div>
        </div>
      </div>

      {/* الخط الكامل من أول الصفحة لآخرها */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C2D1FF]" />

      {menuOpen && (
        <div className="md:hidden bg-[#EFF6FF] shadow-lg absolute top-full left-0 w-full z-50">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            {/* Home dropdown مفتوح تلقائي */}
            <div>
              <button
                onClick={() => setHomeOpen(!homeOpen)}
                className="flex items-center justify-between w-full text-[#142349] font-[var(--font-jakarta)] font-bold text-[15px] pb-2 border-b border-gray-300"
              >
                Home
                <Image
                  src="/arrow-down.png"
                  alt="Dropdown"
                  width={14}
                  height={14}
                  className={`transition-transform duration-200 ${
                    homeOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {/* القايمة الفرعية تظهر تلقائي */}
              {homeOpen && (
                <div className="ml-6 mt-2 flex flex-col space-y-2">
                  <a href="#" className="text-sm text-gray-700 hover:text-blue-600">
                    Homepage 1
                  </a>
                  <a href="#" className="text-sm text-gray-700 hover:text-blue-600">
                    Homepage 2
                  </a>
                </div>
              )}
            </div>

            <a href="#" className="text-[#142349] font-[var(--font-jakarta)] font-bold text-[15px] pb-2 border-b border-gray-300">
              About Us
            </a>
            <a href="#" className="text-[#142349] font-[var(--font-jakarta)] font-bold text-[15px] pb-2 border-b border-gray-300">
              Services
            </a>

            {/* Pages dropdown */}
            <div className="flex items-center justify-between w-full text-[#142349] font-[var(--font-jakarta)] font-bold text-[15px] cursor-pointer pb-2 border-b border-gray-300">
              Pages
              <Image src="/arrow-down.png" alt="Pages Dropdown" width={14} height={14} />
            </div>

            {/* Blog dropdown */}
            <div className="flex items-center justify-between w-full text-[#142349] font-[var(--font-jakarta)] font-bold text-[15px] cursor-pointer pb-2 border-b border-gray-300">
              Blog
              <Image src="/arrow-down.png" alt="Blog Dropdown" width={14} height={14} />
            </div>

            <a href="#" className="text-[#142349] font-[var(--font-jakarta)] font-bold text-[15px] pb-2 border-b border-gray-300">
              Contact
            </a>

            {/* Location & Phone */}
            <div className="flex flex-col space-y-2 mt-2">
              <div className="flex items-center gap-2 text-[#142349] font-[var(--font-dmsans)] text-[14px]">
                <Image src="/location.png" alt="Location Icon" width={16} height={16} />
                <span>St. Sanguin Number 40</span>
              </div>
              <div className="flex items-center gap-2 text-[#142349] font-[var(--font-dmsans)] text-[14px]">
                <Image src="/phone.png" alt="Phone Icon" width={16} height={16} />
                <span>+1234 - 4567 - 890</span>
              </div>
            </div>

            {/* Appointment button أصغر */}
            <button className="bg-[#3366FF] text-white px-4 py-2 rounded-full text-[14px] font-[var(--font-jakarta)] font-semibold tracking-[0.1em] hover:bg-blue-600 transition w-fit mt-3 mx-auto">
              APPOINTMENT
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
