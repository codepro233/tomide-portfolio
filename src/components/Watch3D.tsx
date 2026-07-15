"use client";

// CSS 3D floating watch — used in the YAGI Watches brand section
export default function Watch3D() {
  return (
    <div style={{ flex:"0 0 300px", height:300, perspective:800, display:"flex", alignItems:"center", justifyContent:"center", position:"relative" }}>
      <style>{`
        .watch-wrap{transform-style:preserve-3d;animation:watchFloat 6s ease-in-out infinite,watchSpin 25s linear infinite}
        @keyframes watchFloat{0%,100%{transform:rotateY(0deg) translateY(0px)}50%{transform:rotateY(0deg) translateY(-18px)}}
        @keyframes watchSpin{from{transform:rotateY(0deg)}to{transform:rotateY(360deg)}}
        .w-body{width:100px;height:130px;border:2px solid rgba(16,185,129,.5);background:rgba(16,185,129,.05);position:relative;transform-style:preserve-3d}
        .w-face{position:absolute;border:1px solid rgba(16,185,129,.3);background:rgba(16,185,129,.04)}
        .w-side  {width:14px;height:130px;left:-7px;top:0;transform:rotateY(-90deg) translateZ(0px);border-color:rgba(16,185,129,.2)}
        .w-side-r{width:14px;height:130px;left:-7px;top:0;transform:rotateY(90deg) translateZ(100px);border-color:rgba(16,185,129,.2)}
        .w-top-f {width:100px;height:14px;top:-7px;left:0;transform:rotateX(90deg) translateZ(-7px)}
        .w-bot-f {width:100px;height:14px;bottom:-7px;left:0;transform:rotateX(-90deg) translateZ(7px)}
        .w-strap-t,.w-strap-b{position:absolute;width:80px;height:40px;border:1px solid rgba(16,185,129,.2);background:rgba(16,185,129,.03);left:10px}
        .w-strap-t{top:-42px}
        .w-strap-b{bottom:-42px}
        .w-crown{position:absolute;right:-8px;top:50%;width:8px;height:16px;background:rgba(16,185,129,.3);border:1px solid rgba(16,185,129,.4);margin-top:-8px}
        .w-inner{position:absolute;inset:12px;border:1px solid rgba(16,185,129,.4);display:flex;align-items:center;justify-content:center}
        .w-logo{font-family:'Syne',sans-serif;font-size:.55rem;font-weight:800;color:var(--em);letter-spacing:.1em;text-align:center;line-height:1.3}
        .w-hand-h,.w-hand-m{position:absolute;bottom:50%;left:50%;transform-origin:bottom center;background:var(--em);border-radius:2px}
        .w-hand-h{width:2px;height:28px;margin-left:-1px;transform:rotate(-40deg);opacity:.8}
        .w-hand-m{width:1px;height:36px;margin-left:0;transform:rotate(70deg);opacity:.6}
        .watch-glow{position:absolute;width:200px;height:200px;border-radius:50%;background:radial-gradient(circle,rgba(16,185,129,.08),transparent 70%);pointer-events:none}
      `}</style>

      {/* Glow behind watch */}
      <div className="watch-glow" />

      {/* Watch body */}
      <div className="watch-wrap">
        <div className="w-body">
          <div className="w-face w-side" />
          <div className="w-face w-side-r" />
          <div className="w-face w-top-f" />
          <div className="w-face w-bot-f" />
          <div className="w-strap-t" />
          <div className="w-strap-b" />
          <div className="w-crown" />
          <div className="w-inner">
            <div className="w-logo">YAGI<br />WATCHES</div>
            <div className="w-hand-h" />
            <div className="w-hand-m" />
          </div>
        </div>
      </div>
    </div>
  );
}
