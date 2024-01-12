import { useNavigate, useParams } from "react-router-dom";
import { ImageData } from "@/assets/imageData";
import Button from "@material-tailwind/react/components/Button";
import { copyImageToClipboard } from "copy-image-clipboard";
import JsFileDownloader from "js-file-downloader";

function copyURL(url: string) {
    navigator.clipboard.writeText(url);
}



const Fullscreen = () => {
    const params = useParams<{ "*": string }>();
    const navigate = useNavigate();

    const image = ImageData.find((img) => img.path === "/" + params["*"]) || {
        path: "404",
        line: "404",
    };

    const fullURL = new URL(
        image.path,
        window.location.protocol +
            "/" +
            window.location.host
    ).toString()

    return (
        <div className="flex flex-wrap w-screen gap-2">
            <img src={image?.path} alt={image.line} className="w-full" />
            <Button
                onClick={() => copyURL(fullURL)}
                className="flex-auto w-full md:w-auto"
                >
                Copy URL
            </Button>
            <Button className="flex-auto w-full md:w-auto"
                onClick={() => copyImageToClipboard(fullURL)}
            >
                Copy Image
            </Button>
            <Button onClick={() => new JsFileDownloader({url: fullURL})} className="flex-auto w-full md:w-auto">Download</Button>
            <Button onClick={() => navigate(-1)} variant="outlined" color="blue"
                className="flex-auto w-full md:w-auto"
            >
                Back
            </Button>
        </div>
    );
};

export default Fullscreen;
