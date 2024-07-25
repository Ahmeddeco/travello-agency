import { category } from '@/constant'
import Image from 'next/image'

const Cards = () => {
	return (
		<div className='grid items-center justify-center grid-cols-1 tab:grid-cols-2 desk:grid-cols-4 gap-10 h-full'>
			{category.cards.map(({ img, p, title }) => (
				<div
					className='flex flex-col gap-4 items-center justify-center  p-8 rounded-xl '
					key={title}
				>
					<Image
						src={img}
						alt='card'
					/>
					<h6 className='h6'>{title}</h6>
					<p className='p text-center'>{p}</p>
				</div>
			))}
		</div>
	)
}

export default Cards
