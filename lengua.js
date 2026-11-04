// Sección interactiva de Lengua española: "El caso del gorro perdido"
const LENGUA_STORAGE = 'lenguaProgress:';

const LENGUA_PISTAS = [
    {
        id: 'p1', icon: '🔄', title: 'Sinónimos y antónimos',
        theory: '<b>Sinónimos</b>: significan casi lo mismo (empezar / comenzar, extraviar / perder, breve / corto, raro / extraño).<br><b>Antónimos</b>: significan lo contrario (llena / vacía, ancho / estrecho, abrir / cerrar, subir / bajar).',
        exercises: [
            { type: 'pick', q: 'Marca los 2 sinónimos: sana, sabrosa, saludable', options: ['sana', 'sabrosa', 'saludable'], answer: ['sana', 'saludable'] },
            { type: 'pick', q: 'Marca los 2 sinónimos: huele, olfatea, estropea', options: ['huele', 'olfatea', 'estropea'], answer: ['huele', 'olfatea'] },
            { type: 'text', q: 'Escribe el antónimo (lo contrario):', items: [{ t: 'meter', a: ['sacar'] }, { t: 'comprar', a: ['vender'] }] },
            { type: 'text', q: 'Cambia las palabras en negrita por su antónimo: «El camino es ancho y el agua está fría.»', items: [{ t: 'ancho →', a: ['estrecho'] }, { t: 'fría →', a: ['caliente', 'calida', 'cálida'] }] }
        ]
    },
    {
        id: 'p2', icon: '🔤', title: 'Ortografía: K y G suave',
        theory: 'Sonido K: <b>c</b> + a, o, u · <b>qu</b> + e, i.<br>Sonido G suave: <b>g</b> + a, o, u · <b>gu</b> + e, i (la u no suena) · <b>gü</b> + e, i (la u sí suena, con diéresis).',
        exercises: [
            { type: 'choice', q: '¿c o qu? Completa la palabra.', items: [
                { t: 'bar_o', options: ['c', 'qu'], a: 'c', full: 'barco' }, { t: 'pa_ete', options: ['c', 'qu'], a: 'qu', full: 'paquete' },
                { t: 'ban_illo', options: ['c', 'qu'], a: 'qu', full: 'banquillo' }, { t: 'a_arela', options: ['c', 'qu', 'cu'], a: 'cu', full: 'acuarela' }] },
            { type: 'choice', q: '¿g, gu o gü? Completa la palabra.', items: [
                { t: 'ami_a', options: ['g', 'gu', 'gü'], a: 'g', full: 'amiga' }, { t: 'man_era', options: ['g', 'gu', 'gü'], a: 'gu', full: 'manguera' },
                { t: 'ci_eña', options: ['g', 'gu', 'gü'], a: 'gü', full: 'cigüeña' }, { t: '_itarra', options: ['g', 'gu', 'gü'], a: 'gu', full: 'guitarra' },
                { t: 'pin_ino', options: ['g', 'gu', 'gü'], a: 'gü', full: 'pingüino' }, { t: 'a_jero', options: ['g', 'gu', 'gü'], a: 'gu', full: 'agujero' }] },
            { type: 'choice', q: 'Clasifica cada palabra.', items: [
                { t: 'regadera', options: ['ga/go/gu', 'gue/gui', 'güe/güi'], a: 'ga/go/gu' }, { t: 'bigote', options: ['ga/go/gu', 'gue/gui', 'güe/güi'], a: 'ga/go/gu' },
                { t: 'guinda', options: ['ga/go/gu', 'gue/gui', 'güe/güi'], a: 'gue/gui' }, { t: 'pliegue', options: ['ga/go/gu', 'gue/gui', 'güe/güi'], a: 'gue/gui' },
                { t: 'desagüe', options: ['ga/go/gu', 'gue/gui', 'güe/güi'], a: 'güe/güi' }, { t: 'piragüista', options: ['ga/go/gu', 'gue/gui', 'güe/güi'], a: 'güe/güi' }] }
        ]
    },
    {
        id: 'p3', icon: '🧩', title: 'La oración',
        theory: 'Toda oración tiene <b>sujeto</b> (de quién se habla) y <b>predicado</b> (lo que se dice del sujeto). El verbo está en el predicado.',
        exercises: [
            { type: 'split', q: 'Toca la última palabra del sujeto.', words: ['La', 'gata', 'de', 'Saúl', 'duerme', 'en', 'el', 'sofá.'], at: 3 },
            { type: 'split', q: 'Toca la última palabra del sujeto.', words: ['Eva', 'y', 'Ana', 'viajan', 'en', 'guagua.'], at: 2 },
            { type: 'split', q: 'Toca la última palabra del sujeto.', words: ['Los', 'jardines', 'están', 'preciosos.'], at: 1 },
            { type: 'order', q: 'Ordena las palabras para formar una oración.', words: ['marca', 'las', 'El', 'diez', 'reloj'], answer: 'El reloj marca las diez.' },
            { type: 'open', q: 'Completa con tu imaginación: «___ fuimos al cine» y «Los bomberos ___».', model: 'Ejemplo: «Ayer fuimos al cine» y «Los bomberos apagaron el fuego».' }
        ]
    },
    {
        id: 'p4', icon: '🗣️', title: 'Comunicación',
        theory: 'Nos comunicamos con <b>lenguaje oral</b> y <b>escrito</b>, con <b>gestos</b>, <b>imágenes</b> y <b>señales visuales</b> y con <b>sonidos</b>. La lengua de signos española (LSE) es un idioma de gestos.',
        exercises: [
            { type: 'choice', q: '¿Qué tipo de comunicación es?', items: [
                { t: 'Una nota', options: ['escrito', 'sonido', 'gesto', 'señal visual'], a: 'escrito' }, { t: 'Un pitido', options: ['escrito', 'sonido', 'gesto', 'señal visual'], a: 'sonido' },
                { t: 'Un guiño', options: ['escrito', 'sonido', 'gesto', 'señal visual'], a: 'gesto' }, { t: 'Un semáforo', options: ['escrito', 'sonido', 'gesto', 'señal visual'], a: 'señal visual' }] },
            { type: 'open', q: 'Con un compañero: dile un mensaje solo con mímica y que lo adivine. ¿Qué mensaje era?', model: 'Respuesta libre.' }
        ]
    },
    {
        id: 'p5', icon: '🚸', title: 'Señales y carteles',
        theory: 'Un <b>círculo con borde rojo</b> indica <b>prohibición</b>. Un <b>triángulo con borde rojo</b> indica <b>peligro</b>. Los avisos informan y los eslóganes son frases cortas y pegadizas.',
        exercises: [
            { type: 'choice', q: 'Elige el significado.', items: [
                { t: '⭕ Círculo con borde rojo', options: ['Prohibición', 'Peligro'], a: 'Prohibición' }, { t: '🔺 Triángulo con borde rojo', options: ['Prohibición', 'Peligro'], a: 'Peligro' }] },
            { type: 'open', q: 'Inventa un aviso para la caja de una tienda y un eslogan para cuidar el bosque.', model: 'Ejemplos: «Paguen en caja» · «¡Bosque limpio, bosque vivo!»' }
        ]
    },
    {
        id: 'p6', icon: '🪧', title: 'Carteles borrados (sonido K)',
        theory: 'Recuerda: <b>c</b> + a, o, u · <b>qu</b> + e, i.',
        exercises: [
            { type: 'choice', q: 'Completa: «Se al_ila _asa. Pregunten a_í.»', items: [
                { t: 'al_ila', options: ['c', 'qu'], a: 'qu', full: 'alquila' }, { t: '_asa', options: ['c', 'qu'], a: 'c', full: 'casa' }, { t: 'a_í', options: ['c', 'qu'], a: 'qu', full: 'aquí' }] },
            { type: 'choice', q: 'Completa: «_afetería a la iz_ierda.»', items: [
                { t: '_afetería', options: ['c', 'qu'], a: 'c', full: 'cafetería' }, { t: 'iz_ierda', options: ['c', 'qu'], a: 'qu', full: 'izquierda' }] },
            { type: 'choice', q: 'Clasifica según se escriban con c o qu.', items: [
                { t: 'cometa', options: ['c', 'qu'], a: 'c' }, { t: 'caracol', options: ['c', 'qu'], a: 'c' }, { t: 'cueva', options: ['c', 'qu'], a: 'c' },
                { t: 'caramelos', options: ['c', 'qu'], a: 'c' }, { t: 'equipo', options: ['c', 'qu'], a: 'qu' }, { t: 'roque', options: ['c', 'qu'], a: 'qu' }, { t: 'parque', options: ['c', 'qu'], a: 'qu' }] },
            { type: 'open', q: 'Escribe una oración con 3 palabras difíciles con sonido K.', model: 'Ejemplo: «El perenquén se escondió en una cueva.»' }
        ]
    },
    {
        id: 'p7', icon: '🙋', title: 'Presentación',
        theory: '«Mi ayudante se llama Inés Robles y tiene ocho años. Es alta y tiene el pelo rizado. Es observadora y paciente. Le encanta dibujar mapas.»',
        exercises: [
            { type: 'choice', q: 'Según el texto, ¿qué tipo de dato es?', items: [
                { t: 'alta', options: ['rasgo físico', 'carácter', 'afición'], a: 'rasgo físico' }, { t: 'pelo rizado', options: ['rasgo físico', 'carácter', 'afición'], a: 'rasgo físico' },
                { t: 'observadora', options: ['rasgo físico', 'carácter', 'afición'], a: 'carácter' }, { t: 'paciente', options: ['rasgo físico', 'carácter', 'afición'], a: 'carácter' },
                { t: 'dibujar mapas', options: ['rasgo físico', 'carácter', 'afición'], a: 'afición' }] },
            { type: 'open', q: 'Presenta a un compañero: nombre, edad, cómo es, su carácter y qué le gusta.', model: 'Respuesta libre.' }
        ]
    },
    {
        id: 'p8', icon: '🧙', title: 'Lectura: El gorro perdido',
        theory: 'Una mañana de viento, el gnomo Jacinto salió a buscar setas y extravió su gorro colorado. Cerca de un roque encontró un hilo rojo. Siguió la pista hasta un árbol. Allí, una ardilla usaba el gorro como manta para sus crías. Jacinto le ofreció su bufanda a cambio y la ardilla se la llevó al nido. El gnomo volvió a casa con su gorro.',
        exercises: [
            { type: 'choice', q: '¿Qué encontró Jacinto cerca del roque?', items: [{ t: 'Respuesta', options: ['Una seta', 'Un hilo rojo', 'Una bufanda'], a: 'Un hilo rojo' }] },
            { type: 'choice', q: '¿Cómo usaba la ardilla el gorro?', items: [{ t: 'Respuesta', options: ['Como manta para sus crías', 'Como sombrero', 'Como mochila'], a: 'Como manta para sus crías' }] },
            { type: 'text', q: 'Busca en el texto un sinónimo de «extravió» y un antónimo de «cerca».', items: [{ t: 'sinónimo de extravió', a: ['perdió'] }, { t: 'antónimo de cerca', a: ['lejos'] }] },
            { type: 'open', q: 'Describe el bosque donde vive Jacinto e inventa otro final para la historia.', model: 'Respuesta libre.' }
        ]
    },
    {
        id: 'ex', icon: '🏁', title: 'Mini examen final',
        theory: 'Demuestra todo lo que has aprendido. ¡Mucha suerte, detective!',
        exercises: [
            { type: 'text', q: '1. Escribe un sinónimo y un antónimo de «veloz».', items: [{ t: 'sinónimo', a: ['rapido', 'rápido', 'ligero'] }, { t: 'antónimo', a: ['lento'] }] },
            { type: 'text', q: '2. Escribe la palabra completa.', items: [
                { t: 'peren_én', a: ['perenquén'] }, { t: 'agua_ate', a: ['aguacate'] }, { t: 'ho_era', a: ['hoguera'] },
                { t: 'ver_enza', a: ['vergüenza'], strict: true }, { t: 'abri_o', a: ['abrigo'] }] },
            { type: 'order', q: '3. Ordena la oración.', words: ['en', 'El', 'el', 'juega', 'jardín', 'cachorro'], answer: 'El cachorro juega en el jardín.' },
            { type: 'split', q: '3b. Toca la última palabra del sujeto.', words: ['El', 'cachorro', 'juega', 'en', 'el', 'jardín.'], at: 1 },
            { type: 'choice', q: '4. ¿Qué tipo de comunicación es?', items: [
                { t: 'Una nota', options: ['lenguaje escrito', 'sonido', 'gesto', 'señal visual'], a: 'lenguaje escrito' }, { t: 'Un pitido', options: ['lenguaje escrito', 'sonido', 'gesto', 'señal visual'], a: 'sonido' },
                { t: 'Un guiño', options: ['lenguaje escrito', 'sonido', 'gesto', 'señal visual'], a: 'gesto' }, { t: 'Un semáforo', options: ['lenguaje escrito', 'sonido', 'gesto', 'señal visual'], a: 'señal visual' }] },
            { type: 'choice', q: '5. Un triángulo con borde rojo indica…', items: [{ t: 'Respuesta', options: ['Prohibición', 'Peligro', 'Obligación'], a: 'Peligro' }] },
            { type: 'dictation', q: 'Dictado A (sonido K). Pide a un adulto que lo lea y escríbelo en tu cuaderno.', text: 'Quique cruzó el parque con una cometa. Cerca del quiosco, vio un caracol que subía por un roque.' },
            { type: 'dictation', q: 'Dictado B (G suave). Pide a un adulto que lo lea y escríbelo en tu cuaderno.', text: 'Guillermo llevó su guitarra a la laguna. Una cigüeña voló sobre un juguete con forma de pingüino.' }
        ]
    }
];

