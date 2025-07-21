import { Sidebar } from '../../components/sidebar'

export function Dashboard() {
	return (
		<main className='w-full min-h-svh h-svh flex items-center justify-center'>
			<Sidebar />

			<section className='flex-1 h-full'>
				<h1>content</h1>
			</section>
		</main>
	)
}
