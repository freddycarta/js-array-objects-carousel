
const photos = [
    "http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg", //0
  
    "https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg", //1
  
    "https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c", //2
  
    "https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg", //3
  
    "https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop"
    //4
  ];
  
  let slide = document.getElementById("slide");
  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  
  
  slide.style.width = "100vh";
  slide.style.height = "70vh";
  
  let i = 0;
  
  slide.src = photos[i];
  
  btn2.onclick = () => {
    i++;
    if (i > photos.length - 1) {
      i = 0;
    }
    slide.src = photos[i];
  };
  
  btn1.onclick = () => {
    i--;
    if (i < 0) {
      i = photos.length - 1;
    }
    slide.src = photos[i];
  };
  
 
