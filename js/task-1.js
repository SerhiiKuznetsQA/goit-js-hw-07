

const catEls = document.querySelectorAll("#categories");
const listLis = document.querySelectorAll(".item");
// const countEl = Array.from(catEls).forEach((teg) => {
// console.log("Number of categories: " + teg.childElementCount);
// const children = Array.from(listLis).forEach((li) => {
// console.log("Category: " + li.firstElementChild.textContent);
// console.log("Elements:" + li.lastElementChild.childElementCount);
//   });
// });


catEls.forEach((element) => {
    const hasItems = element.querySelectorAll(".item")
    if (hasItems.length > 0) {
        console.log("Number of Categories: " + hasItems.length);
    }
    listLis.forEach((li) => {
        console.log("Categories: " + li.querySelector("h2").textContent);
        console.log("Elements: " + li.querySelector("ul").childElementCount);
    })

})












