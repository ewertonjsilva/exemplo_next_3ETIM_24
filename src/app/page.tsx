import Image from "next/image"; 
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello, Next.js!</h1>
      <h2>Título 2</h2>
      <h3>Título 3</h3> 
      <p><Link href={"/listaprodutos"}>Lista de produtos</Link></p>
      <p><Link href={"/sobre"}>Sobre</Link></p>
    </main>
  );
}
