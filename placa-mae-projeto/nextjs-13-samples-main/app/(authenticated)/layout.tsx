import Link from 'next/link';
import Image from 'next/image';
import style from './page.module.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>

      <div className={style.div}>
          <Image src={'/placaMae.png'} alt ="icon" width={200} height={100} ></Image>
         </div>
        <div className={style.li}>
        
        <nav>
          <ul className={style.listaHorizontal}>
            <li>
              <Link href="/" >Home</Link>
            </li>
            <li>
              <Link href="/users">Sobre</Link>
            </li>
            <li>
              <Link href="/login">Quiz</Link>
            </li>
            <li>
              <Link href="/routes">Recomendações</Link>
            </li>
          </ul>
        </nav>
        
        </div>
        {children}
      </body>
    </html>
  );
}
