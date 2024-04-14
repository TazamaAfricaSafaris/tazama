import cloudinary from "~/lib/cloudinary";
import type { ImageProps } from "~/lib/generateBlurPlaceHolder";
import getBase64ImageUrl from "~/lib/generateBlurPlaceHolder";
interface Props {
  folderName: string;
}

export default async function useFetchImages({ folderName }: Props) {
  const results = await cloudinary.v2.search
    .expression(`folder:${folderName}`)
    .execute();

  let reducedResults: ImageProps[] = [];
  let i = 0;
  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    });
    i++;
  }
  const blurImagePromises = results.resources.map((image: ImageProps) => {
    return getBase64ImageUrl(image);
  });
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

  for (let i = 0; i < reducedResults.length; i++) {
    reducedResults[i]!.blurDataUrl = imagesWithBlurDataUrls[i];
  }
  return reducedResults;
}
