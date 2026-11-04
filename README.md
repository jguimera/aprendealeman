# 🇩🇪 Der Die Das - Géneros de las Palabras en Alemán

Una aplicación web interactiva diseñada para ayudar a niños de 8 años a aprender los géneros de las palabras en alemán (der, die, das) de forma divertida y adaptativa.

## ✨ Características Principales

### 📚 Base de Datos Completa
- **300 palabras comunes** organizadas en categorías:
  - 🐾 Animales (50 palabras)
  - 👨‍👩‍👧‍👦 Familia y personas (30 palabras)
  - 🏠 Casa y objetos (50 palabras)
  - 🍎 Comida (40 palabras)
  - 👕 Ropa (25 palabras)
  - 🌳 Naturaleza y clima (30 palabras)
  - 🎨 Escuela y juguetes (35 palabras)
  - 🎨 Varios (40 palabras)

### 🎯 Sistema Adaptativo Inteligente
- **Selección inteligente de palabras**: El sistema prioriza palabras según el nivel de dominio:
  - Palabras nuevas o difíciles (más frecuentes)
  - Palabras en aprendizaje (frecuencia media)
  - Palabras casi dominadas (frecuencia baja)
  - Palabras dominadas (repaso ocasional)

- **Cálculo de maestría**: Cada palabra tiene un nivel de maestría (0-100%) que se calcula según:
  - Precisión de respuestas (70% del peso)
  - Bonus de consistencia (30% del peso)

Estados de palabras y progresión:
- **Nueva**: aún no has practicado la palabra
- **Aprendiendo**: has practicado; la maestría crece con cada acierto
- **Dominada**: alcanza ≥80% de maestría

### 📊 Seguimiento Completo del Progreso
- **Estadísticas de sesión en tiempo real**:
  - Contador de respuestas correctas
  - Total de preguntas respondidas
  - Porcentaje de precisión
  - Racha actual
  - Barra de progreso de sesión basada en tu precisión (0-100%)

- **Estadísticas globales**:
  - Total de palabras aprendidas (dominadas)
  - Respuestas correctas totales
  - Mejor racha alcanzada
  - Precisión global

- **Análisis por género**:
  - Precisión individual para der, die y das
  - Barras de progreso visuales

- **Registro de actividad**:
  - Últimas 50 respuestas con timestamp
  - Indica si fueron correctas o incorrectas
  - Muestra la palabra, género y traducción

### 🏆 Sistema de Logros
10 logros desbloqueables que motivan el aprendizaje:
- 🎯 **Primera Palabra**: Responde correctamente por primera vez
- 🔥 **Racha de 5**: 5 respuestas correctas seguidas
- ⚡ **Racha de 10**: 10 respuestas correctas seguidas
- 📚 **Aprendiz**: Domina 10 palabras
- 🎓 **Estudiante**: Domina 25 palabras
- 👨‍🎓 **Experto**: Domina 50 palabras
- 🏆 **Maestro**: Domina 100 palabras
- 💯 **Perfección**: 10 respuestas perfectas en una sesión
- 🌟 **Trilingüe**: Practica los 3 géneros

### 📖 Seguimiento de Vocabulario
- **Vista de todas las palabras** con filtros:
  - Todas las palabras
  - Palabras dominadas (≥80% maestría)
  - Palabras en aprendizaje (1-79% maestría)
  - Palabras nuevas (0% maestría)

- Cada palabra muestra:
  - Género (con color distintivo)
  - Traducción al español
  - Estadísticas (correctas/total)
  - Nivel de maestría

### 📖 Sección de Español (Lengua)
Pestaña "Español" basada en el cuaderno *El caso del gorro perdido*: 8 pistas (sinónimos y antónimos, ortografía K/G, la oración, comunicación, señales, carteles, presentación y lectura) más un mini examen. Ejercicios interactivos con corrección automática (elegir, completar, clasificar, ordenar, sujeto/predicado), actividades abiertas y dictados con texto de ayuda. El progreso por usuario se guarda en `localStorage`. Código en `lengua.js`.

### 🎨 Interfaz Amigable para Niños
- **Diseño colorido y moderno** con gradientes atractivos
- **Animaciones suaves** que hacen la experiencia más dinámica
- **Feedback visual inmediato**:
  - ✅ Verde para respuestas correctas
  - ❌ Rojo para respuestas incorrectas
  - Mensajes motivadores aleatorios
- **Colores distintivos por género**:
  - 🔵 Azul para "der" (masculino)
  - 🔴 Rosa para "die" (femenino)
  - 🟢 Verde para "das" (neutro)
