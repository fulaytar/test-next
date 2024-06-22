import ContactButton from '../ui/ContactButton';
import NavLink from '../ui/Navlink';
import ThemeButton from '../ui/themeButton';

const Header = () => {
  return (
    <header className='p-4'>
      <nav className='container flex items-center justify-between'>
        <ul className='flex gap-4'>
          <li>
            <NavLink href='/'>Home</NavLink>
          </li>
          <li>
            <NavLink href='/about'>About</NavLink>
          </li>
          <li>
            <NavLink href='/posts/learn-nextjs'>Blog</NavLink>
          </li>
        </ul>
        <ThemeButton />
      </nav>
    </header>
  );
};

export default Header;
