import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import ContactForm from "./components/ContactForm";
import Resume from "./components/Resume";
import "./assets/portfolio.css";
import "./assets/contact.css";

const App = () => {
  return (
    <div>
      <Header />
      <AboutMe />
      <ContactForm />
      <Resume />
    </div>
  );
};

export default App;