- **Responsive**: Funciona perfectamente en tablets y móviles

### 💾 Persistencia de Datos
- Todo el progreso se guarda automáticamente en localStorage
- Los datos persisten entre sesiones
- No requiere conexión a internet después de la carga inicial
- No necesita registro ni cuenta

## 🚀 Cómo Usar

### Instalación
1. Abre el archivo `index.html` en cualquier navegador web moderno
2. Asegúrate de servir los archivos con un servidor local (para que `words.json` cargue):
   - Con Python: `python3 -m http.server 5500` y visita `http://localhost:5500`
   - Con VSCode Live Server o similar
3. ¡Ya está listo para usar!

### Práctica
1. Ve a la pestaña **🎯 Practicar** (activa por defecto)
2. Lee la palabra en alemán y su traducción al español
3. Selecciona el género correcto: der, die o das
4. Recibe feedback inmediato
5. Observa cómo tu racha y estadísticas mejoran
6. Atajos de teclado: 1 = der, 2 = die, 3 = das

### Ver Estadísticas
1. Haz clic en la pestaña **📊 Estadísticas**
2. Revisa tu rendimiento global y por género
3. Consulta tu actividad reciente

### Seguir Progreso
1. Haz clic en la pestaña **🏆 Progreso**
2. Ve tus logros desbloqueados
3. Filtra y revisa todas las palabras del catálogo
4. Identifica qué palabras necesitas practicar más

## 🎓 Consejos de Aprendizaje

1. **Practica regularmente**: 10-15 minutos diarios es mejor que sesiones largas esporádicas
2. **Mantén tu racha**: Intenta responder correctamente varias veces seguidas
3. **Revisa tus estadísticas**: Identifica qué género te cuesta más y enfócate en él
4. **Celebra los logros**: Desbloquear logros mantiene la motivación alta
5. **Palabras dominadas**: Una palabra se considera "dominada" al alcanzar 80% de maestría
6. Tras un error, hay un retraso de ~4s para revisar la respuesta correcta

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Diseño moderno con animaciones y gradientes
- **JavaScript ES6+**: Lógica de aplicación y algoritmo adaptativo
- **LocalStorage API**: Persistencia de datos sin backend

## 📱 Compatibilidad

- ✅ Chrome/Edge (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Opera
- ✅ Navegadores móviles (iOS/Android)

## 🎯 Características del Sistema Adaptativo

El algoritmo adaptativo es el corazón de la aplicación:

### Ponderación de Palabras
```javascript
Maestría < 30%  → Peso 5 (máxima prioridad)
Maestría 30-60% → Peso 3 (prioridad media)
Maestría 60-90% → Peso 2 (prioridad baja)
Maestría ≥ 90%  → Peso 1 (repaso ocasional)
```

### Cálculo de Maestría
```
Maestría = (Precisión × 70%) + (Bonus de Consistencia × 30%)
Bonus de Consistencia = min(Respuestas Correctas × 2, 30)
```

Esto asegura que:
- Las palabras nuevas aparecen con más frecuencia
- Las palabras difíciles se practican más
- Las palabras dominadas se repasan ocasionalmente
- El sistema se adapta continuamente al rendimiento del estudiante

## 👥 Multiusuario y ayuda

- Puedes crear y cambiar de usuario en la parte superior (selector de usuario)
- Cada usuario tiene su progreso independiente (guardado en localStorage)
- Botón “Reiniciar” para limpiar el historial del usuario actual
- Botón “❓ Ayuda” con explicación de reglas, estados y atajos

## 👨‍👩‍👧‍👦 Para Padres

Esta aplicación:
- ✅ No requiere conexión a internet (después de cargar)
- ✅ No recopila datos personales
- ✅ No tiene anuncios
- ✅ Es completamente gratuita
- ✅ Funciona offline
- ✅ Se adapta al ritmo de aprendizaje del niño
- ✅ Proporciona feedback positivo constante

## 📝 Notas

- Los datos se guardan localmente en el navegador
- Si se borra la caché del navegador, se perderá el progreso
- Para reiniciar el progreso, borra los datos del sitio en la configuración del navegador

## 🌟 Características Futuras Potenciales

- Exportar/importar progreso
- Modo de práctica cronometrado
- Sonidos y efectos de audio
- Más categorías temáticas
-练习模式：solo palabras difíciles
- Competencia entre múltiples usuarios
- Gráficos de progreso temporal

---

**¡Viel Erfolg beim Lernen!** (¡Mucho éxito aprendiendo!)

🎓 Desarrollado con ❤️ para facilitar el aprendizaje del alemán

