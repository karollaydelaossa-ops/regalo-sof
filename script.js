document.addEventListener('DOMContentLoaded', () => {

  /* ================= REFERENCIAS ================= */
  const vistas = document.querySelectorAll('.vista');
  const btnEntrar = document.getElementById('btnEntrar');
  const moodBtns = document.querySelectorAll('.mood-btn');
  const btnVolver = document.getElementById('btnVolver');
  const btnFotos = document.getElementById('btnFotos');
  const btnFinal = document.getElementById('btnFinal');

  const textoCarta = document.getElementById('textoCarta');
  const fotoMood = document.getElementById('fotoMood');
  const linkCancion = document.getElementById('linkCancion');

  let moodActual = '';

  /* ================= UTILIDAD ================= */
  function mostrarVista(id) {
    vistas.forEach(vista => {
      vista.classList.remove('activa', 'fade-in');
    });

    const vistaActual = document.getElementById(id);
    if (!vistaActual) return;

    vistaActual.classList.add('activa');
    void vistaActual.offsetWidth;
    vistaActual.classList.add('fade-in');
  }

  /* ================= NAVEGACIÓN ================= */
  btnEntrar?.addEventListener('click', () => {
    mostrarVista('moods');
  });

  btnVolver?.addEventListener('click', () => {
    mostrarVista('moods');
  });

  btnFotos?.addEventListener('click', () => {
    mostrarVista('fotos');
  });

  btnFinal?.addEventListener('click', () => {
    mostrarVista('final');
  });

  /* ================= CARTAS ================= */
  const cartas = {
    feliz: [
      "Me encanta cuando le sonríes al mundo. Ojalá el día te trate con extremada dulzura y que siga brillando para ti. Me encanta saber que sin importar lo que pueda pasar en tu vida siguen habiendo días así de resplandecientes para ti.",
      "Si hoy estás feliz, guárdalo un segundo. Respíralo. No todos los días brillan igual, y este merece quedarse contigo un rato. Guarda el recuerdo de como te sientes hoy para que cuando un día gris quiera arrollarte recuerdes que el color va a volver.",
      "Tu presencia tiene algo que acomoda el mundo. Incluso cuando no estoy ahí, saber que sonríes y que sigues siendo tu a pesar de todo me tranquiliza. Nunca cambies.",
      "Disfruta este día sin pensar demasiado. No todo tiene que ser productivo para ser valioso.",
      "Hoy solo paso a recordarte que te mereces sentirte así. Sin culpa, sin explicaciones. Mereces ser libre, ser feliz y sonreír, no lo olvides."
    ],
    triste: [
      "No tienes que estar bien ahora mismo, esta bien estar mal. De verdad. No todos los días tenemos la energía para sonreír y eso no está mal, eres humana y estar triste es normal. Solo recuerda... siente todo lo que debas pero no dejes que ese sentimiento te lance al vacío. Cualquier cosa... estoy aquí, incluso para los silencios.",
      "Hay días que pesan más de lo que deberían. Si hoy es uno de esos, no te exijas cargarlo sola, sabes que mi mano siempre está para que la tomes, mis hombros para que te apoyes y mi espalda para ayudarte con ese peso.",
      "No todo se arregla rápido, y eso está bien. A veces solo toca atravesar el momento, ver, sentir y aprender. Y recordar que no estás sola en el camino.",
      "Si pudieras verte como yo te veo hoy, sabrías que incluso triste sigues siendo suficiente, importante, inteligente, bella e increíble.",
      "Este día no define quién eres. Es solo un día. Y va a pasar. Te amo."
    ],
    cansada: [
      "Has dado mucho. Más de lo que probablemente reconoces. Descansar también es una forma de avanzar. Tomate un descanso hoy, te lo mereces.",
      "No tienes que hacerlo todo hoy. De verdad. El mundo no se va a caer si paras un poco.",
      "El cansancio no te quita valor. Solo te pide pausa.",
      "Ojalá hoy puedas tratarte con paciencia, se que a veces las cosas parecen no avanzar pero créeme cuando te digo que yo sé que hay algo increíble esperando por ti, solo tienes que darle tiempo y descansar en que eso espera por ti.",
      "Si todo lo que logras hoy es sobrevivir al día, eso ya es suficiente. No tienes que ser fuerte cada segundo."
    ],
    ansiosa: [
      "Respira. No todo lo que piensas ahora es una urgencia, haz una pausa.",
      "No tienes que resolver toda tu vida hoy. Solo este momento.",
      "La ansiedad miente fuerte, pero no dice la verdad. Respira, piensa, relájate y sigue.",
      "Estoy orgullosa de ti incluso en los días donde todo se siente demasiado.",
      "Si hoy el mundo se siente grande, toma las cosas en partes pequeñas."
    ],
    pensativa: [
      "Pensar mucho también es una forma de sentir. Solo no te pierdas ahí dentro. Date un respiro de ese lugar tan ensordecedor que pueden ser los pensamientos.",
      "No todo necesita una respuesta inmediata. Algunas llegan solas.",
      "Cuestionarte no es debilidad, es profundidad. Pero es importante que sepas que tal vez no todas las dudas tengan respuestas y eso está bien.",
      "Ojalá recuerdes que no todo lo que dudas es un error.",
      "Estás creciendo, incluso cuando no sientas que es evidente."
    ],
    nose: [
      "No saber también es un lugar válido para estar.",
      "No tienes que ponerle nombre a todo lo que sientes.",
      "A veces el cuerpo entiende antes que la cabeza.",
      "Está bien sentirse rara sin explicación.",
      "Si hoy no sabes qué pasa, solo quédate aquí un momento. Cierra los ojos y descansa, no tienes que tener la respuesta de todo."
    ]
  };

  /* ================= CANCIONES POR MOOD ================= */
  const canciones = {
    feliz: "https://open.spotify.com/intl-es/track/5Ts1DYOuouQLgzTaisxWYh?si=4362cdede973479e",
    triste: "https://open.spotify.com/intl-es/track/22D72L2NnJJkI5m1g3pXnj?si=d854b7ffcc834172",
    cansada: "https://open.spotify.com/intl-es/track/6LtHYDgYHRCHoKK3snfr2w?si=335d6820fc8647e2",
    ansiosa: "https://open.spotify.com/intl-es/track/5tFCHPbtz4plGwDnH2b1QV?si=2dd12cd3ac9d4f1d",
    pensativa: "https://open.spotify.com/intl-es/track/2IssBpPtHcViZL5vYQNHhA?si=a8f2eca9f4af4156",
    nose: "https://open.spotify.com/intl-es/track/70C4NyhjD5OZUMzvWZ3njJ?si=5534a19c63354c05"
  };

  /* ================= SELECCIÓN POR DÍA ================= */
  function obtenerCartaDelDia(mood) {
    const hoy = new Date().getDate();
    const lista = cartas[mood];
    return lista[hoy % lista.length];
  }

  /* ================= MOODS ================= */
  moodBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      moodActual = btn.dataset.mood;

      textoCarta.classList.remove('carta-activa');
      void textoCarta.offsetWidth;

      textoCarta.textContent = obtenerCartaDelDia(moodActual);
      textoCarta.classList.add('carta-activa');

      fotoMood.src = `assets/images/${moodActual}.jpg`;
      linkCancion.href = canciones[moodActual];
      linkCancion.style.display = 'inline-block';

      mostrarVista('carta');
    });
  });

});
