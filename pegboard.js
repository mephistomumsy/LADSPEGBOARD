const pegboardModal = document.getElementById("pegboardModal");
const pegboardGrid = document.getElementById("pegboardGrid");
const closePegboardModal = document.getElementById("closePegboardModal");
const showAllBtn = document.getElementById("showAllPegboards");

// Flag to check if modal content has been built before
let pegboardBuilt = false;

// Build grid only once
const buildPegboardGrid = () => {
  pegboardGrid.innerHTML = "";
  owners.forEach((o, index) => {
    const item = document.createElement("div");
    item.className = "pegboard-grid-item";
    item.innerHTML = `
      <img src="${o.pegboardImg}" alt="Pegboard ${o.name}" loading="lazy" onerror="this.style.display='none'">
      <span>${o.name}</span>
    `;
    item.addEventListener("click", () => {
      currentIndex = index;
      updateCarousel();
      pegboardModal.style.display = "none";
    });
    pegboardGrid.appendChild(item);
  });
  pegboardBuilt = true;
};

// Open modal (build only once)
showAllBtn.addEventListener("click", () => {
  if (!pegboardBuilt) buildPegboardGrid();
  pegboardModal.style.display = "flex";
});

// Close modal
closePegboardModal.addEventListener("click", () => (pegboardModal.style.display = "none"));
pegboardModal.addEventListener("click", e => {
  if (e.target === pegboardModal) pegboardModal.style.display = "none";
});
