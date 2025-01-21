// const newMessage = { message: "Hola Mundo", title: "Arturo" };

const saludar = (nombre) => `Hola ${nombre}`;

export const FirstApp = () => {
  return (
    // <> es Sinónimo de fragmento, no añade nada al HTML
    <>
      <h2>{saludar("Arturo")}</h2>
      <p>Subtitulo</p>
    </>
  );
};
