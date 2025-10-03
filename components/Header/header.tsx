import Image from "next/image";

export default function Header() {
  return (
    <header className="relative w-full">
      {/* Background split: 3/4 blue - 1/4 white */}
      <div className="absolute inset-0 flex">
        <div className="w-[71.5%] bg-[#EFF6FF]" /> {/* الأزرق */}
        <div className="w-[28.5%] bg-white" /> {/* الأبيض */}
      </div>

      <div className="relative max-w-7xl mx-auto flex items-center justify-between py-3 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/Logo.png" alt="Logo" width={163} height={44} />
        </div>

        {/* Right Side: Info + Appointment Button */}
        <div className="flex items-center">
          {/* Info */}
          <div className="hidden md:flex items-center space-x-3 text-sm text-gray-700 mr-6">
            <div className="flex items-center space-x-2 font-[var(--font-dmsans)] tracking-wide text-gray-800 text-[15px]">
              <Image
                src="/location.png"
                alt="Location Icon"
                width={18}
                height={18}
              />
              <span>St. Sanguin Number 40</span>
            </div>
            <div className="flex items-center space-x-2 font-[var(--font-dmsans)] tracking-wide text-gray-800 text-[15px]">
              <Image src="/phone.png" alt="Phone Icon" width={18} height={18} />
              <span>+1234 - 4567 - 890</span>
            </div>
          </div>

          {/* Appointment Button */}
          <button className="bg-[#3366FF] text-white px-5 py-2 rounded-full text-[15px] font-[var(--font-jakarta)] font-semibold tracking-[0.15em] hover:bg-blue-600 transition">
            APPOINTMENT
          </button>
        </div>
      </div>
    </header>
  );
}
