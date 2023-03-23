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
                    <div key={category.name} className="flex flex-col grow bg-white">
                        <div>
                            <Image
                                src={category.imgUrl}
                                alt="#"
                                width={190}
                                height={190}
                                // fill
                                style={{objectFit:'contain'}}
                            />
                        </div>
                        <h5 className='p-1 text-center'>{category.name}</h5>
                    </div>
                ))
            }
        </div>
    )
}
