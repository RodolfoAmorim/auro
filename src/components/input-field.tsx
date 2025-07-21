import type { InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {}

export function InputField({
	className,
	type = 'text',
	...rest
}: InputFieldProps) {
	return (
		<input
			type={type}
			placeholder='Informe seu e-mail'
			className={twMerge('block flex-1 h-12 outline-none', className)}
			{...rest}
		/>
	)
}
