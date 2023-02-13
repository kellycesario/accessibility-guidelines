import styles from "./styles.module.scss";

export default function Svg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
      <defs>
        <symbol id="description" fill="none">
          <title>Description</title>
          <path
            d="M14 6V26"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 9H29C29.2652 9 29.5196 9.10536 29.7071 9.29289C29.8946 9.48043 30 9.73478 30 10V22C30 22.2652 29.8946 22.5196 29.7071 22.7071C29.5196 22.8946 29.2652 23 29 23H18"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 23H3C2.73478 23 2.48043 22.8946 2.29289 22.7071C2.10536 22.5196 2 22.2652 2 22V10C2 9.73478 2.10536 9.48043 2.29289 9.29289C2.48043 9.10536 2.73478 9 3 9H14"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.25 14H9.75"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 14V18.5"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </symbol>

        <symbol id="grid" viewBox="0 0 50 50" fill="none">
          <title>Grid</title>
          <path
            d="M21.875 8.37988H9.375V19.5531H21.875V8.37988Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M40.625 8.37988H28.125V19.5531H40.625V8.37988Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.875 25.1396H9.375V36.3128H21.875V25.1396Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M40.625 25.1396H28.125V36.3128H40.625V25.1396Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </symbol>

        <symbol id="list">
          <title>List</title>
          <path
            d="M17.1875 11.1731H42.1875"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.1875 22.3464H42.1875"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.1875 33.5195H42.1875"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M8.59375 23.743C9.4567 23.743 10.1562 23.1177 10.1562 22.3464C10.1562 21.575 9.4567 20.9497 8.59375 20.9497C7.73081 20.9497 7.03125 21.575 7.03125 22.3464C7.03125 23.1177 7.73081 23.743 8.59375 23.743Z" />
          <path d="M8.59375 12.5699C9.4567 12.5699 10.1562 11.9446 10.1562 11.1733C10.1562 10.4019 9.4567 9.77661 8.59375 9.77661C7.73081 9.77661 7.03125 10.4019 7.03125 11.1733C7.03125 11.9446 7.73081 12.5699 8.59375 12.5699Z" />
          <path d="M8.59375 34.9161C9.4567 34.9161 10.1562 34.2908 10.1562 33.5195C10.1562 32.7481 9.4567 32.1228 8.59375 32.1228C7.73081 32.1228 7.03125 32.7481 7.03125 33.5195C7.03125 34.2908 7.73081 34.9161 8.59375 34.9161Z" />
        </symbol>

        <symbol id="logo" viewBox="0 0 50 50" fill="transparent">
          <title>Logo</title>
          <path
            d="M4.11357 17.5385L24 3.09017L43.8864 17.5385L36.2905 40.9164H11.7095L4.11357 17.5385Z"
            stroke="white"
            strokeWidth="5"
          />
          <path
            d="M23.5 14L32.535 20.5643L29.084 31.1857H17.916L14.465 20.5643L23.5 14Z"
            fill="white"
          />
        </symbol>

        <symbol id="menu" viewBox="0 0 50 50" fill="none">
          <title>Menu</title>
          <rect
            x="0.5"
            y="0.5"
            width="47"
            height="47"
            rx="5.5"
            stroke="white"
            strokeOpacity="0.295743"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 18C16 17.4477 16.4477 17 17 17H31C31.5523 17 32 17.4477 32 18C32 18.5523 31.5523 19 31 19H17C16.4477 19 16 18.5523 16 18ZM16 24C16 23.4477 16.4477 23 17 23H31C31.5523 23 32 23.4477 32 24C32 24.5523 31.5523 25 31 25H17C16.4477 25 16 24.5523 16 24ZM17 29C16.4477 29 16 29.4477 16 30C16 30.5523 16.4477 31 17 31H31C31.5523 31 32 30.5523 32 30C32 29.4477 31.5523 29 31 29H17Z"
            fill="white"
          />
        </symbol>

        <symbol id="printer" viewBox="0 0 50 50" fill="none">
          <title>Printer</title>
          <path
            d="M10.5742 13.3318V6.86957H31.2532V13.3318"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M31.2532 24.9637H10.5742V35.9495H31.2532V24.9637Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.5738 28.841H4.75781V15.9166C4.75781 14.4949 6.01794 13.3317 7.55271 13.3317H34.2739C35.8086 13.3317 37.0688 14.4949 37.0688 15.9166V28.841H31.2528"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M30.6066 21.0864C31.6773 21.0864 32.5453 20.2184 32.5453 19.1477C32.5453 18.077 31.6773 17.209 30.6066 17.209C29.5359 17.209 28.668 18.077 28.668 19.1477C28.668 20.2184 29.5359 21.0864 30.6066 21.0864Z" />
        </symbol>

        <symbol id="tool" fill="none">
          <title>Tool</title>
          <path
            d="M27.5 21.9124V10.0874C27.499 9.90938 27.4512 9.73475 27.3612 9.58113C27.2712 9.42751 27.1423 9.30033 26.9875 9.21241L16.4875 3.27491C16.3393 3.18934 16.1711 3.14429 16 3.14429C15.8289 3.14429 15.6607 3.18934 15.5125 3.27491L5.0125 9.21241C4.85769 9.30033 4.72879 9.42751 4.63882 9.58113C4.54884 9.73475 4.50096 9.90938 4.5 10.0874V21.9124C4.50096 22.0904 4.54884 22.2651 4.63882 22.4187C4.72879 22.5723 4.85769 22.6995 5.0125 22.7874L15.5125 28.7249C15.6607 28.8105 15.8289 28.8555 16 28.8555C16.1711 28.8555 16.3393 28.8105 16.4875 28.7249L26.9875 22.7874C27.1423 22.6995 27.2712 22.5723 27.3612 22.4187C27.4512 22.2651 27.499 22.0904 27.5 21.9124Z"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 20.5C18.4853 20.5 20.5 18.4853 20.5 16C20.5 13.5147 18.4853 11.5 16 11.5C13.5147 11.5 11.5 13.5147 11.5 16C11.5 18.4853 13.5147 20.5 16 20.5Z"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </symbol>
      </defs>
    </svg>
  );
}
