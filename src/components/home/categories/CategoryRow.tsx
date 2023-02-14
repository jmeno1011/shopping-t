import Image from 'next/image'
import React from 'react'

const categoryList = ["옷", "신발", "뷰티", "가구", "주방용품", "폰"]

export default function CategoryRow() {
    return (
        <div className='flex'>
            {
                categoryList.map(category => (
                    <div key={category} className="flex flex-col grow bg-white">
                        <div>
                            <Image
                                src="/categoryRow/cloth.svg"
                                alt="#"
                                width={700}
                                height={475}
                                sizes="100vw"
                                className='w-full h-auto'
                                />
                        </div>
                        <h5 className='p-1 text-center'>{category}</h5>
                    </div>
                ))
            }
        </div>
    )
}
