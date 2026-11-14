(() => {
  'use strict';
  function shuffled(items) {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  // 表示した問題だけを出題済みにする。
  window.QuizDeck = class QuizDeck {
    constructor(questions, storage = null) {
      this.questions = new Map(questions.map(question => [question.id, question]));
      this.catalog = [...this.questions.keys()].sort();
      this.storage = storage;
      this.key = 'four-words-deck-v1';
      this.remaining = [];
      try {
        const saved = JSON.parse(storage?.getItem(this.key) || 'null');
        if (saved && Array.isArray(saved.catalog) && saved.catalog.length &&
            saved.catalog.every(id => typeof id === 'string') &&
            new Set(saved.catalog).size === saved.catalog.length &&
            Array.isArray(saved.remaining) && new Set(saved.remaining).size === saved.remaining.length &&
            saved.remaining.every(id => saved.catalog.includes(id))) {
          // 問題集の更新でも、既に見た問題は一巡が終わるまで戻さない。
          const added = this.catalog.filter(id => !saved.catalog.includes(id));
          this.remaining = saved.remaining.filter(id => this.questions.has(id));
          for (const id of added) {
            const index = Math.floor(Math.random() * (this.remaining.length + 1));
            this.remaining.splice(index, 0, id);
          }
        }
      } catch { /* 保存が無効でも、このページ内では履歴を保つ。 */ }
    }
    planRound(count) {
      const planned = [];
      const answerCounts = new Map();
      const current = this.remaining.length ? this.remaining : this.catalog;
      // 周回をまたぐときは、現在の周回の問題をすべて先に出す。
      for (const pool of [current, this.catalog]) {
        const byAnswer = new Map();
        for (const id of shuffled(pool)) {
          if (planned.includes(id)) continue;
          const answer = this.questions.get(id).answer;
          if (!byAnswer.has(answer)) byAnswer.set(answer, []);
          byAnswer.get(answer).push(id);
        }
        const groups = [...byAnswer];
        const segment = [];
        while (groups.length && planned.length + segment.length < count) {
          // 同数なら在庫が多い答えを使い、少ない答えを後の回にも残す。
          groups.sort(([answerA, idsA], [answerB, idsB]) =>
            (answerCounts.get(answerA) ?? 0) - (answerCounts.get(answerB) ?? 0) || idsB.length - idsA.length);
          const [answer, ids] = groups[0];
          segment.push(ids.pop());
          answerCounts.set(answer, (answerCounts.get(answer) ?? 0) + 1);
          if (!ids.length) groups.shift();
        }
        planned.push(...shuffled(segment));
        if (planned.length === count) break;
      }
      return planned;
    }

    next(excluded = [], plannedId = null) {
      if (!this.remaining.length) this.remaining = shuffled(this.catalog);
      // 全問消化がラウンド途中でも、同じ10問の中には重複させない。
      const preferred = excluded.includes(plannedId) ? -1 : this.remaining.indexOf(plannedId);
      const index = preferred >= 0 ? preferred : this.remaining.findIndex(id => !excluded.includes(id));
      if (index < 0) throw new Error('出題できる問題がありません。');
      const [id] = this.remaining.splice(index, 1);
      try { this.storage?.setItem(this.key, JSON.stringify({ catalog: this.catalog, remaining: this.remaining })); }
      catch { /* 保存できない場合もプレイを継続する。 */ }
      return this.questions.get(id);
    }
  };
})();
