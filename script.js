// Catálogo de palabras se carga externamente desde words.json
let wordsDatabase = [];

// Estado global de la aplicación
let appState = {
    currentWord: null,
    sessionCorrect: 0,
    sessionTotal: 0,
    currentStreak: 0,
    bestStreak: 0,
    wordProgress: {},
    activityLog: [],
    totalCorrect: 0,
    totalAttempts: 0,
    genderStats: {
        der: { correct: 0, total: 0 },
        die: { correct: 0, total: 0 },
        das: { correct: 0, total: 0 }
    }
};

// Logros disponibles
const achievements = [
    { id: 'first_word', icon: '🎯', name: 'Primera Palabra', desc: 'Responde correctamente', unlocked: false },
    { id: 'streak_5', icon: '🔥', name: 'Racha de 5', desc: '5 respuestas seguidas', unlocked: false },
    { id: 'streak_10', icon: '⚡', name: 'Racha de 10', desc: '10 respuestas seguidas', unlocked: false },
    { id: 'words_10', icon: '📚', name: 'Aprendiz', desc: 'Domina 10 palabras', unlocked: false },
    { id: 'words_25', icon: '🎓', name: 'Estudiante', desc: 'Domina 25 palabras', unlocked: false },
    { id: 'words_50', icon: '👨‍🎓', name: 'Experto', desc: 'Domina 50 palabras', unlocked: false },
    { id: 'words_100', icon: '🏆', name: 'Maestro', desc: 'Domina 100 palabras', unlocked: false },
    { id: 'perfect_10', icon: '💯', name: 'Perfección', desc: '10 respuestas perfectas', unlocked: false },
    { id: 'all_genders', icon: '🌟', name: 'Trilingüe', desc: 'Practica los 3 géneros', unlocked: false }
];

// Mapa de emojis por palabra alemana para la sección de vocabulario
const wordEmojiMap = {
    // Animales
    'Hund': '🐕', 'Katze': '🐈', 'Pferd': '🐎', 'Vogel': '🐦', 'Fisch': '🐟',
    'Kuh': '🐄', 'Schwein': '🐷', 'Schaf': '🐑', 'Huhn': '🐔', 'Hase': '🐇',
    'Maus': '🐭', 'Elefant': '🐘', 'Löwe': '🦁', 'Tiger': '🐯', 'Bär': '🐻',
    'Giraffe': '🦒', 'Affe': '🐒', 'Zebra': '🦓', 'Frosch': '🐸',
    'Schmetterling': '🦋', 'Biene': '🐝', 'Spinne': '🕷️', 'Schlange': '🐍',
    'Schildkröte': '🐢', 'Delfin': '🐬', 'Hai': '🦈', 'Wal': '🐳',
    'Pinguin': '🐧', 'Eule': '🦉', 'Adler': '🦅', 'Ente': '🦆', 'Gans': '🦢',
    'Fuchs': '🦊', 'Wolf': '🐺', 'Reh': '🦌', 'Eichhörnchen': '🐿️',
    'Igel': '🦔', 'Ziege': '🐐', 'Esel': '🐴', 'Hahn': '🐓', 'Truthahn': '🦃',
    'Krokodil': '🐊', 'Nilpferd': '🦛', 'Nashorn': '🦏', 'Kamel': '🐪',
    'Känguru': '🦘', 'Koala': '🐨', 'Panda': '🐼', 'Flamingo': '🦩', 'Papagei': '🦜',
    // Naturaleza
    'Sonne': '☀️', 'Mond': '🌙', 'Stern': '⭐', 'Wolke': '☁️', 'Regen': '🌧️',
    'Schnee': '❄️', 'Wind': '🌬️', 'Berg': '⛰️', 'See': '🏞️', 'Meer': '🌊',
    'Fluss': '🏞️', 'Baum': '🌳', 'Blume': '🌸', 'Gras': '🌿', 'Blatt': '🍃',
    'Wald': '🌲', 'Wiese': '🌾', 'Regenbogen': '🌈', 'Feuer': '🔥', 'Erde': '🌍',
    'Himmel': '🌌', 'Blitz': '⚡', 'Sturm': '🌩️', 'Eis': '🧊',
    'Strand': '🏖️', 'Welle': '🌊', 'Sand': '🏜️', 'Stein': '🪨', 'Fels': '🪨',
    // Deportes
    'Fußball': '⚽', 'Basketball': '🏀', 'Tennis': '🎾', 'Schwimmen': '🏊',
    'Laufen': '🏃', 'Ski': '⛷️', 'Volleyball': '🏐', 'Golf': '⛳',
    'Boxen': '🥊', 'Turnen': '🤸', 'Radfahren': '🚴', 'Reiten': '🐎',
    'Tanzen': '💃', 'Judo': '🥋', 'Karate': '🥋', 'Handball': '🤾',
    'Hockey': '🏑', 'Surfen': '🏄', 'Klettern': '🧗', 'Wandern': '🥾',
    // Familia
    'Mutter': '👩', 'Vater': '👨', 'Kind': '🧒', 'Bruder': '👦', 'Schwester': '👧',
    'Oma': '👵', 'Opa': '👴', 'Tante': '👩', 'Onkel': '👨', 'Baby': '👶',
    'Junge': '👦', 'Mädchen': '👧', 'Mann': '🧔', 'Frau': '👩',
    'Freund': '🤝', 'Freundin': '🤝', 'Lehrer': '👨‍🏫', 'Lehrerin': '👩‍🏫',
    'Arzt': '👨‍⚕️', 'Ärztin': '👩‍⚕️', 'Koch': '👨‍🍳', 'Köchin': '👩‍🍳',
    'Polizist': '👮', 'Polizistin': '👮', 'Feuerwehrmann': '🧑‍🚒',
    'Pilot': '✈️', 'Sänger': '🎤', 'Sängerin': '🎤',
    // Comida
    'Brot': '🍞', 'Käse': '🧀', 'Milch': '🥛', 'Ei': '🥚', 'Butter': '🧈',
    'Apfel': '🍎', 'Banane': '🍌', 'Orange': '🍊', 'Erdbeere': '🍓',
    'Kirsche': '🍒', 'Traube': '🍇', 'Zitrone': '🍋', 'Ananas': '🍍',
    'Wassermelone': '🍉', 'Karotte': '🥕', 'Tomate': '🍅', 'Kartoffel': '🥔',
    'Zwiebel': '🧅', 'Knoblauch': '🧄', 'Pilz': '🍄', 'Salat': '🥗',
    'Suppe': '🍲', 'Fleisch': '🥩', 'Wurst': '🌭', 'Fisch (Essen)': '🐟',
    'Reis': '🍚', 'Nudeln': '🍝', 'Pizza': '🍕', 'Kuchen': '🎂',
    'Eis (Speise)': '🍦', 'Schokolade': '🍫', 'Bonbon': '🍬', 'Keks': '🍪',
    'Wasser': '💧', 'Saft': '🧃', 'Tee': '🍵', 'Kaffee': '☕',
    // Casa
    'Haus': '🏠', 'Tür': '🚪', 'Fenster': '🪟', 'Zimmer': '🛏️', 'Bett': '🛏️',
    'Tisch': '🪑', 'Stuhl': '🪑', 'Sofa': '🛋️', 'Lampe': '💡', 'Küche': '🍳',
    'Bad': '🛁', 'Garten': '🌿', 'Dach': '🏠', 'Wand': '🧱', 'Boden': '🪵',
    'Treppe': '🪜', 'Schrank': '🗄️', 'Regal': '📚', 'Spiegel': '🪞',
    'Waschmaschine': '🫧', 'Kühlschrank': '🧊', 'Ofen': '🔥', 'Herd': '🍳'
};

