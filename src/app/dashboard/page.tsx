'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.scss';

export default function DashboardPage() {
  const router = useRouter();
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (!stored) {
      router.push('/auth');
      return;
    }

    try {
      const user = JSON.parse(stored);
      setUsername(user.name?.first || null);
    } catch {
      localStorage.removeItem('user');
      router.push('/auth');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/auth');
  };

  return (
    <main className={styles.wrapper}>
      <h1>
        Welcome to the Dashboard
        {username && `, ${username}`}
      </h1>
      <button onClick={handleLogout} className={styles.logout}>
        خروج (Logout)
      </button>
    </main>
  );
}
