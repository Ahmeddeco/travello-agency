import Link from 'next/link'
import React from 'react'

const LogoiIcon = () => {
	return (
		<Link href='/'>
			<h1 className='text-foreground font-poppins font-black text-2xl '>
				Travell
				<span className='text-primary font-poppins font-black text-2xl'>O</span>
			</h1>
		</Link>
	)
}

export default LogoiIcon
