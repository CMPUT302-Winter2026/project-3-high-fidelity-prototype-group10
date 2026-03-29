function goTo(page) {
  window.location.href = page;
}

function toggleMenu() {
  const menu = document.getElementById('sideMenu');
  const overlay = document.getElementById('overlay');

  menu.classList.toggle('open');
  overlay.classList.toggle('show');
}

function searchWord(key) {
  if (words[key]) {
    localStorage.setItem('selectedWord', key);
    goTo('definition.html');
  } else {
    goTo('search.html');
  }
}

// Word database
const words = {
  // ── Everyday phrases ──
  hello: {
    title: 'tânisi',
    sub: 'hello / how are you',
    meaning: 'A general greeting meaning \'hello\' or \'how are you\'.',
    category: 'everyday',
    related: [
      {cree: 'tânisi kiya?', gloss: 'how are you?'},
      {cree: 'namôya nântaw', gloss: 'I\'m fine'},
      {cree: 'êkosi', gloss: 'okay / that\'s it'}
    ],
    usage: [
      {cree: 'tânisi!', eng: '"Hello!"'},
      {cree: 'tânisi kiya?', eng: '"How are you?"'},
      {cree: 'namôya nântaw.', eng: '"I\'m fine."'},
      {cree: 'êkosi mâka.', eng: '"Okay then."'}
    ]
  },
  thankyou: {
    title: 'marsî',
    sub: 'thank you',
    meaning:
        'An expression of gratitude, borrowed into Cree from French \'merci\'.',
    category: 'everyday',
    related: [
      {cree: 'marsî mâka', gloss: 'thank you very much'},
      {cree: 'tânisi', gloss: 'hello'},
      {cree: 'êkosi', gloss: 'okay / that\'s it'}
    ],
    usage: [
      {cree: 'marsî!', eng: '"Thank you!"'},
      {cree: 'marsî mâka!', eng: '"Thank you very much!"'},
      {cree: 'êkosi, marsî.', eng: '"Okay, thank you."'},
      {cree: 'marsî, nitôtêm.', eng: '"Thank you, my friend."'}
    ]
  },
  yes: {
    title: 'âha',
    sub: 'yes',
    meaning: 'An affirmative response meaning \'yes\'.',
    category: 'everyday',
    related: [
      {cree: 'namôya', gloss: 'no'}, {cree: 'êkosi', gloss: 'okay'},
      {cree: 'mâka', gloss: 'but / indeed'}
    ],
    usage: [
      {cree: 'âha!', eng: '"Yes!"'}, {cree: 'namôya.', eng: '"No."'},
      {cree: 'âha, êkosi.', eng: '"Yes, okay."'},
      {cree: 'âha mâka!', eng: '"Yes indeed!"'}
    ]
  },
  come: {
    title: 'astam',
    sub: 'come here',
    meaning: 'A command meaning \'come here\' or \'come\'.',
    category: 'everyday',
    related: [
      {cree: 'pêhtaw', gloss: 'listen'},
      {cree: 'wâpahtam', gloss: 'look at it'},
      {cree: 'itohtê', gloss: 'go there'}
    ],
    usage: [
      {cree: 'astam!', eng: '"Come here!"'},
      {cree: 'astam, pêhtaw.', eng: '"Come here, listen."'},
      {cree: 'astam, wâpahtam!', eng: '"Come, look at this!"'},
      {cree: 'itohtê êkotê.', eng: '"Go over there."'}
    ]
  },
  // ── Kinship ──
  friend: {
    title: 'nitôtêm',
    sub: 'my friend / my relative',
    meaning:
        'A close friend or kinship companion; someone you consider your own friend or relative.',
    category: 'kinship',
    related: [
      {cree: 'kitôtêm', gloss: 'your friend'},
      {cree: 'otôtêma', gloss: 'his/her friend'},
      {cree: 'wîcêwâkan', gloss: 'companion'}
    ],
    usage: [
      {cree: 'nitôtêm, astam!', eng: '"My friend, come here!"'},
      {cree: 'kitôtêm cî?', eng: '"Is he/she your friend?"'},
      {cree: 'wîcêhêw otôtêma.', eng: '"He helps his friend."'},
      {cree: 'wîcêwâkan nitayân.', eng: '"I have a companion."'}
    ]
  },
  mother: {
    title: 'nikâwiy',
    sub: 'my mother',
    meaning:
        'The word for \'my mother\'; kinship terms in Cree are always possessed.',
    category: 'kinship',
    related: [
      {cree: 'nôhkom', gloss: 'my grandmother'},
      {cree: 'nistês', gloss: 'my older brother'},
      {cree: 'nimis', gloss: 'my older sister'}
    ],
    usage: [
      {cree: 'nikâwiy pimihâw.', eng: '"My mother is flying (travelling)."'},
      {cree: 'nôhkom wîcihêw.', eng: '"My grandmother is helping."'},
      {cree: 'nistês pimohtêw.', eng: '"My older brother is walking."'},
      {cree: 'nimis mîcisow.', eng: '"My older sister is eating."'}
    ]
  },
  father: {
    title: 'nôhtâwiy',
    sub: 'my father',
    meaning: 'The word for \'my father\'; possessed kinship term.',
    category: 'kinship',
    related: [
      {cree: 'nimosôm', gloss: 'my grandfather'},
      {cree: 'nisîmis', gloss: 'my younger sibling'},
      {cree: 'nikâwiy', gloss: 'my mother'}
    ],
    usage: [
      {cree: 'nôhtâwiy nipâw.', eng: '"My father is sleeping."'},
      {cree: 'nimosôm wîcihêw.', eng: '"My grandfather is helping."'},
      {cree: 'nisîmis mêtawêw.', eng: '"My younger sibling is playing."'},
      {cree: 'nôhtâwiy pimohtêw.', eng: '"My father is walking."'}
    ]
  },
  child: {
    title: 'nitânis',
    sub: 'my daughter / my child',
    meaning: 'Refers to \'my daughter\' or affectionately \'my child\'.',
    category: 'kinship',
    related: [
      {cree: 'nikosis', gloss: 'my son'},
      {cree: 'awâsis', gloss: 'child (general)'},
      {cree: 'nisîmis', gloss: 'my younger sibling'}
    ],
    usage: [
      {cree: 'nitânis mêtawêw.', eng: '"My daughter is playing."'},
      {cree: 'nikosis nipâw.', eng: '"My son is sleeping."'},
      {cree: 'awâsis mîcisow.', eng: '"The child is eating."'},
      {cree: 'nisîmis mêtawêw.', eng: '"My younger sibling is playing."'}
    ]
  },
  // ── Emotions & wellbeing ──
  happy: {
    title: 'miyawâtam',
    sub: 'he/she is happy / glad',
    meaning: 'To be happy, glad, or pleased about something.',
    category: 'emotions',
    related: [
      {cree: 'kîsêwâtisiw', gloss: 'he/she is kind'},
      {cree: 'sêkisiw', gloss: 'he/she is afraid'},
      {cree: 'têpêyihtam', gloss: 'he/she is content'}
    ],
    usage: [
      {cree: 'miyawâtam mâka!', eng: '"He is so happy!"'},
      {cree: 'kîsêwâtisiw.', eng: '"She is kind."'},
      {cree: 'têpêyihtam.', eng: '"He is content."'},
      {cree: 'miyawâtam wâpahki.', eng: '"She will be happy tomorrow."'}
    ]
  },
  sad: {
    title: 'mâtow',
    sub: 'he/she is crying / sad',
    meaning: 'To cry or be in a state of sadness.',
    category: 'emotions',
    related: [
      {cree: 'sêkisiw', gloss: 'he/she is afraid'},
      {cree: 'kisiwâsiw', gloss: 'he/she is angry'},
      {cree: 'miyawâtam', gloss: 'he/she is happy'}
    ],
    usage: [
      {cree: 'mâtow awâsis.', eng: '"The child is crying."'},
      {cree: 'kisiwâsiw mâka!', eng: '"He is so angry!"'},
      {cree: 'sêkisiw.', eng: '"She is afraid."'},
      {cree: 'namôya mâtow.', eng: '"He is not crying."'}
    ]
  },
  tired: {
    title: 'kîwêhtakosiw',
    sub: 'he/she is tired / weary',
    meaning: 'To be tired, fatigued, or weary.',
    category: 'emotions',
    related: [
      {cree: 'nipâw', gloss: 'he/she sleeps'},
      {cree: 'têpêyihtam', gloss: 'he/she is content'},
      {cree: 'mâtow', gloss: 'he/she cries'}
    ],
    usage: [
      {cree: 'kîwêhtakosiw.', eng: '"He is tired."'},
      {cree: 'nipâw mêkwâc.', eng: '"She is sleeping right now."'},
      {cree: 'kîwêhtakosiw mâka.', eng: '"He is very tired."'},
      {cree: 'têpêyihtam.', eng: '"She is content."'}
    ]
  },
  love: {
    title: 'sâkihêw',
    sub: 'he/she loves (someone)',
    meaning: 'To love or care deeply for another person.',
    category: 'emotions',
    related: [
      {cree: 'kîsêwâtisiw', gloss: 'he/she is kind'},
      {cree: 'wîcihêw', gloss: 'he/she helps'},
      {cree: 'miyawâtam', gloss: 'he/she is happy'}
    ],
    usage: [
      {cree: 'sâkihêw otôtêma.', eng: '"He loves his friend."'},
      {cree: 'wîcihêw nikâwiy.', eng: '"She helps my mother."'},
      {cree: 'kîsêwâtisiw mâka.', eng: '"He is so kind."'},
      {cree: 'sâkihêw nikosis.', eng: '"She loves my son."'}
    ]
  },
  // ── Nature & land ──
  walk: {
    title: 'pimohtêw',
    sub: 'he/she walks',
    meaning: 'To walk / move on foot',
    category: 'nature',
    related: [
      {cree: 'pimipayiw', gloss: 'run'},
      {cree: 'pimohtêhowin', gloss: 'travel'},
      {cree: 'papâmohtêw', gloss: 'wander'}
    ],
    usage: [
      {cree: 'pimohtêw, astam!', eng: '"Walk here!"'},
      {cree: 'pimipayiw!', eng: '"Run!"'},
      {cree: 'papâmohtêw êkwa.', eng: '"He walks around."'},
      {cree: 'pimohtêhowin êkwa.', eng: '"He travels."'}
    ]
  },
  walk2: {
    title: 'pimohtê',
    sub: '(you) walk',
    meaning: 'To walk (second person singular imperative).',
    category: 'nature',
    related: [
      {cree: 'pimohtêw', gloss: 'he/she walks'},
      {cree: 'pimipayiw', gloss: 'run'}, {cree: 'papâmohtêw', gloss: 'wander'}
    ],
    usage: [
      {cree: 'pimohtê, astam!', eng: '"Walk here!"'},
      {cree: 'pimohtê mêkwâc.', eng: '"Walk for now."'},
      {cree: 'pimohtê sîpîhk.', eng: '"Walk to the river."'},
      {cree: 'pimohtê nânitaw.', eng: '"Walk somewhere."'}
    ]
  },
  wander: {
    title: 'papâmohtêw',
    sub: 'walks around / wanders',
    meaning: 'To walk around aimlessly; to wander about.',
    category: 'nature',
    related: [
      {cree: 'pimohtêw', gloss: 'walk'}, {cree: 'pimipayiw', gloss: 'run'},
      {cree: 'pimohtêhowin', gloss: 'travel'}
    ],
    usage: [
      {cree: 'papâmohtêw êkwa.', eng: '"He walks around."'},
      {cree: 'papâmohtêw askîhk.', eng: '"He wanders the land."'},
      {cree: 'papâmohtêw misiwê.', eng: '"He wanders everywhere."'},
      {cree: 'papâmohtêw wâpahki.', eng: '"He wanders tomorrow."'}
    ]
  },
  water: {
    title: 'nipiy',
    sub: 'water',
    meaning: 'Water; a fundamental element in Cree life and land.',
    category: 'nature',
    related: [
      {cree: 'sîpiy', gloss: 'river'},
      {cree: 'misâskwatômina', gloss: 'saskatoon berries'},
      {cree: 'askiy', gloss: 'earth / land'}
    ],
    usage: [
      {cree: 'nipiy mînikwêw.', eng: '"He is drinking water."'},
      {cree: 'sîpiy misiwe.', eng: '"The river is everywhere."'},
      {cree: 'askiy kihcêyihtam.', eng: '"She respects the land."'},
      {cree: 'nipiy kistêyihtam.', eng: '"He honours the water."'}
    ]
  },
  land: {
    title: 'askiy',
    sub: 'earth / land / world',
    meaning:
        'The earth, land, or world; holds deep spiritual and cultural significance.',
    category: 'nature',
    related: [
      {cree: 'nipiy', gloss: 'water'}, {cree: 'sîpiy', gloss: 'river'},
      {cree: 'miskanâw', gloss: 'path / trail'}
    ],
    usage: [
      {cree: 'askiy kihcêyihtam.', eng: '"She respects the land."'},
      {cree: 'miskanâw pimohtêw.', eng: '"He walks the path."'},
      {cree: 'askiy miyomahcihowin.', eng: '"The land brings wellbeing."'},
      {cree: 'nipiy êkwa askiy.', eng: '"Water and land."'}
    ]
  },
  sun: {
    title: 'pîsim',
    sub: 'sun / moon / month',
    meaning:
        'The sun, moon, or a month of time — all expressed by the same word.',
    category: 'nature',
    related: [
      {cree: 'tipiskâw', gloss: 'it is night'},
      {cree: 'kîsikâw', gloss: 'it is day / the sky'},
      {cree: 'askiy', gloss: 'earth / land'}
    ],
    usage: [
      {cree: 'pîsim wâpiw.', eng: '"The sun is shining."'},
      {cree: 'kîsikâw mêkwâc.', eng: '"It is daytime right now."'},
      {cree: 'tipiskâw anohc.', eng: '"It is night tonight."'},
      {cree: 'pîsim kihcêyihtam.', eng: '"She honours the sun."'}
    ]
  }
};

