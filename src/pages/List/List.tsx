import { ImageData } from "@/assets/imageData";
import ImageCell from "@/components/ImageCell";
import { Input, Navbar } from "@material-tailwind/react";
import { useState } from "react";
import { trackWindowScroll } from "react-lazy-load-image-component";

const List = trackWindowScroll(({scrollPosition}) => {
    const [search, setSearch] = useState<string>("")
    console.log(scrollPosition)
    return <div className="min-h-screen">
        <Navbar className="sticky top-0 z-10 w-full max-w-full px-4 py-2">
            <div className="flex items-center justify-between">
                <Input label="Search" placeholder="為什麼要演奏春日影" onChange={e => {setSearch(e.target.value)}} />
            </div>
        </Navbar>
        <div className="flex flex-wrap">
            {ImageData.filter(datum => datum.line.includes(search)).map((image, idx) => (
                !image.isDeleted && <ImageCell key={idx} src={image.path} alt={image.line} scrollPosition={scrollPosition} />
            ))}
        </div>
    </div>
});

export default List;
