export default function Slide3Wordmark() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#0C0B14]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vh] bg-[#8B57E0]/7 rounded-full blur-[15vw] pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full px-[8vw] py-[7vh]">
        <p className="font-body text-[1.5vw] text-[#8B57E0] tracking-[0.4em] uppercase mb-[4vh]">
          ✦ Name &amp; Wordmark
        </p>

        <div className="flex flex-1 gap-[5vw] pb-[4vh]">
          {/* Left: orbital logo */}
          <div className="flex flex-col justify-center items-center flex-[1.3] border border-[#8B57E0]/20 rounded-3xl p-[3vw] bg-[#8B57E0]/4">
            <p className="font-body text-[1.5vw] text-[#6B6880] tracking-widest uppercase mb-[3vh]">English Logotype</p>
            <svg
              viewBox="0 0 400 160"
              className="w-full max-w-[34vw]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="SUDUUM orbital logo"
            >
              <g transform="rotate(-8, 200, 78)">
                <ellipse cx="200" cy="78" rx="192" ry="57" stroke="#8B57E0" strokeWidth="1.8"/>
                <line x1="392" y1="71" x2="392" y2="85" stroke="#C4A8F0" strokeWidth="1.8"/>
                <line x1="385" y1="78" x2="399" y2="78" stroke="#C4A8F0" strokeWidth="1.8"/>
                <circle cx="392" cy="78" r="4" fill="#8B57E0"/>
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
            <p className="font-body text-[1.5vw] text-[#6B6880] mt-[2vh] text-center">
              Orbital ring · Morse code · Syne Bold
            </p>
          </div>

          <div className="flex flex-col gap-[2.5vh] flex-1">
            <div className="flex flex-col justify-center items-center flex-1 border border-[#8B57E0]/20 rounded-3xl p-[3vw] bg-[#8B57E0]/4">
              <p className="font-body text-[1.5vw] text-[#6B6880] tracking-widest uppercase mb-[2vh]">Arabic Wordmark</p>
              <h3
                className="text-[9vw] font-bold text-[#F5F3FF] leading-none"
                style={{ fontFamily: "SaudiFont, sans-serif" }}
              >
                سُدم
              </h3>
              <p className="font-body text-[1.5vw] text-[#6B6880] mt-[1.5vh]">Saudi National Font · Bold</p>
            </div>

            <div className="flex flex-col justify-center items-center flex-1 border border-[#8B57E0]/20 rounded-3xl p-[2.5vw] bg-gradient-to-br from-[#8B57E0]/15 to-transparent">
              <p className="font-body text-[1.5vw] text-[#6B6880] tracking-widest uppercase mb-[2vh]">Lockup</p>
              <div className="flex items-center gap-[1vw]">
                <span className="text-[#8B57E0] text-[3.5vw]">✦</span>
                <span
                  className="text-[4.5vw] font-bold text-[#F5F3FF] leading-none"
                  style={{ fontFamily: "SaudiFont, sans-serif" }}
                >
                  سُدم
                </span>
              </div>
              <p className="font-body text-[1.5vw] text-[#6B6880] mt-[1.5vh]">Star Motif + Arabic Mark</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[3vh] left-[8vw]">
        <p className="font-body text-[1.5vw] text-[#6B6880]/50 tracking-widest">03 / 08</p>
      </div>
    </div>
  );
}