function getWordEmoji(german, category) {
    return wordEmojiMap[german] || getIconForCategory(category);
}

// Pronunciar una palabra en alemán usando la API de síntesis de voz
function speakGerman(word, btnEl) {
    if (!('speechSynthesis' in window)) return;
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'de-DE';
    utterance.rate = 0.8;
    if (btnEl) {
        btnEl.classList.add('speaking');
        utterance.onend = () => btnEl.classList.remove('speaking');
        utterance.onerror = () => btnEl.classList.remove('speaking');
    }
    speechSynthesis.speak(utterance);
}

// Renderizar las tarjetas de vocabulario para un tema
function renderVocabulary(category) {
    const grid = document.getElementById('vocab-grid');
    if (!grid) return;
    const words = wordsDatabase.filter(w => w.category === category);

    if (words.length === 0) {
        grid.innerHTML = '<p class="vocab-empty">No hay palabras en este tema todavía.</p>';
        return;
    }

    grid.innerHTML = words.map(word => {
        const emoji = getWordEmoji(word.german, word.category);
        return `
            <div class="vocab-card">
                <div class="vocab-emoji" aria-hidden="true">${emoji}</div>
                <span class="vocab-article-badge ${word.article}">${word.article}</span>
                <div class="vocab-german">${word.german}</div>
                <div class="vocab-spanish">${word.spanish}</div>
                <button class="vocab-audio-btn" data-german="${word.german}" title="Escuchar pronunciación">🔊</button>
            </div>
        `;
    }).join('');

    grid.querySelectorAll('.vocab-audio-btn').forEach(btn => {
        btn.addEventListener('click', () => speakGerman(btn.dataset.german, btn));
    });
}

// Cambiar tema de vocabulario
function switchVocabTopic(topic) {
    document.querySelectorAll('.topic-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`.topic-btn[data-topic="${topic}"]`);
    if (activeBtn) activeBtn.classList.add('active');
    renderVocabulary(topic);
}

// Claves de almacenamiento y estado multiusuario
const STORAGE = {
    users: 'germanLearningUsers',
    currentUser: 'germanLearningCurrentUser',
    progressPrefix: 'germanLearningProgress_'
};

let users = [];
let currentUser = null;

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    fetch('words.json')
        .then(r => r.json())
        .then(data => {
            wordsDatabase = Array.isArray(data) ? data : (data.words || []);
            loadUsersAndInit();
            setupEventListeners();
            loadNewWord();
            updateUI();
        })
        .catch(err => {
            console.error('Error cargando words.json', err);
            // Fallback por si falla: continuar con lista vacía
            loadUsersAndInit();
            setupEventListeners();
            updateUI();
        });
});

// Configurar event listeners
function setupEventListeners() {
    // Navegación entre pestañas
    document.querySelectorAll('.nav-btn').forEach(btn => {
        if (btn.dataset && btn.dataset.tab) {
            btn.addEventListener('click', () => switchTab(btn.dataset.tab));
        }
    });

    // Botones de género
    document.querySelectorAll('.gender-btn').forEach(btn => {
        btn.addEventListener('click', () => checkAnswer(btn.dataset.gender));
    });

    // Filtros de palabras
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => filterWords(btn.dataset.filter));
    });

    // Botones de tema de vocabulario
    document.querySelectorAll('.topic-btn').forEach(btn => {
        btn.addEventListener('click', () => switchVocabTopic(btn.dataset.topic));
    });

    // Botones de modo matemáticas
    document.querySelectorAll('.math-mode-btn').forEach(btn => {
        btn.addEventListener('click', () => switchMathMode(btn.dataset.mode));
    });

    // Botones de categoría de frases
    document.querySelectorAll('.phrase-cat-btn').forEach(btn => {
        btn.addEventListener('click', () => switchPhraseCategory(btn.dataset.cat));
    });

    // Botones de modo de frases
    document.querySelectorAll('.phrase-mode-btn').forEach(btn => {
        btn.addEventListener('click', () => switchPhraseMode(btn.dataset.mode));
    });

    // Controles de usuario
    const userSelect = document.getElementById('user-select');
    const addUserBtn = document.getElementById('add-user-btn');
    const resetUserBtn = document.getElementById('reset-user-btn');
    const newUserInput = document.getElementById('new-user-name');

    if (userSelect) {
        userSelect.addEventListener('change', () => switchUser(userSelect.value));
    }
    if (addUserBtn) {
        addUserBtn.addEventListener('click', () => addNewUser(newUserInput.value.trim()));
    }
    if (resetUserBtn) {
        resetUserBtn.addEventListener('click', () => resetCurrentUserData());
    }

    // Modal de ayuda eliminado (convertido en pestaña)

    // Atajos de teclado: 1=der, 2=die, 3=das
    document.addEventListener('keydown', (e) => {
        if (e.repeat) return;
        if (e.key === '1') {
            checkAnswer('der');
        } else if (e.key === '2') {
            checkAnswer('die');
        } else if (e.key === '3') {
            checkAnswer('das');
        }
    });
}

