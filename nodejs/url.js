const {URL} = require("url");

const MyURL = new URL("http://gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript");
console.log("searchParams : ", MyURL.searchParams);
console.log("searchParams.getAll() : ", MyURL.searchParams.getAll("category"));
console.log("searchParams.get() : ", MyURL.searchParams.get("limit"));
console.log("searchParams.has() : ", MyURL.searchParams.has("page"));

console.log("searchParams.keys() : ", MyURL.searchParams.keys());
console.log("searchParams.values() : ", MyURL.searchParams.values());

MyURL.searchParams.append("filter", "es3");
MyURL.searchParams.append("filter", "es5");
console.log(MyURL.searchParams.getAll("filter"));
// key가 중복되도 다 추가 된다.

MyURL.searchParams.set("filter", "es6");
console.log(MyURL.searchParams.getAll("filter"));
// key가 중복되는게 있으면 다 삭제한 후 새로 추가한다.

MyURL.searchParams.delete("filter");
console.log(MyURL.searchParams.getAll("filter"));
// delete(keys) keys에 들어가는 걸 삭제한다.

console.log("searchParams.toString() : ", MyURL.searchParams.toString());
MyURL.search = MyURL.searchParams.toString();