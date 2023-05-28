const casillas = document.querySelectorAll('.casilla');
let jugadorActual = 'O';
let juegoTerminado = false;
var nombreUsuario;
casillas.forEach(casilla => {
  casilla.addEventListener('click', function () {
    if (!juegoTerminado) {
      if (this.innerHTML === '') {
        this.innerHTML = jugadorActual;
        this.classList.add(jugadorActual);
        verificarGanador();
        jugadorActual = jugadorActual === 'O' ? 'X' : 'O';
      }
    }
  });

  casilla.addEventListener('mouseover', function () {
    this.parentElement.classList.add('iluminada');
  });

  casilla.addEventListener('mouseout', function () {
    this.parentElement.classList.remove('iluminada');
  });
});

function verificarGanador() {
  const combinacionesGanadoras = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6] 
  ];

  for (let i = 0; i < combinacionesGanadoras.length; i++) {
    const [a, b, c] = combinacionesGanadoras[i];
    const casillaA = casillas[a];
    const casillaB = casillas[b];
    const casillaC = casillas[c];

    if (casillaA.innerHTML !== '' && casillaA.innerHTML === casillaB.innerHTML && casillaB.innerHTML === casillaC.innerHTML) {
      juegoTerminado = true;
      mostrarMensaje(`${jugadorActual} gana!`);
      bloquearTablero();
      break;
    }
  }
}

function mostrarMensaje(mensaje) {
  alert(mensaje);
}

function bloquearTablero() {
  casillas.forEach(casilla => {
    casilla.removeEventListener('click', function () { });
  });
}
function openModal() {
  document.getElementById("modalOverlay").style.display = "flex";
}

function closeModal() {
  document.getElementById("modalOverlay").style.display = "none";
}
function guardarNombreUsuario() {
  nombreUsuario = document.getElementById('nombreUsuarioInput').value;
  sessionStorage.setItem('nombreUsuario', nombreUsuario);
  alert('Nombre de usuario guardado correctamente, recargue la pagina para ver los cambios');
}



window.onload = function () {
  nombreUsuario = sessionStorage.getItem('nombreUsuario');
  if (nombreUsuario) {
    document.getElementById('nombreUsuario').innerText = nombreUsuario;
    document.getElementById('nombreUsuarioInput').value = nombreUsuario;
  } else {
    document.getElementById('nombreUsuario').innerText = "Sin identificar";
  }
  cargarColores();
};


function changeBackgroundColor() {
  var colorInput = document.getElementById('colorInput');
  var color = colorInput.value;
  document.body.style.backgroundColor = color;
  localStorage.setItem('backgroundColor', color);
}
