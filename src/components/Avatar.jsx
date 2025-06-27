import DefaultImg from '../assets/default-avatar.png'

function Avatar(props) {
	const {imgSrc, menu, ...resProps} = props
	return (
		<div className='avatar items-center cursor-pointer'>
			<div {...resProps}>
				<img src={imgSrc ? imgSrc : DefaultImg} alt="avatar" />
			</div>
		</div>
	)
}

export default Avatar