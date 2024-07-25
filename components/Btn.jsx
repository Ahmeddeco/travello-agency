'use client'

import { Button, ButtonGroup } from '@nextui-org/button'
const Btn = ({ title, colors, variants, handelClick, size, startContent }) => {
	return (
		<Button
			color={colors}
			variant={variants}
			onPress={handelClick}
			size={size}
			startContent={startContent}
		>
			{title}
		</Button>
	)
}

export default Btn
