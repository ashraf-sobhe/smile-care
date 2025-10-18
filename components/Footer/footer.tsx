"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#C7F0FD] py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        {/* ====== Desktop Version ====== */}
        <div className="hidden md:flex flex-col gap-6">
          {/* اللوجو */}
          <Image
            src="/Logo.png"
            alt="Logo"
            width={160}
            height={60}
            className="object-contain"
          />

          {/* الصف اللي فيه الايميل والايقونات */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Email Input */}
            <div className="bg-white rounded-full flex items-center px-4 py-2 w-[250px] md:w-[300px]">
              <input
                type="email"
                placeholder="Your Email Here..."
                className="flex-1 bg-transparent text-[#ADC2FF] placeholder-[#ADC2FF] text-sm focus:outline-none"
              />
              <Image
                src="/denr.png"
                alt="Send"
                width={40}
                height={40}
                className="cursor-pointer"
              />
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5">
              <Image
                src="/TWITTER.png"
                alt="Twitter"
                width={40}
                height={40}
                className="cursor-pointer"
              />
              <Image
                src="/LINKDLN.png"
                alt="LinkedIn"
                width={40}
                height={40}
                className="cursor-pointer"
              />
              <Image
                src="/FACEBOOK.png"
                alt="Facebook"
                width={40}
                height={40}
                className="cursor-pointer"
              />
              <Image
                src="/INSTAGRAM.png"
                alt="Instagram"
                width={40}
                height={40}
                className="cursor-pointer"
              />
            </div>
          </div>

          {/* الخط تحتهم */}
          <div className="h-[1px] bg-[#C2D1FF] mt-6"></div>

          {/* ====== الجزء اللي فيه اليمين والشمال ====== */}
          <div className="flex flex-col md:flex-row justify-between items-start mt-6 gap-10">
            {/* الجزء الشمال: مواعيد العمل */}
            <div>
              <h4 className="text-black font-semibold text-base mb-3 pb-3">
                Working Hours
              </h4>

              {/* Mon - Fri */}
              <div className="flex items-center justify-between w-[220px] mb-2 border-b border-[#5C85FF] pb-1">
                <span className="text-[#3366FF] text-sm">Mon - Fri</span>
                <span className="text-[#3366FF] text-sm">9AM - 8PM</span>
              </div>

              {/* Sat - Sun */}
              <div className="flex items-center justify-between w-[220px] mb-7 border-b border-[#5C85FF] pb-1">
                <span className="text-[#3366FF] text-sm">Sat - Sun</span>
                <span className="text-[#3366FF] text-sm">9AM - 8PM</span>
              </div>

              {/* حقوق النشر */}
              <p className="text-black text-sm mt-6">
                © 2024 CONFIDENT All Right Reserved.
              </p>
            </div>

            {/* الخط الفاصل */}
            <div className="hidden md:block w-[1px] bg-[#C2D1FF] h-[220px] mx-8"></div>

            {/* الجزء اليمين: الأعمدة */}
            <div className="flex flex-wrap justify-between flex-1 gap-8 text-left md:text-left">
              {/* Column 1 - About */}
              <div>
                <h3 className="text-black font-semibold text-lg mb-3">About</h3>
                <ul className="space-y-2 text-black text-sm">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>

              {/* Column 2 - Pages */}
              <div>
                <h3 className="text-black font-semibold text-lg mb-3">Pages</h3>
                <ul className="space-y-2 text-black text-sm">
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Dentist</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">404 Page</a>
                  </li>
                </ul>
              </div>

              {/* Column 3 - Support */}
              <div>
                <h3 className="text-black font-semibold text-lg mb-3">
                  Support
                </h3>
                <ul className="space-y-2 text-black text-sm">
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Booking Online</a>
                  </li>
                  <li>
                    <a href="#">Social Media</a>
                  </li>
                </ul>
              </div>

              {/* Column 4 - Contact Us */}
              <div>
                <h3 className="text-black font-semibold text-lg mb-3">
                  Contact Us
                </h3>
                <ul className="space-y-2 text-black text-sm">
                  <li>
                    <a href="#">Social Media</a>
                  </li>
                  <li>
                    <a href="#">WhatsApp</a>
                  </li>
                  <li>
                    <a href="#">Email</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ====== Mobile Version ====== */}
        <div className="flex flex-col md:hidden gap-6">
          {/* Logo */}
          <Image
            src="/Logo.png"
            alt="Logo"
            width={140}
            height={50}
            className="object-contain"
          />

          {/* Email input */}
          <div className="bg-white rounded-full flex items-center px-4 py-2 w-full">
            <input
              type="email"
              placeholder="Your Email Here..."
              className="flex-1 bg-transparent text-[#ADC2FF] placeholder-[#ADC2FF] text-sm focus:outline-none"
            />
            <Image
              src="/denr.png"
              alt="Send"
              width={35}
              height={35}
              className="cursor-pointer"
            />
          </div>

          {/* Line */}
          <div className="h-[1px] bg-[#C2D1FF]"></div>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            <Image src="/TWITTER.png" alt="Twitter" width={35} height={35} />
            <Image src="/LINKDLN.png" alt="LinkedIn" width={35} height={35} />
            <Image src="/FACEBOOK.png" alt="Facebook" width={35} height={35} />
            <Image
              src="/INSTAGRAM.png"
              alt="Instagram"
              width={35}
              height={35}
            />
          </div>

          {/* Working Hours */}
          <div className="mt-2">
            <h4 className="text-black font-semibold text-base mb-3">
              Working Hours
            </h4>
            <div className="flex items-center justify-between w-full mb-2 border-b border-[#5C85FF] pb-1">
              <span className="text-[#3366FF] text-sm">Mon - Fri</span>
              <span className="text-[#3366FF] text-sm">9AM - 8PM</span>
            </div>
            <div className="flex items-center justify-between w-full mb-5 border-b border-[#5C85FF] pb-1">
              <span className="text-[#3366FF] text-sm">Sat - Sun</span>
              <span className="text-[#3366FF] text-sm">9AM - 8PM</span>
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-4 gap-3 sm:gap-6">
            <div>
              <h3 className="text-black font-semibold text-[11px] sm:text-base mb-2 whitespace-nowrap">
                About
              </h3>
              <ul className="space-y-1 text-black text-[10px] sm:text-sm">
                <li>
                  <a href="#" className="whitespace-nowrap">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="whitespace-nowrap">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="whitespace-nowrap">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="whitespace-nowrap">
                    Pages
                  </a>
                </li>
                <li>
                  <a href="#" className="whitespace-nowrap">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-black font-semibold text-[11px] sm:text-base mb-2 whitespace-nowrap">
                Pages
              </h3>
              <ul className="space-y-1 text-black text-[10px] sm:text-sm">
                <li>
                  <a href="#" className="whitespace-nowrap">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="whitespace-nowrap">
                    Dentist
                  </a>
                </li>
                <li>
                  <a href="#" className="whitespace-nowrap">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="whitespace-nowrap">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="whitespace-nowrap">
                    404 Page
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-black font-semibold text-[11px] sm:text-base mb-2 whitespace-nowrap">
                Support
              </h3>
              <ul className="space-y-1 text-black text-[10px] sm:text-sm">
                <li>
                  <a href="#" className="whitespace-nowrap">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="whitespace-nowrap">
                    Booking Online
                  </a>
                </li>
                <li>
                  <a href="#" className="whitespace-nowrap">
                    Social Media
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-black font-semibold text-[11px] sm:text-base mb-2 whitespace-nowrap">
                Contact Us
              </h3>
              <ul className="space-y-1 text-black text-[10px] sm:text-sm">
                <li>
                  <a href="#" className="whitespace-nowrap">
                    Social Media
                  </a>
                </li>
                <li>
                  <a href="#" className="whitespace-nowrap">
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href="#" className="whitespace-nowrap">
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Line */}
          <div className="h-[1px] bg-[#C2D1FF] mt-4"></div>

          {/* حقوق النشر */}
          <p className="text-black text-sm mt-4 text-center">
            © 2024 CONFIDENT All Right <br /> Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
