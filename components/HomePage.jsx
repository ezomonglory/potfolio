import React from 'react'
import HomePageFooter from './HomePageFooter'
import HomePageHeader from './HomePageHeader'
import HomepageMain from './HomepageMain'

const HomePage = () => {
  return (
    <div className='bg-[#EAE8E4 h-full pb-[63px]'>
        <HomePageHeader />
        <HomepageMain />
        <HomePageFooter />
    </div>
  )
}

export default HomePage