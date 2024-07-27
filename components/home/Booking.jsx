import { bookings } from '@/constant'
import BookingImageSection from './BookingImageSection'
import Image from 'next/image'

const Booking = () => {
	return (
		<section className='section '>
			{/* text */}
			<div className='max-w-1/2 w-[670px] flex flex-col items-start justify-center gap-12'>
				<div className='flex flex-col gap-6'>
					<h6 className='h6 text-default-500'>{bookings.h6}</h6>
					<h2 className='h2 font-volkhov capitalize text-pretty'>
						{bookings.h2}
					</h2>
				</div>
				{/* ul container */}
				<div className='flex flex-col gap-12'>
					{bookings.ul.map(({ h6, icon, p, i }) => (
						<div
							className='flex gap-6 items-start'
							key={i}
						>
							<Image
								src={icon}
								alt={h6}
							/>
							<div className='flex flex-col items-start justify-start'>
								<h6 className='h6'>{h6}</h6>
								<p className='p'>{p}</p>
							</div>
						</div>
					))}
				</div>
			</div>
			{/* image */}
			<div className='max-w-1/2 '>
				<BookingImageSection />
			</div>
		</section>
	)
}

export default Booking
