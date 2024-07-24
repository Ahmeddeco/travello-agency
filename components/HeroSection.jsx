import { hero } from '@/constant'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
	return (
		<section className='section'>
			{/* Text */}

			<div className='flex flex-col justify-between items-start w-5/12 gap-10'>
				<h4 className='h4 text-primary'>{hero.h4}</h4>
				<h1 className='h1'>{hero.h1}</h1>
				<p className='p'>{hero.p}</p>
			</div>
			{/* Image */}
			<div className='w-7/12'>
				<Image
					src={hero.image}
					alt='hero'
				/>
			</div>
		</section>
	)
}

export default HeroSection
