const fs = require("fs/promises");

//Callback Hell

const path = "./texto.txt";

//Promises
// fs.readFile(path, { encoding: "utf-8" })
//   .then((data) => {
//     fs.writeFile(
//       path,
//       data.replace("é um porre", "vai ser uma programadora foda"),
//       { encoding: "utf-8" }
//     )
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   })
//   .catch((error) => console.log(error));

//Async/await
// async function readData() {
//   try {
//     const data = await fs.readFile(path, { encoding: "utf-8" });

//     await fs.writeFile(path, data + 20, { encoding: "utf-8" });

//     console.log("deu tudo certo");
//   } catch (error) {
//     console.log("deu erro:", error.message);
//   }
// }

// readData();

//Promise all
// async function run() {
//   try {
//     await fs.writeFile("./luiza1.txt", "Luiza vai virar uma programadora", {
//       encoding: "utf-8",
//     });
//   } catch (error) {
//     console.log(error);
//   }

//   try {
//     await Promise.all([
//       fs.writeFile("./luiza1.txt", "Luiza vai virar uma programadora", {
//         encoding: "utf-8",
//       }),
//       fs.writeFile("./luiza2.txt", "Luiza vai criar dois filhos do xxxx", {
//         encoding: "utf-8",
//       }),
//     ]);
//   } catch (error) {
//     console.log(error);
//   }
// }

// run();