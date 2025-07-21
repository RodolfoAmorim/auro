import { twMerge } from 'tailwind-merge'

interface InputRootProps {
	children: React.ReactNode
	className?: string
}

export function InputRoot({ children, className }: InputRootProps) {
	return (
		<div
			className={twMerge(
				'group w-full flex items-center justify-start border border-gray-300 rounded-lg px-4 gap-4 focus-within:border-dark-blue-500',
				className
			)}
		>
			{children}
		</div>
	)
}
