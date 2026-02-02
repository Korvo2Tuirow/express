import { readFile, writeFile, unlink } from "fs/promises";

const exec = async() => {
console.log("Writing to file...");

const list = ["banana", "maça", "pera"];

// escrevendo o array em um arquivo

await writeFile("./output.txt", list.join("\n"));
console.log("File written successfully.");

// lendo o arquivo
const data = await readFile("./output.txt", {encoding: "utf-8"});
console.log("File content:");
console.log(data);

//transformando o conteúdo do arquivo em um array
const dataArray = data.split("\n");
console.log("Array content:");
console.log(dataArray);

//adicionando um novo item ao array
const fileContent = await readFile("./output.txt", {encoding: "utf-8"});
const newData = fileContent.split("\n");
newData.push("laranja");
const newDataString = newData.join("\n");

//escrevendo o novo conteúdo no arquivo
await writeFile("./output.txt", newDataString);
console.log("New item added and file updated.");

  // deletando o arquivo
  //  await unlink("./output.txt");
  //  console.log("File deleted successfully.");  


}



exec();

//no package.json "file": "node --import=tsx --watch ./src/file.ts" para executar separado npm run file