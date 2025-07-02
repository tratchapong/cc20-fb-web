import { Navigate } from 'react-router'

function RedirectToHome() {
	return (
		<Navigate to="/" replace />
	)
}

export default RedirectToHome