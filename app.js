(() => {
  'use strict';
  const questions = window.QUIZ_QUESTIONS;
  const words = ['ウノウ', 'クノウ', 'カノウ', 'サノウ'];
  const colors = ['green', 'coral', 'purple', 'blue'];
  const $ = id => document.getElementById(id);
  const answerButtons = [...document.querySelectorAll('.answer')];
  const selectedCount = 10;
  let storage = null;
  try { storage = window.localStorage; } catch { /* 保存を許可しないブラウザにも対応。 */ }
  const deck = new window.QuizDeck(questions, storage);
  let phase = 'home';
  let round = [], roundPlan = [], index = 0, records = [], streak = 0, maxStreak = 0;
  let answered = false, soundEnabled = false, audioContext;
  const QUESTION_TIME_MS = 15000, CORRECT_FEEDBACK_MS = 2000, INCORRECT_FEEDBACK_MS = 3500;
  let timerDuration = QUESTION_TIME_MS;
  const timer = new window.QuizTimer({ onTick: remaining => {
    const ratio = Math.max(0, Math.min(1, remaining / timerDuration));
    $('timer-fill').style.transition = remaining === timerDuration ? 'none' : '';
    $('timer-fill').style.transform = `scaleX(${ratio})`;
    const seconds = Math.ceil(remaining / 100) / 10;
    $('timer').setAttribute('aria-valuenow', seconds);
    $('timer').setAttribute('aria-valuetext', `残り${seconds}秒`);
    $('timer').classList.toggle('urgent', !answered && remaining <= 5000);
  } });
  let bests = {};
  try { bests = JSON.parse(localStorage.getItem('four-words-best-v4') || '{}') || {}; } catch { /* 保存が無効でも遊べます。 */ }
  if (typeof bests !== 'object' || Array.isArray(bests)) bests = {};

  function switchScreen(screen) {
    timer.stop();
    clearVerdictEffect();
    ['home', 'game', 'result'].forEach(id => $(id).hidden = id !== screen);
    document.body.dataset.screen = screen;
    $('answer-dock').hidden = screen !== 'game';
    $('counter').hidden = screen !== 'game';
    $('quit').hidden = screen !== 'game';
    $('brand').hidden = screen !== 'result';
    phase = screen;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
  function updateBest() {
    const best = Number(bests[selectedCount]);
    $('best').hidden = !Number.isFinite(best);
    $('best').textContent = Number.isFinite(best) ? `最高 ${best} / ${selectedCount}` : '';
  }
  function syncTimer() {
    if (phase !== 'game') timer.stop();
    else if (document.hidden || document.querySelector('dialog[open]')) timer.pause();
    else timer.resume();
  }
  function startTimer(milliseconds, callback) {
    timerDuration = milliseconds;
    $('timer').setAttribute('aria-valuemax', milliseconds / 1000);
    timer.start(milliseconds, callback);
    syncTimer();
  }
  function openDialog(id) {
    $(id).showModal();
    syncTimer();
  }
  function clearVerdictEffect() {
    $('answer-effect').hidden = true;
    $('answer-effect').className = 'answer-effect';
  }
  function showVerdictEffect(correct) {
    $('answer-effect').className = `answer-effect ${correct ? 'is-correct' : 'is-incorrect'}`;
    $('answer-effect').hidden = false;
  }
  function resetAnswers(enabled) {
    answerButtons.forEach((button, i) => {
      button.className = `answer ${colors[i]}`;
      button.disabled = !enabled;
      button.removeAttribute('aria-label');
      button.querySelector('.answer-mark').textContent = '';
    });
  }
  function showHome() {
    switchScreen('home');
    resetAnswers(false);
    updateBest();
  }
  function startGame() {
    roundPlan = deck.planRound(selectedCount);
    round = Array(selectedCount).fill(null);
    index = 0; records = []; streak = 0; maxStreak = 0;
    switchScreen('game');
    renderQuestion();
  }
  function renderVisual(visual) {
    const el = document.createElement('div');
    el.className = 'visual';
    if (!visual) { el.hidden = true; return el; }
    const content = document.createElement('div');
    if (visual.type === 'brain') {
      const ns = 'http://www.w3.org/2000/svg';
      const svg = document.createElementNS(ns, 'svg');
      svg.setAttribute('viewBox', '0 0 320 220'); svg.classList.add('brain-diagram');
      svg.setAttribute('role', 'img'); svg.setAttribute('aria-label', `本人の${visual.side}側の大脳半球が色付き。${visual.note}`);
      const screenSides = visual.view === 'back' ? ['左', '右'] : ['右', '左'];
      screenSides.forEach((side, j) => {
        const group = document.createElementNS(ns, 'g');
        if (j) group.setAttribute('transform', 'translate(320 0) scale(-1 1)');
        const shape = document.createElementNS(ns, 'path');
        shape.setAttribute('d', 'M155 24C133 9 105 10 93 26C65 5 44 50 48 69C19 86 29 112 49 122C40 144 62 165 84 162C105 187 140 176 155 158Z');
        shape.setAttribute('fill', side === visual.side ? '#dbf88b' : '#d8dbcf');
        shape.setAttribute('stroke', '#25292b'); shape.setAttribute('stroke-width', '2'); group.append(shape);
        const folds = document.createElementNS(ns, 'path');
        folds.setAttribute('d', 'M92 27Q110 40 99 58M50 69Q78 58 88 81M70 110Q91 95 109 110M85 162Q78 142 96 133M132 50Q113 70 128 89M144 135Q117 130 116 151');
        folds.setAttribute('fill', 'none'); folds.setAttribute('stroke', '#25292b'); folds.setAttribute('stroke-width', '1.5'); group.append(folds); svg.append(group);
        const label = document.createElementNS(ns, 'text');
        label.setAttribute('x', j ? '235' : '85'); label.setAttribute('y', '207'); label.setAttribute('text-anchor', 'middle');
        label.textContent = visual.view === 'axial' ? (side === '右' ? 'R（本人の右）' : 'L（本人の左）') : `本人の${side}`;
        svg.append(label);
      });
      content.append(svg);
    }
    el.append(content);
    if (visual.note) {
      const note = document.createElement('div'); note.className = 'visual-note'; note.textContent = visual.note; el.append(note);
    }
    return el;
  }
  function renderQuestion() {
    timer.stop();
    clearVerdictEffect();
    const q = round[index] ||= deck.next(round.filter(Boolean).map(question => question.id), roundPlan[index]);
    answered = false;
    $('counter').replaceChildren();
    $('counter').append(document.createTextNode(`${index + 1} `));
    const denominator = document.createElement('small'); denominator.textContent = `/ ${round.length}`; $('counter').append(denominator);
    $('timer').classList.remove('explanation-time');
    $('timer').setAttribute('aria-label', '回答の残り時間');
    $('question').textContent = q.prompt;
    const visual = renderVisual(q.visual); visual.id = 'visual'; $('visual').replaceWith(visual);
    $('feedback').hidden = true;
    resetAnswers(true);
    window.scrollTo({ top: 0, behavior: 'instant' });
    $('question').focus({ preventScroll: true });
    startTimer(QUESTION_TIME_MS, () => choose(null));
  }
  function playTone(correct) {
    if (!soundEnabled) return;
    try {
      audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
      audioContext.resume();
      const now = audioContext.currentTime;
      const tones = correct ? [660, 880] : [260, 190];
      tones.forEach((frequency, j) => {
        const osc = audioContext.createOscillator(), gain = audioContext.createGain();
        osc.type = 'sine'; osc.frequency.value = frequency;
        gain.gain.setValueAtTime(0, now + j * .1);
        gain.gain.linearRampToValueAtTime(.075, now + j * .1 + .015);
        gain.gain.exponentialRampToValueAtTime(.001, now + j * .1 + .2);
        osc.connect(gain); gain.connect(audioContext.destination);
        osc.start(now + j * .1); osc.stop(now + j * .1 + .21);
      });
    } catch { /* 効果音非対応のブラウザでもゲームは継続。 */ }
  }
  function choose(word) {
    if (phase !== 'game' || answered || document.querySelector('dialog[open]')) return;
    // 締切とクリックが同時になっても、期限後の回答を正解にしない。
    if (word !== null && timer.running && timer.now() >= timer.deadline) word = null;
    timer.stop();
    const timedOut = word === null;
    const q = round[index], correct = word === q.answer;
    answered = true;
    streak = correct ? streak + 1 : 0;
    maxStreak = Math.max(maxStreak, streak);
    records.push({ question: q, chosen: word, correct, timedOut });
    answerButtons.forEach(button => {
      button.disabled = true;
      const value = button.dataset.answer;
      const mark = button.querySelector('.answer-mark');
      if (value === q.answer) {
        button.classList.add('correct'); mark.textContent = '○'; button.setAttribute('aria-label', `${value}、正解`);
      } else if (value === word) {
        button.classList.add('wrong'); mark.textContent = '×'; button.setAttribute('aria-label', `${value}、選んだ答え、不正解`);
      } else button.classList.add('dim');
    });
    $('verdict').textContent = timedOut ? '時間切れ' : correct ? '正解' : '不正解';
    $('verdict-mark').textContent = correct ? '○' : '×';
    $('correct-answer').textContent = q.answer;
    $('explanation').textContent = q.explanation;
    $('feedback').classList.toggle('incorrect', !correct);
    $('feedback').hidden = false;
    showVerdictEffect(correct);
    const source = window.QUIZ_SOURCES[q.source];
    $('source').hidden = !source;
    if (source) { $('source').textContent = '出典'; $('source').setAttribute('aria-label', `出典：${source.title}`); $('source').href = source.url; }
    $('timer').classList.add('explanation-time');
    $('timer').setAttribute('aria-label', '解説の残り時間');
    startTimer(correct ? CORRECT_FEEDBACK_MS : INCORRECT_FEEDBACK_MS, nextQuestion);
    playTone(correct);
    $('feedback').focus({ preventScroll: true });
    // 固定選択肢に隠れた解説まで、本文側をスクロールできる。
    const bottom = $('feedback').getBoundingClientRect().bottom;
    const dockTop = document.querySelector('.answer-dock').getBoundingClientRect().top;
    if (bottom > dockTop - 18) window.scrollBy({ top: bottom - dockTop + 28, behavior: 'smooth' });
  }
  function nextQuestion() {
    if (phase !== 'game' || !answered || document.querySelector('dialog[open]')) return;
    if (index + 1 === round.length) finishGame();
    else { index++; renderQuestion(); }
  }
  function finishGame() {
    switchScreen('result');
    resetAnswers(false);
    const score = records.filter(r => r.correct).length, total = records.length;
    const accuracy = total ? Math.round(score / total * 100) : 0;
    $('result-score').textContent = score;
    $('result-total').textContent = `/ ${total}`;
    $('accuracy').textContent = `${accuracy}%`;
    $('max-streak').textContent = `${maxStreak}問`;
    $('answer-stats').replaceChildren();
    words.forEach((word, j) => {
      const entries = records.filter(r => r.question.answer === word);
      const chip = document.createElement('div'); chip.className = `stat-chip ${colors[j]}`;
      const label = document.createElement('span'); label.textContent = word;
      const stat = document.createElement('strong'); stat.textContent = `${entries.filter(r => r.correct).length}/${entries.length}`;
      chip.append(label, stat); $('answer-stats').append(chip);
    });
    $('history').open = false;
    $('history').hidden = !total;
    $('history-list').replaceChildren();
    records.forEach((record, j) => {
      const item = document.createElement('article'); item.className = 'history-item';
      const status = document.createElement('small'); status.textContent = `${j + 1}  ${record.timedOut ? '時間切れ' : record.correct ? '正解' : '不正解'}  /  ${record.question.category}`;
      const title = document.createElement('h3'); title.textContent = record.question.prompt;
      const answer = document.createElement('div'); answer.className = 'history-answer'; answer.textContent = `正解：${record.question.answer}${record.correct ? '' : ` ／ 回答：${record.timedOut ? '時間切れ' : record.chosen}`}`;
      const explanation = document.createElement('p'); explanation.textContent = record.question.explanation;
      item.append(status, title);
      if (record.question.visual) item.append(renderVisual(record.question.visual));
      item.append(answer, explanation); $('history-list').append(item);
    });
    if (total === selectedCount) {
      bests[selectedCount] = Math.max(Number(bests[selectedCount]) || 0, score);
      try { localStorage.setItem('four-words-best-v4', JSON.stringify(bests)); } catch { /* 保存しなくても継続。 */ }
    }
    $('retry').focus({ preventScroll: true });
  }
  answerButtons.forEach(button => button.addEventListener('click', () => choose(button.dataset.answer)));
  $('start').addEventListener('click', () => startGame());
  $('retry').addEventListener('click', () => startGame());
  $('home-button').addEventListener('click', showHome);
  $('brand').addEventListener('click', () => phase === 'game' ? openDialog('quit-dialog') : showHome());
  $('quit').addEventListener('click', () => openDialog('quit-dialog'));
  $('confirm-quit').addEventListener('click', () => { $('quit-dialog').close(); finishGame(); });
  $('help').addEventListener('click', () => openDialog('help-dialog'));
  document.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', () => $(button.dataset.close).close()));
  document.querySelectorAll('dialog').forEach(dialog => dialog.addEventListener('close', syncTimer));
  document.addEventListener('visibilitychange', syncTimer);
  window.addEventListener('pagehide', () => timer.pause());
  window.addEventListener('pageshow', syncTimer);
  $('sound').addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    $('sound').setAttribute('aria-pressed', soundEnabled);
    $('sound').setAttribute('aria-label', `効果音を${soundEnabled ? 'オフ' : 'オン'}にする`);
    $('sound').innerHTML = soundEnabled ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4V5ZM15 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/></svg>' : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4V5ZM16 9l5 6m0-6-5 6"/></svg>';
    if (soundEnabled) playTone(true);
  });
  document.addEventListener('keydown', event => {
    if (phase !== 'game' || event.repeat || event.ctrlKey || event.altKey || event.metaKey || document.querySelector('dialog[open]')) return;
    if (/^[1-4]$/.test(event.key)) { event.preventDefault(); choose(words[Number(event.key) - 1]); }
  });
  showHome();
})();
