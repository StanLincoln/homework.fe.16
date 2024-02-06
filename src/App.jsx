
import './App.scss';
import AboutUs from './components/AboutUs/AboutUs';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import Header from './components/Header/Header';

export const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <Form />
      <AboutUs />
      <Footer />
    </>
  )
}


