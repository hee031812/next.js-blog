import CardList from '@/components/cardList/CardList'
import Category from '@/components/category/Category'
import Infomation from '@/components/infomation/Infomation'
import React from 'react'

export default function Home({ searchParams }) {

  const page = parseInt(searchParams.page || 1);
  const { cate } = searchParams;

  console.log(cate)

  return (
    <main id='main'>
      <section className='main__header'>
      </section>
      <section className='main__contents'>
        <Category />
        <Infomation />
        <CardList page={page} cate={cate} />
      </section>
    </main>
  )
}
