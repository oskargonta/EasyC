import { FunctionComponent } from "react";
import styles from "./Button.module.css";

const Button: FunctionComponent = () => {
  return (
    <section className={styles.button}>
      <div className={styles.callToAction}>
        <div className={styles.SpecialDiv}>
          {/* <h1 className={styles.jakToDziaa}>Jak to działa?</h1> */}
          <h1 className={styles.jakToDziaa}>Jak to działa?</h1>

        
        
        <div className={styles.settingsSection}>
          <div className={styles.signalCellularAltBlackdp}>
            <div className={styles.webBlackdp}>
              <b className={styles.scheduleBlackdp}>1</b>
            </div>
            <div className={styles.todayBlackdp}>
              <b className={styles.skontaktujSiZNami}>Skontaktuj się z nami</b>
              <div className={styles.udostpniamyObiektyNa}>
                Udostępniamy obiekty na wszystkie portale do bezpośredniej
                rezerwacji online po weryfikacji.
              </div>
            </div>
          </div>
          <div className={styles.signalCellularAltBlackdp1}>
            <div className={styles.wrapper}>
              <b className={styles.b}>2</b>
            </div>
            <div className={styles.zaKontoParent}>
              <b className={styles.zaKonto}>Załóż konto</b>
              <div className={styles.wprowadDaneSwoichObiektwContainer}>
                <p className={styles.wprowadDaneSwoichObiektw}>
                  Wprowadź dane swoich obiektów
                </p>
                <p className={styles.zdjciaOpisyCeny}>
                  zdjęcia, opisy, ceny, kalendarz dostępności.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.signalCellularAltBlackdp2}>
            <div className={styles.container}>
              <b className={styles.b1}>3</b>
            </div>
            <div className={styles.zarzdzajRezerwacjamiParent}>
              <b className={styles.zarzdzajRezerwacjami}>
                Zarządzaj rezerwacjami
              </b>
              <div className={styles.automatycznieGenerowanePotwi}>
                Automatycznie generowane potwierdzenie rezerwacji przesyłane
                zarówno do Państwa, jak i do gościa.
              </div>
            </div>
          </div>
          <div className={styles.signalCellularAltBlackdp3}>
            <div className={styles.frame}>
              <b className={styles.b2}>4</b>
            </div>
            <div className={styles.staaNiskaProwizjaParent}>
              <b className={styles.staaNiskaProwizja}>Stała niska prowizja</b>
              <div className={styles.prowizjaOdRezerwacji}>
                Prowizja od rezerwacji bez miesięcznych opłat dla wszystkich
                zewnętrzych portali - 12%!!!
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Button;
