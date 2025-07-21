import { Cog6ToothIcon, PlusIcon } from '@heroicons/react/24/outline'
import { Avatar } from './avatar'

export function Sidebar() {
	return (
		<nav className='w-[6rem] h-full flex flex-col items-center justify-start gap-6'>
			<div className='flex items-center justify-center w-full h-20'>
				<span className='text-2xl font-black tracking-tight text-dark-blue-700'>
					Auro
				</span>
			</div>

			<div className='flex-1 flex flex-col items-center justify-start gap-6'>
				{Array.from({ length: 3 }).map((_, i) => (
					<Avatar key={i} />
				))}

				<button
					type='button'
					className='size-9 flex items-center justify-center bg-gray-200 text-gray-800 rounded-full'
				>
					<PlusIcon className='size-4' />
				</button>
			</div>

			<div className='h-12 mb-6'>
				<button
					type='button'
					className='size-12 flex items-center justify-center bg-gray-200 text-gray-800 rounded-full'
				>
					<Cog6ToothIcon className='size-6' />
				</button>
			</div>
		</nav>
	)
}
