const loaderwrapper = document.querySelector(".loader-wrapper");
const three = document.getElementById("three");
const defaultthree = document.getElementById("defaultthree");
const box1 = document.getElementById("box1");
const box3 = document.getElementById("box3");
const leftArr = document.getElementById("larr");
const rightArr = document.getElementById("rarr");
const sleftArr = document.getElementById("slarr");
const srightArr = document.getElementById("srarr");
const aleftArr = document.getElementById("alarr");
const arightArr = document.getElementById("ararr");
const mleftArr = document.getElementById("mlarr");
const mrightArr = document.getElementById("mrarr");
const mbleftArr = document.getElementById("mblarr");
const mbrightArr = document.getElementById("mbrarr");
const cw = document.querySelector(".content-wrapper");
const rw = document.querySelector(".rec-wrapper");
const herowr = document.querySelector(".hero-wr");

fetch(`https://6751855ed1983b9597b336b6.mockapi.io/all/`)
  .then((res) => res.json())
  .then((data) => {
    const heroContainer = document.querySelector(".hero-wr");
    heroContainer.innerHTML = `<img class="heroimg" src="${data[9].epindexbanner}" alt=""><div class="hero-info-wr"><div class="heroleftm"><img class="heading " src="${data[9].Logo}" alt=""><span class="info1">${data[9].heading}</span><span class="Description ">${data[9].Plot}</span><span class="info2 ">${data[9].Genre}</span><div class="w-wr "><a href = "/epindex/epindex.html?name=9" class="w-btn btn-s"><img class="w-img" src="images/p.png"><span class="w-txt">Watch Now</span></a> <a class="wl-btn btn-s"><img class="wl-img" src="images/plus.png" alt=""></a></div></div></div>`;
  });

// setInterval(() => {
//     loaderwrapper.style.display = "none"
//     document.querySelector('main').style.display='block'
// }, 4000)


// API FETCH -------------------------

const TFC = document.getElementById("Top-Famouse-cards");
const LRC = document.getElementById("Letest-release-cards");
const MSC = document.getElementById("Mindblowing-Shows-cards");
const MC = document.getElementById("Movies-cards");
const SC = document.getElementById("Series-cards");
const AC = document.getElementById("Anime-cards");

fetch(`https://6751855ed1983b9597b336b6.mockapi.io/all/`)
  .then((res) => res.json())
  .then((data) => {
    //  <⁡⁢⁣⁢TOP FAMOUSE SHOWS CARDS⁡>  --------

    const shanchor = document.createElement("a");
    shanchor.classList.add("card");
    shanchor.innerHTML = `<img class="c-h-w-s" src="${data[0].banner}">`;
    shanchor.href = "/epindex/epindex.html?name=0";
    TFC.append(shanchor);

    const ITanchor = document.createElement("a");
    ITanchor.classList.add("card");
    ITanchor.innerHTML = `<img class="c-h-w-s" src="${data[7].banner}">`;
    ITanchor.href = "/epindex/epindex.html?name=7";
    TFC.append(ITanchor);

    const TBanchor = document.createElement("a");
    TBanchor.classList.add("card");
    TBanchor.innerHTML = `<img class="c-h-w-s" src="${data[17].banner}">`;
    TBanchor.href = "/epindex/epindex.html?name=17";
    TFC.append(TBanchor);

    const DS_M_OF_Manchor = document.createElement("a");
    DS_M_OF_Manchor.classList.add("card");
    DS_M_OF_Manchor.innerHTML = `<img class="c-h-w-s" src="${data[13].banner}">`;
    DS_M_OF_Manchor.href = "/epindex/epindex.html?name=13";
    TFC.append(DS_M_OF_Manchor);

    //  </⁡⁢⁣⁢TOP FAMOUSE SHOWS CARDS⁡>  --------

    //  <⁡⁣⁢⁢LETEST RELEASES CARDS⁡>  --------

    const LSanchor = document.createElement("a");
    LSanchor.classList.add("card");
    LSanchor.innerHTML = `<img class="c-h-w-s" src="${data[3].banner}">`;
    LSanchor.href = "/epindex/epindex.html?name=3";
    LRC.append(LSanchor);

    const Exhanchor = document.createElement("a");
    Exhanchor.classList.add("card");
    Exhanchor.innerHTML = `<img class="c-h-w-s" src="${data[15].banner}">`;
    Exhanchor.href = "/epindex/epindex.html?name=15";
    LRC.append(Exhanchor);

    //  </⁡⁣⁢⁡⁣⁢⁢LETEST RELEASES CARDS⁡>  --------

    //  <⁡⁣⁣⁢MINDBLOWING SHOWS CARDS⁡>  --------

    const wanchor = document.createElement("a");
    wanchor.classList.add("card");
    wanchor.href = `/epindex/epindex.html?name=1`;
    wanchor.innerHTML = `<img class="c-h-w-s" src="${data[1].banner}">`;
    MSC.append(wanchor);

    const jkanchor = document.createElement("a");
    jkanchor.classList.add("card");
    jkanchor.href = `/epindex/epindex.html?name=9`;
    jkanchor.innerHTML = `<img class="c-h-w-s" src="${data[9].banner}">`;
    MSC.append(jkanchor);

    //  </⁡⁣⁣⁢MINDBLOWING SHOWS CARDS⁡>  --------

    //  <MOVIES CARDS>  --------

    for (let i = 0; i < data.length; i++) {
      if (data[i].Type == "Movie") {
        const manchor = document.createElement("a");
        manchor.classList.add("card");
        manchor.href = `/epindex/epindex.html?name=${i}`;
        manchor.innerHTML = `<img class="c-h-w-s" src="${data[i].banner}">`;
        MC.append(manchor);
      }
    }

    //  </MOVIES CARDS>  --------

    //  <SERIES CARDS>  --------

    for (let i = 0; i < data.length; i++) {
      if (data[i].Type == "Series") {
        const sanchor = document.createElement("a");
        sanchor.classList.add("card");
        sanchor.href = `/epindex/epindex.html?name=${i}`;
        sanchor.innerHTML = `<img class="c-h-w-s" src="${data[i].banner}">`;
        SC.append(sanchor);
      }
    }

    //  </SERIES CARDS>  --------

    //  <ANIME CARDS>  --------

    for (let i = 0; i < data.length; i++) {
      if (data[i].Type == "Anime") {
        const Aanchor = document.createElement("a");
        Aanchor.classList.add("card");
        Aanchor.href = `/epindex/epindex.html?name=${i}`;
        Aanchor.innerHTML = `<img class="c-h-w-s" src="${data[i].banner}">`;
        AC.append(Aanchor);
      }
    }

    //  </ANIME CARDS>  --------
// Top Famouse Cards Arrow Function-----------------------
rightArr.addEventListener("click", () => {
  TFC.scrollLeft += Exhanchor.scrollWidth;
  leftArr.style.display = "block";
});

leftArr.addEventListener("click", (e) => {
  if (screenX === 0) {
    leftArr.style.display = "none";
  } else leftArr.style.display = "block";
  TFC.scrollLeft += -9999;
});

// Movie Cards Arrow Function ----------------------------
mrightArr.addEventListener("click", () => {
  MC.scrollLeft += Exhanchor.scrollWidth;
  mleftArr.style.display = "block";
});

mleftArr.addEventListener("click", (e) => {
  if (screenX === 0) {
    mleftArr.style.display = "none";
  } else mleftArr.style.display = "block";
  MC.scrollLeft += -9999;
});

// Series Cards Arrow Function ----------------------------
srightArr.addEventListener("click", () => {
  SC.scrollLeft += Exhanchor.scrollWidth;
  sleftArr.style.display = "block";
});

sleftArr.addEventListener("click", (e) => {
  if (screenX === 0) {
    sleftArr.style.display = "none";
  } else sleftArr.style.display = "block";
  SC.scrollLeft += -9999;
});

// Anime Cards Arrow Function ----------------------------
arightArr.addEventListener("click", () => {
  AC.scrollLeft += Exhanchor.scrollWidth;
  aleftArr.style.display = "block";
});

aleftArr.addEventListener("click", (e) => {
  if (screenX === 0) {
    aleftArr.style.display = "none";
  } else aleftArr.style.display = "block";
  AC.scrollLeft += -9999;
});
    
  });

