import CategorySection from '@/components/home/CategorySection'
import Destinations from '@/components/home/Destinations'
import HeroSection from '@/components/home/HeroSection'
import React from 'react'

const Homepage = () => {
	return (
		<main className='font-poppins'>
			<HeroSection />
			<CategorySection/>
			<Destinations/>
		</main>
	)
}

export default Homepage
