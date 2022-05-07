function show_learn_more() {
    let section = document.getElementById("learn_more");
    let learnMoreLess = document.querySelector(".learnlessORlearnmore");
    if (section.style.display === "none") {
      section.style.display = "block";
      learnMoreLess.textContent = "Learn Less";
    } else {
      section.style.display = "none";
      learnMoreLess.textContent = "Learn More";
    }
}
