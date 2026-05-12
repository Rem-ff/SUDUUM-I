const base = import.meta.env.BASE_URL;

export default function Slide1Cover() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#0C0B14]">
      <img
        src={`${base}cover-space.png`}
        crossOrigin="anonymous"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        alt=""
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0C0B14] via-[#0C0B14]/55 to-[#0C0B14]/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0C0B14]/60 via-transparent to-transparent" />

      <div className="absolute top-[6vh] left-[6vw] w-[50vw] h-[50vh] bg-[#8B57E0]/10 rounded-full blur-[10vw] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <p className="font-body text-[1.5vw] text-[#8B57E0] tracking-[0.6em] uppercase mb-[3vh]">✦ Saudi Space Initiative ✦</p>

        <h1
          className="font-arabic text-[11vw] font-bold text-[#F5F3FF] leading-none"
          style={{ fontFamily: "Cairo, sans-serif", direction: "rtl" }}
        >
          سُدم
        </h1>

        <h2 className="font-display text-[3.8vw] font-bold text-[#C4A8F0] tracking-[0.4em] mt-[0.5vh]">
          SUDUUM
        </h2>

        <div className="w-[18vw] h-px bg-gradient-to-r from-transparent via-[#8B57E0] to-transparent my-[4vh]" />

        <p
          className="font-arabic text-[2vw] text-[#F5F3FF]/75 tracking-wide"
          style={{ fontFamily: "Cairo, sans-serif", direction: "rtl" }}
        >
          دليل الهوية البصرية
        </p>
        <p className="font-body text-[1.5vw] text-[#6B6880] tracking-[0.3em] mt-[1.2vh]">
          VISUAL IDENTITY GUIDE
        </p>

        <p className="font-body text-[1.5vw] text-[#6B6880]/60 mt-[5vh]">2026</p>
      </div>

      <div className="absolute bottom-[3vh] left-0 right-0 flex justify-center">
        <div className="flex gap-[1vw] items-center">
          <div className="w-[4vw] h-px bg-[#8B57E0]/40" />
          <span className="text-[#8B57E0]/60 text-[1.5vw]">✦</span>
          <div className="w-[4vw] h-px bg-[#8B57E0]/40" />
        </div>
      </div>
    </div>
  );
}
