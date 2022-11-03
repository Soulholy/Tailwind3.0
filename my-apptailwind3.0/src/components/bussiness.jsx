import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./button";

const FeatureCard = ({key , id, icon ,title ,content, index}) => (
    <div className={`flex flex-row p-6 feature-card rounded-[20px] ${index !== features.length-1 ? 'mb-6':'mb-0'} `}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="" className="w-[50%] h-[50%] object-contain "/>
      </div>

      <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
      </div>
      

    </div>
  )


export default function bussiness() {
  return (
    <section id="features" className={layout.section}>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business,
          <br className="sm:block hidden" />
          we'll handle the money.
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quis
          veniam molestias minima itaque atque molestiae dolorem quidem rem
          eaque numquam impedit ex, sapiente, amet culpa ea quaerat. Eos, velit.
        </p>

        <Button styles='mt-10'/>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((data,index)=>(
          <FeatureCard key={data.id} {...data} index={index}/>
        ))}
      </div>

    </section>
  );
}
