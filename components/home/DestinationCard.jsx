import { destinations } from '@/constant'
import Image from 'next/image'
import React from 'react'

const DestinationCard = () => {
	return (
		<div className='flex  gap-8 items-center justify-between'>
			{destinations.desCards.map(({ city, location, price, pic }) => (
				<div
					className='flex flex-col gap-8'
					key={city}
				>
					<Image
						src={pic}
						alt='city'
					/>
					{/* text container */}
					<div className='flex  flex-col px-6'>
						{/* city container */}
						<div className='flex items-center justify-between'>
							<p className='p'>{city}</p>
							<p className='p'>{price}</p>
						</div>
						{/* location container */}
						<div className='flex gap-6 items-center '>
							<Image
								src={destinations.Navigation}
								alt='Navigation'
							/>
							<p className='p'>{location}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default DestinationCard
