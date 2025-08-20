import React from "react";
import styles from "./HorizontalRuler.module.css";
import { HorizontalRulerProps } from "./HorizontalRuler.types";

export const HorizontalRuler: React.FC<HorizontalRulerProps> = ({
  widthPx,
  unitCm,
}) => {
  const totalUnits = Math.floor(widthPx / unitCm);
  const ticks = Array.from({ length: totalUnits + 1 }, (_, i) => i);

  return (
    <div className={styles.ruler} style={{ width: `${widthPx}px` }}>
      {ticks.map((tick) => (
        <div key={tick} className={styles.tick} style={{ left: tick * unitCm }}>
          <div className={styles.line} />
          <div className={styles.label}>{tick}</div>
        </div>
      ))}
    </div>
  );
};

export default HorizontalRuler;