// SOME FUNCTIONALITY -----------------------------


function Search() {
  cw.style.display = "none";
  herowr.style.display = "none";
  defaultthree.style.display = "block";
  three.style.display = "none";
  rw.style.display = "flex";
  box3.style.rotate = "0deg";
}

function Catagory() {
  // swr.style.display = "none";
  // cw.style.display = "none";
  // rw.style.display = 'none'
  // defaultthree.style.display = "none";
  // three.style.display = "block";
  // box3.style.rotate = '90deg'
  box3.style.animation = "Vibrate 0.5s linear";
  alert("Now Catagory Option Is Disabled, Available Soon");
}

const b1img = document.getElementById("box1img");
const sInpt = document.getElementById("sInput");

box1.addEventListener("mouseenter", () => {
  b1img.style.rotate = "90deg";
});
box1.addEventListener("mouseleave", () => {
  b1img.style.rotate = "0deg";
});



const recommendation = document.querySelector(".recommendation");

fetch("https://6751855ed1983b9597b336b6.mockapi.io/all/")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      let recCard = document.createElement("a");
      recCard.classList.add("rec-theme");
      recCard.classList.add("rec-settings");
      recCard.classList.add("rcpstatic");
      recCard.href = `/epindex/epindex.html?name=${i}`;
      recCard.innerHTML = `<div class="rec-d-wr rec-settings"><img class="rec-pimg" src="images/pbtn.svg"><div class="img-wr rec-settings"><div class="c rec-el-s">${data[i].Type}</div><div class="r rec-el-s">${data[i].time}</div><img class="" src="${data[i].poster}"></div></div>`;
      recommendation.append(recCard);
    }

    const rectheme = document.querySelectorAll(".rec-theme");
    for (let i = 0; i < rectheme.length; i++) {
      rectheme[i].addEventListener("pointerover", () => {
        const recdited = rectheme[i].children[0].children[0];
        const recimg = rectheme[i].children[0].lastChild;
        recimg.style.scale = "1.2";
        recdited.style.width = "60px";
        recimg.style.filter = "blur(3px)";
      });
      rectheme[i].addEventListener("pointerleave", () => {
        const recdited = rectheme[i].children[0].children[0];
        const recimg = rectheme[i].children[0].lastChild;
        recimg.style.scale = "1";
        recdited.style.width = "0";
        recimg.style.filter = "none";
      });
    }
  });
const rwbtn = document.querySelector(".r-w-btn");
const rwbtntxt = document.querySelector(".r-w-btn span");
const lani = document.querySelector(".spinner");

rw.addEventListener("wheel", (e) => {
  if (e.deltaY == 100) {
    rwbtn.style.animation = "1s cubic-bezier(0.42, 0, 0, 1.01) bani";
    rwbtn.style.display = "flex";
  }
  if (e.deltaY == -100) {
    rwbtn.style.display = "none";
  }
});

rwbtn.addEventListener("click", () => {
  rwbtntxt.style.display = "none";
  lani.style.display = "block";
  setInterval(() => {
    rwbtntxt.style.display = "flex";
    lani.style.display = "none";
  }, 5000);
});
