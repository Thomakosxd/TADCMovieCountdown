const RELEASES = [
  {
    "id": "gr",
    "country": "Greece",
    "flag": "🇬🇷",
    "region": "europe",
    "dateStr": "2026-06-04T17:40:00",
    "timezone": "Europe/Athens",
    "ticketUrl": "https://www.villagecinemas.gr/el/tainies/playing-now/the-amazing-digital-circus-the-last-act/",
    "status": "official",
    "cities": [
      {
        "city": "Athens",
        "cinemas": [
          "Village Cinemas Athens Metro Mall (Agios Dimitrios)",
          "Village 15 Cinemas @ The Mall (Marousi)",
          "Village 5 Cinemas Pagrati",
          "Village Shopping & More (Agios Ioannis Rentis)"
        ]
      },
      {
        "city": "Thessaloniki",
        "cinemas": [
          "Village 11 Cinemas Mediterranean Cosmos (Pylaia)"
        ]
      }
    ]
  },
  {
    "id": "us",
    "country": "United States",
    "flag": "🇺🇸",
    "region": "north-america",
    "dateStr": "2026-06-04T16:00:00",
    "timezone": "America/New_York",
    "ticketUrl": "https://www.fathomentertainment.com/releases/the-amazing-digital-circus-the-last-act/",
    "status": "official",
    "cities": [
      {
        "city": "New York",
        "cinemas": ["Regal Times Square", "AMC 34th Street 14", "Cinemark 86th Street"]
      },
      {
        "city": "Los Angeles",
        "cinemas": ["AMC Universal CityWalk 19", "Regal LA Live", "Cinemark Playa Vista"]
      },
      {
        "city": "Chicago",
        "cinemas": ["AMC River East 21", "Cinemark at 600 N Michigan"]
      },
      {
        "city": "Houston",
        "cinemas": ["Regal Edwards Houston Marq'E", "AMC Gulf Pointe 30"]
      },
      {
        "city": "Phoenix",
        "cinemas": ["Harkins Arizona Mills 25", "AMC Desert Ridge 18"]
      }
    ]
  },
  {
    "id": "ca",
    "country": "Canada",
    "flag": "🇨🇦",
    "region": "north-america",
    "dateStr": "2026-06-04T16:30:00",
    "timezone": "America/Toronto",
    "ticketUrl": "https://www.cineplex.com/movie/the-amazing-digital-circus-the-last-act",
    "status": "official",
    "cities": [
      {
        "city": "Toronto",
        "cinemas": ["Cineplex Odeon Yonge & Dundas", "Cineplex Cinemas Square One"]
      },
      {
        "city": "Vancouver",
        "cinemas": ["Cineplex Odeon International Village", "Fifth Avenue Cinemas"]
      },
      {
        "city": "Montreal",
        "cinemas": ["Cineplex Odeon Forum"]
      }
    ]
  },
  {
    "id": "mx",
    "country": "Mexico",
    "flag": "🇲🇽",
    "region": "north-america",
    "dateStr": "2026-06-04T15:00:00",
    "timezone": "America/Mexico_City",
    "ticketUrl": "https://cinepolis.com/pelicula/the-amazing-digital-circus-el-ultimo-acto",
    "status": "official",
    "cities": [
      { "city": "Mexico City", cinemas: ["Cinemex WTC", "Cinépolis Diana"] },
      { "city": "Guadalajara", cinemas: ["Cinépolis Andares"] },
      { "city": "Monterrey", cinemas: ["Cinépolis Galerías Monterrey"] }
    ]
  },
  {
    "id": "au",
    "country": "Australia",
    "flag": "🇦🇺",
    "region": "oceania",
    "dateStr": "2026-06-04T18:00:00",
    "timezone": "Australia/Sydney",
    "ticketUrl": "https://www.eventcinemas.com.au/Movie/The-Amazing-Digital-Circus-The-Last-Act",
    "status": "official",
    "cities": [
      { "city": "Sydney", cinemas: ["Event Cinemas George Street", "Hoyts Broadway"] },
      { "city": "Melbourne", cinemas: ["Village Cinemas Crown", "Hoyts Melbourne Central"] },
      { "city": "Brisbane", cinemas: ["Event Cinemas Chermside"] }
    ]
  },
  {
    "id": "nz",
    "country": "New Zealand",
    "flag": "🇳🇿",
    "region": "oceania",
    "dateStr": "2026-06-04T18:15:00",
    "timezone": "Pacific/Auckland",
    "ticketUrl": "https://www.eventcinemas.co.nz/Movie/The-Amazing-Digital-Circus-The-Last-Act",
    "status": "official",
    "cities": [
      { "city": "Auckland", cinemas: ["Event Cinemas Westfield Albany", "Reading Cinemas Sylvia Park"] },
      { "city": "Wellington", cinemas: ["Reading Cinemas Courtenay Central"] }
    ]
  },
  {
    "id": "gb",
    "country": "United Kingdom",
    "flag": "🇬🇧",
    "region": "europe",
    "dateStr": "2026-06-04T19:00:00",
    "timezone": "Europe/London",
    "ticketUrl": "https://www.odeon.co.uk/films/the-amazing-digital-circus-the-last-act/",
    "status": "official",
    "cities": [
      { "city": "London", cinemas: ["Odeon Leicester Square", "Cineworld Leicester Square", "Vue West End"] },
      { "city": "Manchester", cinemas: ["Odeon Manchester Great Northern", "Cineworld Manchester"] },
      { "city": "Birmingham", cinemas: ["Odeon Birmingham New Street"] }
    ]
  },
  {
    "id": "ie",
    "country": "Ireland",
    "flag": "🇮🇪",
    "region": "europe",
    "dateStr": "2026-06-04T19:00:00",
    "timezone": "Europe/Dublin",
    "ticketUrl": "https://www.odeoncinemas.ie/films/the-amazing-digital-circus-the-last-act/",
    "status": "official",
    "cities": [
      { "city": "Dublin", cinemas: ["Odeon Point Square", "Cineworld Dublin"] }
    ]
  },
  {
    "id": "za",
    "country": "South Africa",
    "flag": "🇿🇦",
    "region": "africa",
    "dateStr": "2026-06-04T17:00:00",
    "timezone": "Africa/Johannesburg",
    "ticketUrl": "https://www.sterkinekor.com/details/the-amazing-digital-circus-the-last-act",
    "status": "official",
    "cities": [
      { "city": "Johannesburg", cinemas: ["Nu Metro Hyde Park", "Ster-Kinekor Sandton City"] },
      { "city": "Cape Town", cinemas: ["Nu Metro V&A Waterfront", "Ster-Kinekor Canal Walk"] },
      { "city": "Durban", cinemas: ["Ster-Kinekor Gateway Theatre"] }
    ]
  },
  {
    "id": "br",
    "country": "Brazil",
    "flag": "🇧🇷",
    "region": "south-america",
    "dateStr": "2026-06-04T16:00:00",
    "timezone": "America/Sao_Paulo",
    "ticketUrl": "https://www.cinemark.com.br/filme/the-amazing-digital-circus-o-ultimo-ato",
    "status": "official",
    "cities": [
      { "city": "São Paulo", cinemas: ["Cinemark Bourbon Shopping", "UCI Kinoplex Shopping"] },
      { "city": "Rio de Janeiro", cinemas: ["Cinemark Barra"] },
      { "city": "Brasília", cinemas: ["Cinemark Conjunto Nacional"] }
    ]
  },
  {
    "id": "ar",
    "country": "Argentina",
    "flag": "🇦🇷",
    "region": "south-america",
    "dateStr": "2026-06-04T15:30:00",
    "timezone": "America/Argentina/Buenos_Aires",
    "ticketUrl": "https://www.cinemark.com.ar/pelicula/the-amazing-digital-circus-el-ultimo-acto",
    "status": "official",
    "cities": [
      { "city": "Buenos Aires", cinemas: ["Cinemark Palermo", "Cinemark Hoyts Abasto"] },
      { "city": "Córdoba", cinemas: ["Cinemark Patio Olmos"] }
    ]
  },
  {
    "id": "cl",
    "country": "Chile",
    "flag": "🇨🇱",
    "region": "south-america",
    "dateStr": "2026-06-04T16:00:00",
    "timezone": "America/Santiago",
    "ticketUrl": "https://www.cinemark.cl/pelicula/the-amazing-digital-circus-el-ultimo-acto",
    "status": "official",
    "cities": [
      { "city": "Santiago", cinemas: ["Cinemark Parque Arauco", "Cinemark Alto Las Condes"] }
    ]
  },
  {
    "id": "co",
    "country": "Colombia",
    "flag": "🇨🇴",
    "region": "south-america",
    "dateStr": "2026-06-04T15:00:00",
    "timezone": "America/Bogota",
    "ticketUrl": "https://www.cinemark.com.co/the-amazing-digital-circus-el-ultimo-acto",
    "status": "official",
    "cities": [
      { "city": "Bogotá", cinemas: ["Cinemark Andino", "Cinemark Titán Plaza"] },
      { "city": "Medellín", cinemas: ["Cinemark El Tesoro"] }
    ]
  },
  {
    "id": "pe",
    "country": "Peru",
    "flag": "🇵🇪",
    "region": "south-america",
    "dateStr": "2026-06-04T15:00:00",
    "timezone": "America/Lima",
    "ticketUrl": "https://www.cinemark-peru.com/pelicula/the-amazing-digital-circus-el-ultimo-acto",
    "status": "official",
    "cities": [
      { "city": "Lima", cinemas: ["Cinemark La Rambla", "Cinemark Jockey Plaza"] }
    ]
  },
  {
    "id": "bo",
    "country": "Bolivia",
    "flag": "🇧🇴",
    "region": "south-america",
    "dateStr": "2026-06-04T16:00:00",
    "timezone": "America/La_Paz",
    "ticketUrl": "https://www.cinemark.com.bo/pelicula/the-amazing-digital-circus-el-ultimo-acto",
    "status": "official",
    "cities": [
      { "city": "La Paz", cinemas: ["Cinemark Megacenter"] },
      { "city": "Santa Cruz", cinemas: ["Cinemark Ventura Mall"] }
    ]
  },
  {
    "id": "uy",
    "country": "Uruguay",
    "flag": "🇺🇾",
    "region": "south-america",
    "dateStr": "2026-06-04T17:00:00",
    "timezone": "America/Montevideo",
    "ticketUrl": "https://www.lifecinemas.com.uy/pelicula/the-amazing-digital-circus-el-ultimo-acto",
    "status": "official",
    "cities": [
      { "city": "Montevideo", cinemas: ["Life Cinemas Montevideo Shopping"] }
    ]
  },
  {
    "id": "py",
    "country": "Paraguay",
    "flag": "🇵🇾",
    "region": "south-america",
    "dateStr": "2026-06-04T16:30:00",
    "timezone": "America/Asuncion",
    "ticketUrl": "https://www.cinemark.com.py/pelicula/the-amazing-digital-circus-el-ultimo-acto",
    "status": "official",
    "cities": [
      { "city": "Asunción", cinemas: ["Cinemark Multiplaza"] }
    ]
  },
  {
    "id": "ve",
    "country": "Venezuela",
    "flag": "🇻🇪",
    "region": "south-america",
    "dateStr": "2026-06-04T15:00:00",
    "timezone": "America/Caracas",
    "ticketUrl": "https://www.cinex.com.ve/sinopsis-theamazingdigitalcircusultimoacto.html",
    "status": "official",
    "cities": [
      { "city": "Caracas", cinemas: ["Cinex Sambil Caracas"] }
    ]
  },
  {
    "id": "cr",
    "country": "Costa Rica",
    "flag": "🇨🇷",
    "region": "central-america",
    "dateStr": "2026-06-04T15:00:00",
    "timezone": "America/Costa_Rica",
    "ticketUrl": "https://www.cinemarkca.com/costa-rica/pelicula?tag=773&corporate_film_id=109984",
    "status": "official",
    "cities": [
      { "city": "San José", cinemas: ["Cinemark Multiplaza Escazú"] }
    ]
  },
  {
    "id": "sv",
    "country": "El Salvador",
    "flag": "🇸🇻",
    "region": "central-america",
    "dateStr": "2026-06-04T15:00:00",
    "timezone": "America/El_Salvador",
    "ticketUrl": "https://www.cinemarkca.com/el-salvador/pelicula?tag=784&corporate_film_id=109985",
    "status": "official",
    "cities": [
      { "city": "San Salvador", cinemas: ["Cinemark Multiplaza"] }
    ]
  },
  {
    "id": "gt",
    "country": "Guatemala",
    "flag": "🇬🇹",
    "region": "central-america",
    "dateStr": "2026-06-04T15:00:00",
    "timezone": "America/Guatemala",
    "ticketUrl": "https://www.cinemarkca.com/guatemala/pelicula?tag=2208&corporate_film_id=109986",
    "status": "official",
    "cities": [
      { "city": "Guatemala City", cinemas: ["Cinemark Oakland Mall"] }
    ]
  },
  {
    "id": "hn",
    "country": "Honduras",
    "flag": "🇭🇳",
    "region": "central-america",
    "dateStr": "2026-06-04T15:00:00",
    "timezone": "America/Tegucigalpa",
    "ticketUrl": "https://www.cinemarkca.com/honduras/pelicula?tag=771&corporate_film_id=109987",
    "status": "official",
    "cities": [
      { "city": "Tegucigalpa", cinemas: ["Cinemark Multiplaza"] }
    ]
  },
  {
    "id": "ni",
    "country": "Nicaragua",
    "flag": "🇳🇮",
    "region": "central-america",
    "dateStr": "2026-06-04T15:00:00",
    "timezone": "America/Managua",
    "ticketUrl": "https://www.cinemarkca.com/nicaragua/pelicula?tag=772&corporate_film_id=109988",
    "status": "official",
    "cities": [
      { "city": "Managua", cinemas: ["Cinemark Galerías Santo Domingo"] }
    ]
  },
  {
    "id": "pa",
    "country": "Panama",
    "flag": "🇵🇦",
    "region": "central-america",
    "dateStr": "2026-06-04T15:00:00",
    "timezone": "America/Panama",
    "ticketUrl": "https://www.cinemarkca.com/panama/pelicula?tag=2209&corporate_film_id=109989",
    "status": "official",
    "cities": [
      { "city": "Panama City", cinemas: ["Cinemark Multiplaza Pacific"] }
    ]
  },
  {
    "id": "pr",
    "country": "Puerto Rico",
    "flag": "🇵🇷",
    "region": "central-america",
    "dateStr": "2026-06-04T14:00:00",
    "timezone": "America/Puerto_Rico",
    "ticketUrl": "https://home.caribbeancinemas.com/movie/the-amazing-digital-circus-the-last-act",
    "status": "official",
    "cities": [
      { "city": "San Juan", cinemas: ["Caribbean Cinemas Fine Arts", "Caribbean Cinemas Las Piedras Mall"] }
    ]
  },
  {
    "id": "do",
    "country": "Dominican Republic",
    "flag": "🇩🇴",
    "region": "central-america",
    "dateStr": "2026-06-04T14:00:00",
    "timezone": "America/Santo_Domingo",
    "ticketUrl": "https://rd.caribbeancinemas.com/movie/the-amazing-digital-circus-the-last-act",
    "status": "official",
    "cities": [
      { "city": "Santo Domingo", cinemas: ["Caribbean Cinemas Megacentro"] }
    ]
  },
  {
    "id": "ag",
    "country": "Antigua",
    "flag": "🇦🇬",
    "region": "central-america",
    "dateStr": "2026-06-04T14:00:00",
    "timezone": "America/Antigua",
    "ticketUrl": "https://antigua.caribbeancinemas.com/movie/the-amazing-digital-circus-the-last-act",
    "status": "official",
    "cities": [
      { "city": "St. John's", cinemas: ["Caribbean Cinemas Antigua"] }
    ]
  },
  {
    "id": "aw",
    "country": "Aruba",
    "flag": "🇦🇼",
    "region": "central-america",
    "dateStr": "2026-06-04T14:00:00",
    "timezone": "America/Aruba",
    "ticketUrl": "https://aruba.caribbeancinemas.com/movie/the-amazing-digital-circus-the-last-act",
    "status": "official",
    "cities": [
      { "city": "Oranjestad", cinemas: ["Caribbean Cinemas Aruba"] }
    ]
  },
  {
    "id": "de",
    "country": "Germany",
    "flag": "🇩🇪",
    "region": "europe",
    "dateStr": "2026-06-04T17:00:00",
    "timezone": "Europe/Berlin",
    "ticketUrl": "https://www.cinestar.de/kino-berlin-cubix/film/the-amazing-digital-circus-the-last-act",
    "status": "official",
    "cities": [
      { "city": "Berlin", cinemas: ["CineStar Berlin – CUBIX"] },
      { "city": "Munich", cinemas: ["CineStar Mathäser Filmpalast"] }
    ]
  },
  {
    "id": "fr",
    "country": "France",
    "flag": "🇫🇷",
    "region": "europe",
    "dateStr": "2026-06-04T18:00:00",
    "timezone": "Europe/Paris",
    "ticketUrl": "https://www.ugc.fr/film.html?id=the-amazing-digital-circus",
    "status": "official",
    "cities": [
      { "city": "Paris", cinemas: ["UGC Ciné Cité Les Halles", "Gaumont Opéra"] }
    ]
  },
  {
    "id": "nl",
    "country": "Netherlands",
    "flag": "🇳🇱",
    "region": "europe",
    "dateStr": "2026-06-04T17:30:00",
    "timezone": "Europe/Amsterdam",
    "ticketUrl": "https://www.pathe.nl/film/the-amazing-digital-circus-the-last-act",
    "status": "official",
    "cities": [
      { "city": "Amsterdam", cinemas: ["Pathé Tuschinski", "Pathé Arena"] }
    ]
  },
  {
    "id": "se",
    "country": "Sweden",
    "flag": "🇸🇪",
    "region": "europe",
    "dateStr": "2026-06-04T18:00:00",
    "timezone": "Europe/Stockholm",
    "ticketUrl": "https://www.filmstaden.se/film/the-amazing-digital-circus-the-last-act",
    "status": "official",
    "cities": [
      { "city": "Stockholm", cinemas: ["Filmstaden Sergel", "Odeon Heron City"] }
    ]
  },
  {
    "id": "ph",
    "country": "Philippines",
    "flag": "🇵🇭",
    "region": "asia",
    "dateStr": "2026-06-04T23:00:00",
    "timezone": "Asia/Manila",
    "ticketUrl": "https://smcinema.com/Booking?movie=TheAmazingDigitalCircus",
    "status": "official",
    "cities": [
      { "city": "Manila", cinemas: ["SM Megamall Cinema", "SM Aura Cinema", "SM Mall of Asia Cinema"] }
    ]
  },
  {
    "id": "sg",
    "country": "Singapore",
    "flag": "🇸🇬",
    "region": "asia",
    "dateStr": "2026-06-04T18:30:00",
    "timezone": "Asia/Singapore",
    "ticketUrl": "https://www.gv.com.sg/GVMovieDetails#/movie/the-amazing-digital-circus",
    "status": "official",
    "cities": [
      { "city": "Singapore", cinemas: ["Golden Village Vivocity", "Cathay Cineplexes"] }
    ]
  },
  {
    "id": "my",
    "country": "Malaysia",
    "flag": "🇲🇾",
    "region": "asia",
    "dateStr": "2026-06-04T19:00:00",
    "timezone": "Asia/Kuala_Lumpur",
    "ticketUrl": "https://www.gsc.com.my/main/movie-details?movie_id=digital-circus",
    "status": "official",
    "cities": [
      { "city": "Kuala Lumpur", cinemas: ["GSC Mid Valley", "TGV KLCC"] }
    ]
  },
  {
    "id": "in",
    "country": "India",
    "flag": "🇮🇳",
    "region": "asia",
    "dateStr": "2026-06-04T18:00:00",
    "timezone": "Asia/Kolkata",
    "ticketUrl": "https://www.pvrcinemas.com/movie-details/the-amazing-digital-circus",
    "status": "official",
    "cities": [
      { "city": "Mumbai", cinemas: ["PVR Cinemas IMAX Wadala", "INOX Insignia Juhu"] },
      { "city": "Delhi", cinemas: ["PVR Select Citywalk Saket"] }
    ]
  },
  {
    "id": "gy",
    "country": "Guyana",
    "flag": "🇬🇾",
    "region": "south-america",
    "dateStr": "2026-06-04T14:00:00",
    "timezone": "America/Guyana",
    "ticketUrl": "https://guyana.caribbeancinemas.com/giftland-mall/movie/the-amazing-digital-circus-the-last-act",
    "status": "official",
    "cities": [
      { "city": "Georgetown", cinemas: ["Caribbean Cinemas Giftland Mall"] }
    ]
  }
];

