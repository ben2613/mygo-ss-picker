// Thumbnail element accepting react props in typescript

import React from "react";
import { LazyLoadImage, ScrollPosition } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

interface Props {
    src: string;
    alt: string;
    scrollPosition: ScrollPosition;
}

const Thumbnail: React.FC<Props> = ({ src, alt, scrollPosition }) => {
    return (
        <div className="overflow-hidden rounded-lg">
            <Link to={"/fullscreen" + src} >
                <LazyLoadImage
                    src={src}
                    alt={alt}
                    scrollPosition={scrollPosition}
                    placeholderSrc="/images/084.png"
                    threshold={20}
                    className="object-cover w-full transition-transform hover:scale-110"
                    loading="lazy"
                />
            </Link>
        </div>
    );
};

export default Thumbnail;
