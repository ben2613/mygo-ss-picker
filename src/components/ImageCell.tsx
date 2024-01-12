import Thumbnail from "./Thumbnail";

interface Props {
    src: string;
    alt: string;
}

const ImageCell: React.FC<Props> = ({src, alt})=> (
    <div className="w-full p-2 md:w-1/2 lg:w-1/3 xl:w-1/4">
        <Thumbnail src={src} alt={alt}/>
    </div>
)

export default ImageCell;
