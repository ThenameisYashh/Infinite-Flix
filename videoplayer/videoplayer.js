let epurl = new URLSearchParams(location.search).get("name");
let newurl = epurl.at();

if (epurl.length > 74) {
  let episodelink = epurl.slice(2);
  const iframe = document.querySelector("iframe");
  iframe.src = episodelink;
} else {
  let episodelink = epurl.slice(1);
  const iframe = document.querySelector("iframe");
  iframe.src = episodelink;
}
