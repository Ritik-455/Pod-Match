import { useEffect, useState } from 'react';
import './App.css';
import Discover from './components/Discover';
import Footer from './components/Footer';
import Herosection from './components/Herosection';
import Paywalls from './components/Paywalls';
import Aos from "aos";
import "aos/dist/aos.css";
import Loader from './components/Loader';
import Action from './components/Action';
import Quiz from './components/Quiz';
import BackToTopButton from './components/BackToTopButton';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    Aos.init({ once: true, duration: 1000 });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [])
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Herosection />
          <Discover />
          <Action />
          <Quiz />
          <Paywalls />
          <Footer />
          <BackToTopButton />
        </>
      )}
    </>
  );
}

export default App;
