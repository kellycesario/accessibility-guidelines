import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { useEffect } from 'react';
import InputField from '@atoms/InputField';
import Label from '@atoms/Label';
import styles from './styles.module.scss';
import Image from 'next/image';

export default function Guideline({
  isClear,
  setIsClear,
  guideline,
  item,
  className,
  type,
  image,
  category,
  isStatic = false,
}) {
  const [checked, setChecked] = useLocalStorage('checkbox', false);
  const handleChange = () => {
    setIsClear(false);
    if (!checked) {
      localStorage.setItem(category + item, JSON.stringify(guideline));
    } else {
      localStorage.removeItem(category + item);
    }
    setChecked(!checked);
  };
  useEffect(() => {
    if (isClear) {
      setChecked(false);
    }
  }, [isClear]);
  useEffect(() => {
    const check = localStorage.getItem(category + item);
    if (check === null) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  }, [checked]);

  const classList = [styles.guideline];
  classList.push(styles[`guideline--${type}`]);

  return (
    <form
      className={`${classList.join(' ')}  ${
        !checked ? `''` : `${styles.guideline__mt}`
      } ${className}`}
      tabIndex="0"
    >
      <div>
        <InputField
          isCheckbox
          id={category + item}
          checked={checked}
          onChange={handleChange}
          text={guideline}
        />
      </div>
      {type === 'grid' && (
        <Image
          width={300}
          height={157}
          src={!isStatic ? 'https:' + image : image}
          alt=""
          className={styles.guideline__image}
        />
      )}
      <Label
        id={category + item}
        className={type === 'grid' && 'label--center'}
      >
        {guideline}
      </Label>
    </form>
  );
}
