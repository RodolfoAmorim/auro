import { twMerge } from 'tailwind-merge'

interface InputActionProps {
	children: React.ReactNode
	className?: string
	onClick?: () => void
}

export function InputAction({
	children,
	className,
	onClick,
}: InputActionProps) {
	return (
		<button
			type='button'
			className={twMerge('size-6 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors', className)}
			onClick={onClick}
		>
			{children}
		</button>
	)
}
