const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];


const listGallery = document.querySelector(".gallery");
function createMarkup(arr) { 
  return arr.map(({ url, alt }) =>
    `<li>
  <img src="${url}" alt="${alt}" width ="360" >
  </li>`).join('')
}
listGallery.insertAdjacentHTML('afterbegin' , createMarkup(images))
listGallery.style.margin = "0 auto"
listGallery.style.listStyle = "none"
listGallery.style.display = "flex"
listGallery.style.alignItems = "center"
listGallery.style.flexWrap = "wrap"
listGallery.style.justifyContent = "center";
listGallery.style.gap = "15px 15px"
listGallery.style.width = "1440px"

const addClassA = listGallery.querySelectorAll("li")
addClassA.forEach((li) => { 
  if (li) { 
    li.classList.add("test1")
    li.style.height = "300px"
    
  }

})

const addClass = listGallery.querySelectorAll("img")

addClass.forEach((list) => {
  if (list) {
    list.classList.add('test')
    list.style.displayBlock = "none"
    list.style.objectFit = "cover";
    list.style.maxWidth = "100%";
        list.style.height = "100%"
  }
}
)




