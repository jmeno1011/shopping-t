import Image from 'next/image'
import React from 'react'

const categoryList = [
    { name: "옷", imgUrl: "/categoryRow/cloth.svg" },
    { name: "신발", imgUrl: "/categoryRow/shoes.svg" },
    { name: "뷰티", imgUrl: "/categoryRow/cosmetics.jpg" },
    { name: "가구", imgUrl: "/categoryRow/furniture.jpg" },
    { name: "주방용품", imgUrl: "/categoryRow/kitchen.jpg" },
    { name: "폰", imgUrl: "/categoryRow/phone.svg" }
]

export default function CategoryRow() {
    return (
        <div className='flex'>
            {
                categoryList.map(category => (
                    <div key={category.name} className="w-[190px] h-[190px] bg-white relative">
                            <Image
                                src={category.imgUrl}
                                alt="#"
                                className='pb-[32px]'
                                fill
                            />
                        <h5 className='p-1 absolute bottom-0 w-full text-center'>{category.name}</h5>
                    </div>
                ))
            }
        </div>
    )
}
