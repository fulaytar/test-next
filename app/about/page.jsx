import Link from 'next/link';

const Page = () => {
  return (
    <div>
      <h1>It`s your second page , name is About</h1>
      <p>
        Go next path{' '}
        <Link
          href='about/team'
          className=' text-red-500 font-bold  hover:text-red-700
        '
        >
          Team
        </Link>
      </p>
    </div>
  );
};
export default Page;
