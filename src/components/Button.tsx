import styles from './Button.module.scss';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export default function Button({ children, onClick, type = 'button' }: Props) {
  return (
    <button className={styles.button} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
