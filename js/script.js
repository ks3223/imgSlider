let img = document.querySelector('#img');
let arr=['https://img2.akspic.ru/attachments/originals/4/4/1/6/0/106144-snezhinka-nebo-moroz-zamorazhivanie-derevo-2560x1687.jpg',
'https://kartinki.pics/uploads/posts/2022-03/thumbs/1646733179_2-kartinkin-net-p-kartinki-prirodi-leto-2.jpg',
'https://img2.akspic.ru/attachments/originals/8/2/0/3/0/103028-video-osennyaya_okraska_listev-zheltyj-list-dikaya_mestnost-2880x1800.jpg'
]
let ar1 = document.querySelector('#ar1');
let ar2 = document.querySelector('#ar2');
let i = 0;
img.scr = arr[0];
if (i == 0){
    img.scr = arr[i];
}
console.log(i);
ar1.addEventListener('click',()=>{
i--;
img.src = arr[i];
if (i < 0){
    i=2;
    img.src = arr[i];
}
if (i > arr.length){
    i=0;
}
console.log(i);
})
ar2.addEventListener('click',()=>{
i++;
img.src = arr[i];   
if (i == arr.length){
    i=0;
    img.src = arr[i];
}
console.log(i);
})
