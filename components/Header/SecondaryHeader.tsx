import Image from "next/image";

export default function SecondaryHeader() {
  return (
    <div className="relative w-full">
      {/* Background split: 3/4 blue - 1/4 white */}
      <div className="absolute inset-0 flex">
        <div className="w-[71.5%] bg-[#EFF6FF]" /> {/* الأزرق */}
        <div className="w-[28.5%] bg-white" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-3">
        {/* Capsule Container */}
        <div className="flex items-center justify-between bg-[#D7F3FD] rounded-full px-6 py-2">
          {/* Navigation Links */}
          <nav className="flex items-center space-x-6">
            <a
              className="text-[#3366FF] font-[var(--font-jakarta)] font-bold text-[15px] hover:text-blue-600 transition"
              href="#"
            >
              Home
            </a>
            <a
              className="text-[#142349] font-[var(--font-jakarta)] font-bold text-[15px] hover:text-blue-600 transition"
              href="#"
            >
              About Us
            </a>
            <a
              className="text-[#142349] font-[var(--font-jakarta)] font-bold text-[15px] hover:text-blue-600 transition"
              href="#"
            >
              Services
            </a>
            <a
              className="text-[#142349] font-[var(--font-jakarta)] font-bold text-[15px] hover:text-blue-600 transition"
              href="#"
            >
              Pages
            </a>
            <div className="flex items-center space-x-1 cursor-pointer">
              <a
                className="text-[#142349] font-[var(--font-jakarta)] font-bold text-[15px] hover:text-blue-600 transition"
                href="#"
              >
                Blog
              </a>
              <span className="text-[#142349]">▼</span>
            </div>
            <a
              className="text-[#142349] font-[var(--font-jakarta)] font-bold text-[15px] hover:text-blue-600 transition"
              href="#"
            >
              Contact
            </a>
          </nav>

          {/* Search Box */}
          <div className="flex items-center bg-white rounded-full w-[304px] h-[43px] px-4 ml-6 shadow-sm">
            <input
              type="text"
              placeholder="Search in here"
              className="flex-1 bg-transparent outline-none placeholder:text-gray-600 text-[15px] font-[var(--font-dmsans)]"
            />
            <Image src="/search.png" alt="Search Icon" width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
