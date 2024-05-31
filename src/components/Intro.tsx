'use client';

import { useCounterStore } from '../../providers/counterStoreProvider';
import styles from './Intro.module.css';

export default function Intro() {
  const { count, incrementCount, decrementCount, resetCount } = useCounterStore(
    (state) => state,
  );
  return (
    <main className={styles.main}>
      <span>Hello World!</span>
      <span>Next.js + Zustand + React-query boilerplate</span>
      <p>{count}</p>
      <div className={styles.button}>
        <button onClick={incrementCount}>up</button>
        <button onClick={decrementCount}>down</button>
        <button onClick={resetCount}>reset</button>
      </div>
    </main>
  );
}
