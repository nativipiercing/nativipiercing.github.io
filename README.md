# Nativi — Piercing & Gioielli

Sito a pagina singola per **Nativi Piercing & Gioielli** (Milano), pensato per essere pubblicato su GitHub Pages. Contiene link a Instagram, TikTok e alla pagina recensioni Google.

## Struttura

```
nativi-site/
├── index.html
├── style.css
├── script.js
└── assets/
    └── logo.png
```

Nessuna build, nessuna dipendenza da installare: sono solo HTML, CSS e JS puri.

## Pubblicare su GitHub Pages

1. Crea un nuovo repository su GitHub (es. `nativi-sito`).
2. Carica tutti i file di questa cartella (`index.html`, `style.css`, `script.js`, la cartella `assets/`) nella root del repository.
3. Vai su **Settings → Pages** del repository.
4. In **Source**, seleziona il branch `main` e la cartella `/root`, poi salva.
5. Dopo qualche minuto il sito sarà online su:
   `https://<tuo-username>.github.io/<nome-repository>/`

## Aggiungere, modificare o rimuovere i link

La pagina funziona come un Linktree: la lista dei bottoni è generata da un array in `script.js` (all'inizio del file, `const LINKS = [...]`). Per ogni link puoi impostare:

- `label` — il titolo del bottone (es. "Instagram")
- `meta` — la riga piccola sotto (es. "@piercing.nativi")
- `url` — il link di destinazione
- `icon` — l'icona SVG (puoi lasciare quelle già presenti o sostituirle)
- `highlight: true` — opzionale, colora il bottone in oro invece che nero (usato per la recensione)

Per aggiungere un nuovo link, copia uno degli oggetti nell'array e cambia i valori. L'ordine nell'array è l'ordine in cui compaiono sulla pagina.

## Personalizzare i colori

I colori del brand sono definiti come variabili in cima a `style.css` (sezione `:root`): basta cambiare i valori esadecimali di `--gold`, `--black`, ecc. per aggiornare l'intero sito.