const lenguaState = { current: null, progress: {} };

function lenguaNorm(s, strict) {
    let r = s.toLowerCase().trim().replace(/[.!?¡¿]+$/g, '').replace(/\s+/g, ' ');
    if (!strict) r = r.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return r;
}

function lenguaUser() {
    return localStorage.getItem('germanLearningCurrentUser') || 'default';
}

function lenguaLoad() {
    try {
        lenguaState.progress = JSON.parse(localStorage.getItem(LENGUA_STORAGE + lenguaUser())) || {};
    } catch (e) {
        lenguaState.progress = {};
    }
}

function lenguaSave() {
    localStorage.setItem(LENGUA_STORAGE + lenguaUser(), JSON.stringify(lenguaState.progress));
}

function lEl(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
}

function lenguaShuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function lenguaGradable(ex) {
    return ex.type !== 'open' && ex.type !== 'dictation';
}

function lenguaPercent(p) {
    const done = lenguaState.progress[p.id] || {};
    const total = p.exercises.filter(lenguaGradable).length;
    const ok = p.exercises.filter((ex, i) => lenguaGradable(ex) && done[i]).length;
    return total ? Math.round((ok / total) * 100) : 0;
}

function renderLenguaMenu() {
    const root = document.getElementById('lengua-root');
    lenguaState.current = null;
    root.innerHTML = '';
    const grid = lEl('div', 'lengua-menu');
    LENGUA_PISTAS.forEach((p, i) => {
        const pct = lenguaPercent(p);
        const card = lEl('button', 'lengua-card' + (pct === 100 ? ' done' : ''));
        card.innerHTML = `<span class="lengua-card-icon">${p.icon}</span>
            <span class="lengua-card-title">${p.id === 'ex' ? 'Examen' : 'Pista ' + (i + 1)}</span>
            <span class="lengua-card-sub">${p.title}</span>
            <span class="lengua-bar"><span style="width:${pct}%"></span></span>
            <span class="lengua-card-pct">${pct === 100 ? '⭐ ¡Completada!' : pct + '%'}</span>`;
        card.addEventListener('click', () => renderPista(p));
        grid.appendChild(card);
    });
    root.appendChild(grid);
    const reset = lEl('button', 'lengua-reset', '🗑️ Reiniciar progreso de Español');
    reset.addEventListener('click', () => {
        if (!confirm('¿Seguro que quieres borrar el progreso de Español de este usuario?')) return;
        lenguaState.progress = {};
        localStorage.removeItem(LENGUA_STORAGE + lenguaUser());
        renderLenguaMenu();
    });
    root.appendChild(reset);
}

