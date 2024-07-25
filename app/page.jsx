import CategorySection from '@/components/home/CategorySection'
import HeroSection from '@/components/home/HeroSection'
import React from 'react'

const Homepage = () => {
	return (
		<main className='font-poppins'>
			<HeroSection />
			<CategorySection/>
		</main>
	)
}

export default Homepage
