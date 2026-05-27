import { Link } from "react-router-dom";
import IconPrev from "@/assets/images/icons/icon-prev.svg";

import styles from "./back.module.sass";

const Back = ({ to = "/", label = "Volver" }) => {
  const backClass = `${styles.back} `;
  return (
    <>
      <Link className={backClass} to={to}>
        <img className={styles.back__icon} src={IconPrev} alt="" />
        {label}
      </Link>
    </>
  );
};

export default Back;
