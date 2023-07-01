import styles from "../SearchBar/SearchBar.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";



export default function SearchBar(props) {
   const [id, setId] = useState("");
   
   const handleChange = (event) => {
      setId(event.target.value);
   };
   

   
  return (
     <div className={styles.divSearchBar}>
      <input
        id="inputSearch"
        className={styles.inputSearchBar}
        type="search"
        onChange={handleChange}
        placeholder="Get Ready for Adventure..."
        />

      <button
        className={styles.buttonSearch}
        onClick={() => props.onSearch(id)}
        >
        Agregar
      </button>
      <button className={styles.buttonRandom} onClick={props.random}>
        Random Character
      </button>
      <Link to="/profile">
        <button className={styles.buttonLinkProfile}>Profile</button>
      </Link>
    </div>
  );
}
