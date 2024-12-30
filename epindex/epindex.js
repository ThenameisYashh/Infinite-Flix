const idnum = new URLSearchParams(location.search).get("name");
const epContainer = document.querySelector(".epsContainer");
const ep2Container = document.querySelector(".eps2Container");
const ep3Container = document.querySelector(".eps3Container");
const epwr1 = document.querySelector(".epwr1");
const epwr2 = document.querySelector(".epwr2");
const epwr3 = document.querySelector(".epwr3");
const seasons = document.querySelector(".seasons");

fetch(`https://6751855ed1983b9597b336b6.mockapi.io/all/${idnum}`)
  .then((res) => res.json())
  .then((data) => {
    document.querySelector(".bg").style.backgroundImage = `url(${data.epindexbanner})`;
    document.querySelector(".heroImg").src = `${data.epindexbanner}`;
    document.querySelector(".fstD").innerHTML = `<h1>${data.Title}</h1><span>${data.Genre}</span><p class='epPlot'>${data.Plot}</p>`;
    document.querySelector(".scnD").innerHTML = `<label>Cast</label><p>${data.Actors}</p>`;

    if (data.totalSeasons) {
      for (let i = 0; i < data.totalSeasons.length; i++) {
        const opt = document.createElement("option");
        opt.classList.add("gme");
        opt.classList.add("s-opt");
        opt.innerText = `Season ${data.totalSeasons[i]}`;
        seasons.append(opt);
      }
    }
    let mlogo = document.querySelector(".heroLogo");
    mlogo.innerHTML = `<img src="${data.Logo}" alt="${data.Title} Logo" >`;

    let mContainer = document.querySelector(".mContainer");
    if (data.runtime) {
      mContainer.style.display = "block";
    }
    let mimg = document.getElementById("mc-img");
    mimg.src = `${data.banner}`;
    document.getElementById("mc-des-p").innerText = `${data.Plot}`;
    document.querySelector(
      ".runtime"
    ).innerHTML = `<abbr title="runtime"><p>${data.runtime}</p></abbr>`;
    document.querySelector(
      ".rating"
    ).innerHTML = `<abbr title="rating"><p>${data.imdbRating}</p></abbr>`;
    document.querySelector(
      ".pbtn"
    ).href = `/videoplayer/videoplayer.html?name=${idnum}${data.link}`;

    if (data.S1) {
      data.S1.forEach((e) => {
        const ep = document.createElement("a");
        ep.classList.add("ep");
        ep.classList.add("gme");
        ep.href = `/videoplayer/videoplayer.html?name=${idnum}${e.link}`;
        ep.innerHTML = `<div class="epimg"><div class="runtime gme">${e.runtime}</div><img src="${e.epbanner}" alt="Episode Banner"></div><div class='epinfo'><span class='epNum'>Episode ${e.epNum}</span><p class='epDes'>${e.epDes}</p></div>`;
        document.querySelector(".hep-s").style.display = "flex";
        document.querySelector(".sContainer").style.display = "flex";
        epContainer.append(ep);
      });
    } else epwr1.style.display = "none";
    if (data.S2) {
      data.S2.forEach((e) => {
        const ep = document.createElement("a");
        ep.classList.add("ep");
        ep.classList.add("gme");
        ep.href = `/videoplayer/videoplayer.html?name=${idnum}${e.link}`;
        ep.innerHTML = `<div class="epimg"><div class="runtime gme">${e.runtime}</div><img src="${e.epbanner}" alt="Episode Banner"></div><div class='epinfo'><span class='epNum'>Episode ${e.epNum}</span><p class='epDes'>${e.epDes}</p></div>`;
        document.querySelector(".hep-s").style.display = "flex";
        document.querySelector(".sContainer").style.display = "flex";
        ep2Container.append(ep);
      });
    } else epwr2.style.display = "none";
    if (data.S3) {
      data.S3.forEach((e) => {
        const ep = document.createElement("a");
        ep.classList.add("ep");
        ep.classList.add("gme");
        ep.href = `/videoplayer/videoplayer.html?name=${idnum}${e.link}`;
        ep.innerHTML = `<div class="epimg"><div class="runtime gme">${e.runtime}</div><img src="${e.epbanner}" alt="Episode Banner"></div><div class='epinfo'><span class='epNum'>Episode ${e.epNum}</span><p class='epDes'>${e.epDes}</p></div>`;
        document.querySelector(".hep-s").style.display = "flex";
        document.querySelector(".sContainer").style.display = "flex";
        ep3Container.append(ep);
      });
    } else epwr3.style.display = "none";
  });

const larr = document.getElementById("larr");
const larr2 = document.querySelector(".bl2");
const larr3 = document.querySelector(".bl3");

function lscrl() {
  epContainer.scrollLeft -= 99999;
  larr.style.display = "none";
}
function rscrl() {
  epContainer.scrollLeft += 1200;
  larr.style.display = "flex";
}
function lscrl2() {
  ep2Container.scrollLeft -= 99999;
  larr2.style.display = "none";
}
function rscrl2() {
  ep2Container.scrollLeft += 1200;
  larr2.style.display = "flex";
}
function lscrl3() {
  ep3Container.scrollLeft -= 99999;
  larr3.style.display = "none";
}
function rscrl3() {
  ep3Container.scrollLeft += 1200;
  larr3.style.display = "flex";
}

const expimg = document.querySelector(".expimg");
const expimg2 = document.querySelector(".expimg2");
const cwr2 = document.querySelector(".cwr2");
const cwr3 = document.querySelector(".cwr3");

function arrrotate() {
  expimg.classList.toggle("r0");
  cwr2.classList.toggle("cwrf");
}
function arrrotate2() {
  expimg2.classList.toggle("r0");
  cwr3.classList.toggle("cwrf");
}
