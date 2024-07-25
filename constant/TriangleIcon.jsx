import Image from 'next/image'
import triangleIcon from '@/public/icons/playTriangle.png'

const TriangleIcon = () => {
	return (
		<Image
			src={triangleIcon}
			alt='triangle'
			width={48}
			height={48}
		/>
	)
}

export default TriangleIcon
