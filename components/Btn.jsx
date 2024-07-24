'use client'

import { Button, ButtonGroup } from '@nextui-org/button'
const Btn = ({ name, colors, icon, variants, handelClick, size }) => {
	return (
		<Button
			color={colors}
			variant={variants}
			onPress={handelClick}
			size={size}
			startContent={icon}
		>
			{name}
		</Button>
	)
}

export default Btn