// Cambiar entre pestañas
function switchTab(tabName) {
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    const navBtn = document.querySelector(`[data-tab="${tabName}"]`);
    const tabEl = document.getElementById(tabName);
    if (navBtn) navBtn.classList.add('active');
    if (tabEl) tabEl.classList.add('active');
    
    if (tabName === 'stats') {
        updateStatsDisplay();
    } else if (tabName === 'progress') {
        updateProgressDisplay();
    } else if (tabName === 'vocabulary') {
        const activeTopicBtn = document.querySelector('.topic-btn.active');
        const topic = activeTopicBtn ? activeTopicBtn.dataset.topic : 'animales';
        renderVocabulary(topic);
    } else if (tabName === 'math') {
        const activeMathBtn = document.querySelector('.math-mode-btn.active');
        const mode = activeMathBtn ? activeMathBtn.dataset.mode : 'numbers';
        if (mode === 'numbers') renderNumbersGrid();
        else generateMathProblem();
    } else if (tabName === 'phrases') {
        const activeCatBtn = document.querySelector('.phrase-cat-btn.active');
        const cat = activeCatBtn ? activeCatBtn.dataset.cat : 'saludos';
        const activeModeBtn = document.querySelector('.phrase-mode-btn.active');
        const mode = activeModeBtn ? activeModeBtn.dataset.mode : 'learn';
        phraseState.currentCategory = cat;
        phraseState.mode = mode;
        if (mode === 'learn') renderPhrasesList(cat);
        else generatePhraseQuiz();
    }
}

// Inicializar progreso de palabras
function initializeWordProgress() {
    wordsDatabase.forEach(word => {
        if (!appState.wordProgress[word.german]) {
            appState.wordProgress[word.german] = {
                correct: 0,
                total: 0,
                lastSeen: null,
                mastery: 0
            };
        }
    });
}

// Sistema adaptativo de selección de palabras
function selectWord() {
    // Obtener palabras según nivel de dificultad adaptativo
    const weights = wordsDatabase.map(word => {
        const progress = appState.wordProgress[word.german];
        const mastery = progress.mastery;
        
        // Priorizar palabras con baja maestría
        if (mastery < 30) return 5; // Palabras nuevas o difíciles
        if (mastery < 60) return 3; // Palabras en aprendizaje
        if (mastery < 90) return 2; // Palabras casi dominadas
        return 1; // Palabras dominadas (repaso ocasional)
    });
    
    // Selección ponderada
    const totalWeight = weights.reduce((sum, w) => sum + w, 0);
    let random = Math.random() * totalWeight;
    
    for (let i = 0; i < wordsDatabase.length; i++) {
        random -= weights[i];
        if (random <= 0) {
            return wordsDatabase[i];
        }
    }
    
    return wordsDatabase[0];
}

// Cargar nueva palabra
function loadNewWord() {
    appState.currentWord = selectWord();
    
    document.getElementById('current-word').textContent = appState.currentWord.german;
    document.getElementById('current-translation').textContent = `(${appState.currentWord.spanish})`;
    const iconSpan = document.getElementById('word-icon');
    if (iconSpan) iconSpan.textContent = getIconForCategory(appState.currentWord.category);
    
    // Reiniciar botones
    document.querySelectorAll('.gender-btn').forEach(btn => {
        btn.classList.remove('correct', 'incorrect', 'disabled');
    });
    
    // Ocultar feedback
    const feedback = document.getElementById('feedback');
    feedback.classList.remove('show', 'success', 'error');
}

function getIconForCategory(category) {
    const map = {
        animales: '🐾',
        familia: '👨‍👩‍👧',
        casa: '🏠',
        comida: '🍎',
        ropa: '👕',
        naturaleza: '🌳',
        escuela: '🎒',
        deportes: '⚽',
        varios: '⭐'
    };
    return map[category] || '⭐';
}

// Verificar respuesta
function checkAnswer(selectedGender) {
    const correctGender = appState.currentWord.article;
    const isCorrect = selectedGender === correctGender;
    
    // Actualizar estadísticas de sesión
    appState.sessionTotal++;
    appState.totalAttempts++;
    
    if (isCorrect) {
        appState.sessionCorrect++;
        appState.totalCorrect++;
        appState.currentStreak++;
        
        if (appState.currentStreak > appState.bestStreak) {
            appState.bestStreak = appState.currentStreak;
        }
    } else {
        appState.currentStreak = 0;
    }
    
    // Actualizar progreso de la palabra
    const wordProgress = appState.wordProgress[appState.currentWord.german];
    wordProgress.total++;
    if (isCorrect) {
        wordProgress.correct++;
    }
    wordProgress.lastSeen = Date.now();
    
    // Calcular maestría (0-100)
    if (wordProgress.total > 0) {
        const accuracy = wordProgress.correct / wordProgress.total;
        const consistencyBonus = Math.min(wordProgress.correct * 2, 30);
        wordProgress.mastery = Math.min(100, Math.round(accuracy * 70 + consistencyBonus));
    }
    
    // Actualizar estadísticas de género
    appState.genderStats[correctGender].total++;
    if (isCorrect) {
        appState.genderStats[correctGender].correct++;
    }
    
    // Niveles eliminados
    
    // Registrar actividad
    appState.activityLog.unshift({
        word: appState.currentWord.german,
        article: correctGender,
        spanish: appState.currentWord.spanish,
        correct: isCorrect,
        timestamp: Date.now()
    });
    
    // Limitar log a 50 entradas
    if (appState.activityLog.length > 50) {
        appState.activityLog = appState.activityLog.slice(0, 50);
    }
    
    // Verificar logros
    checkAchievements();
    
    // Mostrar feedback visual
    showFeedback(isCorrect, correctGender, selectedGender);
    
    // Guardar progreso
    saveProgress();
    
    // Actualizar UI
    updateSessionStats();
    
    // Cargar siguiente palabra después de un delay
    const delay = isCorrect ? 2000 : 4000;
    setTimeout(() => {
        loadNewWord();
    }, delay);
}

// Mostrar feedback visual
function showFeedback(isCorrect, correctGender, selectedGender) {
    const feedback = document.getElementById('feedback');
    const buttons = document.querySelectorAll('.gender-btn');
    
    // Deshabilitar todos los botones
    buttons.forEach(btn => btn.classList.add('disabled'));
    
    // Marcar respuesta
    if (isCorrect) {
        const correctBtn = document.querySelector(`[data-gender="${correctGender}"]`);
        correctBtn.classList.add('correct');
        
        const messages = [
            '¡Excelente! 🎉',
            '¡Muy bien! ⭐',
            '¡Perfecto! 🌟',
            '¡Correcto! ✨',
            '¡Genial! 🎯',
            '¡Fantástico! 💫'
        ];
        feedback.textContent = messages[Math.floor(Math.random() * messages.length)];
        feedback.classList.add('success');
    } else {
        const incorrectBtn = document.querySelector(`[data-gender="${selectedGender}"]`);
        const correctBtn = document.querySelector(`[data-gender="${correctGender}"]`);
        
        incorrectBtn.classList.add('incorrect');
        correctBtn.classList.add('correct');
        
        feedback.textContent = `No exactamente. Es "${correctGender}" 📝`;
        feedback.classList.add('error');
    }
    
    feedback.classList.add('show');
}