const everydayCards = [
  {
    id: 'start',
    title: 'Start here',
    lines: ['tânisi - Hello', 'êkosi - So, Thus', 'namôya - No, Not so']
  },
  {
    id: 'explore',
    title: 'More to explore',
    lines: [
      'tânisi kikosi - How is your son?', 'ninohtê mitson - I want to eat',
      'kîsta - You too'
    ]
  },
  {
    id: 'challenge',
    title: 'Challenge yourself',
    lines: [
      'Wâskahikan kayâs-âyiwan - The house is old',
      'Kithwâm kî wâpamitin - See you again'
    ]
  }
];

const everydayWordList = ['hello', 'ekosi', 'namoya', 'anohc', 'wapahki'];

words.ekosi = {
  title: 'êkosi',
  sub: 'So, Thus',
  meaning:
      'A word used to mean \'so\', \'thus\', or sometimes \'okay / that is so\'.',
  category: 'everyday',
  related: [
    {cree: 'tânisi', gloss: 'hello / how are you'},
    {cree: 'namôya', gloss: 'no / not so'}, {cree: 'âha', gloss: 'yes'}
  ],
  usage: [
    {cree: 'êkosi.', eng: '"So." / "Thus."'},
    {cree: 'êkosi mâka.', eng: '"Okay then."'},
    {cree: 'êkosi êkwa.', eng: '"So then."'},
    {cree: 'êkosi, marsî.', eng: '"Okay, thank you."'}
  ]
};

