export default function Slide6Elements() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#0C0B14]">
      <div className="absolute top-[5vh] right-[5vw] w-[50vw] h-[50vh] bg-[#8B57E0]/7 rounded-full blur-[12vw] pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full px-[8vw] py-[7vh]">
        <p className="font-body text-[1.5vw] text-[#8B57E0] tracking-[0.4em] uppercase mb-[2vh]">
          ✦ Design Elements
        </p>
        <h2 className="font-display text-[3.8vw] font-bold text-[#F5F3FF] mb-[5vh]">
          عناصر التصميم
        </h2>

        <div className="flex gap-[2.5vw] flex-1 pb-[4vh]">
          <div className="flex flex-col flex-1 bg-[#8B57E0]/8 border border-[#8B57E0]/25 rounded-2xl p-[3vw]">
            <p className="font-body text-[1.5vw] text-[#8B57E0] tracking-widest uppercase mb-[3vh]">Star Motif</p>
            <div className="flex flex-col flex-1 justify-around items-center">
              <span className="text-[#8B57E0] text-[8vw] leading-none">✦</span>
              <div className="flex items-end gap-[3vw]">
                <span className="text-[#8B57E0]/60 text-[3vw] leading-none">✦</span>
                <span className="text-[#C4A8F0] text-[5vw] leading-none">✦</span>
                <span className="text-[#8B57E0]/40 text-[2vw] leading-none">✦</span>
              </div>
            </div>
            <p
              className="text-[1.5vw] text-[#6B6880] mt-[2vh]"
              style={{ fontFamily: "SaudiFont, sans-serif", direction: "rtl" }}
            >
              رمز النجمة — علامة التعرف
            </p>
          </div>

          <div className="flex flex-col flex-1 bg-[#8B57E0]/8 border border-[#8B57E0]/25 rounded-2xl p-[3vw]">
            <p className="font-body text-[1.5vw] text-[#8B57E0] tracking-widest uppercase mb-[3vh]">Gradients</p>
            <div className="flex flex-col gap-[2vh] flex-1">
              <div className="flex-1 rounded-xl bg-gradient-to-r from-[#8B57E0] to-[#C4A8F0]" />
              <div className="flex-1 rounded-xl bg-gradient-to-r from-[#0C0B14] to-[#8B57E0]/60" />
              <div className="flex-1 rounded-xl bg-gradient-to-br from-[#8B57E0]/20 via-[#8B57E0]/5 to-transparent border border-[#8B57E0]/30" />
            </div>
            <p className="font-body text-[1.5vw] text-[#6B6880] mt-[2vh]">Radial &amp; Linear Glows</p>
          </div>

          <div className="flex flex-col flex-1 bg-[#8B57E0]/8 border border-[#8B57E0]/25 rounded-2xl p-[3vw]">
            <p className="font-body text-[1.5vw] text-[#8B57E0] tracking-widest uppercase mb-[3vh]">Starfield</p>
            <div className="flex-1 rounded-xl bg-[#0C0B14] border border-[#8B57E0]/20 relative overflow-hidden">
              <div className="absolute top-[15%] left-[20%] w-1 h-1 rounded-full bg-[#F5F3FF]/80" />
              <div className="absolute top-[35%] left-[60%] w-[3px] h-[3px] rounded-full bg-[#F5F3FF]/60" />
              <div className="absolute top-[55%] left-[40%] w-[2px] h-[2px] rounded-full bg-[#C4A8F0]/90" />
              <div className="absolute top-[25%] left-[80%] w-1 h-1 rounded-full bg-[#F5F3FF]/50" />
              <div className="absolute top-[70%] left-[15%] w-[3px] h-[3px] rounded-full bg-[#8B57E0]/80" />
              <div className="absolute top-[45%] left-[75%] w-1 h-1 rounded-full bg-[#F5F3FF]/70" />
              <div className="absolute top-[80%] left-[55%] w-[2px] h-[2px] rounded-full bg-[#C4A8F0]/60" />
              <div className="absolute top-[10%] left-[45%] w-1 h-1 rounded-full bg-[#F5F3FF]/40" />
              <div className="absolute top-[60%] left-[88%] w-[2px] h-[2px] rounded-full bg-[#8B57E0]/90" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[#8B57E0]/30 text-[6vw]">✦</span>
              </div>
            </div>
            <p
              className="text-[1.5vw] text-[#6B6880] mt-[2vh]"
              style={{ fontFamily: "SaudiFont, sans-serif", direction: "rtl" }}
            >
              خلفية نجمية متحركة — Canvas
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[3vh] left-[8vw]">
        <p className="font-body text-[1.5vw] text-[#6B6880]/50 tracking-widest">06 / 08</p>
      </div>
    </div>
  );
}
