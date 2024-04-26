import styles from "../styles/Card.module.css";
import PropTypes from "prop-types";

export const Card = ({ title, description, image }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <img src={image} alt={`${title} illustration`} className={styles.image} />
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
