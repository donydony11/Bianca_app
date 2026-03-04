const lines = [
  {
    text: "Unele momente sunt menite să fie ținute minte pentru totdeauna.",
    className: "card__line card__line--soft",
  },
  {
    text: "",
  },
  {
    text: "Bianca, din momentul în care ni s-au intersectat drumurile,",
    className: "card__line card__line--highlight",
  },
  {
    text: "mi-ai pictat lumea cu culori de care nici nu știam că există.",
    className: "card__line",
  },
  {
    text: "",
  },
  {
    text: "Zâmbetul tău, râsul tău, felul în care îți strălucesc ochii",
    className: "card__line card__line--soft",
  },
  {
    text: "Sunt micile minuni care dau magie fiecărei zile obișnuite.",
    className: "card__line",
  },
  {
    text: "",
  },
  {
    text: "Aceasta este o invitație simplă, dar promisiunea din spatele ei este reală: ",
    className: "card__line card__line--soft",
  },
  {
    text: "",
  },
  {
    text: "Te aleg pe tine. Azi, mâine, mereu.",
    className: "card__line card__line--center card__line--highlight",
  },
  {
    text: "",
  },
  {
    text: "Mâine la ora 16:00,",
    className: "card__line card__line--center card__line--soft",
  },
  {
    text: "Voi fi la tine ca să putem merge împreună.",
    className: "card__line card__line--center",
  },
  {
    text: "",
  },
  {
    text: "Spune da și hai să facem ziua de mâine de neuitat. ❤️",
    className: "card__line card__line--center card__line--highlight",
  },
];

const TYPING_DELAY = 35; // ms per character
const LINE_DELAY = 250; // ms between lines

async function typeLine(text, container, className) {
  if (!text) {
    const empty = document.createElement("p");
    empty.className = "card__line";
    empty.innerHTML = "&nbsp;";
    container.appendChild(empty);
    return;
  }

  const p = document.createElement("p");
  if (className) p.className = className;
  container.appendChild(p);

  for (let i = 0; i < text.length; i++) {
    p.textContent = text.slice(0, i + 1);
    await new Promise((resolve) => setTimeout(resolve, TYPING_DELAY));
  }
}

async function runTyping() {
  const container = document.getElementById("message");
  for (const line of lines) {
    await typeLine(line.text, container, line.className);
    await new Promise((resolve) => setTimeout(resolve, LINE_DELAY));
  }
}

window.addEventListener("DOMContentLoaded", () => {
  runTyping().catch(console.error);
});