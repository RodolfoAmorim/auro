import {
  EnvelopeIcon,
  EyeSlashIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline'

export function SignIn() {
  return (
    <section className='absolute inset-0 bg-white p-6 flex items-center justify-center flex-col text-center max-w-xl mx-auto md:inset-auto md:rounded-3xl md:p-12 md:shadow-lg md:shadow-gray-200/30'>
      <div className='flex-1 w-full flex flex-col items-center justify-center md:mb-12'>
        <span className='text-5xl font-black tracking-tight text-gray-950'>
          Auro
        </span>

        <div className='my-12'>
          <h1 className='text-xl font-semibold tracking-tight leading-relaxed mb-2'>
            Bem-vindo(a) de volta!
          </h1>
          <p className='text-base text-gray-500 leading-snug'>
            Entre para continuar organizando suas finanças de forma simples e
            eficiente.
          </p>
        </div>

        <form action='' className='w-full flex flex-col gap-4'>
          <div className='group w-full flex items-center justify-start border border-gray-300 rounded-lg px-4 gap-4 focus-within:border-dark-blue-500'>
            <label
              htmlFor='email'
              className='flex items-center justify-center group-focus-within:text-dark-blue-500'
            >
              <EnvelopeIcon className='size-6' />
            </label>

            <input
              type='text'
              id='email'
              placeholder='Informe seu e-mail'
              className='block flex-1 h-12 outline-none'
            />
          </div>

          <div className='group w-full flex items-center justify-start border border-gray-300 rounded-lg px-4 gap-4 focus-within:border-dark-blue-500'>
            <label
              htmlFor='password'
              className='flex items-center justify-center group-focus-within:text-dark-blue-500'
            >
              <LockClosedIcon className='size-6' />
            </label>

            <input
              type='password'
              id='password'
              placeholder='Informe sua senha'
              className='block flex-1 h-12 outline-none'
            />

            <button type='button' className='size-6 text-gray-400'>
              <EyeSlashIcon className='size-6' />
            </button>
          </div>

          <span className='ml-auto text-sm tracking-wide leading-snug text-dark-blue-500 font-medium'>
            Esqueci minha senha
          </span>

          <button
            type='button'
            className='w-full h-12 bg-dark-blue-500 rounded-lg text-gray-50 font-medium tracking-wider mt-2 hover:bg-dark-blue-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-dark-blue-500 focus:ring-offset-2 focus:ring-offset-white'
          >
            Entrar
          </button>
        </form>
      </div>

      <p className='text-sm tracking-wide leading-relaxed'>
        Não possui uma conta?{' '}
        <span className='underline underline-offset-2 text-dark-blue-500 font-medium'>
          Cadastre-se
        </span>
      </p>
    </section>
  )
}
