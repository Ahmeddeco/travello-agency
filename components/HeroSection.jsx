import { hero } from '@/constant'
import Image from 'next/image'
import React from 'react'
import Btn from './Btn'

const HeroSection = () => {
	return (
		<section className='section'>
			{/* Text */}

			<div className='flex flex-col justify-between items-start w-5/12 gap-10'>
				<h4 className='h4 text-primary'>{hero.h4}</h4>
				<h1 className='h1'>{hero.h1}</h1>
				<p className='p'>{hero.p}</p>

				{/* btn */}

				<div className='flex gap-8'>
					<Btn
						colors={hero.btn1.color}
						title={hero.btn1.title}
						size={hero.btn1.size}
					/>
					<Btn
						colors={hero.btn2.color}
						title={hero.btn2.title}
						icon={hero.btn2.icon}
						startContent={hero.btn2.icon}
						size={hero.btn2.size}
					/>
				</div>
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
