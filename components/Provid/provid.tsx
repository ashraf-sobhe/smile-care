"use client";
import Image from "next/image";

export default function WhatWeProvideSection() {
  const features = [
    { icon: "/p1.png", title: "Lawn Fertilization" },
    { icon: "/p2.png", title: "Dental Bridge" },
    { icon: "/p3.png", title: "General Dentistry" },
    { icon: "/p4.png", title: "Cavity Inspection" },
    { icon: "/p5.png", title: "Live Advisory" },
  ];

  const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.";

  return (
<section  id="services" className="max-w-[1400px] mx-[15px] sm:mx-auto bg-[#EFF6FF] rounded-2xl py-14 px-5 sm:px-6 lg:px-8 mb-20 ">
      
      {/* العنوان الرئيسي */}
      <div className="text-center mb-12">
        <p className="text-[#FF9140] text-sm font-semibold mb-2">what we provide</p>
        <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold leading-snug font-serif">
          What <span className="text-[#5C85FF]">the Treatments</span><br />
          Do We Offer?
        </h2>
      </div>

      {/* الصف الأول: 2 عناصر */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6">
        {features.slice(0,2).map((item, idx) => (
          <div key={idx} className="bg-white rounded-xl p-3 flex flex-col gap-4">
            {/* أيقونة فوق العنوان على اليسار */}
            <div className="flex flex-col items-start gap-2">
              <div className="w-16 h-16 relative">
                <Image src={item.icon} alt={item.title} fill className="object-contain"/>
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed break-words">
              {paragraph}
            </p>
            <div className="flex items-center gap-2 text-[#5C85FF] font-semibold cursor-pointer text-sm">
              <span>Learn More</span>
              <Image src="/Right.png" alt="arrow" width={14} height={14} />
            </div>
          </div>
        ))}
      </div>

      {/* الصف الثاني: 3 عناصر */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {features.slice(2,5).map((item, idx) => (
          <div key={idx} className="bg-white rounded-xl p-3 flex flex-col gap-4">
            <div className="flex flex-col items-start gap-2">
              <div className="w-16 h-16 relative">
                <Image src={item.icon} alt={item.title} fill className="object-contain"/>
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed break-words">
              {paragraph}
            </p>
            <div className="flex items-center gap-2 text-[#5C85FF] font-semibold cursor-pointer text-sm">
              <span>Learn More</span>
              <Image src="/Right.png" alt="arrow" width={14} height={14} />
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
