import SearchBar from "../SearchBar/SearchBar.jsx";
import styles from "../Nav/Nav.module.css"

export default function Nav({onSearch, random}) {
    return(
        <nav>

            <button className={styles.buttonNav}>Home</button>

            <button className={styles.buttonNav}>Favorite</button>

            <button className={styles.buttonNav}>Profile</button>

            <button className={styles.buttonNav}>About</button>





            {/* <SearchBar onSearch={onSearch} random={random}/> */}
        </nav>
    )
}