// Thumbnail element accepting react props in typescript

import React from "react";
import { Link } from "react-router-dom";

interface Props {
    src: string;
    alt: string;
}

const Thumbnail: React.FC<Props> = ({ src, alt }) => {
    return (
        <div className="overflow-hidden rounded-lg">
            <Link to={"/fullscreen" + src} >
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