const GLOBAL_RELEASE = new Date("2026-06-04T12:00:00-05:00");
const ANNOUNCE_DATE = new Date("2026-04-10T00:00:00-05:00");

let activeRegion = "all";
let activeFilter = "all";
let searchQuery = "";
let sortMode = "date";
let countdownIntervals = [];

function pad(n) {
  return String(n).padStart(2, "0");
}

function getLocalTime(release) {
  try {
    const now = new Date();
    const releaseDate = new Date(release.dateStr);
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: release.timezone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    });
    const parts = formatter.formatToParts(releaseDate);
    const p = {};
    parts.forEach(part => { p[part.type] = part.value; });
    const localDate = new Date(`${p.year}-${p.month}-${p.day}T${p.hour}:${p.minute}:00`);
    const nowInTz = new Date(releaseDate.toLocaleString("en-US", { timeZone: release.timezone }));
    return releaseDate;
  } catch (e) {
    return new Date(release.dateStr);
  }
}

function getCountdownValues(targetDate) {
  const now = new Date();
  const diff = targetDate - now;
  if (diff <= 0) return null;
  const totalSecs = Math.floor(diff / 1000);
  const days = Math.floor(totalSecs / 86400);
  const hours = Math.floor((totalSecs % 86400) / 3600);
  const minutes = Math.floor((totalSecs % 3600) / 60);
  const seconds = totalSecs % 60;
  return { days, hours, minutes, seconds };
}

