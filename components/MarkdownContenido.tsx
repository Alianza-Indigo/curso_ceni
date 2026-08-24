import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/**
 * Renderiza el contenido íntegro (Markdown) de un módulo. Soporta GFM
 * (tablas, listas de tareas, etc.). Los estilos viven en globals.css bajo
 * la clase `.md-contenido` para mantener consistencia con el resto del curso.
 */
export default function MarkdownContenido({ contenido }: { contenido: string }) {
  return (
    <div className="md-contenido">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Las tablas anchas hacen scroll horizontal dentro de su contenedor,
          // sin romper el layout de la página.
          table(props) {
            const { node, ...rest } = props;
            void node;
            return (
              <div className="md-tabla-scroll">
                <table {...rest} />
              </div>
            );
          },
        }}
      >
        {contenido}
      </ReactMarkdown>
    </div>
  );
}
