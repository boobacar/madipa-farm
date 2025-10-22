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

import { useEffect, useRef, useState } from 'react'

export default function TikTokEmbed({ videoId, title = "Vidéo TikTok" }) {
  const id = extractTikTokId(videoId);
  const src = `https://www.tiktok.com/embed/v2/${id}`;
  const wrapRef = useRef(null)
  const [dims, setDims] = useState({w:0, h:0})
  const ratio = 16/9 // portrait video: height = width * 16/9
  useEffect(()=>{
    const onResize = ()=>{
      const el = wrapRef.current
      if(!el) return
      const w = el.clientWidth
      const h = Math.round(w * ratio)
      setDims({w: Math.round(w), h})
    }
    onResize()
    window.addEventListener('resize', onResize)
    return ()=> window.removeEventListener('resize', onResize)
  },[])
  return (
    <div ref={wrapRef} className="relative w-full">
      <div style={{ paddingTop: `${(ratio*100).toFixed(2)}%` }} />
      <iframe
        title={title}
        src={src}
        className="absolute inset-0 w-full h-full rounded-2xl"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        loading="lazy"
      />
      <div className="mt-2 text-xs text-slate-500">{dims.w} × {dims.h} px</div>
    </div>
  );
}