function initLoader() {
  document.body.classList.add("loading");
  setTimeout(() => {
    document.getElementById("loader").classList.add("hidden");
    document.body.classList.remove("loading");
    animateStats();
  }, 2000);
}

function initCursor() {
  const cursor = document.getElementById("cursor");
  const trail = document.getElementById("cursor-trail");
  if (!cursor || !trail) return;
  let mx = -100, my = -100;
  document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.left = mx + "px";
    cursor.style.top = my + "px";
    setTimeout(() => {
      trail.style.left = mx + "px";
      trail.style.top = my + "px";
    }, 80);
  });
  document.addEventListener("mouseleave", () => {
    cursor.style.opacity = "0";
    trail.style.opacity = "0";
  });
  document.addEventListener("mouseenter", () => {
    cursor.style.opacity = "1";
    trail.style.opacity = "0.6";
  });
}

function initParticles() {
  const canvas = document.getElementById("particles-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const particles = [];
  const colors = ["#ff6fef", "#c06bff", "#00e5ff", "#00ff9f", "#ffd700", "#ff8f6b"];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  for (let i = 0; i < 60; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.3,
      dy: -(Math.random() * 0.4 + 0.1),
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: Math.random() * 0.6 + 0.2,
      life: Math.random()
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.dx;
      p.y += p.dy;
      p.life += 0.003;
      if (p.y < -10 || p.life > 1) {
        p.x = Math.random() * canvas.width;
        p.y = canvas.height + 10;
        p.life = 0;
      }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha * (1 - p.life);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }
  draw();
}

function updateGlobalCountdown() {
  const vals = getCountdownValues(GLOBAL_RELEASE);
  const gDays = document.getElementById("g-days");
  const gHours = document.getElementById("g-hours");
  const gMinutes = document.getElementById("g-minutes");
  const gSeconds = document.getElementById("g-seconds");
  const statusText = document.getElementById("global-status-text");

  if (!vals) {
    if (gDays) gDays.closest(".countdown-inner").innerHTML = '<div class="now-showing-text">🎪 THE LAST ACT IS NOW SHOWING WORLDWIDE! 🎪</div>';
    if (statusText) statusText.textContent = "Now Showing in Theaters";
    return;
  }

  const prevSec = gSeconds ? gSeconds.textContent : null;
  if (gDays) gDays.textContent = pad(vals.days);
  if (gHours) gHours.textContent = pad(vals.hours);
  if (gMinutes) gMinutes.textContent = pad(vals.minutes);
  if (gSeconds) {
    const newSec = pad(vals.seconds);
    if (gSeconds.textContent !== newSec) {
      gSeconds.textContent = newSec;
      gSeconds.classList.add("tick");
      setTimeout(() => gSeconds.classList.remove("tick"), 150);
    }
  }

  const total = GLOBAL_RELEASE - ANNOUNCE_DATE;
  const elapsed = new Date() - ANNOUNCE_DATE;
  const pct = Math.min(100, Math.max(0, Math.round((elapsed / total) * 100)));
  const fill = document.getElementById("progress-fill");
  const bar = document.getElementById("hype-progress");
  const pctLabel = document.getElementById("progress-pct");
  if (fill) fill.style.width = pct + "%";
  if (bar) bar.setAttribute("aria-valuenow", pct);
  if (pctLabel) pctLabel.textContent = pct + "%";
}

function animateStats() {
  document.querySelectorAll(".stat-num[data-count]").forEach(el => {
    const target = parseInt(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    const duration = 2000;
    const start = Date.now();
    function step() {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      if (target >= 1000000000) {
        el.textContent = (current / 1000000000).toFixed(1) + "B" + suffix;
      } else {
        el.textContent = current + suffix;
      }
      if (progress < 1) requestAnimationFrame(step);
    }
    step();
  });
}

function getReleaseDate(release) {
  return new Date(release.dateStr);
}

function getCardStatus(release) {
  const now = new Date();
  const releaseDate = getReleaseDate(release);
  const endDate = new Date(releaseDate.getTime() + 14 * 24 * 3600 * 1000);
  if (now >= endDate) return "ended";
  if (now >= releaseDate) return "showing";
  return "upcoming";
}

function formatReleaseDate(release) {
  const d = getReleaseDate(release);
  return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" });
}

function buildReleaseCard(release) {
  const status = getCardStatus(release);
  const isShowing = status === "showing";
  const isEnded = status === "ended";
  const isEstimated = release.status === "estimated";

  const card = document.createElement("article");
  card.className = "release-card" + (isShowing ? " now-showing" : "");
  card.dataset.region = release.region;
  card.dataset.country = release.country.toLowerCase();
  card.dataset.id = release.id;

  let badgeHtml = "";
  if (isEnded) {
    badgeHtml = `<span class="release-status-badge badge-showing">ENDED</span>`;
  } else if (isShowing) {
    badgeHtml = `<span class="release-status-badge badge-showing">NOW SHOWING</span>`;
  } else if (isEstimated) {
    badgeHtml = `<span class="release-status-badge badge-estimated">ESTIMATED</span>`;
  } else {
    badgeHtml = `<span class="release-status-badge badge-upcoming">UPCOMING</span>`;
  }

  let countdownHtml = "";
  if (isShowing) {
    countdownHtml = `<div class="now-showing-text">🎪 Now Showing!</div>`;
  } else if (isEnded) {
    countdownHtml = `<div class="now-showing-text" style="color:var(--text-muted)">Showing Ended</div>`;
  } else {
    countdownHtml = `
      <div class="release-mini-countdown" data-target="${release.dateStr}" data-tz="${release.timezone}">
        <div class="mini-unit"><span class="mini-num" data-unit="d">--</span><span class="mini-label">Days</span></div>
        <div class="mini-unit"><span class="mini-num" data-unit="h">--</span><span class="mini-label">Hours</span></div>
        <div class="mini-unit"><span class="mini-num" data-unit="m">--</span><span class="mini-label">Mins</span></div>
        <div class="mini-unit"><span class="mini-num" data-unit="s">--</span><span class="mini-label">Secs</span></div>
      </div>`;
  }

  let cinemasHtml = "";
  const totalCinemas = release.cities.reduce((acc, c) => acc + c.cinemas.length, 0);
  if (release.cities.length > 0) {
    const cityItems = release.cities.map(c =>
      c.cinemas.map(cn => `
        <div class="cinema-item">
          <span class="cinema-city-tag">${c.city}</span>
          <span>${cn}</span>
        </div>
      `).join("")
    ).join("");

    cinemasHtml = `
      <button class="release-cinemas-toggle" aria-expanded="false" aria-controls="cinemas-${release.id}">
        <span>🎬 ${totalCinemas} Cinema${totalCinemas !== 1 ? "s" : ""} in ${release.cities.length} ${release.cities.length !== 1 ? "cities" : "city"}</span>
        <span class="toggle-arrow">▾</span>
      </button>
      <div class="release-cinemas-list hidden" id="cinemas-${release.id}">
        ${cityItems}
      </div>`;
  }

  card.innerHTML = `
    <div class="release-card-header">
      <div class="release-country">
        <span class="release-flag" role="img" aria-label="${release.country} flag">${release.flag}</span>
        <span>${release.country}</span>
      </div>
      ${badgeHtml}
    </div>
    <div class="release-date-row">📅 ${formatReleaseDate(release)}${isEstimated ? " (est.)" : ""}</div>
    ${countdownHtml}
    ${cinemasHtml}
    ${release.ticketUrl ? `<a href="${release.ticketUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost" style="width:100%;justify-content:center;margin-top:12px;font-size:0.82rem;padding:8px 12px">🎟️ Get Tickets</a>` : ""}
  `;

  const toggle = card.querySelector(".release-cinemas-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", !expanded);
      const list = document.getElementById(`cinemas-${release.id}`);
      if (list) list.classList.toggle("hidden", expanded);
    });
  }

  return card;
}

