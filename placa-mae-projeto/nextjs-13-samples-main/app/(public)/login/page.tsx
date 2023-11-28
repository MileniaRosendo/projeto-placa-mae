'use client';
import style from './page.module.css'
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  return (
    <form
      onSubmit={(e) => {
        router.push('/');
        e.preventDefault();
      }}
    >
      <div>
        <label className={style.main}>Email:</label>
        <input />
      </div>
      <div>
        <label>Senha:</label>
        <input type="password" />
      </div>
      <div>
        <button type="submit">Entrar</button>
      </div>
    </form>
  );
}
