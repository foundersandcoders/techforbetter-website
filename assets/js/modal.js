var modal = document.getElementById("modal");
var modalImage = document.getElementById("modal-image");
var captionTitle = document.getElementById("caption-title");
var captionParagraph = document.getElementById("caption-paragraph");
var closeModal = document.getElementById("close-modal");

function imageModal(image) {
  modal.style.display = "flex";

  switch (image.id) {
    case "all-about-me":
      modalImage.src = "images/portfolio/all-about-me.png";
      var title = document.createElement("a");
      title.setAttribute("href", "https://allaboutme-af.herokuapp.com/");
      title.setAttribute("target", "_blank");
      title.innerText = "All About Me";
      while (captionTitle.firstChild) {
        captionTitle.removeChild(captionTitle.firstChild);
      }
      captionTitle.appendChild(title);
      captionParagraph.innerText =
        "All About Me is an app to help young people at The Anna Freud Centre easily transition into adult care.\nPatients at The Anna Freud Centre were tired of being asked the same questions every time their clinician changed or they went to a new centre. All About Me allows patients to answer a questionnaire online in their own time, save their answers, and when they're ready they can send their form to their clinician.";
      break;
    case "breathe-with-me":
      modalImage.src = "images/portfolio/breathe-with-me.png";
      var title = document.createElement("a");
      title.setAttribute("href", "https://breathewithme.co.uk/");
      title.setAttribute("target", "_blank");
      title.innerText = "Breathe With Me";
      while (captionTitle.firstChild) {
        captionTitle.removeChild(captionTitle.firstChild);
      }
      captionTitle.appendChild(title);
      captionParagraph.innerText =
        "Breathe with Me was developed for CAMHS (Child and Adolescent Mental Health Services). As many as 1 in 6 young people will experience an anxiety problem at some point in their life. The aim of Breathe with Me is to help to reduce anxiety and promote wellbeing through supported breathing exercises.";
      break;
    case "echo":
      modalImage.src = "images/portfolio/echo.png";
      var title = document.createElement("a");
      title.setAttribute("href", "https://echo-af.herokuapp.com/");
      title.setAttribute("target", "_blank");
      title.innerText = "Echo";
      while (captionTitle.firstChild) {
        captionTitle.removeChild(captionTitle.firstChild);
      }
      captionTitle.appendChild(title); // captionTitle.innerText = "Echo";
      captionParagraph.innerText =
        "Echo is an app for storing and revisiting good memories. This app allows children to store memories in various mediums (including, photos, voice recordings and text). The memories are displayed visually through interconnecting dots, allowing the user to revisit them with ease.";
      break;
    case "courtauld":
      modalImage.src = "images/portfolio/courtauld.png";
      captionTitle.innerText = "Courtauld Institute of Art Volunteer App";
      captionParagraph.innerText =
        "This app was built to enhance the volunteer experience at the Courtauld Institute of Art. For the past year, the Courtauld Institute has relied on volunteers to catalogue and digitise a huge collection of photographs and art for their Courtauld Connects initiative. They are preparing to more than triple the current number of volunteers in order to accelerate the multi-year project.";
      break;
    case "grow":
      modalImage.src = "images/portfolio/grow.png";
      var title = document.createElement("a");
      title.setAttribute("href", "https://welcome-in.herokuapp.com/");
      title.setAttribute("target", "_blank");
      title.innerText = "Grow";
      while (captionTitle.firstChild) {
        captionTitle.removeChild(captionTitle.firstChild);
      }
      captionTitle.appendChild(title);
      captionParagraph.innerText =
        "Grow is a collaboration with CAHMs (Child and Adolescent Mental Health Services). They work with young people aged 12-18 who benefit from emotional, behavioural, and mental health support. CAHMs identified young people were struggling to express issues and record progress with their mentors. Grow solved this by allowing young people to set manageable goals and complete them with ease.";
      break;
    case "little-window":
      modalImage.src = "images/portfolio/littlewindow.png";
      var title = document.createElement("a");
      title.setAttribute("href", "https://chayn.co/");
      title.setAttribute("target", "_blank");
      title.innerText = "Little Window";
      while (captionTitle.firstChild) {
        captionTitle.removeChild(captionTitle.firstChild);
      }
      captionTitle.appendChild(title);
      captionParagraph.innerText =
        "The Little Window application is a chatbot to be featured on all Chayn websites. The chatbot  will help women living in abusive circumstances by guiding them to relevant information depending on their need and location.";
      break;
  }
}

closeModal.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
