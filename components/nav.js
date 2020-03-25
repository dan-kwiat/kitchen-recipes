import Link from 'next/link'

const Nav = () => (
  <nav className='fixed top-0 left-0 right-0 border-b bg-gray-300'>
    <ul className='flex justify-between items-center p-2 md:py-4 md:px-8 lg:px-24'>
      <li className='p-1'>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
      <li className='p-1'>
        <a
          href='https://github.com/dan-kwiat/kitchen-recipes'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            className='opacity-75 hover:opacity-100'
            src='/static/icons/github.svg'
            width={24}
            height={24}
          />
        </a>
      </li>
    </ul>
  </nav>
)

export default Nav
