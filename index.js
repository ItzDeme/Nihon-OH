//This was for states
// var buttonChoices = ["hiragana", "katakana", "learn"];
// var chosenButton = ["hiragana"];

$(document).ready(function () {
  hiragana();
});
//for buttons
$("button").click(function () {
  if (this.id === "katakana") {
    katakana();
    $("#hiragana").removeClass("active");
    $("#learn").removeClass("active");
    $("#katakana").addClass("active");
  } else if (this.id === "hiragana") {
    hiragana();
    $("#katakana").removeClass("active");
    $("#learn").removeClass("active");
    $("#hiragana").addClass("active");
  } else {
    learn();
    $("#katakana").removeClass("active");
    $("#hiragana").removeClass("active");
    $("#learn").addClass("active");
  }
});
//to change to hiragana
function hiragana() {
  $(".grid-container").empty();

  $.getJSON(
    "https://gist.githubusercontent.com/mdzhang/899a427eb3d0181cd762/raw/0d0f60f08ae58a927b7ac5e0a872acdce88ec441/hiragana.json",
    function (posts) {
      for (var post = 0; post < posts.length; post++) {
        $(".grid-container").append(
          "<div class='card-grid' id='card'>" +
            "<div class='front'>" +
            "<h1 class='red'>" +
            posts[post].kana +
            "</h1>" +
            "</div>" +
            "<div class='back'>" +
            "<h1>" +
            posts[post].roumaji +
            "</h1>" +
            "</div>" +
            "</div>"
        );
      }
      $(".card-grid").flip({
        trigger: "click",
      });
    }
  );
}
//to change to katakana
function katakana() {
  $(".grid-container").empty();

  $.getJSON(
    "https://gist.githubusercontent.com/mdzhang/53b362cadebf2785ca43/raw/98c597f16604b7e53539105e081de31c86a72f2c/katakana.json",
    function (posts) {
      for (var post = 0; post < posts.length; post++) {
        $(".grid-container").append(
          "<div class='card-grid' id='card'>" +
            "<div class='front'>" +
            "<h1 class='red'>" +
            posts[post].kana +
            "</h1>" +
            "</div>" +
            "<div class='back'>" +
            "<h1>" +
            posts[post].roumaji +
            "</h1>" +
            "</div>" +
            "</div>"
        );
      }
      $(".card-grid").flip({
        trigger: "click",
      });
    }
  );
}
//change to learning section
function learn() {
  $(".grid-container").empty();
  $(".grid-container").append("<h1>There is nothing to see here for now.</h1>");
}
