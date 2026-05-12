export default function Slide8Closing() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#0C0B14]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#8B57E0]/15 via-transparent to-[#8B57E0]/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-[#8B57E0]/8 rounded-full blur-[18vw] pointer-events-none" />

      <div className="absolute top-[6vh] right-[6vw] text-[#8B57E0]/20 text-[20vw] leading-none select-none font-display font-bold">
        ✦
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <p className="font-body text-[1.5vw] text-[#8B57E0] tracking-[0.6em] uppercase mb-[5vh]">
          ✦ 2026
        </p>

        <div className="flex items-center gap-[2vw] mb-[2vh]">
          <span className="text-[#8B57E0] text-[4vw]">✦</span>
          <h1
            className="text-[11vw] font-bold text-[#F5F3FF] leading-none"
            style={{ fontFamily: "Cairo, sans-serif" }}
          >
            سُدم
          </h1>
        </div>

        <h2 className="font-display text-[4.5vw] font-bold text-[#C4A8F0] tracking-[0.3em] mb-[5vh]">
          SUDUUM
        </h2>

        <div className="w-[20vw] h-px bg-gradient-to-r from-transparent via-[#8B57E0] to-transparent mb-[4vh]" />

        <p
          className="text-[2.2vw] text-[#F5F3FF]/70"
          style={{ fontFamily: "Cairo, sans-serif" }}
        >
          نحو جيل سعودي أقرب إلى قطاع الفضاء
        </p>
        <p className="font-body text-[1.8vw] text-[#6B6880] mt-[1.5vh]">
          Building stronger access to the future of space
        </p>

        <div className="flex items-center gap-[3vw] mt-[6vh]">
          <p className="font-body text-[1.6vw] text-[#8B57E0]">suduum.space</p>
          <span className="text-[#8B57E0]/40 text-[1.5vw]">|</span>
          <p className="font-body text-[1.6vw] text-[#6B6880]">@sudam_space</p>
        </div>
      </div>

      <div className="absolute bottom-[3vh] left-[8vw]">
        <p className="font-body text-[1.5vw] text-[#6B6880]/50 tracking-widest">08 / 08</p>
      </div>
    </div>
  );
}
