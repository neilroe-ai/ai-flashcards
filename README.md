# AI Engineering Flashcards

Spaced-repetition deck built from Neil's daily AI engineering lessons.

- `index.html` — the app. Open locally, or via GitHub Pages on a phone.
- `cards.js` — the deck. The daily lesson task appends new cards here.

## How the scheduling works

Leitner boxes 1–5, stored in the browser's `localStorage`.

- **Got it** → the card moves up a box and is drawn less often.
- **Missed it** → straight back to box 1.
- Draw weights: box 1 is **16×** more likely than box 5 (16 / 8 / 4 / 2 / 1).

Progress is per-browser and does not sync between devices. That's deliberate — phone and desktop keep separate streaks.

## Editing the deck

Never renumber or reword an existing card `id`. Progress is keyed to it, so
changing an id silently resets that card's history. Append only.

```js
{ id: "WW-TT-nn", week: 1, tag: "Status codes", term: "Front",
  back: "Back, one or two sentences." },
```

After editing, check it parses: `node --check cards.js`. A syntax error here
breaks the whole app with a blank screen.
