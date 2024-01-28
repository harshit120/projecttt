import styles from "../styles/Navbar.module.css";

export const Card = (props) => {
  return (
    <div className={styles.card}>
      <p className={styles.text}>Name: {props.name}</p>
      <div>
        {props.skills.map((item, index) => {
          return (
            <div className={styles.div}>
              <p className={styles.text}>
                {" "}
                Skill : <span className={styles.text1}>{item.skill}</span>{" "}
              </p>
              <p className={styles.text}>
                {" "}
                Experience :{" "}
                <span className={styles.text1}>{item.experience}</span>
              </p>
            </div>
          );
        })}
      </div>
      {props.location.map((item, index) => {
        return (
          <div className={styles.div}>
            <p className={styles.text}>
              {" "}
              City : <span className={styles.text1}>{item.city}</span>{" "}
            </p>
            <p className={styles.text}>
              {" "}
              Country : <span className={styles.text1}>{item.country}</span>
            </p>
          </div>
        );
      })}

      <button className={styles.button} onClick={() => props.menteeData(props)}>
        Edit/Update
      </button>
    </div>
  );
};
export default Card;
