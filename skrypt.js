addEventListener("DOMContentLoaded", () => {
  wczytaj();
  const przycisk = document.querySelector("#dodaj");
  const reset = document.querySelector("#reset");
  przycisk.addEventListener("click", dodaj);
  reset.addEventListener("click", () => {
    localStorage.clear();
    localStorage.setItem("ilość", 0);
    wczytaj();
    document.querySelector("input").value = "";
  });
});
function wczytaj() {
  let licznik = localStorage.getItem("ilość");
  const lista = document.querySelector("ul");
  lista.innerHTML = "";
  const tab = [];
  for (let i = 0; i < licznik; i++) {
    tab[i] = localStorage.getItem(i);
    lista.innerHTML += `<li>${tab[i]}</li>`;
  }
}
function dodaj() {
  let licznik = localStorage.getItem("ilość");
  const input = document.querySelector("input");
  const tekst = input.value.trim();
  console.log(tekst);
  if (tekst) {
    localStorage.setItem(licznik, tekst);
    licznik++;
    localStorage.setItem("ilość", licznik);
  }
  wczytaj();
  document.querySelector("input").value = "";
}
