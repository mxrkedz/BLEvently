import styles from "./page.module.css";
import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";
import FeaturedEvents from "./components/featuredEvents";
import EventCard from "./components/eventCard";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <Hero />
        <FeaturedEvents />
      </main>
      <Footer />
    </>
  );
}
