import Image from "next/image";
import { SetStateAction } from "react";

export default function ImagesGrid(
  {image, index, setMainImage}: 
  {
    image: {url: string}, 
    index: number, 
    setMainImage: (value: SetStateAction<string | null>) => void
  }) {
  const isYoutube = image.url.includes("youtube.com");
  const youtubeIdMatch = image.url.match(/embed\/([^?&]+)/);
  const thumbnailUrl = isYoutube && youtubeIdMatch
    ? `https://img.youtube.com/vi/${youtubeIdMatch[1]}/hqdefault.jpg`
    : image.url;
  return (
    <div
      className="w-16 h-16 rounded-[20px] cursor-pointer hover:scale-105 transition-all duration-300 overflow-hidden flex items-center justify-center bg-black"
      role="button"
      tabIndex={0}
      onClick={() => setMainImage(image.url)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          setMainImage(image.url);
        }
      }}
    >
      {image.url.includes("youtube.com") ? (
        <Image
          src={thumbnailUrl}
          alt={`Miniatura ${index + 1}`}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
          width={64}
          height={64}
        /> 
      ) : (
        <Image
          src={image.url}
          alt={`Miniatura ${index + 1}`}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
          width={64}
          height={64}
        />  
      )}
    </div>
  )
}
