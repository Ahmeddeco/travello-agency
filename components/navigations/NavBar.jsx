'use client'

import Btn from '../Btn'
import NavLinks from './NavLinks'
import LogoiIcon from './LogoiIcon'
import ThemeSwitcher from '../theme/ThemeSwitcher'

const NavBar = () => {
	const handelClick = () => {}

	return (
		<header className='flex items-center justify-between py-6 fixed top-0 left-0 right-0 container z-50 '>
			{/* ------------------------------- Logo ------------------------------ */}
			<LogoiIcon />
			{/* ------------------------------- Nav ------------------------------- */}

			<NavLinks />
			{/* ------------------------------- Btn ------------------------------- */}
			<div className='flex gap-6'>
				<ThemeSwitcher />

				<Btn
					title='Sign up'
					colors='primary'
					variants='bordered'
					size='md'
					handelClick={handelClick}
				/>
			</div>
		</header>
	)
}

export default NavBar
