import { Link } from 'react-router-dom'

export function Header() {
  return (
    <Link to="/">
      <header className="w-full py-5 flex align-center justify-center bg-gray-700 border-b border-gray-600 ">
        <h1 className='text-green-500 text-2xl font-bold uppercase'>Aprendendo a pogramar | <span className='text-white'>React</span></h1>
      </header>
    </Link>
  )
}
