class MapMarker {
  constructor(container, { title, color, left, top }) {
    this.container = container;
    this.title = title;
    this.color = color;
    this.left = left;
    this.top = top;
    this.active = false;
    this.marker = this.createMarker();
  }

  createMarker() {
    const marker = document.createElement("div");
    marker.classList.add("marker");
    marker.classList.add(`marker_${this.color}`);
    marker.innerHTML = `
        <div class="marker__circle"></div>
        <div class="marker__text">${this.title}</div>`;

    marker.style.left = this.left;
    marker.style.top = this.top;
    this.container.appendChild(marker);

    return marker;
  }
}

const markersContainer = document.querySelector(".background");

let data = [
  {
    title: "Причал",
    color: "blue",
    left: "22.2vw",
    top: "66.1vh",
  },
  {
    title: "Администрация",
    color: "blue",
    left: "30.2vw",
    top: "26.1vh",
  },
  {
    title: "Стадион",
    color: "green",
    left: "35.8vw",
    top: "44.6vh",
  },
  {
    title: "Автопарковка",
    color: "blue",
    left: "56.3vw",
    top: "58.2vh",
  },
  {
    title: "Жилой дом",
    color: "green",
    left: "57.7vw",
    top: "73.1vh",
  },
  {
    title: "Ж/д вокзал",
    color: "green",
    left: "59.8vw",
    top: "37.4vh",
  },
  {
    title: "Спортивный центр",
    color: "green",
    left: "68vw",
    top: "61.9vh",
  },
  {
    title: "Жилой дом 2",
    color: "blue",
    left: "71.5vw",
    top: "20.8vh",
  },
  {
    title: "Автобусный вокзал",
    color: "blue",
    left: "73.6vw",
    top: "44vh",
  },
  {
    title: "Выстовочный зал",
    color: "blue",
    left: "83vw",
    top: "66vh",
  },
];

data.forEach((config) => {
  new MapMarker(markersContainer, config);
});

markersContainer.addEventListener("click", (event) => {
  const target = event.target.closest(".marker");
  const markers = markersContainer.querySelectorAll(".marker");

  if (target && !isActive(target)) {
    deactivate(markers);
    makeActive(target);
  } else {
    deactivate(markers);
  }
});

function isActive(marker) {
  return marker.classList.contains("marker_active");
}

function deactivate(markers) {
  markers.forEach((marker) => {
    marker.classList.remove("marker_active");
    marker
      .querySelector(".marker__circle")
      .classList.remove("marker__circle_active");
  });
}

function makeActive(marker) {
  marker.classList.add("marker_active");
  marker
    .querySelector(".marker__circle")
    .classList.add("marker__circle_active");
}
