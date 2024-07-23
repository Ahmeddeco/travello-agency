import { Logo, navLinks } from '@/constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
	return (
		<header className='flex items-center justify-between p-6 fixed top-0 left-0 right-0 container'>
			{/* ------------------------------- Logo ------------------------------ */}
			<Link href='/'>
				<Image
					src={Logo}
					alt='logo'
				/>
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
			<div className=''>
BTN
			</div>
		</header>
	)
}

export default NavBar