words.namoya = {
  title: 'namôya',
  sub: 'No, Not so',
  meaning: 'A negative response meaning \'no\' or \'not so\'.',
  category: 'everyday',
  related: [
    {cree: 'âha', gloss: 'yes'}, {cree: 'êkosi', gloss: 'so / thus'},
    {cree: 'tânisi', gloss: 'hello / how are you'}
  ],
  usage: [
    {cree: 'namôya.', eng: '"No."'},
    {cree: 'namôya êkosi.', eng: '"Not like that."'},
    {cree: 'namôya mâka.', eng: '"Not really."'},
    {cree: 'namôya anohc.', eng: '"Not today."'}
  ]
};

words.anohc = {
  title: 'anohc',
  sub: 'Today',
  meaning: 'A time word meaning \'today\'.',
  category: 'everyday',
  related: [
    {cree: 'wâpahki', gloss: 'tomorrow'}, {cree: 'kîsikâw', gloss: 'day / sky'},
    {cree: 'tipiskâw', gloss: 'night'}
  ],
  usage: [
    {cree: 'anohc nika-itohtên.', eng: '"I will go today."'},
    {cree: 'anohc nika-mîcisôn.', eng: '"I will eat today."'},
    {cree: 'anohc êkwa.', eng: '"Today then."'},
    {cree: 'anohc namôya.', eng: '"Not today."'}
  ]
};

