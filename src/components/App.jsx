import styles from "../styles/App.module.css";
import { features } from "../data";
import { Card } from "./Card";

export const App = () => {
  return (
    <main className={styles.container}>
      <div className={styles.info}>
        <h1 className={styles.title}>
          Reliable, efficient delivery <span>Powered by Technology</span>
        </h1>
        <p className={styles.description}>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>
      <div className={styles.features}>
        {features.map((feature) => (
          <Card key={feature.id} {...feature} />
        ))}
      </div>
    </main>
  );
};
