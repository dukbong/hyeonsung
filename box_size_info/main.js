const $width = document.querySelector("#width");
const $length = document.querySelector("#length");
const $height = document.querySelector("#height");
const $button = document.querySelector("#boxserach");
const $E = document.querySelector("#E");
const $B = document.querySelector("#B");
const $A = document.querySelector("#A");
const $BA = document.querySelector("#BA");

let width;
let length;
let height;

$width.addEventListener("input", () => {
  width = parseInt($width.value);
});
$length.addEventListener("input", () => {
  length = parseInt($length.value);
});
$height.addEventListener("input", () => {
  height = parseInt($height.value);
});

$button.addEventListener("click", () => {
  if (width != undefined && length != undefined && height != undefined) {
    let result = {
      E: {
        Ewidth: width + 10,
        Elength: length + 10,
        Eheight: height + 12,
      },
      B: {
        Bwidth: width + 15,
        Blength: length + 15,
        Bheight: height + 18,
      },
      A: {
        Awidth: width + 18,
        Alength: length + 18,
        Aheight: height + 28,
      },
      BA: {
        BAwidth: width + 24,
        BAlength: length + 24,
        BAheight: height + 40,
      },
    }; //이거보다 작은 박스 사면 안맞음...
    $E.textContent =
      "E골 : " +
      result.E.Ewidth +
      "mm X " +
      result.E.Elength +
      "mm X " +
      result.E.Eheight +
      "mm";
    $B.textContent =
      "B골 : " +
      result.B.Bwidth +
      "mm X " +
      result.B.Blength +
      "mm X " +
      result.B.Bheight +
      "mm";
    $A.textContent =
      "A골 : " +
      result.A.Awidth +
      "mm X " +
      result.A.Alength +
      "mm X " +
      result.A.Aheight +
      "mm";
    $BA.textContent =
      "BA골 : " +
      result.BA.BAwidth +
      "mm X " +
      result.BA.BAlength +
      "mm X " +
      result.BA.BAheight +
      "mm";
  } else {
    alert("가로 세로 높이를 모두 입력해주세요.");
  }
});
