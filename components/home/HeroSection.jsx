import { hero } from '@/constant'
import Image from 'next/image'
import Btn from '../Btn'
const HeroSection = () => {
	return (
		<section className='section'>
			{/* Text */}

			<div className='flex flex-col justify-between items-start w-5/12 gap-10'>
				<p className='h6 text-primary'>{hero.h6}</p>
				<h1 className='h1 font-volkhov relative'>
					{hero.h1}
					<Image
						src={hero.underlineIcon}
						alt='underline icon'
						className='absolute top-16 -right-28 -z-50'
					/>
				</h1>
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
