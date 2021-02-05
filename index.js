let run = document.querySelector(".run");
let fullscreen = document.querySelector(".fullscreen");
let output = document.querySelector("main");
let html = document.querySelector(".html");
let css = document.querySelector(".css");
let js = document.querySelector(".js");
let iframe = document.querySelector("#result").contentWindow.document;
run.onclick = () => {
    iframe.open();
    iframe.write(`<style>${css.value}</style>
    ${html.value}
    <script>${js.value}</script>`);
    iframe.close();
}