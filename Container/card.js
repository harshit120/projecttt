import styles from '../styles/Navbar.module.css'; 
export const Card = (props) => {
    return (
      <div className={styles.card} >
        {props.name}
        <div>
          Skills:{" "}
          {props.skills.map((item, index) => {
            return (
              <span>
                {item.skill}.{item.experience}
              </span>
            );
          })}
        </div>
        <button className={styles.button}>
            Edit/Update
        </button>
      </div>
    );
  };
export default Card;
