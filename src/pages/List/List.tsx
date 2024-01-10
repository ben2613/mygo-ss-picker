import { ImageData } from "@/assets/imageData";
import ImageCell from "@/components/ImageCell";


const List = () => (
    <div className="flex flex-wrap">
        {ImageData.map((image, idx) => (
            !image.isDeleted && <ImageCell src={image.path} alt={image.line} key={idx} />
        ))}
    </div>
);

export default List;
