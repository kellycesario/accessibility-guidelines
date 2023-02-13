import styles from './styles.module.scss';
import Nav from '@molecules/Nav';
import Hero from '@molecules/Hero';
import { useEffect, useState } from 'react';
import useContentful from '../../../hooks/useContentful';
import contentfulTypes from '../../../hooks/contentfulTypes';
import { useRouter } from 'next/router';

export default function Header() {
  const [heroTitle, setHeroTitle] = useState('') 
  const [heroDescription, setHeroDescription] = useState('') 
  const [contentfulEntries, setContentfulEntries] = useState([])

  const { getEntries } = useContentful()
  const router = useRouter()
  useEffect(() => {
    if(contentfulEntries.length > 0) {
      const entry = contentfulEntries.find(entry => entry.pathName == router.pathname)
      setHeroTitle(entry.title)
      setHeroDescription(entry.description)
    }
  }, [router.pathname, contentfulEntries])

  useEffect(() => {
    const getContentful = async() => {
      const entries = await getEntries({content_type: contentfulTypes.hero, select: "fields"})
      setContentfulEntries(entries)
    }
    getContentful()
  }, [])

  return (
    <header className={styles.header}>
      <Nav />
      <article className={styles.header__box}>
        <Hero className={styles.hero} title={heroTitle} description={heroDescription} />
      </article>
    </header>
  );
}
