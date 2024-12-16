import Video from "@/components/Video";
import VidstackVideo from "@/components/VidstackVideo";
import "server-only";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return (
    <div>
      <p>
        Example page for individual project with slug &ldquo;{slug}&rdquo; goes
        here
      </p>
      <br />
      <Video src="https://www.youtube.com/embed/uOaMqC8ymig" />
      <VidstackVideo
        title={`Alicia Keys & Maleah Joi Moon - Kaleidoscope ("Hell's Kitchen") (Music Video)`}
        src="youtube/uOaMqC8ymig"
      />
    </div>
  );
}
