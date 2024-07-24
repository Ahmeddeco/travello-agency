import { navLinks } from '@/constant'
import Link from 'next/link'
import React from 'react'

const NavLinks = () => {
	return (
		<nav>
			<ul className='flex gap-6'>
				{navLinks.map(({ href, name }) => (
					<li key={name}>
						<Link
							href={href}
							className='font-poppins text-foreground text-sm font-medium capitalize'
						>
							{name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default NavLinks
