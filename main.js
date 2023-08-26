const form = document.getElementById("form");
const tel = document.getElementById("tel");
const nome = document.getElementById("name");
const nomes = [];
const telefones = [];
const res = document.getElementById("res");

let linhas = "";

tel.addEventListener("keypress", function () {
  let tamTel = tel.value.length;
  if (tamTel === 0) {
    tel.value += "(";
  } else if (tamTel === 3) {
    tel.value += ")";
  } else if (tamTel === 9) {
    tel.value += "-";
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (nomes.includes(nome.value)) {
    res.innerHTML = `O Nome ${nome.value} Já Foi Cadastrado.`;
    res.classList.add("erro");
  } else if (telefones.includes(tel.value)) {
    res.innerHTML = `O Número ${tel.value} Já Foi Cadastrado.`;
    res.classList.add("erro");
  } else {
    res.innerHTML = "";
    res.classList.remove("erro");
    nomes.push(nome.value);
    telefones.push(tel.value);
    let linha = `<tr>`;
    linha += `<td>${nome.value}</td>`;
    linha += `<td>${tel.value}</td>`;
    linha += `</tr>`;
    linhas += linha;
    const corpoTab = document.querySelector("tbody");
    corpoTab.innerHTML = linhas;
  }

  tel.value = "";
  nome.value = "";
});
