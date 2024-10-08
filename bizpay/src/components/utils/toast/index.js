import React from 'react';
import toast from 'react-hot-toast';

import iconInfo from '../../../../public/images/svgs/info.svg';
import iconSuccess from '../../../../public/images/svgs/success.svg';
import iconError from '../../../../public/images/svgs/error.svg';
import iconWarning from '../../../../public/images/svgs/warning.svg';

import styles from './styles.module.scss';

const icons = {
  info: iconInfo,
  success: iconSuccess,
  error: iconError,
  warning: iconWarning,
};

export default (type, title, body = '', onClick = () => {}) => {
  return toast(
    () => (
      <div className={styles.toastInner} onClick={onClick}>
        <div className={styles.header}>
          <img src={icons[type]} alt={type} className={styles.icon} />
          <span>{title}</span>
        </div>
        {body.length > 0 && <div className={styles.body}>{body}</div>}
      </div>
    ),
    {
      duration: 5000,
      className: styles.toast,
    }
  );
};
