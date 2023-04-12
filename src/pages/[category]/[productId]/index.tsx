import { GetServerSideProps } from 'next';
import React from 'react'

interface ProductDetailProps{
  id: string;
}

const ProductDetail = ({id}:ProductDetailProps) => {
  // todo: Breadcrumbs로 이동할 수 있게 만들기
  return (
    <div>ProductDetail<br />{id}</div>
  )
}

export default ProductDetail;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { productId } = context.query
  return {
    props: {
      id: productId
    }
  }
}