import React from 'react';
import styles from './BottomInfo.module.scss';
import Button from '../Button/Button';
import vectorWithBg from '../../img/VectorWithBG.svg';
import vector from '../../img/Vector.svg';
import profileVector from '../../img/ProfileVector.svg';

const BottomInfo = () => {
  const screenWidth = window.screen.width;
console.log(screenWidth)
  if (screenWidth < 600) {
    return (
      <div className={styles.infoWrapSmall}>
        <h1 className={styles.bigText}>
          <span className={styles.grayText}>Узнай какое занятие</span> подойдет вашему ребёнку
        </h1>
        <img className={styles.profileVector} src={profileVector} />
      </div>
    );
  } else {
    return (
      <div className={styles.infoWrap}>
        <div>
          <h1 className={styles.infoText}>
            Узнай какое занятие <br /> подойдет вашему ребёнку
          </h1>
          <Button>Узнать</Button>
        </div>
        <div className={styles.vectorWrap}>
          <img className={styles.vector1} src={vectorWithBg} />
          <img className={styles.vector2} src={vector} />
          <img className={styles.vector3} src={vector} />
        </div>
      </div>
    );
  }
};

export default BottomInfo;
