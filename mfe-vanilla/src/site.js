import $ from "jquery";
export function initSite($root){
  $root.find("#applyColor").on("click", () => {
    const color = $root.find("#colorInput").val();
    $root.find(".card").css("background", color);
  });
}
