import React, { useState } from 'react'
import { FakebookTitle, FakebookLogo } from '../icons'
import Register from './Register'

function Login() {
	const [resetForm, setResetForm] = useState(false)
	const hdlClose = () => {
		console.log('dialog close...')
		setResetForm(prv=>!prv)
	}
	return (
		<>
			<div className="h-[700px] pt-20 pb-28">
				<div className="p-5 mx-auto max-w-screen-lg min-h-[540px] flex justify-between max-md:flex-col">
					<div className='flex flex-col max-md:items-center max-md:text-center gap-4 mt-20 basis-3/5 '>
						<div className="text-4xl"> <FakebookTitle /> </div>
						<h2 className='text-[30px] max-md:text-[28px] leading-8 mt-3 w-[514px]'>
							Fakebook helps you connect and share with people in your life.
						</h2>
					</div>
					<div className='flex flex-1 bg-white'>
						<div className="card bg-base-100 w-full h-[350px] shadow-xl mt-8">
							<form>
								<div className="card-body">
									<input type='text'
										className='input w-full'
										placeholder='E-mail or Phone number'
									/>
									<input type='password'
										className='input w-full'
										placeholder='password'
									/>
									<button className='btn btn-primary text-xl'>Login</button>
									<p className="text-center cursor-pointer opacity-70">Forgotten password</p>
									<div className="divider my-0"></div>
									<button type="button" className='btn btn-secondary text-lg'
										onClick={()=>document.getElementById('register-form').showModal()}
									>Create new account</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<dialog id="register-form" className="modal" onClose={hdlClose}>
				<div className="modal-box">
					<Register resetForm={resetForm}/>
					<form method="dialog">
						<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
					</form>
				</div>
			</dialog>
		</>
	)
}

export default Login