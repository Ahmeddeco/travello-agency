import Btn from '@/components/Btn'
import { Button } from '@nextui-org/button'

export default function Home() {
	return (
		<section className='section flex-col gap-20'>
			<h1 className='text-9xl text-center font-poppins'>Home Page</h1>
			<Btn name='btn'/>
		</section>
	)
}
