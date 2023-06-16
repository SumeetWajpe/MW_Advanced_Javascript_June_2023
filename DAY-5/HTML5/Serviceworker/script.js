if (navigator.serviceWorker) {
  window.addEventListener("load", () => {
    this.navigator.serviceWorker
      .register("serviceworker.js")
      .then(() => console.log(`Service Worker : Registered !`))
      .catch(() => console.log(`Service Worker : Registration failed !`));
  });
}
