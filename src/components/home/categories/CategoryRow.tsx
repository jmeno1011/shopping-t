import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const categoryList = [
    { name: "옷", imgUrl: "/categoryRow/cloth.svg", url: '/cloth' },
    { name: "신발", imgUrl: "/categoryRow/shoes.svg", url: '/shoes' },
    { name: "뷰티", imgUrl: "/categoryRow/cosmetics.jpg", url: '/cosmetics' },
    { name: "가구", imgUrl: "/categoryRow/furniture.jpg", url: '/furniture' },
    { name: "주방용품", imgUrl: "/categoryRow/kitchen.jpg", url: '/kitchen' },
    { name: "폰", imgUrl: "/categoryRow/phone.svg", url: '/phone' }
]

export default function CategoryRow() {
    return (
        <div className='flex 2xl:justify-center items-center gap-4 overflow-x-auto xl:justify-start'>
            {
                categoryList.map(category => (
                    <div key={category.name} >
                        <Link href={category.url} className="inline-block w-[190px] h-[190px] bg-white relative">
                            <Image
                                src={category.imgUrl}
                                alt="#"
                                className='pb-[32px]'
                                fill
                            />
                            <h5 className='p-1 absolute bottom-0 w-full text-center'>{category.name}</h5>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}
