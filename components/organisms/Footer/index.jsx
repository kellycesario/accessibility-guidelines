import Text from '@atoms/Text';
import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import useContentful from '../../../hooks/useContentful';
import contentfulTypes from '../../../hooks/contentfulTypes';

export default function Footer() {
  const { getEntries } = useContentful();
  const [footerCopywrite, setFooterCopywrite] = useState('');
  const [footerRights, setFooterRights] = useState('');

  useEffect(() => {
    const getContentful = async () => {
      const entries = await getEntries({
        content_type: contentfulTypes.globals,
        select: 'fields',
      });
      setFooterCopywrite(entries[0].footerCopywrite);
      setFooterRights(entries[0].rights);
    };
    getContentful();
  }, []);

  return (
    <footer className={styles.footer}>
      <Text>{footerCopywrite}</Text>
      <span className={styles.footer__divider}>-</span>
      <Text>{footerRights}</Text>
    </footer>
  );
}
