import Search from './components/Search/Search';
import styles from './App.module.scss'
import LabelVector from './img/mainLabel.svg'
import BottomInfo from './components/BottomInfo/BottomInfo';

function App() {
  return (
    <div className={styles.pageWrap}>
      <img className={styles.mainLabel} src={LabelVector} alt="Skillactive" />
      <Search />
      <BottomInfo/>
    </div>
  );
}

export default App;
