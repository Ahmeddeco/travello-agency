'use client'

import { SunIcon } from './SunIcon'
import { MoonIcon } from './MoonIcon'
import { Switch } from '@nextui-org/react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ThemeSwitcher = () => {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null

	return (
		<Switch
			defaultSelected
			size='lg'
			color='primary'
			startContent={<SunIcon />}
			endContent={<MoonIcon />}
			onClick={() => (theme === 'light' ? setTheme('dark') : setTheme('light'))}
		/>
	)
}

export default ThemeSwitcher
