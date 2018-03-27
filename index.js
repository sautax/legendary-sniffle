let app = new PIXI.Application({
  width: 500,         // default: 800
  height: 500,        // default: 600
  antialias: true,    // default: false
  transparent: false, // default: false
  resolution: 1       // default: 1
}
);
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);
console.log("a");

document.body.appendChild(app.view);
let rectangle = new PIXI.Graphics()

rectangle.lineStyle(4, 0xFF3300, 1);
rectangle.beginFill(0x66CCFF);
rectangle.drawRect(0, 0, 64, 64);
rectangle.endFill();
rectangle.x = 170;
rectangle.y = 170;
app.stage.addChild(rectangle);
console.log(rectangle);
gameLoop()
function gameLoop() {
  requestAnimationFrame(gameLoop);
}
