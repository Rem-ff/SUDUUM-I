export default function Slide5Typography() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#0C0B14]">
      <div className="absolute bottom-0 right-0 w-[45vw] h-[45vh] bg-[#8B57E0]/7 rounded-full blur-[10vw] pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full px-[8vw] py-[7vh]">
        <p className="font-body text-[1.5vw] text-[#8B57E0] tracking-[0.4em] uppercase mb-[2vh]">
          ✦ Typography
        </p>
        <h2 className="font-display text-[3.8vw] font-bold text-[#F5F3FF] mb-[5vh]">
          الخطوط الرسمية
        </h2>

        <div className="flex gap-[4vw] flex-1 pb-[4vh]">
          <div className="flex flex-col flex-1 border-t border-[#8B57E0]/30 pt-[3vh]">
            <p className="font-body text-[1.5vw] text-[#8B57E0] tracking-widest uppercase mb-[2vh]">Arabic — العربية</p>
            <p className="font-body text-[1.6vw] text-[#6B6880] mb-[3vh]">Saudi National Font</p>
            <p
              className="text-[7vw] font-bold text-[#F5F3FF] leading-none mb-[3vh]"
              style={{ fontFamily: "SaudiFont, sans-serif", direction: "rtl" }}
            >
              سُدم
            </p>
            <p
              className="text-[3vw] font-bold text-[#C4A8F0] leading-snug mb-[2vh]"
              style={{ fontFamily: "SaudiFont, sans-serif", direction: "rtl" }}
            >
              قطاع الفضاء
            </p>
            <p
              className="text-[2vw] text-[#F5F3FF]/70 leading-relaxed"
              style={{ fontFamily: "SaudiFont, sans-serif", direction: "rtl" }}
            >
              مبادرة سعودية تهدف إلى تعزيز الوصول
            </p>
            <p
              className="text-[2vw] text-[#F5F3FF]/70 leading-relaxed"
              style={{ fontFamily: "SaudiFont, sans-serif", direction: "rtl" }}
            >
              إلى قطاع الفضاء وعلومه وتقنياته.
            </p>
          </div>

          <div className="w-px bg-[#8B57E0]/20 self-stretch" />

          <div className="flex flex-col flex-1 border-t border-[#8B57E0]/30 pt-[3vh]">
            <p className="font-body text-[1.5vw] text-[#8B57E0] tracking-widest uppercase mb-[2vh]">English — الإنجليزية</p>
            <p className="font-body text-[1.6vw] text-[#6B6880] mb-[3vh]">Syne Bold + DM Sans</p>

            <p className="font-display text-[7vw] font-bold text-[#F5F3FF] leading-none mb-[3vh] tracking-tight">
              SUDUUM
            </p>

            <p className="font-display text-[3vw] font-bold text-[#C4A8F0] leading-snug mb-[2vh]">
              Space Sector
            </p>

            <p className="font-body text-[2vw] text-[#F5F3FF]/70 leading-relaxed">
              A Saudi initiative strengthening
            </p>
            <p className="font-body text-[2vw] text-[#F5F3FF]/70 leading-relaxed">
              access to the space sector.
            </p>

            <div className="mt-[4vh] flex gap-[3vw]">
              <div>
                <p className="font-body text-[1.5vw] text-[#6B6880] mb-[0.5vh]">Display</p>
                <p className="font-display text-[2vw] font-bold text-[#F5F3FF]">Syne</p>
              </div>
              <div>
                <p className="font-body text-[1.5vw] text-[#6B6880] mb-[0.5vh]">Body</p>
                <p className="font-body text-[2vw] text-[#F5F3FF]">DM Sans</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[3vh] left-[8vw]">
        <p className="font-body text-[1.5vw] text-[#6B6880]/50 tracking-widest">05 / 08</p>
      </div>
    </div>
  );
}
