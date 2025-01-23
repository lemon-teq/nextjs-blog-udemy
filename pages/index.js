import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout, {siteTitle} from "../components/Layout";

import Link from "next/link";
import utilStyle from "../styles/utils.module.css";
import { getPostsData } from "../lib/post";

//SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData(); //id, title, date, thumbnail
  console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}




export default function Home({ allPostsData }) {
  return (
  <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className={utilStyle.headingMd}>
      <p>
        日本のお笑いタレント/太田プロダクション所属/1977年2月2日生まれ/妻はタレントの大沢あかね
      </p>
    </section>

    <section>
      <h2 className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>📝劇団ひとりのブログ</h2>
      <div className={styles.grid}>
        {allPostsData.map(({ id, title, date, thumbnail}) => (
          <article key={id}>
            <Link href={`/posts/${id}`}>
              <img src={`${thumbnail}`} className={styles.thumbnailImage} /> 
            </Link>
            <Link href={`/posts/${id}`} legacyBehavior>
              <a className={utilStyle.boldText}>{title}</a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>{date}</small>
          </article>
        ))}
      </div>
    </section>
  </Layout>
  );
}
