import { forwardRef, InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return <input ref={ref} className={styles.input} {...props} />;
});

Input.displayName = 'Input'; // Required when using forwardRef

export default Input;
