const sprayPatterns = {
  "M416": [[0,0],[1,-1],[2,-2],[3,-4],[3,-5],[2,-7]],
  "AKM": [[0,0],[2,-3],[4,-6],[5,-10],[5,-13],[4,-17]],
  "UMP45": [[0,0],[1,-1],[1,-2],[1,-3],[2,-3],[2,-4]]
};

function startSpray() {
  const gun = document.getElementById("gunSelect").value;
  const pattern = sprayPatterns[gun];
  const canvas = document.getElementById("sprayCanvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, 500, 500);
  ctx.beginPath();
  ctx.moveTo(250, 250);
  let x = 250, y = 250;

  for (let [dx, dy] of pattern) {
    x += dx * 5;
    y += dy * 5;
    ctx.lineTo(x, y);
  }
  ctx.strokeStyle = "red";
  ctx.stroke();
}
