import Link from 'next/link'

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
      <li>
        <a
          className='github-link'
          href='https://github.com/dan-kwiat/kitchen-recipes'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src='/static/icons/github.svg'
            width={24}
            height={24}
          />
        </a>
      </li>
    </ul>

    <style jsx>{`
      nav {
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        border-bottom: 1px solid whitesmoke;
        background: rgba(0,0,0,.02);
      }
      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      nav > ul {
        padding: .2em 2em;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      .github-link {
        opacity: 0.8;
        height: 24px;
      }
      .github-link:hover {
        opacity: 1;
      }
    `}</style>
  </nav>
)

export default Nav
