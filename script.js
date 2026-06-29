let respostas = {};
let pontos = 0;

/* RESPOSTAS DO QUIZ */
function responder(pergunta, resposta, botao) {
  respostas[pergunta] = resposta;

  let botoes = botao.parentElement.querySelectorAll("button");
  botoes.forEach(b => b.classList.remove("selecionado"));

  botao.classList.add("selecionado");
}

/* RESULTADO DO QUIZ (10 perguntas) */
function mostrarResultado() {
  pontos = 0;

  if (respostas.q1 === "android") pontos++;
  if (respostas.q2 === "linus") pontos++;
  if (respostas.q3 === "apple") pontos++;
  if (respostas.q4 === "linux") pontos++;
  if (respostas.q5 === "microsoft") pontos++;
  if (respostas.q6 === "open") pontos++;
  if (respostas.q7 === "android") pontos++;
  if (respostas.q8 === "ios") pontos++;
  if (respostas.q9 === "pc") pontos++;
  if (respostas.q10 === "servers") pontos++;

  let texto = "";

  if (pontos === 10) texto = "🔥 Perfeito! Você é especialista!";
  else if (pontos >= 7) texto = "👍 Muito bom conhecimento!";
  else if (pontos >= 4) texto = "📚 Nível médio, pode melhorar!";
  else texto = "⚠️ Precisa estudar mais!";

  document.getElementById("resultadoQuiz").innerHTML =
    `Você acertou <b>${pontos}/10</b><br>${texto}`;
}

/* BARRA DE PROGRESSO + BOTÃO TOPO */
let topButton = document.getElementById("topButton");

window.onscroll = function () {

  let scrollTop = document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (scrollTop / height) * 100;

  document.getElementById("progressBar").style.width = scrolled + "%";

  if (scrollTop > 300) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
};

/* VOLTAR AO TOPO */
function voltarTopo() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

/* SIDEBAR ATIVA AUTOMÁTICA */
let sections = document.querySelectorAll("section");
let links = document.querySelectorAll(".sidebar a");

window.addEventListener("scroll", () => {
  let pos = window.scrollY + 200;

  sections.forEach(sec => {
    if (pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) {
      links.forEach(l => l.classList.remove("active"));

      document.querySelector(`.sidebar a[href="#${sec.id}"]`)
        ?.classList.add("active");
    }
  });
});
