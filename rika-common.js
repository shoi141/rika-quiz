// ── 理科クイズ共通ユーティリティ ─────────────────────────

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomStars(n) {
  return Array.from({length:n}, () => ["⭐","🌟","✨"][randInt(0,2)]).join(" ");
}

// ── 日本語入力の正規化・採点 ──────────────────────────────
function normalizeJa(str) {
  return str
    .trim()
    .replace(/\s+/g, "")
    // カタカナ→ひらがな
    .replace(/[\u30A1-\u30F6]/g, c => String.fromCharCode(c.charCodeAt(0) - 0x60))
    // 全角英数→半角
    .replace(/[Ａ-Ｚａ-ｚ０-９]/g, c => String.fromCharCode(c.charCodeAt(0) - 0xFEE0))
    .toLowerCase();
}

function judgeInput(userInput, correctList) {
  const norm = normalizeJa(userInput);
  if (!norm) return false;
  return correctList.some(ans => normalizeJa(ans) === norm);
}

// ── 問題数の選択肢 ────────────────────────────────────────
const Q_OPTIONS = [5, 10, 15, 20];
