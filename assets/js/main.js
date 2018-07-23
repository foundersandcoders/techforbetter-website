/*
	Directive by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {
  skel.breakpoints({
    wide: "(max-width: 1680px)",
    normal: "(max-width: 1280px)",
    narrow: "(max-width: 980px)",
    narrower: "(max-width: 840px)",
    mobile: "(max-width: 736px)",
    mobilep: "(max-width: 480px)"
  });

  $(function() {
    var $window = $(window),
      $body = $("body");

    // Disable animations/transitions until the page has loaded.
    $body.addClass("is-loading");

    $window.on("load", function() {
      $body.removeClass("is-loading");
    });

    // Fix: Placeholder polyfill.
    $("form").placeholder();

    // Prioritize "important" elements on narrower.
    skel.on("+narrower -narrower", function() {
      $.prioritize(
        ".important\\28 narrower\\29",
        skel.breakpoint("narrower").active
      );
    });
  });
})(jQuery);

var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionHeader = document.getElementById("caption-header");
var captionParagraph = document.getElementById("caption-paragraph");

function imageModal(image) {
  modal.style.display = "block";

  switch (image.id) {
    case "all-about-me":
      modalImg.src = "images/portfolio/all-about-me.png";
      var title = document.createElement("a");
      title.setAttribute("href", "");
      title.setAttribute("target", "_blank");
      title.innerText = "All About Me";
      while (captionHeader.firstChild) {
        captionHeader.removeChild(captionHeader.firstChild);
      }
      captionHeader.appendChild(title);
      // captionHeader.innerText = "All About Me";
      captionParagraph.innerText =
        "All About Me is an app to help young people at The Anna Freud Centre easily transition into adult care.\nPatients at The Anna Freud Centre were tired of being asked the same questions every time their clinician changed or they went to a new centre. All About Me allows patients to answer a questionnaire online in their own time, save their answers, and when they're ready they can send their form to their clinician.";
      break;
    case "breathe-with-me":
      modalImg.src = "images/portfolio/breathe-with-me.png";
      var title = document.createElement("a");
      title.setAttribute("href", "https://breathewithme.co.uk/");
      title.setAttribute("target", "_blank");
      title.innerText = "Breathe With Me";
      while (captionHeader.firstChild) {
        captionHeader.removeChild(captionHeader.firstChild);
      }
      captionHeader.appendChild(title); // captionHeader.innerText = "Breathe With Me";
      captionParagraph.innerText =
        "Breathe with Me was developed for CAMHS (Child and Adolescent Mental Health Services). As many as 1 in 6 young people will experience an anxiety problem at some point in their life. The aim of Breathe with Me is to help to reduce anxiety and promote wellbeing through supported breathing exercises.";
      break;
    case "echo":
      modalImg.src = "images/portfolio/echo.png";
      var title = document.createElement("a");
      title.setAttribute("href", "");
      title.setAttribute("target", "_blank");
      title.innerText = "Echo";
      while (captionHeader.firstChild) {
        captionHeader.removeChild(captionHeader.firstChild);
      }
      captionHeader.appendChild(title); // captionHeader.innerText = "Echo";
      captionParagraph.innerText =
        "Echo is an app for storing and revisiting good memories. This app allows children to store memories in various mediums (including, photos, voice recordings and text). The memories are displayed visually through interconnecting dots, allowing the user to revisit them with ease.";
      break;
    case "courtauld":
      modalImg.src = "images/portfolio/courtauld.png";
      var title = document.createElement("a");
      title.setAttribute("href", "");
      title.setAttribute("target", "_blank");
      title.innerText = "Courtauld Institute of Art Volunteer App";
      while (captionHeader.firstChild) {
        captionHeader.removeChild(captionHeader.firstChild);
      }
      captionHeader.appendChild(title); // captionHeader.innerText = "Courtauld Institute of Art Volunteer App";
      captionParagraph.innerText =
        "This app was built to enhance the volunteer experience at the Courtauld Institute of Art. For the past year, the Courtauld Institute has relied on volunteers to catalogue and digitise a huge collection of photographs and art for their Courtauld Connects initiative. They are preparing to more than triple the current number of volunteers in order to accelerate the multi-year project.";
      break;
    case "grow":
      modalImg.src = "images/portfolio/grow.png";
      var title = document.createElement("a");
      title.setAttribute("href", "https://welcome-in.herokuapp.com/");
      title.setAttribute("target", "_blank");
      title.innerText = "Grow";
      while (captionHeader.firstChild) {
        captionHeader.removeChild(captionHeader.firstChild);
      }
      captionHeader.appendChild(title); // captionHeader.innerText = "Grow";
      captionParagraph.innerText =
        "Grow is a collaboration with CAHMs (Child and Adolescent Mental Health Services). They work with young people aged 12-18 who benefit from emotional, behavioural, and mental health support. CAHMs identified young people were struggling to express issues and record progress with their mentors. Grow solved this by allowing young people to set manageable goals and complete them with ease.";
      break;
    case "little-window":
      modalImg.src = "images/portfolio/littlewindow.png";
      var title = document.createElement("a");
      title.setAttribute("href", "https://chayn.co/");
      title.setAttribute("target", "_blank");
      title.innerText = "Little Window";
      while (captionHeader.firstChild) {
        captionHeader.removeChild(captionHeader.firstChild);
      }
      captionHeader.appendChild(title);
      // captionHeader.innerText = "Little Window";
      captionParagraph.innerText =
        "The Little Window application is a chatbot to be featured on all Chayn websites. The chatbot  will help women living in abusive circumstances by guiding them to relevant information depending on their need and location.";
      break;
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
