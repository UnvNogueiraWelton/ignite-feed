import styles from "./styles.module.scss";

interface AvatarProps {
  src: string;
  hasBorder?: boolean;
}

export function Avatar({ src, hasBorder = false }: AvatarProps) {
  return (
    <img
      src={src}
      width={48}
      height={48}
      alt=""
      data-hasBorder={hasBorder}
      className={styles.avatar}
    />
  );
}
