// Async - Await

const getImagen = async () => {
  try {
    const apiKey = "pjCfnLJWUo4Jf1tn6mGArahH0zw7nfqZ";
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();
    const { url } = await data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.error(error);
  }
};

getImagen();
