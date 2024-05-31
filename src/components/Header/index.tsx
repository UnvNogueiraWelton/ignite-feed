import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <img
        src="/img/logo.svg"
        alt="Logotipo do ignite"
        width={48}
        height={48}
      />
      <strong>Ignite Feed</strong>
    </header>
  );
}
