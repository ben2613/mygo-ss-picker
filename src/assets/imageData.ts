import imagesData from "@assets/imageData.json";

type ImageInfo = {
    path: string;
    line: string;
    isDeleted: boolean;
};

export const ImageData: ImageInfo[] = imagesData.list.map((img) => ({
    path: img[0] as string,
    line: img[1] as string,
    isDeleted: !!img[2],
}));
