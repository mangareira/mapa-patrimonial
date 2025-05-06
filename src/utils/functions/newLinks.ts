export const newLinks = ({ photos }: { photos: { url: string }[] }) => {
  const newPhotos = photos
    .map((p) => {
      const driveMatch = p.url.match(/\/d\/([^\/]+)/);
      if (driveMatch) {
        return {
          url: `https://drive.google.com/uc?export=view&id=${driveMatch[1]}`,
        };
      }

      const youtubeRegex =
        /(?:v=|\/videos\/|embed\/|youtu.be\/|\/v\/|\/e\/|watch\?v=|\?v=)([^#\&\?]{11})/;
      const youtubeMatch = p.url.match(youtubeRegex);
      if (youtubeMatch) {
        return {
          url: `https://www.youtube.com/embed/${youtubeMatch[1]}`,
        };
      }

      return undefined;
    })
    .filter((photo): photo is { url: string } => photo !== undefined);

  return newPhotos;
};