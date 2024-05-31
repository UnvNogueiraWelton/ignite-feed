import { Avatar } from "../Avatar";
import { Comment } from "./Comment";
import styles from "./styles.module.scss";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src="https://github.com/nogueirawelton.png"
            hasBorder
          />

          <div className={styles.authorInfo}>
            <strong>Welton Nogueira</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time
          title="11 de Maio às 8:13h"
          dateTime="2022-05-11 08:13:30"
        >
          Publicado a 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href="#">👉 jane.design/doctorcare</a>
        </p>
        <div className={styles.tags}>
          <a href="#">#novoprojeto</a>
          <a href="#">#nlw</a>
          <a href="#">#rocketseat</a>
        </div>
      </div>

      <form>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}