// Actualizar estadísticas de sesión
function updateSessionStats() {
    document.getElementById('session-correct').textContent = appState.sessionCorrect;
    document.getElementById('session-total').textContent = appState.sessionTotal;
    
    const accuracy = appState.sessionTotal > 0 
        ? Math.round((appState.sessionCorrect / appState.sessionTotal) * 100)
        : 100;
    document.getElementById('session-accuracy').textContent = accuracy + '%';
    
    document.getElementById('streak-count').textContent = appState.currentStreak;
    
    // Progreso de la sesión: porcentaje de aciertos
    const bar = document.getElementById('session-progress');
    if (bar) {
        const sessionProgress = appState.sessionTotal > 0 ? Math.round((appState.sessionCorrect / appState.sessionTotal) * 100) : 0;
        bar.style.width = sessionProgress + '%';
    }
}

// Actualizar nivel adaptativo
// Eliminado sistema de niveles

// Mostrar notificación de subida de nivel
// (sin niveles)

// Verificar y desbloquear logros
function checkAchievements() {
    const masteredWords = Object.values(appState.wordProgress).filter(p => p.mastery >= 80).length;
    
    const achievementChecks = {
        'first_word': appState.totalCorrect >= 1,
        'streak_5': appState.currentStreak >= 5,
        'streak_10': appState.currentStreak >= 10,
        'words_10': masteredWords >= 10,
        'words_25': masteredWords >= 25,
        'words_50': masteredWords >= 50,
        'words_100': masteredWords >= 100,
        'perfect_10': appState.sessionCorrect >= 10 && appState.sessionCorrect === appState.sessionTotal,
        'all_genders': appState.genderStats.der.total > 0 && 
                      appState.genderStats.die.total > 0 && 
                      appState.genderStats.das.total > 0
    };
    
    achievements.forEach(achievement => {
        if (!achievement.unlocked && achievementChecks[achievement.id]) {
            achievement.unlocked = true;
            showAchievementUnlocked(achievement);
        }
    });
}

// Mostrar notificación de logro desbloqueado
function showAchievementUnlocked(achievement) {
    const feedback = document.getElementById('feedback');
    feedback.textContent = `🏆 ¡Logro desbloqueado: ${achievement.name}! ${achievement.icon}`;
    feedback.classList.add('success', 'show');
    
    setTimeout(() => {
        feedback.classList.remove('show');
    }, 3000);
}

// Actualizar display de estadísticas
function updateStatsDisplay() {
    const masteredWords = Object.values(appState.wordProgress).filter(p => p.mastery >= 80).length;
    
    document.getElementById('total-words-learned').textContent = masteredWords;
    document.getElementById('total-correct').textContent = appState.totalCorrect;
    document.getElementById('best-streak').textContent = appState.bestStreak;
    
    const overallAccuracy = appState.totalAttempts > 0 
        ? Math.round((appState.totalCorrect / appState.totalAttempts) * 100)
        : 0;
    document.getElementById('overall-accuracy').textContent = overallAccuracy + '%';
    
    // Estadísticas por género
    ['der', 'die', 'das'].forEach(gender => {
        const stats = appState.genderStats[gender];
        const accuracy = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
        
        document.getElementById(`${gender}-accuracy`).textContent = accuracy + '%';
        document.getElementById(`${gender}-progress`).style.width = accuracy + '%';
    });
    
    // Log de actividad
    updateActivityLog();
}

// Actualizar log de actividad
function updateActivityLog() {
    const logContainer = document.getElementById('activity-log');
    
    if (appState.activityLog.length === 0) {
        logContainer.innerHTML = '<p style="text-align: center; color: #64748b;">Aún no hay actividad registrada</p>';
        return;
    }
    
    logContainer.innerHTML = appState.activityLog.slice(0, 20).map(activity => {
        const date = new Date(activity.timestamp);
        const timeStr = date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
        
        return `
            <div class="activity-item">
                <div>
                    <span class="activity-word">${activity.article} ${activity.word}</span>
                    <span style="color: #64748b; font-size: 0.9em;"> - ${activity.spanish}</span>
                    <div style="font-size: 0.8em; color: #94a3b8; margin-top: 5px;">${timeStr}</div>
                </div>
                <span class="activity-result ${activity.correct ? 'correct' : 'incorrect'}">
                    ${activity.correct ? '✓ Correcto' : '✗ Incorrecto'}
                </span>
            </div>
        `;
    }).join('');
}

// Actualizar display de progreso
function updateProgressDisplay() {
    updateAchievements();
    updateWordsList('all');
    updateWordCounts();
}

// Actualizar logros
function updateAchievements() {
    const grid = document.getElementById('achievements-grid');
    
    grid.innerHTML = achievements.map(achievement => `
        <div class="achievement-item ${achievement.unlocked ? 'unlocked' : ''}">
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-name">${achievement.name}</div>
            <div class="achievement-desc">${achievement.desc}</div>
        </div>
    `).join('');
}

// Actualizar lista de palabras
function updateWordsList(filter) {
    const list = document.getElementById('words-list');
    
    let filteredWords = wordsDatabase;
    
    if (filter === 'mastered') {
        filteredWords = wordsDatabase.filter(w => appState.wordProgress[w.german].mastery >= 80);
    } else if (filter === 'learning') {
        filteredWords = wordsDatabase.filter(w => {
            const m = appState.wordProgress[w.german].mastery;
            return m > 0 && m < 80;
        });
    } else if (filter === 'new') {
        filteredWords = wordsDatabase.filter(w => appState.wordProgress[w.german].total === 0);
    }
    
    if (filteredWords.length === 0) {
        list.innerHTML = '<p style="text-align: center; color: #64748b; grid-column: 1/-1;">No hay palabras en esta categoría</p>';
        return;
    }
    
    list.innerHTML = filteredWords.map(word => {
        const progress = appState.wordProgress[word.german];
        const mastery = progress.mastery;
        
        let status = 'new';
        if (mastery >= 80) status = 'mastered';
        else if (mastery > 0) status = 'learning';
        
        return `
            <div class="word-item ${status}" data-gender="${word.article}">
                <div class="word-german">${word.article} ${word.german}</div>
                <div class="word-spanish">${word.spanish}</div>
                <div class="word-stats">
                    <span>✓ ${progress.correct}/${progress.total}</span>
                    <span>${mastery}% 📊</span>
                </div>
            </div>
        `;
    }).join('');
}

