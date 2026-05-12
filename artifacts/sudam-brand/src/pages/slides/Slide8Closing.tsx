export default function Slide8Closing() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#0C0B14]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#8B57E0]/15 via-transparent to-[#8B57E0]/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-[#8B57E0]/8 rounded-full blur-[18vw] pointer-events-none" />

      <div className="absolute top-[6vh] right-[6vw] text-[#8B57E0]/20 text-[20vw] leading-none select-none font-display font-bold">
        ✦
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        {/* Compact orbital logo */}
        <svg
          viewBox="0 0 400 160"
          className="w-[30vw] mb-[2vh]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="SUDUUM"
        >
          <g transform="rotate(-8, 200, 78)">
            <ellipse cx="200" cy="78" rx="192" ry="57" stroke="#8B57E0" strokeWidth="1.5"/>
            <line x1="392" y1="71" x2="392" y2="85" stroke="#C4A8F0" strokeWidth="1.5"/>
            <line x1="385" y1="78" x2="399" y2="78" stroke="#C4A8F0" strokeWidth="1.5"/>
            <circle cx="392" cy="78" r="3.5" fill="#8B57E0"/>
          </g>
          <text x="200" y="92" textAnchor="middle" fill="#F5F3FF" fontFamily="Syne,sans-serif" fontWeight="800" fontSize="50" letterSpacing="5">SUDUUM</text>
          <circle cx="55" cy="122" r="2.5" fill="#8B57E0"/>
          <circle cx="66" cy="122" r="2.5" fill="#8B57E0"/>
          <circle cx="77" cy="122" r="2.5" fill="#8B57E0"/>
          <circle cx="100" cy="122" r="2.5" fill="#8B57E0"/>
          <circle cx="111" cy="122" r="2.5" fill="#8B57E0"/>
          <rect x="119.5" y="119.5" width="14" height="5" rx="2.5" fill="#8B57E0"/>
          <rect x="151.5" y="119.5" width="14" height="5" rx="2.5" fill="#8B57E0"/>
          <circle cx="174" cy="122" r="2.5" fill="#8B57E0"/>
          <circle cx="185" cy="122" r="2.5" fill="#8B57E0"/>
          <circle cx="208" cy="122" r="2.5" fill="#8B57E0"/>
          <circle cx="219" cy="122" r="2.5" fill="#8B57E0"/>
          <rect x="227.5" y="119.5" width="14" height="5" rx="2.5" fill="#8B57E0"/>
          <circle cx="262" cy="122" r="2.5" fill="#8B57E0"/>
          <circle cx="273" cy="122" r="2.5" fill="#8B57E0"/>
          <rect x="281.5" y="119.5" width="14" height="5" rx="2.5" fill="#8B57E0"/>
          <rect x="313.5" y="119.5" width="14" height="5" rx="2.5" fill="#8B57E0"/>
          <rect x="333.5" y="119.5" width="14" height="5" rx="2.5" fill="#8B57E0"/>
        </svg>

        <h1
          className="text-[8vw] font-bold text-[#F5F3FF] leading-none"
          style={{ fontFamily: "SaudiFont, sans-serif" }}
        >
          سُدم
        </h1>

        <div className="w-[20vw] h-px bg-gradient-to-r from-transparent via-[#8B57E0] to-transparent my-[3.5vh]" />

        <p
          className="text-[2.2vw] text-[#F5F3FF]/70"
          style={{ fontFamily: "SaudiFont, sans-serif" }}
        >
          نحو جيل سعودي أقرب إلى قطاع الفضاء
        </p>
        <p className="font-body text-[1.8vw] text-[#6B6880] mt-[1.5vh]">
          Building stronger access to the future of space
        </p>

        <div className="flex items-center gap-[3vw] mt-[5vh]">
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
