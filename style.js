let prev = document.getElementById("btn-prev");
let next = document.getElementById("btn-next");
let lis = document.getElementsByClassName('item');

const arr = [
    './imgs/book-1.jpg',
    './imgs/book-2.jpg',
    './imgs/book-3.jpg',
    './imgs/book-4.jpg',
    './imgs/book-5.jpg',
    './imgs/book-6.jpg',
    './imgs/book-7.jpg',
    './imgs/book-8.jpg'
];

prev.addEventListener("click", function(){
    for (let i = 0; i< lis.length; i++) {
       let att = lis[i].getAttribute('src');
       let index = arr.indexOf(att) + 1;
       if(index == arr.length){
           index = 0;
       }
       lis[i].setAttribute('src', arr[index]);
    }
});

next.addEventListener("click", function(){
    for (let i = 0; i< lis.length; i++) {
       let att = lis[i].getAttribute('src');
       let index = arr.indexOf(att) - 1;
       if(index == -1){
           index = arr.length-1;
       }
       lis[i].setAttribute('src', arr[index]);
    }
});

setInterval(function(){
    for (let i = 0; i< lis.length; i++) {
        let att = lis[i].getAttribute('src');
        let index = arr.indexOf(att) - 1;
        if(index == -1){
            index = arr.length-1;
        }
        lis[i].setAttribute('src', arr[index]);
     }
}, 2000);