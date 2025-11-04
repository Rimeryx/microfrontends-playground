import $ from "jquery";
import siteHtml from "./site.html";
import "./styles.css";
import { initSite } from "./site.js";

let $container;
export function bootstrap(){ return Promise.resolve(); }
export function mount(){
  const container = document.createElement("div");
  container.id = "vanilla-app";
  document.body.appendChild(container);
  container.innerHTML = siteHtml;
  $container = $(container).find(".vanilla-scope");
  initSite($container);
  return Promise.resolve();
}
export function unmount(){
  if($container){ $container.find("*").off(); $container=null; }
  const el=document.getElementById("vanilla-app"); if(el) el.remove();
  return Promise.resolve();
}
