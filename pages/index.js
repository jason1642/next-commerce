import Head from 'next/head';
import Image from 'next/image';
import styles from '../components/layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import Layout from '../components/Layout';
import Home from '../components/homepage/homepage'


const name = 'Your Name';
export const siteTitle = 'Next.js Sample Website';



export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Index({ allPostsData }) {
  return (
    <>
      <Home />
      </>
  );
}