import "./Post.css";
import { useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown";
import NaoEncontrada from "paginas/NaoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao";
import PostCard from "componentes/PostCard";

export default function Post() {
  const parametros = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  const postsRecomendados = posts
    .filter((post) => post.id !== Number(parametros.id))
    .slice(0, 4);

  if (!post) {
    return <NaoEncontrada></NaoEncontrada>;
  }

  return (
    <PaginaPadrao>
      <PostModelo
        fotoCapa={`/assets/posts/${post.id}/capa.png`}
        titulo={post.titulo}
      >
        <div className="post-markdown-container">
          <ReactMarkdown>{post.texto}</ReactMarkdown>
        </div>

        <h2 className="tituloOutrosPosts">
          Outros posts que você pode gostar:
        </h2>

        <ul className="posts">
          {postsRecomendados.map((post) => (
            <li key={post.id}>
              <PostCard post={post}></PostCard>
            </li>
          ))}
        </ul>
      </PostModelo>
    </PaginaPadrao>
  );
}
