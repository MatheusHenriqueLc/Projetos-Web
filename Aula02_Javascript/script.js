/* ============================================================
   Aula 02 - JavaScript | Entrada de dados, DOM e condicionais
   Desenvolvimento de Interface | ADS | CEUB
   ============================================================ */

// Função auxiliar: mostra mensagem na saída, com classe de cor
function mostrar(elemento, mensagem, tipo) {
  elemento.textContent = mensagem;
  elemento.className = tipo || "";
}

/* ---------- LABORATÓRIO 1 — Verificador de idade ---------- */
const campo = document.getElementById("idade");
const saida = document.getElementById("resultado");

document.getElementById("verificar").addEventListener("click", () => {
  const texto = campo.value.trim();               // lê o texto digitado

  // 1) Campo vazio?
  if (texto === "") {
    mostrar(saida, "Informe a idade.", "erro");
    return;
  }

  // 2) Converte e valida (inteiro entre 0 e 120)
  const idade = Number(texto);
  if (!Number.isInteger(idade) || idade < 0 || idade > 120) {
    mostrar(saida, "Idade inválida.", "erro");
    return;
  }

  // 3) Decide a resposta
  if (idade >= 18) {
    mostrar(saida, "Maior de idade", "ok");
  } else {
    mostrar(saida, "Menor de idade", "ok");
  }
});

/* ---------- LABORATÓRIO 2 — Calculadora de média ---------- */
const saidaMedia = document.getElementById("resultadoMedia");

document.getElementById("calcularMedia").addEventListener("click", () => {
  const textos = [
    document.getElementById("nota1").value.trim(),
    document.getElementById("nota2").value.trim(),
    document.getElementById("nota3").value.trim()
  ];

  // 1) Campos vazios (antes de Number())
  if (textos.some(t => t === "")) {
    mostrar(saidaMedia, "Preencha as três notas.", "erro");
    return;
  }

  // 2) Conversão e validação (0 a 10)
  const [n1, n2, n3] = textos.map(Number);
  const todasValidas = [n1, n2, n3].every(n => Number.isFinite(n) && n >= 0 && n <= 10);
  if (!todasValidas) {
    mostrar(saidaMedia, "Notas inválidas: use valores entre 0 e 10.", "erro");
    return;
  }

  // 3) Cálculo e classificação
  const media = (n1 + n2 + n3) / 3;
  const mediaTxt = Number(media.toFixed(2));
  if (media >= 6) {
    mostrar(saidaMedia, `Média ${mediaTxt} — Aprovado`, "ok");
  } else {
    mostrar(saidaMedia, `Média ${mediaTxt} — Recuperação`, "erro");
  }
});

/* ---------- EXERCÍCIOS DE FIXAÇÃO ---------- */

// A. Par ou ímpar usando %
document.getElementById("btnA").addEventListener("click", () => {
  const out = document.getElementById("resultadoA");
  const texto = document.getElementById("numeroA").value.trim();
  if (texto === "") { mostrar(out, "Informe um número.", "erro"); return; }
  const n = Number(texto);
  if (!Number.isInteger(n)) { mostrar(out, "Informe um número inteiro.", "erro"); return; }
  mostrar(out, n % 2 === 0 ? `${n} é par` : `${n} é ímpar`, "ok");
});

// B. Desconto de 10% para compras a partir de R$ 200
document.getElementById("btnB").addEventListener("click", () => {
  const out = document.getElementById("resultadoB");
  const texto = document.getElementById("valorB").value.trim();
  if (texto === "") { mostrar(out, "Informe o valor da compra.", "erro"); return; }
  const valor = Number(texto);
  if (!Number.isFinite(valor) || valor < 0) { mostrar(out, "Valor inválido.", "erro"); return; }

  if (valor >= 200) {
    const desconto = valor * 0.10;
    const final = valor - desconto;
    mostrar(out, `Desconto: R$ ${desconto.toFixed(2)} | Total: R$ ${final.toFixed(2)}`, "ok");
  } else {
    mostrar(out, `Sem desconto. Total: R$ ${valor.toFixed(2)}`, "ok");
  }
});

// C. Controle de acesso com idade e cadastro ativo
document.getElementById("btnC").addEventListener("click", () => {
  const out = document.getElementById("resultadoC");
  const texto = document.getElementById("idadeC").value.trim();
  if (texto === "") { mostrar(out, "Informe a idade.", "erro"); return; }
  const idade = Number(texto);
  if (!Number.isInteger(idade) || idade < 0 || idade > 120) { mostrar(out, "Idade inválida.", "erro"); return; }
  const cadastroAtivo = document.getElementById("cadastroC").checked;

  if (idade >= 18 && cadastroAtivo) {
    mostrar(out, "Acesso liberado", "ok");
  } else if (idade < 18) {
    mostrar(out, "Acesso negado: menor de idade", "erro");
  } else {
    mostrar(out, "Acesso negado: cadastro inativo", "erro");
  }
});

// D. Saudação com nome informado pelo usuário
document.getElementById("btnD").addEventListener("click", () => {
  const out = document.getElementById("resultadoD");
  const nome = document.getElementById("nomeD").value.trim();
  if (nome === "") { mostrar(out, "Informe seu nome.", "erro"); return; }
  mostrar(out, `Olá, ${nome}! Bem-vindo(a) à Aula 2 de JavaScript.`, "ok");
});

// E. Classificação de temperatura
document.getElementById("btnE").addEventListener("click", () => {
  const out = document.getElementById("resultadoE");
  const texto = document.getElementById("tempE").value.trim();
  if (texto === "") { mostrar(out, "Informe a temperatura.", "erro"); return; }
  const t = Number(texto);
  if (!Number.isFinite(t)) { mostrar(out, "Temperatura inválida.", "erro"); return; }

  if (t < 15) {
    mostrar(out, `${t} °C — Frio`, "ok");
  } else if (t <= 25) {
    mostrar(out, `${t} °C — Agradável`, "ok");
  } else if (t <= 35) {
    mostrar(out, `${t} °C — Quente`, "ok");
  } else {
    mostrar(out, `${t} °C — Muito quente`, "ok");
  }
});

// F. Validação de notas entre 0 e 10
document.getElementById("btnF").addEventListener("click", () => {
  const out = document.getElementById("resultadoF");
  const texto = document.getElementById("notaF").value.trim();
  if (texto === "") { mostrar(out, "Informe a nota.", "erro"); return; }
  const nota = Number(texto);
  if (!Number.isFinite(nota) || nota < 0 || nota > 10) {
    mostrar(out, "Nota inválida: use um valor entre 0 e 10.", "erro");
  } else {
    mostrar(out, `Nota ${nota} válida.`, "ok");
  }
});
