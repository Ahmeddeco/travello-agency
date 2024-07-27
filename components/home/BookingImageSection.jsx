import { bookings } from '@/constant'
import Image from 'next/image'
import React from 'react'

const BookingImageSection = () => {
	return (
		<div className='flex flex-col gap-4 bg-white rounded-3xl p-8 shadow-2xl shadow-primary '>
			{/* image */}
			<Image
				src={bookings.SideImageCard.img}
				alt='bookings'
			/>

			{/* text */}
			<h6 className='h6'>{bookings.SideImageCard.h6}</h6>
			{/* p container flex */}
			<div className='flex gap-8'>
				<p className='text-default-600'>{bookings.SideImageCard.date}</p>
				<p className='text-default-600'>{bookings.SideImageCard.by}</p>
			</div>
			{/* icons container flex */}
			<div className='flex gap-12 px-4'>
				{bookings.SideImageCard.icons.map(({ id, img }) => (
					<Image
						src={img}
						key={id} alt={id}
					/>
				))}
			</div>
			{/* last line of icons container */}
			<div className='flex items-center justify-between'>
				{/* heart icon container */}
				<div className='flex gap-4 items-end'>
					<Image
						src={bookings.SideImageCard.buldingIcon}
						alt='bulding icon'
					/>
					<p className='p text-default-600 text-end'>
						{bookings.SideImageCard.buldingPara}
					</p>
				</div>
				{/* heart icon */}
				<Image
					src={bookings.SideImageCard.heartIcon}
					alt='heart icon'
				/>
			</div>
		</div>
	)
}

export default BookingImageSection
