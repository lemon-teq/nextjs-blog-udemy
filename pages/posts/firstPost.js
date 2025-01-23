import Link from "next/link";
import Head from "next/head";

Link

export default function firstPost() {
  return (
    <div>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <Link href="/">Return</Link>
    </div>
  );
}