import NavLink from '../components/ui/Navlink';

const CompanyLayout = ({ children }) => {
  return (
    <section className='py-24'>
      <div className='container flex'>
        <div className='overflow-y-auto border-r border-gray-300 py-6 pr-12'>
          <nav className='flex flex-col'>
            <ul role='list' className='flex flex-1 flex-col gap-y-4'>
              <li>
                <NavLink href='/about'>About</NavLink>
              </li>
              <li>
                <NavLink href='/team'>Team</NavLink>
              </li>
              <li>
                <NavLink href='/contact'>Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className='grow ml-12 p-6'>{children}</div>
      </div>
    </section>
  );
};

export default CompanyLayout;
