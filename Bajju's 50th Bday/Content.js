let appaImages = [
        "https://i.postimg.cc/1zRybb63/5367eeb4-9915-4cec-904f-c1e135fbaf41.jpg",
        "https://i.postimg.cc/NfTGX6BB/61n-Nkhw-H-UL.jpg",
        "https://i.postimg.cc/6pf9jB8P/93861d4b-7bd8-4132-851d-74f7287c3538.jpg",
        "https://i.postimg.cc/9fvkLr7G/2194eabd-c85e-433b-849f-844b513ac44f.jpg",
        "https://i.postimg.cc/25zyVS67/istockphoto-1241294519-170667a.jpg",
        "https://i.postimg.cc/G37ssGwg/fd874a516f6f374c73f92102e20e2d32.jpg",
        "https://i.postimg.cc/c4PgFWJQ/IMG-3911.jpg",
        "https://i.postimg.cc/d3xkPPjc/50th-birthday-48.gif",
        "https://i.postimg.cc/k5y5P6Qd/20140701-145656.jpg",
];
const imgs = document.getElementsByTagName("img");
for(let i = 0; i < imgs.length; i++){
    const randomImg = Math.floor((Math.random()*appaImages.length));
    imgs[i].src = appaImages[randomImg];
}
const headers1 = document.getElementsByTagName("h1");
for(let i = 0; i < headers1.length; i++){
    headers1[i].innerText = "Happy 50th Birthday Appa!";
}
const headers2 = document.getElementsByTagName("h2");
for(let i = 0; i < headers2.length; i++){
    headers2[i].innerText = "Happy 50th Birthday Appa!";
}

const headers3 = document.getElementsByTagName("h3");
for(let i = 0; i < headers3.length; i++){
    headers3[i].innerText = "HAPPY BIRTHDAY!!!";
}

const headers4 = document.getElementsByTagName("h4");
for(let i = 0; i < headers4.length; i++){
    headers4[i].innerText = "HAPPY BIRTHDAY!!!";
}
const headers5 = document.getElementsByTagName("h5");
for(let i = 0; i < headers5.length; i++){
    headers5[i].innerText = "HAPPY BIRTHDAY!!!";
}
const headers6 = document.getElementsByTagName("h6");
for(let i = 0; i < headers6.length; i++){
    headers6[i].innerText = "HAPPY BIRTHDAY!!!";
}

const para = document.getElementsByTagName("p1");
for(let i = 0; i < para.length; i++){
    para[i].innerText = "You're not 50. You're 18 with 32 years of experience.    ";
}

const tit = document.getElementsByTagName('title');
for(let i = 0; i < tit.length; i++){
    tit[i].innerText = "Happy 50th Birthday! You may be showing your age, but at least you're not acting it";
}