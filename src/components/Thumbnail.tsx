// Thumbnail element accepting react props in typescript

import React from "react";

interface Props {
    src: string;
    alt: string;
    width: number;
    height: number;
}

const Thumbnail: React.FC<Props> = ({ src, alt, width, height }) => {
    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            style={{ objectFit: "cover" }}
        />
    );
};

export default Thumbnail;
