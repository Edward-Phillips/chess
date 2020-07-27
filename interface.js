function domReady(fn) {
  // If we're early to the party
  document.addEventListener("DOMContentLoaded", fn);
  // If late; I mean on time.
  if (document.readyState === "interactive" || document.readyState === "complete" ) {
    fn();
  }
}

domReady(()=> {
  const board = document.getElementById("board")
  for (let index = 0; index < 64; index++) {
    const cell = document.createElement("div");
    const cellContents = document.createElement("div")
    const charCode = "A".charCodeAt(0)
    const idLetter = String.fromCharCode(charCode + index % 8)
    cell.id = idLetter + parseInt(9-((index+1)/8))
    cellContents.textContent = index + 1 + ", " + cell.id
    // cellContents.textContent = cell.id
    cell.appendChild(cellContents)
    cell.classList.add("square")
    if(index % 2 == 0) {
      cell.classList.add("white") 
    } else {
      cell.classList.add("black")
    }
    board.appendChild(cell)
  }
})

// domReady(()=> {
//   document.addEventListener("click", (e) => {
//     console.log(`${e.target.id}`);
//   })
// })