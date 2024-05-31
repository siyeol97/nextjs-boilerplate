'use client';

import Image from 'next/image';
import { useCounterStore } from '../../providers/counterStoreProvider';
import styles from './Intro.module.css';

export default function Intro() {
  const { count, incrementCount, decrementCount, resetCount } = useCounterStore(
    (state) => state,
  );
  return (
    <main className={styles.main}>
      <span>Hello World!</span>
      <div className={styles.stack}>
        <Image src={'/nextjs.svg'} alt='nextjs' width={32} height={32} />
        Next.js +{' '}
        <Image src={'/zustand.png'} alt='nextjs' width={32} height={32} />
        Zustand +{' '}
        <Image src={'/react-query.svg'} alt='nextjs' width={32} height={32} />
        React-query boilerplate
      </div>
      <span>count : {count}</span>
      <div className={styles.button}>
        <button onClick={incrementCount}>up</button>
        <button onClick={decrementCount}>down</button>
        <button onClick={resetCount}>reset</button>
      </div>
    </main>
  );
}
