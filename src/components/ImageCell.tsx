import Thumbnail from "./Thumbnail";

interface Props {
    src: string;
    alt: string;
}

const ImageCell: React.FC<Props> = ({src, alt})=> (
    <div className="p-2 w-full md:w-1/2 lg:1/3 xl:1/4">
        <Thumbnail src={src} alt={alt}/>
    </div>
)

export default ImageCell;
