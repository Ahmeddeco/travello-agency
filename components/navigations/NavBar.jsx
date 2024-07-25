'use client'

import React from 'react'
import Btn from '../Btn'
import NavLinks from './NavLinks'
import { hero } from '@/constant'
import LogoiIcon from './LogoiIcon'
import ThemeSwitcher from '../theme/ThemeSwitcher'

const NavBar = () => {
	const handelClick = () => {
		console.log('hello')
	}
	return (
		<header className='flex items-center justify-between py-6 fixed top-0 left-0 right-0 container z-50'>
			{/* ------------------------------- Logo ------------------------------ */}
			<LogoiIcon />
			{/* ------------------------------- Nav ------------------------------- */}

			<NavLinks />
			{/* ------------------------------- Btn ------------------------------- */}
			<div className='flex gap-6'>
				<ThemeSwitcher />

				<Btn
					name='Sign up'
					colors='primary'
					icon={null}
					variants='bordered'
					size='md'
					handelClick={handelClick}
				/>
			</div>
		</header>
	)
}

export default NavBar
