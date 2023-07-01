import Card from "../Card/Card.jsx";
import data from "../../data";
import styles from "./Cards.module.css";



export default function Cards(props) {
  const { characters , onClose } = props;
  return (
    <div className={styles.fondo}>
      <div className={styles.divCards}>
        {characters.map((c) => (
          <Card
            key={c.id}
            name={c.name}
            status={c.status}
            species={c.species}
            gender={c.gender}
            origin={c.origin}
            image={c.image}
            onClose={() => onClose(c.id)}
          />
        ))}
      </div>
    </div>
  );
}
