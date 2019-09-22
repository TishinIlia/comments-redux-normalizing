import React from 'react'
import Articles from '../components/Articles'
import styles from './Page.module.scss'

const Page = () => (
  <section className={`container grid-xl ${styles.main}`}>
    <header className="navbar">
      <section className="navbar-section">
        <a href="https://www.linkedin.com/in/tishin/" className="btn btn-link">LinkedIn</a>
        <a href="https://www.facebook.com/" className="btn btn-link">Facebook</a>
      </section>
      <section className="navbar-center">
        <h1>Tishin Ilya</h1>
      </section>
      <section className="navbar-section">
        <a href="https://github.com/TishinIlia" className="btn btn-link">GitHub</a>
      </section>
    </header>
    <Articles/>
  </section>
);

export default Page;
