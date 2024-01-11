import { useParams } from "react-router-dom";
import {ImageData} from "@/assets/imageData";

const Fullscreen = () => {
    const params = useParams<{'*': string}>();
    
    const image = ImageData.find(img => img.path === '/' + params['*']);
    
    return <div className="flex flex-wrap">
        <img src={image?.path} alt={image?.line} className=""/>
    </div>;
};

export default Fullscreen;
