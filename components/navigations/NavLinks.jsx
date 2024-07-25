'use client'

import { navLinks } from '@/constant'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLinks = () => {
	const pathname = usePathname()

	return (
		<nav>
			<ul className='flex gap-6'>
				{navLinks.map(({ href, name }) => (
					<li key={name}>
						<Link
							href={href}
							className={`font-poppins ${
								pathname === href ? 'text-primary' : 'text-foreground'
							}  text-lg font-medium capitalize`}
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
