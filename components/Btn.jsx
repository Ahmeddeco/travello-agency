import { Button, ButtonGroup } from '@nextui-org/button'
const Btn = ({ name }) => {
	return (
		<Button
			color='secondary'
			className='text-foreground-100 '
		>
			{name}
		</Button>
	)
}

export default Btn
