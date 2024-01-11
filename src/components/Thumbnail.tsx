// Thumbnail element accepting react props in typescript

import React from "react";

interface Props {
    src: string;
    alt: string;
}

const Thumbnail: React.FC<Props> = ({ src, alt }) => {
    return (
        <div className="overflow-hidden rounded-lg">
            <img
                src={src}
                alt={alt}
                className="w-full object-cover hover:scale-110"
                />
        </div>
    );
};

export default Thumbnail;