function renderReleases() {
  const grid = document.getElementById("releases-grid");
  if (!grid) return;
  grid.innerHTML = "";
  countdownIntervals.forEach(id => clearInterval(id));
  countdownIntervals = [];

  let filtered = RELEASES.filter(r => {
    const matchRegion = activeRegion === "all" || r.region === activeRegion;
    const matchSearch = !searchQuery || r.country.toLowerCase().includes(searchQuery) ||
      r.cities.some(c => c.city.toLowerCase().includes(searchQuery));
    const status = getCardStatus(r);
    const matchFilter = activeFilter === "all" ||
      (activeFilter === "showing" && (status === "showing" || status === "ended")) ||
      (activeFilter === "upcoming" && status === "upcoming");
    return matchRegion && matchSearch && matchFilter;
  });

  if (sortMode === "date") {
    filtered.sort((a, b) => new Date(a.dateStr) - new Date(b.dateStr));
  } else if (sortMode === "alpha") {
    filtered.sort((a, b) => a.country.localeCompare(b.country));
  } else if (sortMode === "region") {
    filtered.sort((a, b) => a.region.localeCompare(b.region) || a.country.localeCompare(b.country));
  }

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:60px 20px;font-family:var(--font-display);font-size:1.2rem;">No releases match your search 🎪</div>`;
    return;
  }

  filtered.forEach(release => {
    const card = buildReleaseCard(release);
    grid.appendChild(card);
  });

  const miniCountdowns = grid.querySelectorAll(".release-mini-countdown[data-target]");
  miniCountdowns.forEach(el => {
    const targetStr = el.dataset.target;
    const target = new Date(targetStr);
    const dEl = el.querySelector("[data-unit='d']");
    const hEl = el.querySelector("[data-unit='h']");
    const mEl = el.querySelector("[data-unit='m']");
    const sEl = el.querySelector("[data-unit='s']");

    function update() {
      const vals = getCountdownValues(target);
      if (!vals) {
        if (dEl) dEl.closest(".release-mini-countdown").innerHTML = '<div class="now-showing-text">🎪 Now Showing!</div>';
        return;
      }
      if (dEl) dEl.textContent = pad(vals.days);
      if (hEl) hEl.textContent = pad(vals.hours);
      if (mEl) mEl.textContent = pad(vals.minutes);
      if (sEl) sEl.textContent = pad(vals.seconds);
    }
    update();
    const id = setInterval(update, 1000);
    countdownIntervals.push(id);
  });
}

