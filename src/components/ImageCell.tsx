import { ScrollPosition } from "react-lazy-load-image-component";
import Thumbnail from "./Thumbnail";

interface Props {
    src: string;
    alt: string;
    scrollPosition: ScrollPosition;
}

const ImageCell: React.FC<Props> = ({src, alt, scrollPosition})=> (
    <div className="w-full p-2 md:w-1/2 lg:1/3 xl:1/4">
        <Thumbnail src={src} alt={alt} scrollPosition={scrollPosition}/>
    </div>
)

export default ImageCell;
