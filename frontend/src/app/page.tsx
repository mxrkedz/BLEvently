import styles from "./page.module.css";
import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <Hero />
      </main>
      <Footer />
    </>
  );
}
