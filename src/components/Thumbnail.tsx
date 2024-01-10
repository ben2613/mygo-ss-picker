// Thumbnail element accepting react props in typescript

import React from "react";

interface Props {
    src: string;
    alt: string;
}

const Thumbnail: React.FC<Props> = ({ src, alt }) => {
    return (
        <img
            src={src}
            alt={alt}
            className="w-full rounded-lg object-cover"
        />
    );
};

export default Thumbnail;
