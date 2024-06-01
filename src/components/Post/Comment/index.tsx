import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./styles.module.scss";
import { Avatar } from "../../Avatar";
import { useState } from "react";

interface CommentProps {
  content: string;
  onDeleteComment: (content: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likes, setLikes] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikes((state) => state + 1);
  }

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

            <button
              title="Deletar comentário"
              onClick={handleDeleteComment}
            >
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likes}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
