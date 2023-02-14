import { useEffect, useRef, useState } from "react";
import Slider from "./Slider";

const slideList = [
    {
        id: "1",
        title: "첫 구매시 50% 할인!",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        imgUrl: "https://i.ytimg.com/vi/vYfZSp4xhp8/maxresdefault.jpg",
        imgAlt: "아이폰"
    },
    {
        id: "2",
        title: "첫 구매시 50% 할인!",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        imgUrl:
            "https://post-phinf.pstatic.net/MjAyMjAyMTBfMTI4/MDAxNjQ0NDc1NDE3NzM5.erE4bhJ_N9WaLg3PbYZu3yh1tBne16UhT96_yeaoexgg.7HbJw8UBUNDh1DBajWTBQmmWJVr3zIn9htAUEriQItog.JPEG/002.jpg?type=w1200",
        imgAlt: "맥북 m2"
    }
];

interface propsTypes {
    SLIDE_LEN: number;
}
export default function Carousel({ SLIDE_LEN }: propsTypes) {
    const len = SLIDE_LEN - 1;
    const [slideNum, setSlideNum] = useState(0);
    const slideRef = useRef<HTMLDivElement>(null);

    const nextSlide = () => {
        if (slideNum >= len) {
            setSlideNum(0);
        } else {
            setSlideNum(slideNum + 1);
        }
    };
    const prevSlide = () => {
        if (slideNum <= 0) {
            setSlideNum(len);
        } else {
            setSlideNum(slideNum - 1);
        }
    };

    useEffect(() => {
        slideRef.current!.style.transition = "all 1s ease-in-out";
        slideRef.current!.style.transform = `translateX(-${slideNum}00%)`;
    }, [slideNum]);

    useEffect(() => {
        const slideTimer = setInterval(() => {
            if (slideNum >= len) {
                setSlideNum(0);
            } else {
                setSlideNum(slideNum + 1);
            }
        }, 3000);
        return () => {
            clearInterval(slideTimer);
        };
    }, [slideNum]);

    return (
        <div className="px-8 bg-white w-full h-[350px] flex items-center relative overflow-hidden">
            <div className="flex w-full" ref={slideRef}>
                {
                    slideList.map(slide => (
                        <Slider
                            key={slide.id}
                            title={slide.title}
                            description={slide.description}
                            imgUrl={slide.imgUrl}
                            imgAlt={slide.imgAlt}
                        />
                    ))
                }
            </div>
            <div className="absolute left-0 right-0">
                <button className="absolute left-0 bg-slate-300 rounded-full opacity-50 w-8 h-8" onClick={prevSlide}>&larr;</button>
                <button className="absolute right-0 bg-slate-300 rounded-full opacity-50 w-8 h-8" onClick={nextSlide}>&rarr;</button>
            </div>
        </div>
    )
}
