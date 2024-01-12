// Thumbnail element accepting react props in typescript

import { copyImageToClipboard } from "copy-image-clipboard";
import React from "react";
import { Link } from "react-router-dom";
import { useLongPress } from "react-use";

interface Props {
    src: string;
    alt: string;
}

const Thumbnail: React.FC<Props> = ({ src, alt }) => {
    const fullURL = new URL(
        src,
        window.location.protocol +
            "/" +
            window.location.host
    ).toString()
    const onLongPress = () => {
        copyImageToClipboard(fullURL);
    }
    const longPressEvent = useLongPress(onLongPress, {isPreventDefault: true, delay: 300});
    return (
        <div className="overflow-hidden rounded-lg">
            <Link {...longPressEvent} to={"/fullscreen" + src} >
                <img 
                    src={src}
                    alt={alt}
                    className="object-cover w-full transition-transform hover:scale-110"
                    />
            </Link>
        </div>
    );
};

export default Thumbnail;
