$(document).ready(function () {
  console.log("we got here");
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
});

console.log(post.length);
