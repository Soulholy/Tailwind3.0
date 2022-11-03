import React from "react";
import styles, { layout } from "../style";
import Button from "../components/button";
import {card} from '../assets'

export default function cardDeal() {
  return (
    <section className={layout.section}>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" />
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
          repellendus, debitis sit porro magnam ducimus necessitatibus illum
          quasi minima quos accusamus deserunt, tenetur iusto. Quos quaerat
        </p>
        <Button styles="mt-10" />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="" className="w-[100%] h-[100%]" />
      </div>

    </section>
  );
}
