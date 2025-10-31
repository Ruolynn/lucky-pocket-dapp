'use client'

export default function TokensBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {/* Floating Gradient Orbs */}
      <div className="absolute left-[40px] top-[80px] w-[288px] h-[288px] blur-3xl rounded-full bg-gradient-to-br from-[rgba(239,68,68,0.5)] to-[rgba(217,70,239,0.5)] opacity-50" />
      <div className="absolute right-[40px] bottom-[80px] w-[384px] h-[384px] blur-3xl rounded-full bg-gradient-to-br from-[rgba(194,122,255,0.5)] to-[rgba(251,100,182,0.5)]" />
      <div className="absolute left-1/2 top-1/3 transform -translate-x-1/2 w-[320px] h-[320px] blur-3xl rounded-full bg-gradient-to-br from-[rgba(123,241,168,0.5)] to-[rgba(142,197,255,0.5)] opacity-50" />
      
      {/* Decorative Dots */}
      <div className="absolute right-[279px] top-[157px] w-3 h-3 rounded-full bg-[rgba(253,165,213,0.5)]" />
      <div className="absolute left-[387px] bottom-[168px] w-2 h-2 rounded-full bg-[rgba(142,197,255,0.5)]" />
      <div className="absolute right-[527px] top-[292px] w-2.5 h-2.5 rounded-full bg-[rgba(218,178,255,0.5)]" />
      <div className="absolute right-[517px] bottom-[294px] w-2 h-2 rounded-full bg-[rgba(123,241,168,0.5)]" />
      <div className="absolute left-1/2 bottom-[304px] transform -translate-x-1/2 w-3 h-3 rounded-full bg-[rgba(255,223,32,0.5)]" />
    </div>
  )
}
