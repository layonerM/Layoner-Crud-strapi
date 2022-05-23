import Link from "next/link";
import styles from "@/styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>Crud Layo</a>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/news">
              <a>Nuevo</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>sobre</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
