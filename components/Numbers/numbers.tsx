"use client";
import Image from "next/image";

export default function NumbersSection() {
  return (
<section className="max-w-[1400px] mx-4 sm:mx-auto bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.10)] py-20 px-8 sm:px-16 mt-20 mb-20">
      {/* نسخة الديسكتوب */}
      <div className="hidden md:flex justify-between items-center">
        {/* الصورة 1 */}
        <div className="relative w-[150px] h-[100px]">
          <Image
            src="/n1.png"
            alt="Number 1"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* الخط الفاصل */}
        <div className="h-[80px]  w-[1px] bg-gray-200"></div>

        {/* الصورة 2 */}
        <div className="relative w-[150px] h-[100px]">
          <Image
            src="/n2.png"
            alt="Number 2"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* الخط الفاصل */}
        <div className="h-[80px] w-[1px] bg-gray-200"></div>

        {/* الصورة 3 */}
        <div className="relative w-[150px] h-[100px]">
          <Image
            src="/n3.png"
            alt="Number 3"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* الخط الفاصل */}
        <div className="h-[80px]  w-[1px] bg-gray-200"></div>

        {/* الصورة 4 */}
        <div className="relative w-[150px] h-[100px]">
          <Image
            src="/n4.png"
            alt="Number 4"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* نسخة الموبايل */}
      <div className="md:hidden flex flex-col items-center gap-8 px-4">
        {/* الصف الأول */}
        <div className="flex justify-center items-center gap-8 w-full">
          <div className="relative w-[120px] h-[80px]">
            <Image
              src="/n1.png"
              alt="Number 1"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* خط فاصل عمودي */}
{/* خط فاصل عمودي */}
<div className="h-[80px] w-[1px] bg-gray-200"></div>

          <div className="relative w-[120px] h-[80px]">
            <Image
              src="/n2.png"
              alt="Number 2"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* خط فاصل أفقي بين الصفين */}
<div className="w-full h-[1px] bg-gray-200 my-2"></div>

        {/* الصف الثاني */}
        <div className="flex justify-center items-center gap-8 w-full">
          <div className="relative w-[120px] h-[80px]">
            <Image
              src="/n3.png"
              alt="Number 3"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* خط فاصل عمودي */}
<div className="h-[80px] w-[1px] bg-gray-200"></div>

          <div className="relative w-[120px] h-[80px]">
            <Image
              src="/n4.png"
              alt="Number 4"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
