const palavra = "França";

let encontrado = 0;
for (let letra of palavra) {
  if (letra === "a") {
       encontrado++;
            }
}
console.log(`Tem ${encontrado} letra a`)