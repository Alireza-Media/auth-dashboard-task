'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { z } from 'zod';

import Input from '@/components/Input';
import Button from '@/components/Button';
import styles from './page.module.scss';

// Zod validation schema for Iranian phone numbers
const phoneSchema = z.string().regex(/^09\d{9}$/, {
  message: 'شماره موبایل باید با 09 شروع شود و 11 رقم داشته باشد',
});

export default function AuthPage() {
  const router = useRouter();
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    const result = phoneSchema.safeParse(phone);

    if (!result.success) {
      const message = result.error.errors?.[0]?.message || 'شماره وارد شده نامعتبر است';
      setError(message);
      return;
    }

    try {
      const res = await import('@/data/api.json');
      const user = res.results[0];
      localStorage.setItem('user', JSON.stringify(user));
      router.push('/dashboard');
    } catch {
      setError('مشکلی پیش آمد. لطفاً دوباره تلاش کنید.');
    }
  };

  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>ورود</h2>
        <label htmlFor="phone" style={{ color: '#1f2937' }}>شماره موبایل</label>
        <Input
          id="phone"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="برای مثال : 09123456789"
          style={{ '::placeholder': { color: '#1f2937' } }}
        />
        {error && <p className={styles.error}>{error}</p>}
        <Button onClick={handleLogin}>ورود</Button>
      </div>
    </main>
  );
}
