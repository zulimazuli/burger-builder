import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

import styles from './Burger.module.css'

const burger = () => {
  return (
      <div className={styles.Burger}>
          <BurgerIngredients type="bread-top" />
          <BurgerIngredients type="cheese" />
          <BurgerIngredients type="meat" />
          <BurgerIngredients type="bread-bottom" />
      </div>
  );
};

export default burger;
