const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
];

//버튼 클릭시 랜덤하게 나온 두 색상으로 linear graddient 해야함 
//Math.random()*colors.length 
//두 색상이 같지 않게 filter() 함수 사용해보자 

const bgPainterBtn = document.querySelector("button");
const body = document.querySelector("body");

function handlePainter(){
    const color1 = colors[Math.floor(Math.random() * colors.length)];
    const color2 = colors[Math.floor(Math.random() * colors.length)];
    if(color1 !== color2){
        body.style.background = `linear-gradient(0.25turn, ${color1}, ${color2})`;
    }else{
        return handlePainter;
    }
}

bgPainterBtn.addEventListener("click", handlePainter);

//body.style.background = `linear-gradient(0.25turn, ${color1}, ${color2})`;

