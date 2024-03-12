import { FunctionComponent } from "react";
import Header from "../components/Header";
import FrameComponent from "../components/FrameComponent";
import Button from "../components/Button";
import CalendarCellularAlt from "../components/CalendarCellularAlt";
import ContactUsFrame from "../components/ContactUsFrame";
import FrameCTATextSection from "../components/FrameCTATextSection";
import CombinedActiveAreasWithCT from "../components/CombinedActiveAreasWithCT";
import styles from "./MainPage.module.css";

const MainPage: FunctionComponent = () => {
  return (
    <div className={styles.mainPage}>
      <Header />
      <FrameComponent />
      <Button />
      <CalendarCellularAlt />
      <ContactUsFrame />
      <div className={styles.mainPageChild} />
      <section className={styles.combinedPressMeTextButton}>
        <div className={styles.cTAFrameSection}>
          <FrameCTATextSection />
          <CombinedActiveAreasWithCT />
        </div>
      </section>
    </div>
  );
};

export default MainPage;
