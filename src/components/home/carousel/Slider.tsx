interface propsType {
    title: string;
    description: string;
    imgUrl: string;
    imgAlt: string;
}
export default function Slider({ title, description, imgUrl, imgAlt }: propsType) {
    return (
        <div className="h-full w-full flex flex-shrink-0 grow">
            <div className="w-6/12 bg-white flex flex-col justify-center">
                <h1 className="text-md m-2">{title}</h1>
                <p className="text-sm m-2">
                    {description}
                </p>
            </div>
            <img
                className="w-6/12 object-fill"
                src={imgUrl}
                alt={imgAlt}
            />
        </div>
    )
}
