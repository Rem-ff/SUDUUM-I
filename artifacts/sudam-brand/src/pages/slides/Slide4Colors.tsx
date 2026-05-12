export default function Slide4Colors() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#0C0B14]">
      <div className="absolute top-0 left-0 w-[40vw] h-[40vh] bg-[#8B57E0]/8 rounded-full blur-[10vw] pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full px-[8vw] py-[7vh]">
        <p className="font-body text-[1.5vw] text-[#8B57E0] tracking-[0.4em] uppercase mb-[2vh]">
          ✦ Color Palette
        </p>
        <h2 className="font-display text-[3.8vw] font-bold text-[#F5F3FF] mb-[5vh]">
          الألوان الرسمية
        </h2>

        <div className="flex gap-[2vw] flex-1 pb-[4vh]">
          <div className="flex flex-col flex-1">
            <div className="flex-1 rounded-2xl bg-[#8B57E0]" style={{ minHeight: "28vh" }} />
            <div className="mt-[2vh]">
              <p className="font-display text-[2.2vw] font-bold text-[#F5F3FF]">#8B57E0</p>
              <p className="font-body text-[1.6vw] text-[#C4A8F0]">Primary Violet</p>
              <p
                className="text-[1.5vw] text-[#6B6880]"
                style={{ fontFamily: "SaudiFont, sans-serif" }}
              >
                البنفسجي الأساسي
              </p>
            </div>
          </div>

          <div className="flex flex-col flex-1">
            <div className="flex-1 rounded-2xl border border-[#F5F3FF]/10 bg-[#0C0B14]" style={{ minHeight: "28vh" }} />
            <div className="mt-[2vh]">
              <p className="font-display text-[2.2vw] font-bold text-[#F5F3FF]">#0C0B14</p>
              <p className="font-body text-[1.6vw] text-[#C4A8F0]">Space Black</p>
              <p
                className="text-[1.5vw] text-[#6B6880]"
                style={{ fontFamily: "SaudiFont, sans-serif" }}
              >
                الخلفية الداكنة
              </p>
            </div>
          </div>

          <div className="flex flex-col flex-1">
            <div className="flex-1 rounded-2xl bg-[#F5F3FF]" style={{ minHeight: "28vh" }} />
            <div className="mt-[2vh]">
              <p className="font-display text-[2.2vw] font-bold text-[#F5F3FF]">#F5F3FF</p>
              <p className="font-body text-[1.6vw] text-[#C4A8F0]">Off White</p>
              <p
                className="text-[1.5vw] text-[#6B6880]"
                style={{ fontFamily: "SaudiFont, sans-serif" }}
              >
                النص الأساسي
              </p>
            </div>
          </div>

          <div className="flex flex-col flex-1">
            <div className="flex-1 rounded-2xl bg-[#C4A8F0]" style={{ minHeight: "28vh" }} />
            <div className="mt-[2vh]">
              <p className="font-display text-[2.2vw] font-bold text-[#F5F3FF]">#C4A8F0</p>
              <p className="font-body text-[1.6vw] text-[#C4A8F0]">Lavender</p>
              <p
                className="text-[1.5vw] text-[#6B6880]"
                style={{ fontFamily: "SaudiFont, sans-serif" }}
              >
                اللون الثانوي
              </p>
            </div>
          </div>

          <div className="flex flex-col flex-1">
            <div className="flex-1 rounded-2xl bg-[#6B6880]" style={{ minHeight: "28vh" }} />
            <div className="mt-[2vh]">
              <p className="font-display text-[2.2vw] font-bold text-[#F5F3FF]">#6B6880</p>
              <p className="font-body text-[1.6vw] text-[#C4A8F0]">Stone</p>
              <p
                className="text-[1.5vw] text-[#6B6880]"
                style={{ fontFamily: "SaudiFont, sans-serif" }}
              >
                النص الثانوي
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[3vh] left-[8vw]">
        <p className="font-body text-[1.5vw] text-[#6B6880]/50 tracking-widest">04 / 08</p>
      </div>
    </div>
  );
}
