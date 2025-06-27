import DefaultImg from '../assets/default-avatar.png'
import { DropdownArrow } from '../icons'

function Avatar(props) {
	const {imgSrc, menu, bottom, right, ...resProps} = props
	return (
		<div className='avatar items-center cursor-pointer'>
			<div {...resProps}>
				<img src={imgSrc ? imgSrc : DefaultImg} alt="avatar" />
			</div>
			{ menu && 
				<DropdownArrow className='absolute -bottom-1 -right-2 w-5' style={{ right : right, bottom: bottom }}/>
			}
		</div>
	)
}

export default Avatar