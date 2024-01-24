import CardList from '@/components/cardList/CardList'
import Category from '@/components/category/Category'
import Infomation from '@/components/infomation/Infomation'
import React from 'react'

export default function Home() {
  return (
    <main id='main'>
      <section className='main__header'>
      </section>
      <section className='main__contents'>
        <Category />
        <Infomation />
        <CardList />
      </section>
    </main>
  )
}
