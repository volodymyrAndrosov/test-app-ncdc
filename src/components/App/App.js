import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.MainApp}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
