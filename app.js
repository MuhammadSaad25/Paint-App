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
  });

  document.querySelector("#myCanvas").addEventListener("mousemove", (event) => {
    if (isMouseDown) {
      // console.log("move: ", event);
      console.log("h: ", event.offsetX);
      console.log("w: ", event.offsetY);

      ctx.fillRect(event.offsetX, event.offsetY, 2, 2);
    }
  });
};
