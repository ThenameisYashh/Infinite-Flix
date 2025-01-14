const loaderwrapper = document.querySelector(".loader-wrapper");
const main = document.querySelector("main");
const body = document.querySelector("body");
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
const sc = document.querySelector(".sContainer");
const twr = document.querySelector(".textRecWr");
const rt = document.querySelector(".recText");
const rw = document.querySelector(".rec-wrapper");
const herowr = document.querySelector(".hero-wr");

fetch(`https://6751855ed1983b9597b336b6.mockapi.io/all/Jujutsu_Kaisen`)
  .then((res) => res.json())
  .then((hero) => {
    const heroContainer = document.querySelector(".hero-wr");
    heroContainer.innerHTML = `<img class="heroimg" src="${hero.epindexbanner}" alt=""><div class="hero-info-wr"><div class="heroleftm"><img class="heading " src="${hero.Logo}" alt=""><span class="info1">${hero.heading}</span><span class="Description ">${hero.Plot}</span><span class="info2 ">${hero.Genre}</span><div class="w-wr "><a href = "/epindex/epindex.html?name=${hero.Title}" class="w-btn btn-s"><img class="w-img" src="images/p.png"><span class="w-txt">Watch Now</span></a> <a class="wl-btn btn-s"><img class="wl-img" src="images/plus.png" alt=""></a></div></div></div>`;
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
    shanchor.href = "/epindex/epindex.html?name=Sweet_Home";
    TFC.append(shanchor);

    const ITanchor = document.createElement("a");
    ITanchor.classList.add("card");
    ITanchor.innerHTML = `<img class="c-h-w-s" src="${data[7].banner}">`;
    ITanchor.href = "/epindex/epindex.html?name=It_Chapter_One";
    TFC.append(ITanchor);

    const TBanchor = document.createElement("a");
    TBanchor.classList.add("card");
    TBanchor.innerHTML = `<img class="c-h-w-s" src="${data[17].banner}">`;
    TBanchor.href = "/epindex/epindex.html?name=Train_to_Busan";
    TFC.append(TBanchor);

    const DS_M_OF_Manchor = document.createElement("a");
    DS_M_OF_Manchor.classList.add("card");
    DS_M_OF_Manchor.innerHTML = `<img class="c-h-w-s" src="${data[13].banner}">`;
    DS_M_OF_Manchor.href =
      "/epindex/epindex.html?name=Doctor_Strange_in_the_Multiverse_of_Madness";
    TFC.append(DS_M_OF_Manchor);
    //  </⁡⁢⁣⁢TOP FAMOUSE SHOWS CARDS⁡>  --------

    //  <⁡⁣⁢⁢LETEST RELEASES CARDS⁡>  --------
    const LSanchor = document.createElement("a");
    LSanchor.classList.add("card");
    LSanchor.innerHTML = `<img class="c-h-w-s" src="${data[3].banner}">`;
    LSanchor.href = "/epindex/epindex.html?name=Light_Shop";
    LRC.append(LSanchor);

    const Exhanchor = document.createElement("a");
    Exhanchor.classList.add("card");
    Exhanchor.innerHTML = `<img class="c-h-w-s" src="${data[15].banner}">`;
    Exhanchor.href = "/epindex/epindex.html?name=Exhuma";
    LRC.append(Exhanchor);
    //  </⁡⁣⁢⁡⁣⁢⁢LETEST RELEASES CARDS⁡>  --------

    //  <⁡⁣⁣⁢MINDBLOWING SHOWS CARDS⁡>  --------
    const wanchor = document.createElement("a");
    wanchor.classList.add("card");
    wanchor.href = `/epindex/epindex.html?name=Wednesday`;
    wanchor.innerHTML = `<img class="c-h-w-s" src="${data[1].banner}">`;
    MSC.append(wanchor);

    const jkanchor = document.createElement("a");
    jkanchor.classList.add("card");
    jkanchor.href = `/epindex/epindex.html?name=Jujutsu_Kaisen`;
    jkanchor.innerHTML = `<img class="c-h-w-s" src="${data[9].banner}">`;
    MSC.append(jkanchor);
    //  </⁡⁣⁣⁢MINDBLOWING SHOWS CARDS⁡>  --------

    //  <MOVIES CARDS>  --------
    for (let i = 0; i < data.length; i++) {
      if (data[i].Type == "Movie") {
        const manchor = document.createElement("a");
        manchor.classList.add("card");
        manchor.href = `/epindex/epindex.html?name=${data[i].Title}`;
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
        sanchor.href = `/epindex/epindex.html?name=${data[i].Title}`;
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
        Aanchor.href = `/epindex/epindex.html?name=${data[i].Title}`;
        Aanchor.innerHTML = `<img class="c-h-w-s" src="${data[i].banner}">`;
        AC.append(Aanchor);
      }
    }
    for (let i = 0; i < data.length; i++) {
      if (data[i].Type == "Anime (M)") {
        const Aanchor = document.createElement("a");
        Aanchor.classList.add("card");
        Aanchor.href = `/epindex/epindex.html?name=${data[i].Title}`;
        Aanchor.innerHTML = `<img class="c-h-w-s" src="${data[i].banner}">`;
        AC.append(Aanchor);
      }
    }
    //  </ANIME CARDS>  --------

    // Top Famouse Cards Arrow Function-----------------------
    rightArr.addEventListener("click", () => {
      TFC.scrollLeft += Exhanchor.scrollWidth + 8;
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
      MC.scrollLeft += Exhanchor.scrollWidth + 8;
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
      SC.scrollLeft += Exhanchor.scrollWidth + 8;
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
      AC.scrollLeft += Exhanchor.scrollWidth + 8;
      aleftArr.style.display = "block";
    });

    aleftArr.addEventListener("click", (e) => {
      if (screenX === 0) {
        aleftArr.style.display = "none";
      } else aleftArr.style.display = "block";
      AC.scrollLeft += -9999;
    });
  });
