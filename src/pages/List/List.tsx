import { ImageData } from "@/assets/imageData";


const List = () => (
    ImageData.map((image, idx) => (
        !image.isDeleted && <img src={image.path} alt={image.line} key={idx} />
    ))
);

export default List;
