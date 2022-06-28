const blk_pitn = {
    //各小方块相对【自身中心】的位置 -- 【自身中心】确定为#div22的方块
    block1: [
      [0, 1],
      [0, 0],
      [-1, 0],
      [-1, -1],
    ],
    block2: [
      [0, 1],
      [0, 0],
      [-1, 0],
      [0, -1],
    ],
    block3: [
      [-1, 1],
      [0, 0],
      [-1, 0],
      [-1, -1],
    ],
    block4: [
      [0, 1],
      [0, 0],
      [-1, 0],
      [-1, -1],
    ] /* 1 */,
    block5: [
      [-1, 1],
      [0, 0],
      [-1, 0],
      [0, -1],
    ],
    block6: [
      [0, -1],
      [0, 0],
      [-1, 0],
      [1, -1],
    ],
    block7: [
      [-1, -1],
      [0, 0],
      [-1, 0],
      [1, 0],
    ],
    block8: [
      [-1, 1],
      [0, 0],
      [-1, 0],
      [-1, -1],
    ] /* 3 */,
    block9: [
      [0, -1],
      [0, 0],
      [-1, 0],
      [1, 0],
    ],
    block10: [
      [-1, 1],
      [0, 0],
      [-1, 0],
      [1, 0],
    ],
    block11: [
      [2, 0],
      [0, 0],
      [-1, 0],
      [1, 0],
    ] /* — */,
    block12: [
      [0, 1],
      [0, 0],
      [-1, 0],
      [0, -1],
    ] /* 2 */,
    block13: [
      [0, 1],
      [0, 0],
      [-1, 0],
      [-1, -1],
    ] /* 1 */,
    block14: [
      [1, 1],
      [0, 0],
      [-1, 0],
      [1, 0],
    ],
    block15: [
      [1, -1],
      [0, 0],
      [-1, 0],
      [1, 0],
    ],
    block16: [
      [-1, -1],
      [0, 0],
      [-1, 0],
      [1, 0],
    ] /* 7 */,
    block17: [
      [0, 1],
      [0, 0],
      [-1, 0],
      [0, -1],
    ] /* 2 */,
    block18: [
      [0, 1],
      [0, 0],
      [-1, 0],
      [-1, -1],
    ] /* 1 */,
    block19: [
      [0, -1],
      [0, 0],
      [-1, 0],
      [1, 0],
    ] /* 9 */,
    block20: [
      [1, -1],
      [0, 0],
      [-1, 0],
      [1, 0],
    ],
    block21: [
      [0, 1],
      [0, 0],
      [-1, 0],
      [-1, -1],
    ] /* 1 */,
    block22: [
      [1, 1],
      [0, 0],
      [-1, 0],
      [1, 0],
    ] /* 14 */,
    block23: [
      [0, 2],
      [0, 0],
      [0, -1],
      [0, 1],
    ] /* | */,
  },
  offset_pitn = {
    //各方块block相对【爱心中心】的位置
    block1: [5, 3],
    block2: [5, 1],
    block3: [3, 4],
    block4: [3, 2],
    block5: [3, -1],
    block6: [2, 5],
    block7: [2, 1],
    block8: [1, -1],
    block9: [1, -3],
    block10: [1, 2],
    block11: [0, 3],
    block12: [0, 0] /* 【爱心中心】*/,
    block13: [-1, -4],
    block14: [0, -2],
    block15: [-2, 4],
    block16: [-2, 2],
    block17: [-2, 0],
    block18: [-3, -2],
    block19: [-4, 0],
    block20: [-3, 5],
    block21: [-5, 3],
    block22: [-4, 1],
    block23: [-6, 1] /* 因动画需要移动一个方块，故y轴坐标-1*/,
  };

let blocks = document.getElementsByClassName("block");
let block = blocks[0];
let love = document.getElementsByClassName("love")[0];
let timer = null;
let index = 0;
let clone_block;

block.style.top = "50%";
block.style.left = "50%";
block.style.margin = "-20px 0 0 -20px";

const block_left=parseFloat(window.getComputedStyle(block,null).left.slice(0,-2))
const block_top=parseFloat(window.getComputedStyle(block,null).top.slice(0,-2))

function Next() {
    if (++index>=24) {
      clearInterval(timer)
      Rise()
      reteurn
    }
    block.style.visibility="visible"
    block.style.left=block_left+40*offset_pitn["block"+index][0]+"px"
    block.style.top=block_top+40*offset_pitn["block"+index][1]+"px"
    for (let i = 0; i < block.children.length; i++) {
      block.children[i].style.left=blk_pitn["block"+index[i][0]]*-40+"px"
      block.children[i].style.top=blk_pitn["block"+index[i][1]]*-40+"px"
    }
}
function Rise() {
  let timer2 = null,
  distance = 0;
  const target = 120 /* 目标距离*/,
  speed = 1;
  let love_top=parseFloat(window.getComputedStyle(love,null).top.slice(0,-2))
  timer2=setInterval(() => {
    distance+=speed
    if (distance>=target) {
      clearInterval(timer2)
    }
    love.style.top=love_top-distance+'px'
  }, 22);

}
window.onload=function () {
    setTimeout(() => {
        timer=setInterval(() => {
            Next()
        }, 300);
    }, 12000);
}