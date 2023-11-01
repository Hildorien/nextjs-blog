import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import CustomDate from '../components/date';
 

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData    
    },
  };
}

export default function Home({ allPostsData }) {

  return (
    <Layout home>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <CustomDate dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <footer>
            <CustomDate dateString={new Date().toISOString()} />
      </footer>
    </Layout>
  );
}