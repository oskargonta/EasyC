import { FunctionComponent } from "react";
import IncreaseSales from "./IncreaseSales";
import styles from "./ContactUsFrame.module.css";

const ContactUsFrame: FunctionComponent = () => {
  return (
    <section className={styles.contactUsFrame}>
      <div className={styles.collaborationWithUs}>
        <h1 className={styles.korzyciWsppracyZ}>Korzyści współpracy z nami</h1>
        <div className={styles.automateWork}>
          <IncreaseSales
            settingsBlack24dp1="/settings-black-24dp-1.svg"
            automatyzacjaPracy="Automatyzacja pracy"
            zmianaCenIDostpnociObiekt="Zmiana cen i  dostępności obiektów jednocześnie na ponad 50 portalach"
          />
          <IncreaseSales
            settingsBlack24dp1="/signal-cellular-alt-black-24dp-1.svg"
            automatyzacjaPracy="Zwiększenie sprzedaży"
            zmianaCenIDostpnociObiekt="Wielokanałowa sprzedaż zwiększa twoje szanse na zdobycie nowych gości"
          />
          <IncreaseSales
            settingsBlack24dp1="/web-black-24dp-1.svg"
            automatyzacjaPracy="Zarządzanie w jednym miejscu"
            zmianaCenIDostpnociObiekt="Centralne zarządzanie obrazami, tekstami, cenami i wieloma innymi elementami"
          />
          <IncreaseSales
            settingsBlack24dp1="/schedule-black-24dp-1.svg"
            automatyzacjaPracy="Oszczędność czasu"
            zmianaCenIDostpnociObiekt="Jedna umowa umożliwi Ci sprzedaż na wszystkich ważnych portalach"
          />
          <IncreaseSales
            settingsBlack24dp1="/today-black-24dp-1.svg"
            automatyzacjaPracy="Brak dublowania rezerwacji"
            zmianaCenIDostpnociObiekt="Zawsze aktualny kalendarz przy którym nie musisz martwić się overbookingiem"
          />
          <IncreaseSales
            settingsBlack24dp1="/attach-money-black-24dp-1.svg"
            automatyzacjaPracy="Stała niska prowizja"
            zmianaCenIDostpnociObiekt="Minimalne koszty pobierane tylko od udanej rezerwacji - bez ryzyka"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUsFrame;
