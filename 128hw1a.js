function resetColor() {
  let div = $("#main-title");
  div.css("color", "var(--purple)");
  div.animate({ fontSize: "-=5px" });
}

$(document).ready(function () {
  $("#test").click(function () {
    let div = $("#main-title");
    $("img").css({
      border: "solid 0.3rem #FFE4E1",
      "border-radius": "1rem",
    });

    div.css("color", "var(--turq)");
    div.animate({ fontSize: "+=5px" });
    const reset = setTimeout(resetColor, 1200);
  });
});
