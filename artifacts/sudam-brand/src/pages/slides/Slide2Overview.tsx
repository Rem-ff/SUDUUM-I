export default function Slide2Overview() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#0C0B14]">
      <div className="absolute bottom-0 right-0 w-[55vw] h-[55vh] bg-[#8B57E0]/8 rounded-full blur-[12vw] pointer-events-none" />
      <div className="absolute top-[10vh] left-[4vw] w-[30vw] h-[30vh] bg-[#8B57E0]/6 rounded-full blur-[8vw] pointer-events-none" />

      <div className="relative z-10 flex h-full">
        <div className="flex flex-col justify-center px-[8vw] max-w-[58vw]">
          <p className="font-body text-[1.5vw] text-[#8B57E0] tracking-[0.4em] uppercase mb-[3vh]">
            ✦ Brand Overview
          </p>

          <h2
            className="text-[4.5vw] font-bold text-[#F5F3FF] leading-tight mb-[3vh]"
            style={{ fontFamily: "SaudiFont, sans-serif", direction: "rtl", textAlign: "right" }}
          >
            مبادرة سعودية تعزّز الوصول إلى قطاع الفضاء
          </h2>

          <div className="w-[10vw] h-[3px] bg-[#8B57E0] mb-[3.5vh]" />

          <p className="font-body text-[2vw] text-[#F5F3FF]/70 leading-relaxed mb-[2vh]">
            SUDUUM connects people with opportunities, initiatives, and developments in space science and technology.
          </p>

          <p
            className="text-[1.8vw] text-[#F5F3FF]/55 leading-relaxed"
            style={{ fontFamily: "SaudiFont, sans-serif", direction: "rtl", textAlign: "right" }}
          >
            سُدم تربط المهتمين بالمجال بالفرص والمبادرات والمستجدات في علوم وتقنيات الفضاء.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center flex-1 px-[4vw] gap-[3vh]">
          <div className="border border-[#8B57E0]/30 rounded-2xl p-[2.5vw] w-full bg-[#8B57E0]/5">
            <p className="font-body text-[1.5vw] text-[#8B57E0] mb-[1vh] tracking-wide">المجال / Domain</p>
            <p
              className="text-[2.2vw] font-bold text-[#F5F3FF]"
              style={{ fontFamily: "SaudiFont, sans-serif" }}
            >
              قطاع الفضاء
            </p>
            <p className="font-body text-[1.8vw] text-[#C4A8F0]">Space Sector</p>
          </div>

          <div className="border border-[#8B57E0]/30 rounded-2xl p-[2.5vw] w-full bg-[#8B57E0]/5">
            <p className="font-body text-[1.5vw] text-[#8B57E0] mb-[1vh] tracking-wide">المنشأ / Origin</p>
            <p
              className="text-[2.2vw] font-bold text-[#F5F3FF]"
              style={{ fontFamily: "SaudiFont, sans-serif" }}
            >
              المملكة العربية السعودية
            </p>
            <p className="font-body text-[1.8vw] text-[#C4A8F0]">Saudi Arabia</p>
          </div>

          <div className="border border-[#8B57E0]/30 rounded-2xl p-[2.5vw] w-full bg-[#8B57E0]/5">
            <p className="font-body text-[1.5vw] text-[#8B57E0] mb-[1vh] tracking-wide">المرجعية / Reference</p>
            <p className="font-body text-[2vw] font-bold text-[#F5F3FF]">suduum.space</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[3vh] left-[8vw]">
        <p className="font-body text-[1.5vw] text-[#6B6880]/50 tracking-widest">02 / 08</p>
      </div>
    </div>
  );
}