words.wapahki = {
  title: 'wâpahki',
  sub: 'Tomorrow',
  meaning: 'A time word meaning \'tomorrow\'.',
  category: 'everyday',
  related: [
    {cree: 'anohc', gloss: 'today'}, {cree: 'kîsikâw', gloss: 'day / sky'},
    {cree: 'tipiskâw', gloss: 'night'}
  ],
  usage: [
    {cree: 'wâpahki nika-itohtên.', eng: '"I will go tomorrow."'},
    {cree: 'wâpahki kita-wâpamitin.', eng: '"I will see you tomorrow."'},
    {cree: 'wâpahki êkwa.', eng: '"Tomorrow then."'},
    {cree: 'wâpahki nika-mîcisôn.', eng: '"I will eat tomorrow."'}
  ]
};



function openEverydayResults() {
  goTo('category-results.html');
}

function openEverydayWords() {
  goTo('category-words.html');
}

function openWordFromCategory(key) {
  localStorage.setItem('selectedWord', key);
  goTo('definition.html');
}

function playAudio(word) {
  alert('Prototype audio for: ' + word);
}

// Hardcoded voice search results
const voiceResults = ['walk2', 'walk', 'wander'];

function normalize(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function renderWord(key) {
  const w = words[key];
  const div = document.createElement('div');
  div.className = 'list-item';
  div.innerHTML = '<strong>' + w.title + '</strong><br>' +
      '<span style="font-size:0.9rem;color:#a07040">' + w.sub + '</span>';
  div.onclick = function() {
    localStorage.setItem('selectedWord', key);
    goTo('definition.html');
  };
  return div;
}

function handleSearch() {
  var raw = document.getElementById('searchInput').value;
  var input = normalize(raw);
  var resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  Object.keys(words).forEach(function(key) {
    var w = words[key];
    var matches = input === '' || normalize(key).includes(input) ||
        normalize(w.title).includes(input) ||
        normalize(w.sub).includes(input) ||
        normalize(w.meaning).includes(input);
    if (matches) resultsDiv.appendChild(renderWord(key));
  });
}

function recordRecent(key) {
  let recent = JSON.parse(localStorage.getItem('recentWords') || '[]');
  recent = [key, ...recent.filter(k => k !== key)].slice(0, 10);
  localStorage.setItem('recentWords', JSON.stringify(recent));
}

function showVoiceResults() {
  var resultsDiv = document.getElementById('results');
  var label = document.getElementById('didYouMean');
  resultsDiv.innerHTML = '';
  if (label) label.style.display = 'block';
  voiceResults.forEach(function(key) {
    if (words[key]) resultsDiv.appendChild(renderWord(key));
  });
}

// To toggle between educator and student views based on localStorage setting
function applyRoleView() {
  const role =
      localStorage.getItem('userRole') || 'student';  // Default to student

  if (role === 'educator') {
    // Show educator elements
    const edElements = document.querySelectorAll('.educator-only');
    edElements.forEach(el => el.style.display = '');  // removes 'display: none'
  } else if (role === 'student') {
    // Show student elements
    const stElements = document.querySelectorAll('.student-only');
    stElements.forEach(el => el.style.display = '');
  }
}

// On page load
window.onload = function() {
  // Applies logic to show/hide elements based on user role (educator or
  // student)
  applyRoleView();

  // Search page
  if (document.getElementById('searchInput')) {
    var params = new URLSearchParams(window.location.search);
    if (params.get('voice') === '1') {
      showVoiceResults();
    } else {
      handleSearch();
    }
    return;
  }

  // Definition page
  if (!document.getElementById('defWord')) return;
  var key = localStorage.getItem('selectedWord') || 'walk';
  recordRecent(key);
  if (!words[key]) return;
  var w = words[key];

  document.getElementById('defWord').innerText = w.title;
  document.getElementById('defGloss').innerText = w.sub;
  document.getElementById('defMeaning').innerText = w.meaning;
  document.getElementById('treeRoot').innerText = w.title;

  w.related.forEach(function(rel, i) {
    document.getElementById('child' + i).innerText = rel.cree;
    document.getElementById('childGloss' + i).innerText = rel.gloss;
  });

  w.usage.forEach(function(ex, i) {
    var cell = document.getElementById('usage' + i);
    if (cell) cell.innerHTML = ex.cree + '<br><em>\u2014 ' + ex.eng + '</em>';
  });
};
