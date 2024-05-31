import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./styles.module.scss";
import { Avatar } from "../../Avatar";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/diego3g.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.author}>
              <strong>Welton Nogueira</strong>
              <time
                title="11 de Maio às 8:13h"
                dateTime="2022-05-11 08:13:30"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>33</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
