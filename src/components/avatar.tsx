export function Avatar() {
  return (
    <button type="button" className="size-12 flex items-center justify-center overflow-hidden rounded-full bg-dark-blue-500 text-white relative">
      <span className="font-medium tracking-wide">AC</span>
      <img src="/src/assets/img/users/user-1.png" alt="" className="absolute inset-0 object-cover" />
    </button>
  )
}