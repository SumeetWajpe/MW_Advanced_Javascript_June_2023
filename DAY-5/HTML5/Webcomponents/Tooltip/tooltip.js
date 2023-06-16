class Tooltip extends HTMLElement {
  constructor() {
    super();
    this.tooltip = null;
    this.tooltiptext = "Dummy Tooltip !";
  }
  // fired when this element gets attached to DOM !
  connectedCallback() {
    let tooltipIcon = document.createElement("span");
    tooltipIcon.innerHTML = "(?)";
    tooltipIcon.addEventListener("mouseenter", () => this.showTooltip());
    tooltipIcon.addEventListener("mouseleave", () => this.hideTooltip());

    this.style.position = "relative";

    if (this.hasAttribute("title")) {
      this.tooltiptext = this.getAttribute("title");
    }

    this.appendChild(tooltipIcon);
  }

  showTooltip() {
    this.tooltip = document.createElement("div");
    this.tooltip.innerText = this.tooltiptext;
    this.tooltip.style.backgroundColor = "black";
    this.tooltip.style.color = "white";
    this.tooltip.style.border = "2px solid grey";
    this.tooltip.style.borderRadius = "3px";
    this.tooltip.style.padding = "3px";
    this.tooltip.style.position = "absolute";
    this.tooltip.style.left = "10px";
    this.tooltip.style.top = "-10px";
    this.tooltip.style.fontSize = "10px";
    this.tooltip.style.width = "max-content";

    this.appendChild(this.tooltip);
  }

  hideTooltip() {
    this.removeChild(this.tooltip);
  }
}

customElements.define("uc-tooltip", Tooltip);
