window.addEventListener("DOMContentLoaded", function () {
  /** @type {HTMLCanvasElement} */
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = 800;
  canvas.height = 720;

  class inputHandler {
    constructor() {
      this.keys = [];
      window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowDown" && this.keys.indexOf(e.key) === -1) {
          this.keys.push(e.key);
        }
        console.log(e.key, this.keys);
      });
      window.addEventListener("keyup", (e) => {
        if (e.key === "ArrowDown" && this.keys.indexOf(e.key) === -1) {
          this.keys.push(e.key);
        }
        console.log(e.key, this.keys);
      });
    }
  }

  /* 
  class Player {
    constructor()
  }

  class Background {
    constructor()
  }

  class Enemy {
    constructor()
  }

  function handleEnemies() {

  }

  function displayStatusText() {

  } */

  const input = new inputHandler();

  function animate() {}
});
