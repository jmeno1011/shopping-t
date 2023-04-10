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
      <header>
        <h5>{category}</h5>
      </header>
      <div>
        <span>판매량순</span>
        <span>높은가격순</span>
        <span>낮은가격순</span>
        <span>날짜순</span>
      </div>
    </div>
  )
}

export default Category;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { category } = context.query
  return {
    props: {
      category : category
    }
  }
}