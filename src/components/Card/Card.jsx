import styles from "../../components/Card/Card.module.css";
// import styled from "./Card.css"

// const DivCard = styled.divCard``

export default function Card(props) {
  return (
    <div className={styles.divCard}>
      <button className={styles.buttonCard} onClick={props.onClose}>X</button>
      <h2>{props.name}</h2>
      <h4>{props.status}</h4>
      <h4>{props.species}</h4>
      <h4>{props.gender}</h4>
      <h4>{props.origin.name}</h4>
      <img src={props.image} alt="Image Not Found" />
    </div>
  );
}
