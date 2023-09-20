// clase para las skins disponibles
class Skin {
  constructor(nombre, arma, precio, imagen) {
    this.nombre = nombre;
    this.arma = arma;
    this.precio = precio;
    this.imagen = imagen;
  }
}

// skins disponibles
const fireserpent = new Skin("Fire serpent", "AK47", 500, "fireserpent.png");
const karambit_fade = new Skin("Fade", "Karambit", 1000, "karambit.png");
const dragon_lore = new Skin("Dragon lore", "AWP", 1500, "dragonlore.png");
const asimov = new Skin("asimov", "AK47", 2000, "akasimov.png");

// array para guardar las skins ya compradas
const mis_skins = [];

// cantidad de oro disponible
let mis_usd = 5000;

// elementos del DOM
const usd = document.querySelector("#usd span");
usd.innerText = mis_usd;
const muestra_mis_skins = document.querySelector("#mis_skins");

// funcion para la compra de skins
function comprar(skin) {
  if (mis_usd - skin.precio >= 0) {
    mis_skins.push(skin);
    mis_usd -= skin.precio;
    actualizarHTML();
  } else {
    alert("no tenes fondos suficientes.");
  }
}

// funcion para la venta de skins
function vender(nombre_skin) {
  const skin_encontrada = mis_skins.find((skin) => skin.nombre == nombre_skin);
  if (skin_encontrada) {
    mis_usd += skin_encontrada.precio;
    const indice = mis_skins.indexOf(skin_encontrada);
    mis_skins.splice(indice, 1);
    actualizarHTML();
  }
}

// funcion para actualizar los dolares y las skins del HTML
function actualizarHTML() {
  muestra_mis_skins.innerHTML = "";
  for (const skin of mis_skins) {
    const li = `
        <li onclick="vender('${skin.nombre}')">
          <img src="images/${skin.imagen}" alt="${skin.imagen}" />
        </li>
        `;
    muestra_mis_skins.innerHTML += li;
  }

  usd.innerText = mis_usd;
}
