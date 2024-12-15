import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";

const path = "./data.json";
// Todays commit
// const date = moment().format();

// 5 DAYS AGO commit
const date = moment().subtract(5, "d").format();

console.log(date);

const data = {
  date: date,
};

jsonfile.writeFile(path, data, () => {
  simpleGit().add([path]).commit(date, { "--date": date }).push();
});