function initFilters() {
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.dataset.filter;
      renderReleases();
    });
  });

  document.querySelectorAll(".region-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".region-tab").forEach(t => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      activeRegion = tab.dataset.region;
      renderReleases();
    });
  });

  const searchInput = document.getElementById("country-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderReleases();
    });
  }

  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      sortMode = e.target.value;
      renderReleases();
    });
  }
}

function initFAQ() {
  document.querySelectorAll(".faq-q").forEach(btn => {
    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      const answer = btn.nextElementSibling;
      btn.setAttribute("aria-expanded", !expanded);
      if (answer) {
        if (expanded) {
          answer.hidden = true;
        } else {
          answer.hidden = false;
        }
      }
    });
  });
}

function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;
  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 400);
  });
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function initNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  if (!toggle) return;
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", !expanded);
    document.body.classList.toggle("nav-open", !expanded);
  });
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initParallax() {
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const heroChars = document.querySelectorAll(".hero-char");
    heroChars.forEach((el, i) => {
      const speed = 0.08 + i * 0.02;
      el.style.transform = `translateY(${-scrollY * speed}px)`;
    });
    const rings = document.querySelectorAll(".hero-gradient-ring");
    rings.forEach((el, i) => {
      const speed = 0.05 + i * 0.03;
      el.style.transform = `translateY(${scrollY * speed}px)`;
    });
  });
}

