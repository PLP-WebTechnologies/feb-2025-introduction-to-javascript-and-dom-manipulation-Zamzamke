// 1. Change text dynamically
function changeText() {
    const heading = document.getElementById("dynamic-text");
    heading.textContent = "Thanks for visiting Cozy Brew! ☕";
  }
  
  // 2. Toggle CSS styles dynamically
  function toggleHighlight() {
    const heading = document.getElementById("dynamic-text");
    heading.classList.toggle("highlight");
  }
  
  // 3. Add or remove an element
  let noteExists = false;
  
  function addOrRemoveElement() {
    const container = document.getElementById("note-container");
  
    if (!noteExists) {
      const note = document.createElement("p");
      note.id = "reminder";
      note.textContent = "Don't forget to try our caramel latte!";
      note.style.color = "#8b4513";
      note.style.fontStyle = "italic";
      container.appendChild(note);
      noteExists = true;
    } else {
      const note = document.getElementById("reminder");
      if (note) {
        container.removeChild(note);
      }
      noteExists = false;
    }
  }
  