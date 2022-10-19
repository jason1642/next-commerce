import Link from 'next/link';
import Image from 'next/image'
export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
        <Image src="/images/profile.jpg" height='300px' width='300px' alt="Jason" />

      </h2>
    </>
  );
}