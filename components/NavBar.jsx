import { Logo, navLinks } from '@/constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
	return (
		<header className='flex items-center justify-between p-6 fixed top-0 left-0 right-0 container'>
			{/* ------------------------------- Logo ------------------------------ */}
			<Link href='/'>
				<h1 className='text-foreground font-poppins font-black text-2xl'>Travell <span className='text-primary font-poppins font-black text-2xl'>O</span></h1>
			</Link>
			{/* ------------------------------- Nav ------------------------------- */}
			<nav>
				<ul className='flex gap-6'>
					{navLinks.map(({ href, name }) => (
						<li key={name}>
							<Link href={href}>{name}</Link>
						</li>
					))}
				</ul>
			</nav>
			{/* ------------------------------- Btn ------------------------------- */}
			<div className=''>BTN</div>
		</header>
	)
}

export default NavBar