fetch(`https://6751855ed1983b9597b336b6.mockapi.io/sall/`)
  .then((res) => res.json())
  .then((data) => {
    //  <⁡⁢⁣⁢TOP FAMOUSE SHOWS CARDS⁡>  --------
    const BLanchor = document.createElement("a");
    BLanchor.classList.add("card");
    BLanchor.innerHTML = `<img class="c-h-w-s" src="${data[0].banner}">`;
    BLanchor.href = "/epindex/epindex.html?name=Blue_Lock";
    TFC.append(BLanchor);

    //  </⁡⁢⁣⁢TOP FAMOUSE SHOWS CARDS⁡>  --------

    //  <⁡⁣⁢⁢LETEST RELEASES CARDS⁡>  --------

    const BLLanchor = document.createElement("a");
    BLLanchor.classList.add("card");
    BLLanchor.innerHTML = `<img class="c-h-w-s" src="${data[0].banner}">`;
    BLLanchor.href = "/epindex/epindex.html?name=Blue_Lock";
    LRC.append(BLLanchor);

    //  </⁡⁣⁢⁡⁣⁢⁢LETEST RELEASES CARDS⁡>  --------

    //  <⁡⁣⁣⁢MINDBLOWING SHOWS CARDS⁡>  --------

    //  </⁡⁣⁣⁢MINDBLOWING SHOWS CARDS⁡>  --------

    //  <MOVIES CARDS>  --------
    for (let i = 0; i < data.length; i++) {
      if (data[i].Type == "Movie") {
        const manchor = document.createElement("a");
        manchor.classList.add("card");
        manchor.href = `/epindex/epindex.html?name=${data[i].Title}`;
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
        sanchor.href = `/epindex/epindex.html?name=${data[i].Title}`;
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
        Aanchor.href = `/epindex/epindex.html?name=${data[i].Title}`;
        Aanchor.innerHTML = `<img class="c-h-w-s" src="${data[i].banner}">`;
        AC.append(Aanchor);
      }
    }
    for (let i = 0; i < data.length; i++) {
      if (data[i].Type == "Anime (M)") {
        const Aanchor = document.createElement("a");
        Aanchor.classList.add("card");
        Aanchor.href = `/epindex/epindex.html?name=${data[i].Title}`;
        Aanchor.innerHTML = `<img class="c-h-w-s" src="${data[i].banner}">`;
        AC.append(Aanchor);
      }
    }
    //  </ANIME CARDS>  --------

    // Top Famouse Cards Arrow Function-----------------------
    rightArr.addEventListener("click", () => {
      TFC.scrollLeft += Exhanchor.scrollWidth + 8;
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
      MC.scrollLeft += Exhanchor.scrollWidth + 8;
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
      SC.scrollLeft += Exhanchor.scrollWidth + 8;
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
      AC.scrollLeft += Exhanchor.scrollWidth + 8;
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
  // cw.style.display = "none";
  // herowr.style.display = "none";
  // defaultthree.style.display = "block";
  // three.style.display = "none";
  // // rw.style.display = "flex";
  box3.style.rotate = "";
  sc.style.borderBottomLeftRadius = "0";
  sc.style.borderBottomRightRadius = "0";
  twr.style.padding = "16px 9px";
  twr.style.height = "auto";
  main.style.filter = "brightness(0.1)";
  body.style.overflow = "hidden";
}

function normalise() {
  sc.style.borderBottomLeftRadius = "6px";
  sc.style.borderBottomRightRadius = "6px";
  twr.style.padding = "";
  twr.style.height = "0";
  main.style.filter = "";
  body.style.overflow = "";
}
function Catagory() {
  box3.style.animation = "Vibrate 0.5s linear";
  alert("Now Catagory Option Is Disabled, Available Soon");
}

const b1img = document.getElementById("box1img");
const sInpt = document.getElementById("sInput");

box1.addEventListener("mouseenter", () => {
  b1img.style.rotate = "90deg";
});
box1.addEventListener("mouseleave", () => {
  b1img.style.rotate = "";
});
const recommendation = document.querySelector(".recommendation");

fetch("https://6751855ed1983b9597b336b6.mockapi.io/all/")
  .then((res) => res.json())
  .then((data) => {
    let allDN = data.map((e) => {
      return e.Title;
    });
    sInpt.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        b1img.click();
      }
      if (event.keyCode === 27) {
        normalise();
      }
    });
    b1img.addEventListener("click", () => {
      let Searchedvalue = allDN.filter((sdn) => {
        return sdn
          .toLowerCase()
          .includes(sInpt.value.toLowerCase().split(" ").join("_"));
      });
      Searchedvalue.forEach((TE) => {
        twr.innerHTML = "";
        let recText = document.createElement("a");
        recText.classList.add("recText");
        fetch(`https://6751855ed1983b9597b336b6.mockapi.io/all/${TE}`)
          .then((res) => res.json())
          .then((dBgImg) => {
            recText.href = `/epindex/epindex.html?name=${dBgImg.Title}`;
            if (dBgImg.Recommend) {
              recText.innerHTML = `<p>${dBgImg.Title.split("_").join(
                " "
              )}</p><p class="recRecommendedopt">${dBgImg.Recommend
                }</p><div style="background-image: url(${dBgImg.epindexbanner
                });" class="recTBBanner"></div>`;
            } else {
              recText.innerHTML = `<p>${dBgImg.Title.split("_").join(
                " "
              )}</p><div style="background-image: url(${dBgImg.epindexbanner
                });" class="recTBBanner"></div>`;
            }
          });
        twr.append(recText);
      });
    });
  });

