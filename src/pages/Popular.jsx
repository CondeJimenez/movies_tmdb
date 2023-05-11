import PopularContainer from "../modules/popular/PopularContainer";
import styles from './styles.module.css'

const Popular = () => {
  return (
    <section className={styles.sectionTypeMovie}>
      <PopularContainer />
    </section>
  );
};

export default Popular;
