import { ComponentProps } from "react";
import styles from "./styles.module.scss";

interface AvatarProps extends ComponentProps<"img"> {
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = false, ...props }: AvatarProps) {
  return (
    <img
      width={48}
      height={48}
      alt=""
      data-hasborder={hasBorder}
      className={styles.avatar}
      {...props}
    />
  );
}
