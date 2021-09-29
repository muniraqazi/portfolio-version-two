// console.log('hello????');
// CREDITS
// matrix idea - https://codepen.io/unframework/pen/pqorjJ
// code tutoiral - https://www.youtube.com/watch?v=JfLNCMp_z4o
// gradient - https://www.w3schools.com/tags/canvas_fillstyle.asp
// https://cssgradient.io/

let canvas = document.querySelector("canvas");

let ctx = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
// let str = "A+jk jk:2 @dfs 17 tr YY ufds MQ P87 #18 $!& ^dfs $Ew er JH # $ * . (! ;) ,: : ﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎ";
let str = "!# $ %&' ()*+, -./0 12 34 56 7 8 9: ;<= >?ABCD EFGHI JKLMNOP QRST UVWX YZ ^_`a bcd ef ghi jkl mno pq rst uvw xyz ~ ﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎ"
let matrix = str.split("");
let font = 15;
let col = width / font;
let arr = [];

var gradient = ctx.createLinearGradient(0, 0, width, height);
gradient.addColorStop("0"," #16dbe7");
gradient.addColorStop("0.5", "#8d1dfd");
gradient.addColorStop("1.0", "#e913a4");

for (let i = 0; i < col; i++) {
  arr[i] = 1;
}

const draw = () => {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = gradient;
  ctx.fillText("", 10, 90);

  ctx.font = `${font}px system-ui`;

  for(let i = 0; i < arr.length; i++) {
    // let txt = matrix.length;
    let txt = matrix[Math.floor(Math.random() * matrix.length)];
    ctx.fillText(txt, i * font, arr[i] * font);

    if(arr[i] * font > height && Math.random() > 0.975) {
      arr[i] = 0;
    }
    arr[i]++;
  }
}

//speed of falling characters
setInterval(draw, 50);

window.addEventListener("resize", () => location.reload());

