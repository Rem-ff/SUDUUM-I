export default function Slide7Voice() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#0C0B14]">
      <div className="absolute top-1/2 left-[30%] -translate-y-1/2 w-[60vw] h-[60vh] bg-[#8B57E0]/7 rounded-full blur-[14vw] pointer-events-none" />

      <div className="relative z-10 flex h-full">
        <div className="flex flex-col justify-center px-[8vw] w-[42vw] border-r border-[#8B57E0]/20">
          <p className="font-body text-[1.5vw] text-[#8B57E0] tracking-[0.4em] uppercase mb-[3vh]">
            ✦ Brand Voice
          </p>
          <h2
            className="text-[5vw] font-bold text-[#F5F3FF] leading-tight mb-[2vh]"
            style={{ fontFamily: "SaudiFont, sans-serif", direction: "rtl" }}
          >
            الصوت العلامي
          </h2>
          <h3 className="font-display text-[3vw] font-bold text-[#C4A8F0] mb-[4vh]">
            Brand Tone
          </h3>
          <p
            className="text-[1.8vw] text-[#F5F3FF]/60 leading-relaxed"
            style={{ fontFamily: "SaudiFont, sans-serif", direction: "rtl" }}
          >
            سُدم تتحدث بثقة وطموح. نحن نعكس تطلعات جيل سعودي يرى الفضاء وجهةً قابلة للوصول.
          </p>
        </div>

        <div className="flex flex-col justify-center flex-1 px-[6vw] gap-[2.5vh]">
          <div className="flex items-center gap-[2vw]">
            <span className="text-[#8B57E0] text-[2.5vw]">✦</span>
            <div>
              <p
                className="text-[3vw] font-bold text-[#F5F3FF] leading-none"
                style={{ fontFamily: "SaudiFont, sans-serif" }}
              >
                طموح
              </p>
              <p className="font-body text-[1.8vw] text-[#C4A8F0]">Ambitious</p>
            </div>
          </div>

          <div className="w-full h-px bg-[#8B57E0]/20" />

          <div className="flex items-center gap-[2vw]">
            <span className="text-[#8B57E0] text-[2.5vw]">✦</span>
            <div>
              <p
                className="text-[3vw] font-bold text-[#F5F3FF] leading-none"
                style={{ fontFamily: "SaudiFont, sans-serif" }}
              >
                حديث
              </p>
              <p className="font-body text-[1.8vw] text-[#C4A8F0]">Modern</p>
            </div>
          </div>

          <div className="w-full h-px bg-[#8B57E0]/20" />

          <div className="flex items-center gap-[2vw]">
            <span className="text-[#8B57E0] text-[2.5vw]">✦</span>
            <div>
              <p
                className="text-[3vw] font-bold text-[#F5F3FF] leading-none"
                style={{ fontFamily: "SaudiFont, sans-serif" }}
              >
                أصيل
              </p>
              <p className="font-body text-[1.8vw] text-[#C4A8F0]">Authentic</p>
            </div>
          </div>

          <div className="w-full h-px bg-[#8B57E0]/20" />

          <div className="flex items-center gap-[2vw]">
            <span className="text-[#8B57E0] text-[2.5vw]">✦</span>
            <div>
              <p
                className="text-[3vw] font-bold text-[#F5F3FF] leading-none"
                style={{ fontFamily: "SaudiFont, sans-serif" }}
              >
                ملهم
              </p>
              <p className="font-body text-[1.8vw] text-[#C4A8F0]">Inspiring</p>
            </div>
          </div>

          <div className="w-full h-px bg-[#8B57E0]/20 mt-[1vh]" />

          <div className="flex gap-[3vw] mt-[1vh]">
            <div className="flex-1">
              <p className="font-body text-[1.5vw] text-[#8B57E0] tracking-widest mb-[1vh]">WE SAY</p>
              <p
                className="text-[1.6vw] text-[#F5F3FF]/70"
                style={{ fontFamily: "SaudiFont, sans-serif" }}
              >
                مبادرة — Initiative
              </p>
              <p
                className="text-[1.6vw] text-[#F5F3FF]/70"
                style={{ fontFamily: "SaudiFont, sans-serif" }}
              >
                قطاع الفضاء — Space Sector
              </p>
              <p
                className="text-[1.6vw] text-[#F5F3FF]/70"
                style={{ fontFamily: "SaudiFont, sans-serif" }}
              >
                وصول — Access
              </p>
            </div>
            <div className="flex-1">
              <p className="font-body text-[1.5vw] text-[#6B6880] tracking-widest mb-[1vh]">WE AVOID</p>
              <p
                className="text-[1.6vw] text-[#6B6880]/70 line-through"
                style={{ fontFamily: "SaudiFont, sans-serif" }}
              >
                مجرد مجتمع
              </p>
              <p
                className="text-[1.6vw] text-[#6B6880]/70 line-through"
                style={{ fontFamily: "SaudiFont, sans-serif" }}
              >
                مرحلة مبكرة
              </p>
              <p
                className="text-[1.6vw] text-[#6B6880]/70 line-through"
                style={{ fontFamily: "SaudiFont, sans-serif" }}
              >
                هواة
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[3vh] left-[8vw]">
        <p className="font-body text-[1.5vw] text-[#6B6880]/50 tracking-widest">07 / 08</p>
      </div>
    </div>
  );
}
