import { destinations } from '@/constant'
import React from 'react'
import DestinationCard from './DestinationCard'
import Image from 'next/image'

const Destinations = () => {
	return (
		<section className='section relative'>
			<div className='flex flex-col gap-8 items-center justify-center'>
				<h6 className='h6'>{destinations.h6}</h6>
				<h2 className='h2'>{destinations.h2}</h2>
				<DestinationCard />
				<Image
					src={destinations.zigzagIcon}
					alt='zigzag'
					className='absolute bottom-36 rotate-6 right-6 -z-50'
				/>
			</div>
		</section>
	)
}

export default Destinations
