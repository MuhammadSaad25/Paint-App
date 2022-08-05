function reload() {
  alert("please select color first");
}
reload();
let colorSelect = (event) => {
  event.preventDefault();
  let colorPicked = document.querySelector("#colorBox").value;
  console.log(colorPicked);

  let ctx = document.querySelector("#myCanvas").getContext("2d");
  ctx.fillStyle = `${colorPicked}`;
  // ctx.fillRect(0, 0, 100, 100);

  let isMouseDown = false;

  document.querySelector("#myCanvas").addEventListener("mousedown", (event) => {
    isMouseDown = true;
  });
  document.querySelector("#myCanvas").addEventListener("mouseup", (event) => {
    isMouseDown = false;
    ctx.beginPath();
  });

  document.querySelector("#myCanvas").addEventListener("mousemove", (event) => {
    if (isMouseDown) {
      // console.log("move: ", event);

      console.log("h: ", event.offsetX);
      console.log("w: ", event.offsetY);

      // ctx.fillRect(event.offsetX, event.offsetY, 2, 2);

      ctx.lineWidth = 10;
      ctx.lineCap = "round";
      ctx.lineTo(event.offsetX, event.offsetY);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(event.offsetX, event.offsetY)
      ctx.strokeStyle = colorPicked; 
    }
  });
};

let download = () => {
  let canvas = document.querySelector("#myCanvas");
  let anchor = document.createElement("a");
  anchor.href = canvas.toDataURL("image/png");
  anchor.download = "image.png";
  anchor.click();
};
