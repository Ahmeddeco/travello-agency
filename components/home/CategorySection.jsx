import { category } from '@/constant'
import React from 'react'
import Cards from './cards'

const CategorySection = () => {
	return (
		<section className='section '>
			{/* container */}
			<div className='flex flex-col items-center justify-center gap-20'>
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
