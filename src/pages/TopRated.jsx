import TopRatedContainer from "../modules/topRated/TopRatedContainer";
import styles from './styles.module.css'

const TopRated = () => {
  return (
    <section className={styles.sectionTypeMovie}>
      <TopRatedContainer />
    </section>
  );
};

export default TopRated;