function fireConfetti() {
  const container = document.getElementById("confetti-container");
  if (!container) return;
  const colors = ["#ff6fef", "#c06bff", "#00e5ff", "#00ff9f", "#ffd700", "#ff8f6b", "#ff3e6c", "#fff"];
  for (let i = 0; i < 120; i++) {
    const el = document.createElement("div");
    el.className = "confetti-piece";
    el.style.cssText = `
      left: ${Math.random() * 100}vw;
      top: -20px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      width: ${Math.random() * 10 + 6}px;
      height: ${Math.random() * 10 + 6}px;
      border-radius: ${Math.random() > 0.5 ? "50%" : "2px"};
      animation-duration: ${Math.random() * 2.5 + 2}s;
      animation-delay: ${Math.random() * 1}s;
    `;
    container.appendChild(el);
    setTimeout(() => el.remove(), 4000);
  }
}

function checkConfettiTriggers() {
  RELEASES.forEach(release => {
    const target = new Date(release.dateStr);
    const diff = target - new Date();
    if (diff > 0 && diff < 1000) {
      fireConfetti();
    }
  });
  const globalDiff = GLOBAL_RELEASE - new Date();
  if (globalDiff > 0 && globalDiff < 1000) {
    fireConfetti();
  }
}

function initIntersectionAnimations() {
  if (!window.IntersectionObserver) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

  const targets = document.querySelectorAll(".char-card, .release-card, .gallery-item, .faq-item");
  targets.forEach((el, i) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = `opacity 0.5s ease ${i * 0.04}s, transform 0.5s ease ${i * 0.04}s`;
    observer.observe(el);
  });
}

function startMainLoop() {
  updateGlobalCountdown();
  setInterval(() => {
    updateGlobalCountdown();
    checkConfettiTriggers();
  }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  initCursor();
  initParticles();
  initFilters();
  initFAQ();
  initBackToTop();
  initNavToggle();
  initParallax();
  renderReleases();
  startMainLoop();
  setTimeout(initIntersectionAnimations, 2100);
});