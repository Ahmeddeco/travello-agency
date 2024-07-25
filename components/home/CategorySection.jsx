import { category } from '@/constant'
import React from 'react'
import Cards from './cards'
import Image from 'next/image'

const CategorySection = () => {
	return (
		<section className='section relative '>
			<Image
				src={category.orangrectangle}
				alt='orangrectangle'
				className='absolute bottom-28 left-0 -z-50 -rotate-12'
			/>
			<Image
				src={category.dots}
				alt='orangrectangle'
				className='absolute top-20 right-0 -z-50'
			/>
			{/* container */}
			<div className='flex flex-col items-center justify-center gap-4'>
				{/* title */}
				<div className='flex flex-col items-center justify-center gap-4'>
					<p className='p uppercase '>{category.h4}</p>
					<h2 className='h2 text-center'>{category.h2}</h2>
				</div>
				{/* cards */}
				<Cards />
			</div>
		</section>
	)
}

export default CategorySection
