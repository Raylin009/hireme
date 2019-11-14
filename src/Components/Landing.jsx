import React from 'react';
import style from '../style.css'
const Landing = (props) => (
  <section className={style.landing}>
    <div className={style.descript}>
      <h1> Hi, My name is</h1>
      <h2>Ray Lin.<br></br>I build and things for the internet.</h2>
      <div className={style.intro}>
        <p>I am a software engineer based in San Francisco, CA specializing <br>
        </br> in building highly performent full stack applications including fron-end UI, RESTful APIs, databese design. </p>
      </div>
    </div>
  </section>

);

export default Landing;