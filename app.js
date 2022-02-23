const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "pink",
    "purple",
    "orange",
    "#204962",
    "#348303"
];

button.addEventListener("click",changeBackground);

let sıra = 0;

function changeBackground() {
    // Rastgele Bir Renk
    // const rastgeleSayi = Math.floor(Math.random() * colors.length);
    // console.log(rastgeleSayi);
    // const secilenRenk = colors[rastgeleSayi];
    // body.style.backgroundColor = secilenRenk;
     

    // Sırayla arkaplan rengi seç
    console.log(sıra);
    if (sıra == 9) sıra = 0;
    const secilenRenk = colors[sıra];
    sıra++;
    body.style.backgroundColor = secilenRenk;


}
