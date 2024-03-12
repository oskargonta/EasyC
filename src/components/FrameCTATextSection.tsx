import { FunctionComponent } from "react";
import styles from "./FrameCTATextSection.module.css";

const FrameCTATextSection: FunctionComponent = () => {
  return (
    <div className={styles.frameCTATextSection}>
      <div className={styles.logoAndTextCTAFrame}>
        <div className={styles.frameCombinedLogoTextButto}>
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/group-2.svg"
          />
          <img
            className={styles.groupIcon1}
            loading="lazy"
            alt=""
            src="/group-3.svg"
          />
        </div>
        <div className={styles.interactiveRegionWithCTA}>
          <h1 className={styles.nieMaszCzasuContainer}>
            <p
              className={styles.nieMaszCzasu}
            >{`Nie masz czasu na rejestrację `}</p>
            <p className={styles.naWieluPortalach}>
              na wielu portalach i zarządzanie danymi?
            </p>
          </h1>
          <div className={styles.framedPictureLabelRegionWi}>
            <div className={styles.easychannelToRozwizanie}>
              Easychannel to rozwiązanie dla ciebie. Prosto, bezproblemowo,
              ekonomicznie! Wysoki poziom rezerwacji, doskonałe wsparcie,
              bezpłatna rejestracja, brak miesięcznych opłat i niska prowizja.
            </div>
            <div className={styles.frameTextWithPressMeButto}>
              <div className={styles.odezwijSiDoNas}>Odezwij się do nas:</div>
              <div className={styles.frameLinkedTextButtonPress}>
                <img
                  className={styles.emailBlack24dp1Icon}
                  loading="lazy"
                  alt=""
                  src="/email-black-24dp-1.svg"
                />
                <div className={styles.supporteasychannelpl}>
                  support@easychannel.pl
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameCTATextSection;
