import { FunctionComponent } from "react";
import styles from "./IncreaseSales.module.css";

export type IncreaseSalesType = {
  settingsBlack24dp1?: string;
  automatyzacjaPracy?: string;
  zmianaCenIDostpnociObiekt?: string;
};

const IncreaseSales: FunctionComponent<IncreaseSalesType> = ({
  settingsBlack24dp1,
  automatyzacjaPracy,
  zmianaCenIDostpnociObiekt,
}) => {
  return (
    <div className={styles.increaseSales}>
      <img
        className={styles.settingsBlack24dp1Icon}
        loading="lazy"
        alt=""
        src={settingsBlack24dp1}
      />
      <div className={styles.oneContract}>
        <b className={styles.automatyzacjaPracy}>{automatyzacjaPracy}</b>
        <div className={styles.zmianaCenI}>{zmianaCenIDostpnociObiekt}</div>
      </div>
    </div>
  );
};

export default IncreaseSales;