function renderPista(p) {
    lenguaState.current = p.id;
    const root = document.getElementById('lengua-root');
    root.innerHTML = '';
    const back = lEl('button', 'lengua-back', '⬅ Volver a las pistas');
    back.addEventListener('click', renderLenguaMenu);
    root.appendChild(back);
    root.appendChild(lEl('h3', 'lengua-title', `${p.icon} ${p.title}`));
    root.appendChild(lEl('div', 'lengua-theory', p.theory));
    p.exercises.forEach((ex, i) => root.appendChild(renderExercise(p, ex, i)));
}

function lenguaRecord(p, i, ok) {
    const done = lenguaState.progress[p.id] || (lenguaState.progress[p.id] = {});
    done[i] = ok || !!done[i];
    lenguaSave();
}

function renderExercise(p, ex, idx) {
    const card = lEl('div', 'lengua-ex');
    card.appendChild(lEl('p', 'lengua-q', ex.q));
    const fb = lEl('div', 'lengua-feedback');
    let check = null;

    if (ex.type === 'pick') {
        const sel = new Set();
        const box = lEl('div', 'lengua-options');
        ex.options.forEach(o => {
            const b = lEl('button', 'lengua-opt', o);
            b.addEventListener('click', () => {
                if (sel.has(o)) sel.delete(o); else sel.add(o);
                b.classList.toggle('selected');
            });
            box.appendChild(b);
        });
        card.appendChild(box);
        check = () => sel.size === ex.answer.length && ex.answer.every(a => sel.has(a));
    } else if (ex.type === 'choice') {
        const rows = ex.items.map(it => {
            const row = lEl('div', 'lengua-row');
            const label = lEl('span', 'lengua-label', it.t);
            row.appendChild(label);
            const row_state = { value: null, row, label, it };
            it.options.forEach(o => {
                const b = lEl('button', 'lengua-opt', o);
                b.addEventListener('click', () => {
                    row.querySelectorAll('.lengua-opt').forEach(x => x.classList.remove('selected'));
                    b.classList.add('selected');
                    row_state.value = o;
                    row.classList.remove('ok', 'bad');
                });
                row.appendChild(b);
            });
            card.appendChild(row);
            return row_state;
        });
        check = () => {
            let all = true;
            rows.forEach(r => {
                const ok = r.value === r.it.a;
                r.row.classList.toggle('ok', ok);
                r.row.classList.toggle('bad', !ok);
                if (ok && r.it.full) r.label.textContent = r.it.full;
                if (!ok) all = false;
            });
            return all;
        };
    } else if (ex.type === 'text') {
        const rows = ex.items.map(it => {
            const row = lEl('div', 'lengua-row');
            row.appendChild(lEl('span', 'lengua-label', it.t));
            const input = lEl('input', 'lengua-input');
            input.type = 'text';
            input.autocomplete = 'off';
            input.setAttribute('aria-label', it.t);
            row.appendChild(input);
            card.appendChild(row);
            return { row, input, it };
        });
        check = () => {
            let all = true;
            rows.forEach(r => {
                const v = lenguaNorm(r.input.value, r.it.strict);
                const ok = r.it.a.some(a => lenguaNorm(a, r.it.strict) === v);
                r.row.classList.toggle('ok', ok);
                r.row.classList.toggle('bad', !ok);
                if (!ok) all = false;
            });
            return all;
        };
    } else if (ex.type === 'order') {
        const out = lEl('div', 'lengua-built');
        const pool = lEl('div', 'lengua-options');
        const chosen = [];
        lenguaShuffle(ex.words).forEach(w => {
            const b = lEl('button', 'lengua-opt', w);
            b.addEventListener('click', () => {
                if (b.disabled) return;
                b.disabled = true;
                chosen.push(w);
                out.textContent = chosen.join(' ');
            });
            pool.appendChild(b);
        });
        const reset = lEl('button', 'lengua-link', '↺ Empezar de nuevo');
        reset.addEventListener('click', () => {
            chosen.length = 0;
            out.textContent = '';
            pool.querySelectorAll('button').forEach(b => { b.disabled = false; });
        });
        card.append(pool, out, reset);
        const norm = s => lenguaNorm(s, true).replace(/^./, c => c.toLowerCase());
        check = () => norm(chosen.join(' ')) === norm(ex.answer);
    } else if (ex.type === 'split') {
        let pick = null;
        const box = lEl('div', 'lengua-options');
        ex.words.forEach((w, i) => {
            const b = lEl('button', 'lengua-opt', w);
            b.addEventListener('click', () => {
                pick = i;
                box.querySelectorAll('.lengua-opt').forEach((x, j) => {
                    x.classList.toggle('subject', j <= i);
                    x.classList.toggle('predicate', j > i);
                });
            });
            box.appendChild(b);
        });
        card.appendChild(box);
        card.appendChild(lEl('p', 'lengua-hint', '🟦 Sujeto · 🟧 Predicado'));
        check = () => pick === ex.at;
    } else if (ex.type === 'open' || ex.type === 'dictation') {
        const ta = lEl('textarea', 'lengua-textarea');
        ta.rows = ex.type === 'dictation' ? 3 : 2;
        ta.placeholder = 'Escribe aquí…';
        const btn = lEl('button', 'lengua-check', ex.type === 'dictation' ? '👀 Ver texto para corregir' : '👀 Ver ejemplo');
        const model = lEl('div', 'lengua-model');
        model.style.display = 'none';
        model.textContent = ex.type === 'dictation' ? ex.text : ex.model;
        btn.addEventListener('click', () => { model.style.display = ''; });
        card.append(ta, btn, model);
        return card;
    }

    const btn = lEl('button', 'lengua-check', '✅ Comprobar');
    btn.addEventListener('click', () => {
        const ok = check();
        fb.className = 'lengua-feedback ' + (ok ? 'ok' : 'bad');
        fb.textContent = ok ? '🎉 ¡Muy bien!' : '🤔 Revisa las respuestas y vuelve a intentarlo.';
        lenguaRecord(p, idx, ok);
    });
    card.append(btn, fb);
    return card;
}

function initLengua() {
    lenguaLoad();
    renderLenguaMenu();
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('[data-tab="lengua"]').addEventListener('click', initLengua);
});
