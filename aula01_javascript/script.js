/* ============================================================
   Aula 01 - JavaScript | Desenvolvimento de Interface | ADS
   Abra o Console (F12) para ver as saídas do Laboratório 1
   e dos Exercícios de fixação.
   ============================================================ */

// ---------- Preparação do ambiente ----------
console.log("Olá, estudante de ADS!");
console.log("Minha primeira aplicação JavaScript.");

// ---------- Laboratório 1 — Cadastro simples de usuário ----------
console.log("===== LABORATÓRIO 1 =====");
const nome = "Matheus Henrique Lacerda";
const email = "matheus@email.com";
let idade = 24;
let usuarioAtivo = true;

console.log("DADOS DO USUÁRIO");
console.log("Nome:", nome);
console.log("E-mail:", email);
console.log("Idade:", idade);
console.log("Usuário ativo:", usuarioAtivo);

// Tarefa 4: ano de nascimento estimado (referência 2026)
const anoNascimento = 2026 - idade;
console.log("Ano de nascimento (estimado):", anoNascimento);

// Tipos de dados com typeof
let telefone;
let endereco = null;
console.log(typeof nome, typeof idade, typeof usuarioAtivo, typeof telefone, typeof endereco);

// ---------- Laboratório 2 — Calculadora de operações ----------
const botao = document.getElementById("btnCalcular");

botao.addEventListener("click", function () {
  const campo1 = document.getElementById("numero1");
  const campo2 = document.getElementById("numero2");
  const resultado = document.getElementById("resultado");

  if (campo1.value === "" || campo2.value === "") {
    resultado.textContent = "Preencha os dois números.";
    return;
  }

  const numero1 = Number(campo1.value);
  const numero2 = Number(campo2.value);

  const soma = numero1 + numero2;
  const subtracao = numero1 - numero2;
  const multiplicacao = numero1 * numero2;
  const divisao = numero2 === 0
    ? "Não é possível dividir por zero."
    : numero1 / numero2;

  resultado.innerHTML = `
    <p>Soma: ${soma}</p>
    <p>Subtração: ${subtracao}</p>
    <p>Multiplicação: ${multiplicacao}</p>
    <p>Divisão: ${divisao}</p>
  `;
});

// ---------- Laboratório 3 — Calculadora de média ----------
const botaoMedia = document.getElementById("calcular");

botaoMedia.addEventListener("click", function () {
  const campos = [
    document.getElementById("nota1"),
    document.getElementById("nota2"),
    document.getElementById("nota3")
  ];
  const resultadoMedia = document.getElementById("resultadoMedia");

  // Rejeita campos vazios
  for (const campo of campos) {
    if (campo.value === "") {
      resultadoMedia.innerHTML = '<span class="erro">Preencha as três notas.</span>';
      return;
    }
  }

  const nota1 = Number(campos[0].value);
  const nota2 = Number(campos[1].value);
  const nota3 = Number(campos[2].value);

  // Aceita somente notas entre 0 e 10
  const notas = [nota1, nota2, nota3];
  for (const nota of notas) {
    if (Number.isNaN(nota) || nota < 0 || nota > 10) {
      resultadoMedia.innerHTML = '<span class="erro">As notas devem estar entre 0 e 10.</span>';
      return;
    }
  }

  const media = (nota1 + nota2 + nota3) / 3;
  const mediaFormatada = Number(media.toFixed(2)); // 8 -> 8 | 7.333 -> 7.33
  resultadoMedia.innerHTML = `<span class="ok">Média: ${mediaFormatada}</span>`;
});

// ---------- Exercícios de fixação (veja no Console) ----------
console.log("===== EXERCÍCIOS DE FIXAÇÃO =====");

// 1. Cadastro de estudante
const nomeEstudante = "Matheus Henrique Lacerda";
const matricula = "22605071";
const cursoEstudante = "Análise e Desenvolvimento de Sistemas";
let periodo = 1;
let situacaoAcademica = "Ativo";
console.log("1) Estudante:", nomeEstudante, "| Matrícula:", matricula,
  "| Curso:", cursoEstudante, "| Período:", periodo, "| Situação:", situacaoAcademica);

// 2. Compra
const preco = 150.00;
let quantidade = 3;
const valorTotal = preco * quantidade;
console.log("2) Valor total da compra: R$", valorTotal.toFixed(2)); // 450.00

// 3. Desconto de 15% em R$ 200,00
const precoProduto = 200.00;
const percentualDesconto = 15;
const valorDesconto = precoProduto * (percentualDesconto / 100);
const precoFinal = precoProduto - valorDesconto;
console.log("3) Desconto: R$", valorDesconto.toFixed(2), "| Preço final: R$", precoFinal.toFixed(2)); // 30.00 | 170.00

// 4. Comparação
const idadeTeste = 18;
console.log("4) idade > 18:", idadeTeste > 18);     // false
console.log("   idade < 18:", idadeTeste < 18);     // false
console.log("   idade === 18:", idadeTeste === 18); // true
console.log("   idade >= 18:", idadeTeste >= 18);   // true

// 5. Operadores lógicos
const idadeUsuario = 22;
const possuiCadastro = true;
const contaAtiva = true;
console.log("5) Idade mínima E cadastro:", idadeUsuario >= 18 && possuiCadastro); // true
console.log("   Conta ativa OU cadastro:", contaAtiva || possuiCadastro);         // true
console.log("   Conta NÃO ativa:", !contaAtiva);                                   // false

// 6. Par ou ímpar
const numeroTeste = 7;
console.log("6)", numeroTeste, numeroTeste % 2 === 0 ? "é par" : "é ímpar");
