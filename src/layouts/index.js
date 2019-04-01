import styles from './index.css';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>将近酒~</h1>
      {props.children}
    </div>
  );
}

export default BasicLayout;
