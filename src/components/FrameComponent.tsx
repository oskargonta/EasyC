import { FunctionComponent, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';
import styles from "./FrameComponent.module.css";


const FrameComponent: FunctionComponent = () => {
  const name = useRef<HTMLInputElement | null>(null);
  const email = useRef<HTMLInputElement | null>(null);
  const number = useRef<HTMLInputElement | null>(null);
  const location = useRef<HTMLInputElement | null>(null);

  

  const sendEmail = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const serviceId = "service_bxvi799";
    const templateId = "template_kcvcucb";
    console.log("message sent");
    emailjs.send('service_bxvi799', 'template_kcvcucb', {
      name: name.current?.value,
      number: "113343",
      email:"DLDFKLDF",
      location:"sdsdsdrerfwqfa"

     }).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
      },
      (error) => {
        console.log('FAILED...', error);
      },
    );
  };
  
  return (
    <section className={styles.korzysciWspolpracyNamiWrapper}>
      <div className={styles.korzysciWspolpracyNami}>
        <form className={styles.settingsBlackDP}>
          <div className={styles.divframerdzrhlf}>
            <div className={styles.logoRow}>
              <div className={styles.divframerivf}>
                <h1 className={styles.maksymalizujPotencjaMinima}>
                  Maksymalizuj potencjał, minimalizuj trudy używając Channel
                  Manager
                </h1>
                <div className={styles.chceszSkuteczniejPromowa}>
                  Chcesz skuteczniej promować swoje obiekty, ale nie masz czasu
                  na rejestrację na wielu portalach i zarządzanie danymi?
                  Easychannel to rozwiązanie dla ciebie! Prosto, bezproblemowo,
                  ekonomicznie: wysoka liczba rezerwacji, doskonałe wsparcie,
                  bezpłatna rejestracja, brak miesięcznych opłat i niska
                  prowizja. Skontaktuj się z nami już teraz!
                </div>
              </div>
            </div>
            <div className={styles.logoHorizontal}>
              <img
                className={styles.infoBlack24dp1Icon}
                loading="lazy"
                alt=""
                src="/info-black-24dp-1.svg"
              />
              <div className={styles.zaoenieKontaDaje}>
                Założenie konta daje mozliwość zobaczenia naszej aplikacji. Nic
                Cię to nie kosztuje.
              </div>
            </div>
          </div>
          <div className={styles.form}>
          <h2 className={styles.podajSwojeDane}>
            Podaj swoje dane, a nasz ekspert skontaktuje się z tobą.
          </h2>
                <input
                  ref={name}
                  className={styles.inputField2}
                  placeholder="Imię i nazwisko"
                  type="text"
                />
              <input
              ref={number}
                  className={styles.inputField2}
                  placeholder="Numer telefonu"
                  type="text"
                />

                <input
                ref={email}
                  className={styles.inputField2}
                  placeholder="E-Mail"
                  type="text"
                />

                <input
                ref={location}
                  className={styles.inputField2}
                  placeholder="Lokalizacja Twojego obiektu"
                  type="text"
                />

          <button onClick={(e) => {sendEmail(e)}} className={styles.textLabel}>
            <div className={styles.zarejstrujSi}>Zarejstruj się</div>
          </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FrameComponent;
