//prettier-ignore
let elfTotal = 0, max = 0, top2Elf = 0, top3Elf = 0;
require("readline")
  .createInterface(require("fs").createReadStream("a.txt"))
  .on("line", (line) => {
    if (line.length == 0) {
      if (elfTotal >= max) {
        top3Elf = top2Elf;
        top2Elf = max;
        max = elfTotal;
      } else if (elfTotal >= top2Elf) {
        top3Elf = top2Elf;
        top2Elf = elfTotal;
      } else if (elfTotal >= top3Elf) top3Elf = elfTotal;
      elfTotal = 0;
    } else elfTotal += parseInt(line);
  })
  .once("close", (res) =>
    //prettier-ignore
    console.log(`Part 1: ${max}\nPart 2: ${max + top2Elf + (elfTotal > top3Elf ? elfTotal : top3Elf)}`)
  );
