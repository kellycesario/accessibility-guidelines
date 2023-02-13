import styles from "./styles.module.scss";
import Button from "@atoms/Button";
import { useReactToPrint } from "react-to-print";

export default function Printer({ componentRef }) {
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <Button
      isButton
      className={styles.printer__button}
      onClick={handlePrint}
      aria-label="Print your guidelines"
    >
      <svg
        width="45"
        height="40"
        viewBox="0 0 50 45"
        className={styles.printer__svg}
        aria-label="Print your guidelines"
      >
        <use href="#printer" xlinkHref="#printer" width="60" height="60" />
      </svg>
    </Button>
  );
}
