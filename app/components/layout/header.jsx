import ContactButton from '../ui/ContactButton';
import NavLink from '../ui/Navlink';

const Header = () => {
  return (
    <header className='bg-gray-100 p-4'>
      <nav className='container'>
        <ul className='flex gap-4'>
          <li>
            <NavLink href='/'>Home</NavLink>
          </li>
          <li>
            <NavLink href='/about'>About</NavLink>
          </li>
          <ContactButton />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
