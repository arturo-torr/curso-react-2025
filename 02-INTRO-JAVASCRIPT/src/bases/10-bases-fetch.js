// Fetch API

const apiKey = "pjCfnLJWUo4Jf1tn6mGArahH0zw7nfqZ";

const peticion_http = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
);

peticion_http
  .then((resp) =>
    resp.json().then(({ data }) => {
      const { url } = data.images.original;
      const img = document.createElement("img");
      img.src = url;
      document.body.append(img);
    })
  )
  .catch(console.warn);
