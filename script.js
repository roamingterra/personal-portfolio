function scrollToHeader() {
  const headerSection = document.querySelector("header");
  headerSection.scrollIntoView({ behavior: "smooth" });
}

function scrollToAbout() {
  const aboutSection = document.querySelector(".about");
  aboutSection.scrollIntoView({ behavior: "smooth" });
}

function scrollToProjects() {
  const projectsSection = document.querySelector(".projects");
  projectsSection.scrollIntoView({ behavior: "smooth" });
}

function scrollToContact() {
  const contactSection = document.querySelector(".contact");
  contactSection.scrollIntoView({ behavior: "smooth" });
}
