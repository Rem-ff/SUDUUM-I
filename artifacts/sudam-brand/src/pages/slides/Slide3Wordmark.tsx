export default function Slide3Wordmark() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#0C0B14]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vh] bg-[#8B57E0]/7 rounded-full blur-[15vw] pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full px-[8vw] py-[7vh]">
        <p className="font-body text-[1.5vw] text-[#8B57E0] tracking-[0.4em] uppercase mb-[5vh]">
          ✦ Name &amp; Wordmark
        </p>

        <div className="flex flex-1 gap-[6vw]">
          <div className="flex flex-col justify-center items-center flex-1 border border-[#8B57E0]/20 rounded-3xl p-[4vw] bg-[#8B57E0]/4">
            <p className="font-body text-[1.5vw] text-[#6B6880] tracking-widest uppercase mb-[3vh]">Arabic</p>
            <h2
              className="text-[14vw] font-bold text-[#F5F3FF] leading-none"
              style={{ fontFamily: "Cairo, sans-serif" }}
            >
              سُدم
            </h2>
            <p
              className="text-[2vw] text-[#C4A8F0] mt-[2vh]"
              style={{ fontFamily: "Cairo, sans-serif" }}
            >
              نبула — Nebula
            </p>
          </div>

          <div className="flex flex-col gap-[3vh] flex-1">
            <div className="flex flex-col justify-center items-center flex-1 border border-[#8B57E0]/20 rounded-3xl p-[3vw] bg-[#8B57E0]/4">
              <p className="font-body text-[1.5vw] text-[#6B6880] tracking-widest uppercase mb-[2vh]">English</p>
              <h3 className="font-display text-[7vw] font-bold text-[#F5F3FF] leading-none tracking-tight">
                SUDUUM
              </h3>
            </div>

            <div className="flex flex-col justify-center items-center flex-1 border border-[#8B57E0]/20 rounded-3xl p-[3vw] bg-gradient-to-br from-[#8B57E0]/15 to-transparent">
              <p className="font-body text-[1.5vw] text-[#6B6880] tracking-widest uppercase mb-[2vh]">Lockup</p>
              <div className="flex items-center gap-[1.5vw]">
                <span className="text-[#8B57E0] text-[4vw]">✦</span>
                <span
                  className="text-[5.5vw] font-bold text-[#F5F3FF] leading-none"
                  style={{ fontFamily: "Cairo, sans-serif" }}
                >
                  سُدم
                </span>
              </div>
              <p className="font-body text-[1.5vw] text-[#6B6880] mt-[1.5vh]">Star + Wordmark</p>
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
