import { ImageData } from "@/assets/imageData";
import ImageCell from "@/components/ImageCell";
import { Input, Navbar } from "@material-tailwind/react";
import { useState } from "react";
import { LazyLoadComponent, ScrollPosition, trackWindowScroll } from "react-lazy-load-image-component";

const List:React.FC<{scrollPosition: ScrollPosition}> = ({scrollPosition}) => {
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
                !image.isDeleted && <LazyLoadComponent placeholder={<div className="w-[100px] h-[300px]"></div>} key={idx} scrollPosition={scrollPosition}><ImageCell src={image.path} alt={image.line} /></LazyLoadComponent>
            ))}
        </div>
    </div>
};

export default trackWindowScroll(List);
