import React, { useState } from "react";
import styles from "./Searchbar.module.css";
import { toast } from "react-toastify";

export default function SearchBar({onSubmit}) {
  const [searchName, setSearchName] = useState('');

  const handleSubmite = (e) => {
    e.preventDefault();

    if (searchName.trim() === "") {
      toast("Input name for search images");
      return;
    }
    onSubmit(searchName);
    reset();
  };

  const handleClick = (event) => {
    const value = event.currentTarget.value.toLowerCase();
    setSearchName(() => value);
  };

  const reset = () => {
    setSearchName(()=> '');
  };
  
  return (
    <header className={styles.searchbar}>
         <form className={styles.searchForm} onSubmit={handleSubmite}>
          <button type="submit" className={styles.form_button}>
            <span className={styles.button_label}>Search</span>
          </button>

          <input
            className={styles.button_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchName}
            onChange={handleClick}
          />
        </form>
      </header>
  )
};
