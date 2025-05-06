import Image from "next/image";

export default function MainImage({mainImage}: {mainImage: string | null}) {
  return (
    mainImage && (
      mainImage.includes("youtube.com") ? (
        <iframe
          src={mainImage}
          title="Vídeo"
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />  
      ) : (
        <Image
          src={mainImage}
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
          referrerPolicy="no-referrer"
          alt="Imagem do patrimônio"
          width={580}
          height={320}
        />
      )
    )
  )
}
