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

