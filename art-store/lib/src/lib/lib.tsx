import styles from './lib.module.less';

export function Lib() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Lib!</h1>
    </div>
  );
}

export default Lib;
