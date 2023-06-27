export class MaterialIcon {
  constructor({ name = "", size = 10, color = "inherit" }) {
    this.html = null;
    this.name = name;
    this.size = size;

    this.initialize();
  }

  initialize() {
    const icon = document.createElement("i");
    icon.classList.add("material-icons");
    icon.innerText = this.name;
    icon.style.fontSize = `${this.size}px`;
    this.html = icon;
  }
}
