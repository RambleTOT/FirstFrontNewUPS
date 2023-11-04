import React from 'react';
import styles from './Search.module.scss';
import searchIcon from '../../img/icons/Search.svg';
import Button from '../Button/Button';

const Search = () => {
  return (
    <div className={styles.searchWrap}>
      <div className={styles.inputWrap}>
        <img className={styles.searchIcon} src={searchIcon} />
        <input
          type="text"
          className={styles.input}
          placeholder="Введите название секции или кружка"
        />
      </div>
      <button className={styles.searchButton}>Найти</button>
    </div>
  );
};

export default Search;
