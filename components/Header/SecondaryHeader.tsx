// SecondaryHeader.tsx
import Image from "next/image";

export default function SecondaryHeader() {
  return (
    <div className="relative w-full hidden md:block">
      <div className="absolute inset-0 flex">
        <div className="w-[72%] bg-[#EFF6FF]" />
        <div className="w-[28%] bg-white" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-7">
        <div className="flex items-center justify-between bg-[#D7F3FD] rounded-full px-6 py-2">
          {/* Navigation Links */}
          <nav className="flex items-center space-x-12">
            <a className="px-4 py-2 text-[#3366FF] font-[var(--font-jakarta)] font-bold text-[15px] hover:text-blue-600 transition" href="#">Home</a>
            <a className="px-4 py-2 text-[#142349] font-[var(--font-jakarta)] font-bold text-[15px] hover:text-blue-600 transition" href="#">About Us</a>
            <a className="px-4 py-2 text-[#142349] font-[var(--font-jakarta)] font-bold text-[15px] hover:text-blue-600 transition" href="#">Services</a>

            <div className="flex items-center space-x-1 cursor-pointer px-4 py-2">
              <a className="text-[#142349] font-[var(--font-jakarta)] font-bold text-[15px] hover:text-blue-600 transition" href="#">Pages</a>
              <Image src="/arrow-down.png" alt="Dropdown" width={14} height={14} className="inline-block" />
            </div>

            <div className="flex items-center space-x-1 cursor-pointer px-4 py-2">
              <a className="text-[#142349] font-[var(--font-jakarta)] font-bold text-[15px] hover:text-blue-600 transition" href="#">Blog</a>
              <Image src="/arrow-down.png" alt="Dropdown" width={14} height={14} className="inline-block" />
            </div>

            <a className="px-4 py-2 text-[#142349] font-[var(--font-jakarta)] font-bold text-[15px] hover:text-blue-600 transition" href="#">Contact</a>
          </nav>

          {/* Search Box */}
          <div className="flex items-center bg-white rounded-full w-[304px] h-[43px] px-4 ml-6 shadow-sm">
            <input type="text" placeholder="Search in here" className="flex-1 bg-transparent outline-none placeholder:text-gray-600 text-[15px] font-[var(--font-dmsans)]" />
            <Image src="/search.png" alt="Search Icon" width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
