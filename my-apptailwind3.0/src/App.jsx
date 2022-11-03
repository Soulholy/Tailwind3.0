import React from 'react'
import styles from './style'

 //import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import States from "./components/Stat"
import Business from './components/bussiness'
import Billing from './components/billing'
import CardDeal from './components/CardDeal'

export default function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar /> 
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
       <States />
       <Business />
       <Billing />
       <CardDeal />
      </div>
    </div>

  </div>
  )
}
