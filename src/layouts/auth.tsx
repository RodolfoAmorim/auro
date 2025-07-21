import { Outlet } from "react-router-dom"

export function AuthLayout() {
  return(
    <main className='flex h-svh items-center justify-center'>
      <Outlet />
    </main>
  )
}