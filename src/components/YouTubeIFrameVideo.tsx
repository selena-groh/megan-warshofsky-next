"use client";

import { AspectRatio } from "@chakra-ui/react";

const addSearchParams = (
  src: string,
  params: { [key: string]: string } = {}
) => {
  const url = new URL(src);
  if (!url) {
    return src;
  }

  return new URL(
    `${url.origin}${url.pathname}?${new URLSearchParams([
      ...(url.searchParams ? Array.from(url.searchParams.entries()) : []),
      ...Object.entries(params),
    ])}`
  );
};

function YouTubeIFrameVideo({
  videoId,
  aspectRatio = 16 / 9,
}: {
  videoId: string;
  aspectRatio: number;
}) {
  const src = `https://www.youtube.com/embed/${videoId}`;
  const srcWithPlayerParams = addSearchParams(src, {
    color: "white",
    iv_load_policy: "3",
    rel: "0",
  });

  return (
    <AspectRatio maxW="2000px" ratio={aspectRatio}>
      <iframe
        allowFullScreen
        src={srcWithPlayerParams.toString()}
        title="Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </AspectRatio>
  );
}

export default YouTubeIFrameVideo;
