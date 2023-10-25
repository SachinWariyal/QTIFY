import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/SearchIcon.svg";

const Search = ({ placeholder }) => {
  return (
    <form className={styles.wrapper} action="">
      <input className={styles.search} type="text" placeholder={placeholder} />
      <button className={styles.searchButton}>
        <SearchIcon />
      </button>
    </form>
  );  
};

export default Search;
