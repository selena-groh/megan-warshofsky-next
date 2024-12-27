"use client";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
import "@vidstack/react/player/styles/default/layouts/video.css";
import "@vidstack/react/player/styles/default/theme.css";

function VidstackVideo({ title, src }: { title: string; src: string }) {
  return (
    <MediaPlayer title={title} src={src} aspectRatio="16/9">
      <MediaProvider />
      <DefaultVideoLayout
        // thumbnails TODO add these
        icons={defaultLayoutIcons}
      />
    </MediaPlayer>
  );
}
export default VidstackVideo;
