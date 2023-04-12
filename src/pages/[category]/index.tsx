import React from 'react'
import Image from 'next/image';
import { GetServerSideProps } from 'next';
import { product_cloths } from "@/data/production";
import Link from 'next/link';

interface CategoryProps {
  category: string;
}

const Category = ({ category }: CategoryProps) => {
  return (
    <div className='bg-white'>
      <header className='p-4'>
        <h5 className='text-lg font-semibold'>{category}</h5>
      </header>
      <div className='bg-[#fafafa] h-8 flex items-center'>
        <ul className='flex items-center text-sm children:px-2 children:border-r-[1px] border-solid border-silver children:cursor-pointer'>
          <li className='hover:text-teal-500'>판매량순</li>
          <li className='hover:text-teal-500'>높은가격순</li>
          <li className='hover:text-teal-500'>낮은가격순</li>
          <li className='border-none hover:text-teal-500'>날짜순</li>
        </ul>
      </div>
      <div>
        {/* {category} 제품 */}
        <div className='flex justify-center'>
          <div className='p-4 flex'>
            {
              category === "cloth" && (
                product_cloths.map(cloth => (
                  <div key={cloth.id}>
                    <Link href={`${category}/${cloth.id}`} className='block w-64 h-64 relative'>
                    <Image src={cloth.thumnail} fill className='pb-11' alt={cloth.name} />
                    <div className='absolute bottom-0'>
                      <div className='px-2 flex flex-col'>
                        <div>
                          <h6 className='inline-block mr-2 '>{cloth.name}</h6>
                          <span className='text-xs text-gray-500'>{cloth.category}</span>
                        </div>
                        <span className='block text-sm font-semibold'>{cloth.price}</span>
                      </div>
                    </div>
                    </Link>
                  </div>
                ))
              )
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default Category;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { category } = context.query
  return {
    props: {
      category: category
    }
  }
}