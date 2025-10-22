function extractTikTokId(input) {
  if (!input) return "";
  try {
    if (/^https?:\/\//.test(input)) {
      const u = new URL(input);
      const parts = u.pathname.split("/").filter(Boolean);
      const idx = parts.indexOf("video");
      if (idx >= 0 && parts[idx + 1]) return parts[idx + 1];
      // Fallback: last segment if numeric
      const last = parts[parts.length - 1];
      return last || input;
    }
  } catch {}
  return input;
}

import { useEffect, useRef, useState } from "react";

export default function TikTokEmbed({ videoId, title = "Vidéo TikTok" }) {
  const id = extractTikTokId(videoId);
  const src = `https://www.tiktok.com/embed/v2/${id}`;
  const wrapRef = useRef(null);
  const [dims, setDims] = useState({ w: 0, h: 0 });
  const [ratio, setRatio] = useState(16 / 9); // dynamic: taller on small screens
  useEffect(() => {
    const onResize = () => {
      const el = wrapRef.current;
      if (!el) return;
      const w = el.clientWidth;
      // make it a bit taller on small widths to avoid inner scroll in iframe
      const r = w < 380 ? 2.15 : w < 768 ? 2.0 : 1.85;
      setRatio(r);
      const h = Math.round(w * r);
      setDims({ w: Math.round(w), h });
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return (
    <div ref={wrapRef} className="relative w-full">
      <div style={{ paddingTop: `${(ratio * 100).toFixed(2)}%` }} />
      <iframe
        title={title}
        src={src}
        className="absolute inset-0 w-full h-full rounded-2xl"
        referrerPolicy="strict-origin-when-cross-origin"
        scrolling="no"
        frameBorder="0"
        style={{ overflow: "hidden" }}
        allowFullScreen
        loading="lazy"
      />
      <div className="mt-2 text-xs my-auto text-slate-500">
        {dims.w} × {dims.h} px
      </div>
    </div>
  );
}
