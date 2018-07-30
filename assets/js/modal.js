var modal = document.getElementById("modal");
var modalImage = document.getElementById("modal-image");
var captionTitle = document.getElementById("caption-title");
var captionParagraph = document.getElementById("caption-paragraph");
var closeModal = document.getElementById("close-modal");

var modalData = {
  "all-about-me": {
    title: "All About Me",
    image: "images/portfolio/all-about-me.png",
    url: "https://allaboutme-af.herokuapp.com/",
    description:
      "All About Me is an app to help young people at The Anna Freud Centre easily transition into adult care. Patients at The Anna Freud Centre were tired of being asked the same questions every time their clinician changed or they went to a new centre. All About Me allows patients to answer a questionnaire online in their own time, save their answers, and when they're ready they can send their form to their clinician."
  },
  "breathe-with-me": {
    title: "Breathe With Me",
    image: "images/portfolio/breathe-with-me.png",
    url: "https://breathewithme.co.uk/",
    description:
      "Breathe with Me was developed for CAMHS (Child and Adolescent Mental Health Services). As many as 1 in 6 young people will experience an anxiety problem at some point in their life. The aim of Breathe with Me is to help to reduce anxiety and promote wellbeing through supported breathing exercises."
  },
  echo: {
    title: "echo",
    image: "images/portfolio/echo.png",
    url: "https://echo-af.herokuapp.com/",
    description:
      "Echo is an app for storing and revisiting good memories. This app allows children to store memories in various mediums (including, photos, voice recordings and text). The memories are displayed visually through interconnecting dots, allowing the user to revisit them with ease."
  },
  courtauld: {
    title: "Courtauld Institute of Art Volunteer App",
    image: "images/portfolio/courtauld.png",
    url: "https://github.com/fac-12/CourtauldInstitute",
    description:
      "This app was built to enhance the volunteer experience at the Courtauld Institute of Art. For the past year, the Courtauld Institute has relied on volunteers to catalogue and digitise a huge collection of photographs and art for their Courtauld Connects initiative. They are preparing to more than triple the current number of volunteers in order to accelerate the multi-year project."
  },
  grow: {
    title: "Grow",
    image: "images/portfolio/grow.png",
    url: "https://polar-dawn-55555.herokuapp.com/",
    description:
      "Grow is a collaboration with CAHMs (Child and Adolescent Mental Health Services). They work with young people aged 12-18 who benefit from emotional, behavioural, and mental health support. CAHMs identified young people were struggling to express issues and record progress with their mentors. Grow solved this by allowing young people to set manageable goals and complete them with ease."
  },
  "little-window": {
    title: "Little Window",
    image: "images/portfolio/littlewindow.png",
    url: "https://chayn.co/",
    description:
      "The Little Window application is a chatbot to be featured on all Chayn websites. The chatbot  will help women living in abusive circumstances by guiding them to relevant information depending on their need and location."
  }
};

function renderModal(image) {
  modal.style.display = "flex";
  switch (image.id) {
    case "all-about-me":
      createModal(image.id);
      break;
    case "breathe-with-me":
      createModal(image.id);
      break;
    case "echo":
      createModal(image.id);
      break;
    case "courtauld":
      createModal(image.id);
      break;
    case "grow":
      createModal(image.id);
      break;
    case "little-window":
      createModal(image.id);
      break;
  }
}

function createModal(id) {
  var title = createModalTitle(id);
  fillModal(id, title);
}

function createModalTitle(id) {
  var title = document.createElement("a");
  title.setAttribute("href", modalData[id].url);
  title.setAttribute("target", "_blank");
  return title;
}

function fillModal(id, title) {
  title.innerText = modalData[id].title;
  modalImage.src = modalData[id].image;
  captionParagraph.innerText = modalData[id].description;
  deleteOldModalTitle();
  captionTitle.appendChild(title);
}

function deleteOldModalTitle() {
  while (captionTitle.firstChild) {
    captionTitle.removeChild(captionTitle.firstChild);
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
