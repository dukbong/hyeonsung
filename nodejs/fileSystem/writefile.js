//파일을 생성하여 내용을 작성한다.

const fs = require("fs").promises;

fs.writeFile("./writeme.txt", "내용이 입력됩니다.")
  // writme.txt라는 파일을 만들고 거기에 내용이 입력됩니다.
  .then(() => {})
  .catch((err) => {
    throw err;
  });