fetch("https://6751855ed1983b9597b336b6.mockapi.io/sall")
  .then((res) => res.json())
  .then((data) => {
    let allDN = data.map((e) => {
      return e.Title;
    });
    b1img.addEventListener("click", () => {
      let Searchedvalue = allDN.filter((sdn) => {
        return sdn
          .toLowerCase()
          .includes(sInpt.value.toLowerCase().split(" ").join("_"));
      });
      Searchedvalue.forEach((TE) => {
        twr.innerHTML = "";
        let recText = document.createElement("a");
        recText.classList.add("recText");
        fetch(`https://6751855ed1983b9597b336b6.mockapi.io/sall/${TE}`)
          .then((res) => res.json())
          .then((dBgImg) => {
            recText.href = `/epindex/epindex.html?name=${dBgImg.Title}`;
            if (dBgImg.Recommend) {
              recText.innerHTML = `<p>${dBgImg.Title.split("_").join(
                " "
              )}</p><p class="recRecommendedopt">${dBgImg.Recommend
                }</p><div style="background-image: url(${dBgImg.epindexbanner
                });" class="recTBBanner"></div>`;
            } else {
              recText.innerHTML = `<p>${dBgImg.Title.split("_").join(
                " "
              )}</p><div style="background-image: url(${dBgImg.epindexbanner
                });" class="recTBBanner"></div>`;
            }
          });
        twr.append(recText);
      });
    });
  });

// recText.addEventListener("click", (e) => {
//   let recCard = document.createElement("a");
//   recCard.classList.add("rec-theme");
//   recCard.classList.add("rec-settings");
//   recCard.classList.add("rcpstatic");
//   recCard.href = `/epindex/epindex.html?name=${e.Title}`;
//   recCard.innerHTML = `<div class="rec-d-wr rec-settings"><img class="rec-pimg" src="images/pbtn.svg"><div class="img-wr rec-settings"><div class="c rec-el-s">${e.Type}</div><div class="r rec-el-s">${e.time}</div><img class="" src="${e.poster}"></div></div>`;
//   recommendation.append(recCard);
