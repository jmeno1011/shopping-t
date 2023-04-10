import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router'
import React from 'react'

interface CategoryProps {
  category: string;
}

const Category = ({ category }: CategoryProps) => {
  // const router = useRouter()
  // const { category } = router.query;
  return (
    <div className='bg-white'>
      <header className='p-4'>
        <h5 className='text-lg font-semibold'>{category}</h5>
      </header>
      <div className='bg-[#fafafa] h-8 flex items-center'>
        <ul className='flex items-center text-sm children:px-2'>
          <li className='border-r-[1px] border-solid border-silver'>판매량순</li>
          <li className='border-r-[1px] border-solid border-silver'>높은가격순</li>
          <li className='border-r-[1px] border-solid border-silver'>낮은가격순</li>
          <li className=''>날짜순</li>
        </ul>
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