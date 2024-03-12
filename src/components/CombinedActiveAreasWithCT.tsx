import { FunctionComponent } from "react";
import styles from "./CombinedActiveAreasWithCT.module.css";

const CombinedActiveAreasWithCT: FunctionComponent = () => {
  return (
    <div className={styles.combinedActiveAreasWithCT}>
      <div className={styles.frameLinkedActiveAreasWith} />
      <div className={styles.textPressMeButton}>
        <div className={styles.frameTextPressMeButton}>
          <div className={styles.groupOfFrames}>
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
          <div className={styles.kaiOffermannsOsterfeldContainer}>
            <p className={styles.kaiOffermanns}>Kai Offermanns</p>
            <p className={styles.osterfeld10}>Osterfeld 10</p>
            <p className={styles.eggebek}>24852 Eggebek</p>
            <p className={styles.niemcy}>Niemcy</p>
          </div>
        </div>
        <div className={styles.frameWithLogos}>
          <div className={styles.callBlackdp}>
            <img
              className={styles.callBlack24dp1Icon}
              loading="lazy"
              alt=""
              src="/call-black-24dp-1.svg"
            />
            <b className={styles.supportEasychannelpl}>+ 49 1756751685</b>
          </div>
          <div className={styles.callBlackdp1}>
            <img
              className={styles.emailBlack24dp1Icon}
              loading="lazy"
              alt=""
              src="/email-black-24dp-1-1.svg"
            />
            <b className={styles.supporteasychannelpl}>
              support@easychannel.pl
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombinedActiveAreasWithCT;
