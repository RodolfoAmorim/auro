import {
	BellIcon,
	HomeIcon,
	MagnifyingGlassIcon,
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { Avatar } from '../../components/avatar'
import { Input } from '../../components/input'
import { Sidebar } from '../../components/sidebar'

const menu = [
	{ name: 'Transações', path: '/transactions' },
	{ name: 'Orçamentos', path: '/budgets' },
	{ name: 'Cartões', path: '/cards' },
	{ name: 'Metas', path: '/goals' },
	{ name: 'Relatórios', path: '/reports' },
	{ name: 'Dividas', path: '/debts' },
]

export function Dashboard() {
	return (
		<main className='w-full min-h-svh h-svh flex items-center justify-center'>
			<Sidebar />

			<section className='flex-1 h-full'>
				<header className='h-20 flex items-center justify-between gap-6 px-6'>
					<ul className='flex items-center justify-start gap-6'>
						<Link to='/'>
							<HomeIcon className='size-6' />
						</Link>

						{menu.map(item => (
							<li
								key={item.path}
								className='font-medium tracking-wide leading-relaxed border-b-2 border-transparent hover:border-gray-300 transition duration-200'
							>
								<Link to={item.path}>{item.name}</Link>
							</li>
						))}
					</ul>

					<div className='flex items-center justify-end gap-6 flex-1'>
						<Input.Root className='bg-white border-0 w-sm'>
							<Input.Icon icon={MagnifyingGlassIcon} htmlFor='search' />
							<Input.Field placeholder='Buscar...' id='search' className='w-auto' />
						</Input.Root>

						<button
							type='button'
							className='size-12 flex items-center justify-center bg-gray-200 text-gray-800 rounded-full cursor-pointer border border-transparent hover:border-gray-300 transition-colors'
						>
							<BellIcon className='size-6' />
						</button>

						<Avatar />
					</div>
				</header>
			</section>
		</main>
	)
}
