 const images = [
    "https://i.ibb.co/VcqX3kdj/glc-1-600x469.png",
    "https://i.ibb.co/XZRDnYLX/GL-UL-version-image-1.png"
  ];

  let index = 0;
  const imageElement = document.getElementById("rotatingImage");

  setInterval(() => {
    index = (index + 1) % images.length;
    imageElement.src = images[index];
  }, 2500); 