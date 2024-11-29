import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá!</h1>

        <p className={styles.paragrafo}>
          Boas vindas ao meu espaço pessoal! Eu sou Mateus Bernart,
          desenvolvedor em constante aprendizado. Aqui compartilho vários
          conhecimentos, espero que aprenda algo novo :
        </p>
      </div>

      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
          alt=""
        />

        <img
          className={styles.minhaFoto}
          src="https://github.com/mateus-bernart.png"
          alt="Foto Mateus Bernart"
        />
      </div>
    </div>
  );
}
