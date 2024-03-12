import { FunctionComponent } from "react";
import styles from "./Header.module.css";


const openInNewTab = (url: string | URL | undefined) => {
  window.open(url, "_blank", "noreferrer");
};
const Header: FunctionComponent = () => {
  return (
    
    <section className={styles.textFrameLogo}>
      <header className={styles.rectangleShape}>
        <div className={styles.frameFocusOnlineWrapper}>
          <div className={styles.frameFocusOnline}>
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group.svg"
            />
            <img
              className={styles.groupIcon1}
              loading="lazy"
              alt=""
              src="/group-1.svg"
            />
          </div>
        </div>
        <button className={styles.textLabel} onClick={() => window.open("https://logowanie.easychannel.pl/","_self")}>
            <div className={styles.zarejstrujSi}>Zaloguj się</div>
          </button>
      </header>
    </section>
  );
};

export default Header;
