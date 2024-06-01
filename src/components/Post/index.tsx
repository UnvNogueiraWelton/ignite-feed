import { format, formatDistanceToNow } from "date-fns";
import { Avatar } from "../Avatar";
import { Comment } from "./Comment";
import styles from "./styles.module.scss";
import { ptBR } from "date-fns/locale";
import { FormEvent, useState } from "react";

interface PostProps {
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: Array<{
    type: string;
    content: string;
  }>;
  publishedAt: Date;
}

export function Post({ author, publishedAt, content }: PostProps) {
  const [comments, setComments] = useState(["Bom dia!"]);
  const [newCommentText, setNewCommentText] = useState("");

  const formatedPublishedDate = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const relativePublishedDate = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(e: FormEvent) {
    e.preventDefault();
    setComments((state) => [...state, newCommentText]);

    setNewCommentText("");
  }

  function deleteComment(content: string) {
    setComments((state) => state.filter((comment) => comment != content));
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src={author.avatarUrl}
            hasBorder
          />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={formatedPublishedDate}
          dateTime={publishedAt.toISOString()}
        >
          {relativePublishedDate}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((row, index) => {
          if (row.type == "paragraph") {
            return <p key={index}>{row.content}</p>;
          } else if (row.type == "anchor") {
            return (
              <p key={index}>
                <a href="#">{row.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
          required
        />

        <footer>
          <button
            type="submit"
            disabled={!newCommentText.length}
          >
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((content, index) => (
          <Comment
            key={index}
            content={content}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}
