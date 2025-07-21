import type { ElementType, LabelHTMLAttributes } from 'react'

interface InputIconProps extends LabelHTMLAttributes<HTMLLabelElement> {
	icon: ElementType
}

export function InputIcon({ icon: Icon, ...rest }: InputIconProps) {
	return (
		<label
			htmlFor={rest.htmlFor}
			className='flex items-center justify-center group-focus-within:text-dark-blue-500'
			{...rest}
		>
			<Icon className='size-6' />
		</label>
	)
}