function updateWordCounts() {
    const total = wordsDatabase.length;
    const mastered = wordsDatabase.filter(w => (appState.wordProgress[w.german]?.mastery || 0) >= 80).length;
    const learning = wordsDatabase.filter(w => {
        const m = appState.wordProgress[w.german]?.mastery || 0;
        return m > 0 && m < 80;
    }).length;
    const fresh = wordsDatabase.filter(w => (appState.wordProgress[w.german]?.total || 0) === 0).length;

    const allEl = document.getElementById('count-all');
    const masEl = document.getElementById('count-mastered');
    const leaEl = document.getElementById('count-learning');
    const newEl = document.getElementById('count-new');
    if (allEl) allEl.textContent = total;
    if (masEl) masEl.textContent = mastered;
    if (leaEl) leaEl.textContent = learning;
    if (newEl) newEl.textContent = fresh;
}

// Filtrar palabras
function filterWords(filter) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-filter="${filter}"]`).classList.add('active');
    updateWordsList(filter);
    updateWordCounts();
}

// Guardar progreso en localStorage
function saveProgress() {
    saveProgressForUser(currentUser);
}

// Cargar progreso desde localStorage
function loadProgress() {
    // Mantenido por compatibilidad: delega al sistema multiusuario si existe usuario
    if (currentUser) {
        loadProgressForUser(currentUser);
        return;
    }
}

// Actualizar UI inicial
function updateUI() {
    updateSessionStats();
}

// -----------------
// Multiusuario
// -----------------

function loadUsersAndInit() {
    users = loadUsersList();
    if (!users || users.length === 0) {
        users = ['Usuario 1'];
        saveUsersList(users);
    }

    const storedCurrent = localStorage.getItem(STORAGE.currentUser);
    currentUser = storedCurrent && users.includes(storedCurrent) ? storedCurrent : users[0];
    localStorage.setItem(STORAGE.currentUser, currentUser);

    populateUserSelect();
    loadProgressForUser(currentUser);
    initializeWordProgress();
    // niveles eliminados
}

function loadUsersList() {
    try {
        const raw = localStorage.getItem(STORAGE.users);
        return raw ? JSON.parse(raw) : [];
    } catch (e) {
        return [];
    }
}

function saveUsersList(list) {
    localStorage.setItem(STORAGE.users, JSON.stringify(list));
}

function populateUserSelect() {
    const sel = document.getElementById('user-select');
    if (!sel) return;
    sel.innerHTML = users.map(u => `<option value="${u}">${u}</option>`).join('');
    sel.value = currentUser;
}

function switchUser(userName) {
    if (!userName || userName === currentUser) return;
    // Guardar progreso del usuario actual
    saveProgressForUser(currentUser);
    // Cambiar usuario
    currentUser = userName;
    localStorage.setItem(STORAGE.currentUser, currentUser);
    // Cargar progreso del nuevo usuario
    loadProgressForUser(currentUser);
    initializeWordProgress();
    // niveles eliminados
    // Reiniciar stats de sesión
    appState.sessionCorrect = 0;
    appState.sessionTotal = 0;
    appState.currentStreak = 0;
    // Actualizar UI y palabra
    updateUI();
    loadNewWord();
}

function addNewUser(name) {
    if (!name) return;
    if (users.includes(name)) {
        // Seleccionar si ya existe
        switchUser(name);
        populateUserSelect();
        const input = document.getElementById('new-user-name');
        if (input) input.value = '';
        return;
    }
    users.push(name);
    saveUsersList(users);
    // Inicializar progreso por defecto para el nuevo usuario
    const defaultData = getDefaultProgressData();
    localStorage.setItem(STORAGE.progressPrefix + name, JSON.stringify(defaultData));
    // Cambiar a ese usuario
    switchUser(name);
    populateUserSelect();
    const input = document.getElementById('new-user-name');
    if (input) input.value = '';
}

function resetCurrentUserData() {
    if (!currentUser) return;
    const confirmReset = window.confirm ? window.confirm('¿Reiniciar el progreso de este usuario?') : true;
    if (!confirmReset) return;
    const defaultData = getDefaultProgressData();
    localStorage.setItem(STORAGE.progressPrefix + currentUser, JSON.stringify(defaultData));
    loadProgressForUser(currentUser);
    initializeWordProgress();
    // niveles eliminados
    // Reiniciar stats de sesión
    appState.sessionCorrect = 0;
    appState.sessionTotal = 0;
    appState.currentStreak = 0;
    updateUI();
    loadNewWord();
}

function getDefaultProgressData() {
    const base = {
        wordProgress: {},
        totalCorrect: 0,
        totalAttempts: 0,
        bestStreak: 0,
        // sin niveles
        genderStats: {
            der: { correct: 0, total: 0 },
            die: { correct: 0, total: 0 },
            das: { correct: 0, total: 0 }
        },
        activityLog: [],
        achievements: achievements.map(a => ({ id: a.id, unlocked: false })),
        // Initialize session stats
        sessionCorrect: 0,
        sessionTotal: 0,
        currentStreak: 0
    };
    // Asegurar estructura de progreso de palabras
    wordsDatabase.forEach(word => {
        base.wordProgress[word.german] = { correct: 0, total: 0, lastSeen: null, mastery: 0 };
    });
    return base;
}

function loadProgressForUser(userName) {
    try {
        const raw = localStorage.getItem(STORAGE.progressPrefix + userName);
        let data = raw ? JSON.parse(raw) : null;
        if (!data) {
            data = getDefaultProgressData();
        }
        appState.wordProgress = data.wordProgress || {};
        appState.totalCorrect = data.totalCorrect || 0;
        appState.totalAttempts = data.totalAttempts || 0;
        appState.bestStreak = data.bestStreak || 0;
        // sin niveles
        appState.genderStats = data.genderStats || {
            der: { correct: 0, total: 0 },
            die: { correct: 0, total: 0 },
            das: { correct: 0, total: 0 }
        };
        appState.activityLog = data.activityLog || [];
        // Restore session stats to persist across page refreshes
        appState.sessionCorrect = data.sessionCorrect || 0;
        appState.sessionTotal = data.sessionTotal || 0;
        appState.currentStreak = data.currentStreak || 0;
        // Sincronizar logros
        const savedAch = data.achievements || [];
        achievements.forEach(a => {
            const found = savedAch.find(s => s.id === a.id);
            a.unlocked = !!(found && found.unlocked);
        });
    } catch (e) {
        console.error('Error loading user progress:', e);
    }
}

function saveProgressForUser(userName) {
    if (!userName) return;
    const dataToSave = {
        wordProgress: appState.wordProgress,
        totalCorrect: appState.totalCorrect,
        totalAttempts: appState.totalAttempts,
        bestStreak: appState.bestStreak,
        level: appState.level,
        genderStats: appState.genderStats,
        activityLog: appState.activityLog,
        achievements: achievements.map(a => ({ id: a.id, unlocked: a.unlocked })),
        // Save session stats to persist across page refreshes
        sessionCorrect: appState.sessionCorrect,
        sessionTotal: appState.sessionTotal,
        currentStreak: appState.currentStreak
    };
    localStorage.setItem(STORAGE.progressPrefix + userName, JSON.stringify(dataToSave));
}

// =============================================================
// MATEMÁTICAS EN ALEMÁN
// =============================================================

const germanNumbers = [
    { num: 0,  german: 'null',       emoji: '0️⃣' },
    { num: 1,  german: 'eins',       emoji: '1️⃣' },
    { num: 2,  german: 'zwei',       emoji: '2️⃣' },
    { num: 3,  german: 'drei',       emoji: '3️⃣' },
    { num: 4,  german: 'vier',       emoji: '4️⃣' },
    { num: 5,  german: 'fünf',       emoji: '5️⃣' },
    { num: 6,  german: 'sechs',      emoji: '6️⃣' },
    { num: 7,  german: 'sieben',     emoji: '7️⃣' },
    { num: 8,  german: 'acht',       emoji: '8️⃣' },
    { num: 9,  german: 'neun',       emoji: '9️⃣' },
    { num: 10, german: 'zehn',       emoji: '🔟' },
    { num: 11, german: 'elf',        emoji: '1️⃣1️⃣' },
    { num: 12, german: 'zwölf',      emoji: '1️⃣2️⃣' },
    { num: 13, german: 'dreizehn',   emoji: '1️⃣3️⃣' },
    { num: 14, german: 'vierzehn',   emoji: '1️⃣4️⃣' },
    { num: 15, german: 'fünfzehn',   emoji: '1️⃣5️⃣' },
    { num: 16, german: 'sechzehn',   emoji: '1️⃣6️⃣' },
    { num: 17, german: 'siebzehn',   emoji: '1️⃣7️⃣' },
    { num: 18, german: 'achtzehn',   emoji: '1️⃣8️⃣' },
    { num: 19, german: 'neunzehn',   emoji: '1️⃣9️⃣' },
    { num: 20, german: 'zwanzig',    emoji: '2️⃣0️⃣' }
];

let mathState = {
    correct: 0,
    total: 0,
    currentProblem: null,
    locked: false
};

function numToGerman(n) {
    const entry = germanNumbers.find(x => x.num === n);
    return entry ? entry.german : String(n);
}

function renderNumbersGrid() {
    const grid = document.getElementById('numbers-grid');
    if (!grid) return;
    grid.innerHTML = germanNumbers.map(n => `
        <div class="number-card">
            <div class="number-digit">${n.num}</div>
            <div class="number-german">${n.german}</div>
            <button class="number-audio-btn" data-word="${n.german}" title="Escuchar pronunciación">🔊</button>
        </div>
    `).join('');
    grid.querySelectorAll('.number-audio-btn').forEach(btn => {
        btn.addEventListener('click', () => speakGerman(btn.dataset.word, btn));
    });
}

function generateMathProblem() {
    if (mathState.locked) return;
    const ops = ['+', '-', '×'];
    const op = ops[Math.floor(Math.random() * ops.length)];
    let a, b, result;

    if (op === '+') {
        a = Math.floor(Math.random() * 10) + 1;
        b = Math.floor(Math.random() * (20 - a)) + 1;
        result = a + b;
    } else if (op === '-') {
        a = Math.floor(Math.random() * 15) + 5;
        b = Math.floor(Math.random() * a) + 1;
        result = a - b;
    } else {
        a = Math.floor(Math.random() * 4) + 1;
        b = Math.floor(Math.random() * Math.floor(20 / a)) + 1;
        result = a * b;
    }

    const opWord = op === '+' ? 'plus' : op === '-' ? 'minus' : 'mal';
    mathState.currentProblem = { a, b, op, opWord, result };
    mathState.locked = false;

    document.getElementById('math-problem').textContent =
        `${numToGerman(a)} ${opWord} ${numToGerman(b)} = ?`;

    // Generate 4 unique options (correct + 3 wrong)
    const wrongSet = new Set();
    wrongSet.add(result);
    while (wrongSet.size < 4) {
        const delta = Math.floor(Math.random() * 6) - 3;
        const wrong = result + delta;
        if (wrong >= 0 && wrong <= 20 && wrong !== result) wrongSet.add(wrong);
    }
    const options = [...wrongSet].sort(() => Math.random() - 0.5);

    const optionsEl = document.getElementById('math-options');
    optionsEl.innerHTML = options.map(val => `
        <button class="math-option-btn" data-value="${val}">${numToGerman(val)} (${val})</button>
    `).join('');
    optionsEl.querySelectorAll('.math-option-btn').forEach(btn => {
        btn.addEventListener('click', () => checkMathAnswer(parseInt(btn.dataset.value, 10), btn));
    });

    const fb = document.getElementById('math-feedback');
    fb.textContent = '';
    fb.className = 'math-feedback';
}

function checkMathAnswer(value, btn) {
    if (mathState.locked) return;
    mathState.locked = true;
    mathState.total++;
    const correct = value === mathState.currentProblem.result;
    if (correct) mathState.correct++;

    document.getElementById('math-correct').textContent = mathState.correct;
    document.getElementById('math-total').textContent = mathState.total;

    document.querySelectorAll('.math-option-btn').forEach(b => {
        b.classList.add('disabled');
        if (parseInt(b.dataset.value, 10) === mathState.currentProblem.result) {
            b.classList.add('correct');
        }
    });
    if (!correct) btn.classList.add('incorrect');

    const fb = document.getElementById('math-feedback');
    if (correct) {
        const msgs = ['¡Excelente! 🎉', '¡Muy bien! ⭐', '¡Correcto! ✨', '¡Genial! 🎯'];
        fb.textContent = msgs[Math.floor(Math.random() * msgs.length)];
        fb.className = 'math-feedback show success';
    } else {
        fb.textContent = `La respuesta es "${numToGerman(mathState.currentProblem.result)}" (${mathState.currentProblem.result}) 📝`;
        fb.className = 'math-feedback show error';
    }

    setTimeout(() => generateMathProblem(), correct ? 2000 : 3500);
}

function switchMathMode(mode) {
    document.querySelectorAll('.math-mode-btn').forEach(b => b.classList.remove('active'));
    const activeBtn = document.querySelector(`.math-mode-btn[data-mode="${mode}"]`);
    if (activeBtn) activeBtn.classList.add('active');
    document.getElementById('math-numbers-mode').style.display = mode === 'numbers' ? '' : 'none';
    document.getElementById('math-quiz-mode').style.display = mode === 'quiz' ? '' : 'none';
    if (mode === 'quiz') generateMathProblem();
}

// =============================================================
// FRASES EN ALEMÁN
// =============================================================

const phrasesDatabase = {
    saludos: [
        { german: 'Hallo!',                spanish: '¡Hola!',                   emoji: '👋' },
        { german: 'Guten Morgen!',          spanish: '¡Buenos días!',            emoji: '🌅' },
        { german: 'Guten Tag!',             spanish: '¡Buenas tardes!',          emoji: '☀️' },
        { german: 'Guten Abend!',           spanish: '¡Buenas noches!',          emoji: '🌙' },
        { german: 'Wie geht es dir?',       spanish: '¿Cómo estás?',             emoji: '😊' },
        { german: 'Mir geht es gut.',       spanish: 'Estoy bien.',              emoji: '😄' },
        { german: 'Auf Wiedersehen!',       spanish: '¡Hasta luego!',            emoji: '👋' },
        { german: 'Tschüss!',              spanish: '¡Chao!',                   emoji: '✌️' },
        { german: 'Bitte.',                 spanish: 'Por favor.',               emoji: '🙏' },
        { german: 'Danke!',                 spanish: '¡Gracias!',                emoji: '💛' },
        { german: 'Bitte sehr!',            spanish: '¡De nada!',               emoji: '😊' },
        { german: 'Entschuldigung!',        spanish: '¡Perdona!',               emoji: '😅' }
    ],
    presentacion: [
        { german: 'Ich heiße…',             spanish: 'Me llamo…',                emoji: '🙋' },
        { german: 'Wie heißt du?',          spanish: '¿Cómo te llamas?',         emoji: '❓' },
        { german: 'Ich bin … Jahre alt.',   spanish: 'Tengo … años.',            emoji: '🎂' },
        { german: 'Wie alt bist du?',       spanish: '¿Cuántos años tienes?',    emoji: '❓' },
        { german: 'Ich wohne in …',         spanish: 'Vivo en …',                emoji: '🏠' },
        { german: 'Wo wohnst du?',          spanish: '¿Dónde vives?',            emoji: '🗺️' },
        { german: 'Ich spreche Spanisch.',  spanish: 'Hablo español.',           emoji: '🇪🇸' },
        { german: 'Ich lerne Deutsch.',     spanish: 'Aprendo alemán.',          emoji: '🇩🇪' },
        { german: 'Mein Lieblingstier ist …', spanish: 'Mi animal favorito es …', emoji: '❤️' },
        { german: 'Ich mag …',              spanish: 'Me gusta …',               emoji: '😍' }
    ],
    escuela: [
        { german: 'Ich verstehe das nicht.', spanish: 'No entiendo esto.',        emoji: '😕' },
        { german: 'Kannst du das wiederholen?', spanish: '¿Puedes repetir eso?', emoji: '🔁' },
        { german: 'Ich habe eine Frage.',   spanish: 'Tengo una pregunta.',       emoji: '✋' },
        { german: 'Das ist richtig!',       spanish: '¡Eso es correcto!',         emoji: '✅' },
        { german: 'Das ist falsch.',        spanish: 'Eso es incorrecto.',        emoji: '❌' },
        { german: 'Darf ich bitte raus?',   spanish: '¿Puedo salir, por favor?', emoji: '🚪' },
        { german: 'Öffne das Buch!',        spanish: '¡Abre el libro!',           emoji: '📖' },
        { german: 'Schreib das auf!',       spanish: '¡Escríbelo!',               emoji: '✏️' },
        { german: 'Hör zu!',               spanish: '¡Escucha!',                emoji: '👂' },
        { german: 'Sehr gut gemacht!',      spanish: '¡Muy bien hecho!',          emoji: '🌟' }
    ],
    colores: [
        { german: 'Rot',    spanish: 'Rojo',     emoji: '🔴' },
        { german: 'Blau',   spanish: 'Azul',     emoji: '🔵' },
        { german: 'Grün',   spanish: 'Verde',    emoji: '🟢' },
        { german: 'Gelb',   spanish: 'Amarillo', emoji: '🟡' },
        { german: 'Orange', spanish: 'Naranja',  emoji: '🟠' },
        { german: 'Lila',   spanish: 'Morado',   emoji: '🟣' },
        { german: 'Weiß',   spanish: 'Blanco',   emoji: '⚪' },
        { german: 'Schwarz', spanish: 'Negro',   emoji: '⚫' },
        { german: 'Rosa',   spanish: 'Rosa',     emoji: '🌸' },
        { german: 'Braun',  spanish: 'Marrón',   emoji: '🟤' },
        { german: 'Grau',   spanish: 'Gris',     emoji: '🩶' }
    ],
    dias: [
        { german: 'Montag',     spanish: 'Lunes',      emoji: '1️⃣' },
        { german: 'Dienstag',   spanish: 'Martes',     emoji: '2️⃣' },
        { german: 'Mittwoch',   spanish: 'Miércoles',  emoji: '3️⃣' },
        { german: 'Donnerstag', spanish: 'Jueves',     emoji: '4️⃣' },
        { german: 'Freitag',    spanish: 'Viernes',    emoji: '5️⃣' },
        { german: 'Samstag',    spanish: 'Sábado',     emoji: '6️⃣' },
        { german: 'Sonntag',    spanish: 'Domingo',    emoji: '7️⃣' },
        { german: 'heute',      spanish: 'hoy',        emoji: '📅' },
        { german: 'morgen',     spanish: 'mañana',     emoji: '⏭️' },
        { german: 'gestern',    spanish: 'ayer',       emoji: '⏮️' }
    ],
    preguntas: [
        { german: 'Wer ist das?',         spanish: '¿Quién es?',             emoji: '👤' },
        { german: 'Was ist das?',          spanish: '¿Qué es esto?',          emoji: '❓' },
        { german: 'Wo ist …?',             spanish: '¿Dónde está …?',         emoji: '🗺️' },
        { german: 'Wie viel kostet das?',  spanish: '¿Cuánto cuesta?',        emoji: '💶' },
        { german: 'Was möchtest du?',      spanish: '¿Qué quieres?',          emoji: '🤔' },
        { german: 'Warum?',                spanish: '¿Por qué?',              emoji: '🤷' },
        { german: 'Wann?',                 spanish: '¿Cuándo?',               emoji: '⏰' },
        { german: 'Wie?',                  spanish: '¿Cómo?',                 emoji: '🔄' },
        { german: 'Kannst du mir helfen?', spanish: '¿Puedes ayudarme?',     emoji: '🤝' },
        { german: 'Ich weiß nicht.',       spanish: 'No lo sé.',              emoji: '🤷' }
    ]
};

let phraseState = {
    correct: 0,
    total: 0,
    currentCategory: 'saludos',
    currentPhrase: null,
    locked: false,
    mode: 'learn'
};

function renderPhrasesList(category) {
    const list = document.getElementById('phrases-list');
    if (!list) return;
    const phrases = phrasesDatabase[category] || [];
    if (phrases.length === 0) {
        list.innerHTML = '<p class="vocab-empty">No hay frases en esta categoría todavía.</p>';
        return;
    }
    list.innerHTML = phrases.map(p => `
        <div class="phrase-card">
            <div class="phrase-emoji" aria-hidden="true">${p.emoji}</div>
            <div class="phrase-german">${p.german}</div>
            <div class="phrase-spanish">${p.spanish}</div>
            <button class="phrase-audio-btn" data-word="${p.german}" title="Escuchar pronunciación">🔊</button>
        </div>
    `).join('');
    list.querySelectorAll('.phrase-audio-btn').forEach(btn => {
        btn.addEventListener('click', () => speakGerman(btn.dataset.word, btn));
    });
}

function generatePhraseQuiz() {
    if (phraseState.locked) return;
    const phrases = phrasesDatabase[phraseState.currentCategory] || [];
    if (phrases.length < 4) return;

    phraseState.locked = false;
    const correctIdx = Math.floor(Math.random() * phrases.length);
    phraseState.currentPhrase = phrases[correctIdx];

    // Show Spanish; ask to pick German
    document.getElementById('phrase-question').textContent = phraseState.currentPhrase.spanish + ' ' + phraseState.currentPhrase.emoji;

    // 4 options: correct + 3 random wrong
    const wrongSet = new Set([correctIdx]);
    while (wrongSet.size < 4) {
        wrongSet.add(Math.floor(Math.random() * phrases.length));
    }
    const optionIndices = [...wrongSet].sort(() => Math.random() - 0.5);
    const optionsEl = document.getElementById('phrase-options');
    optionsEl.innerHTML = optionIndices.map(idx => `
        <button class="phrase-option-btn" data-idx="${idx}">${phrases[idx].german}</button>
    `).join('');
    optionsEl.querySelectorAll('.phrase-option-btn').forEach(btn => {
        btn.addEventListener('click', () => checkPhraseAnswer(parseInt(btn.dataset.idx, 10), btn));
    });

    const fb = document.getElementById('phrase-feedback');
    fb.textContent = '';
    fb.className = 'phrase-feedback';
}

function checkPhraseAnswer(idx, btn) {
    if (phraseState.locked) return;
    phraseState.locked = true;
    const phrases = phrasesDatabase[phraseState.currentCategory] || [];
    const correctPhrase = phraseState.currentPhrase;
    const correctIdx = phrases.indexOf(correctPhrase);
    const isCorrect = idx === correctIdx;

    phraseState.total++;
    if (isCorrect) phraseState.correct++;
    document.getElementById('phrase-correct').textContent = phraseState.correct;
    document.getElementById('phrase-total').textContent = phraseState.total;

    document.querySelectorAll('.phrase-option-btn').forEach(b => {
        b.classList.add('disabled');
        if (parseInt(b.dataset.idx, 10) === correctIdx) b.classList.add('correct');
    });
    if (!isCorrect) btn.classList.add('incorrect');

    const fb = document.getElementById('phrase-feedback');
    if (isCorrect) {
        const msgs = ['¡Excelente! 🎉', '¡Muy bien! ⭐', '¡Correcto! ✨', '¡Genial! 🎯'];
        fb.textContent = msgs[Math.floor(Math.random() * msgs.length)];
        fb.className = 'phrase-feedback show success';
    } else {
        fb.textContent = `La respuesta es: "${correctPhrase.german}" 📝`;
        fb.className = 'phrase-feedback show error';
    }

    setTimeout(() => generatePhraseQuiz(), isCorrect ? 2000 : 3500);
}

function switchPhraseCategory(category) {
    phraseState.currentCategory = category;
    phraseState.locked = false;
    document.querySelectorAll('.phrase-cat-btn').forEach(b => b.classList.remove('active'));
    const activeBtn = document.querySelector(`.phrase-cat-btn[data-cat="${category}"]`);
    if (activeBtn) activeBtn.classList.add('active');
    if (phraseState.mode === 'learn') {
        renderPhrasesList(category);
    } else {
        generatePhraseQuiz();
    }
}

function switchPhraseMode(mode) {
    phraseState.mode = mode;
    phraseState.locked = false;
    document.querySelectorAll('.phrase-mode-btn').forEach(b => b.classList.remove('active'));
    const activeBtn = document.querySelector(`.phrase-mode-btn[data-mode="${mode}"]`);
    if (activeBtn) activeBtn.classList.add('active');
    document.getElementById('phrase-learn-mode').style.display = mode === 'learn' ? '' : 'none';
    document.getElementById('phrase-practice-mode').style.display = mode === 'practice' ? '' : 'none';
    if (mode === 'learn') {
        renderPhrasesList(phraseState.currentCategory);
    } else {
        generatePhraseQuiz();
    }
}

