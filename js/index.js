// Your code goes here
let busImg = document.querySelector(".intro img");
busImg.addEventListener('mouseenter', () =>{
    busImg.style.transform = 'scale(1.3)';
    busImg.style.transition = 'transform .5s';
})
busImg.addEventListener('mouseout', () =>{
    busImg.style.transform = 'scale(1)';
})


let allImgs = document.querySelectorAll('img');
allImgs.forEach((element) => 
    element.addEventListener('click', (event) => {
    event.target.style.transform = 'rotate(360deg)';
    event.target.style.transition = 'transform .5s';
}))


let allH2 = document.querySelectorAll('h2');
allH2.addEventListener('keydown', (event) => {
    event.target.style.display = 'none';
}
)


/* [ ] `mouseover`
* [ ] `keydown`
* [ ] `wheel`
* [ ] `drag / drop`
* [ ] `load`
* [ ] `focus`
* [ ] `resize`
* [ ] `scroll`
* [ ] `select`
* [ ] `dblclick`*/