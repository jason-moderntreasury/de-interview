"use client";

interface CoverVideoProps {
  url?: string;
}

export default function CoverVideo(props: CoverVideoProps) {
  const { url } = props;

  return (
    <iframe
      width="100%"
      className="h-auto w-full"
      src={`https://www.youtube-nocookie.com/embed/${url}?amp;controls=0`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
    />
  );
}
