import { getPostBySlug } from '@/app/lib/posts';

const Page = async ({ params }) => {
  const { slug } = params;
  //показуватиме у консолі відповідно до path/ динамічний params

  const { content, frontmatter } = await getPostBySlug(slug);
  return (
    <section className='py-24'>
      <div className='container'>
        <header className='rounded bg-sky-600 p-8'>
          <h1 className='font-serif text-3xl'>{frontmatter.title}</h1>
          <p className='text-sm font-light uppercase leading-3'>
            {frontmatter.author}
          </p>
        </header>

        <main className='prose mt-12'>{content}</main>
      </div>
    </section>
  );
};

export default Page;
