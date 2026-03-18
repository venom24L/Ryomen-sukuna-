# 👑 RYOMEN SUKUNA — King of Curses
### Immersive Landing Page · 両面宿儺

> *"In this world, the strong devour the weak. That is the law. I am simply its proof."*

---

## 📁 Project Structure

```
sukuna.html        ← Single-file app (HTML + CSS + JS)
README.md          ← This file
```

---

## 🔥 Sections

| # | ID | Title | Description |
|---|-----|-------|-------------|
| 01 | `#awakening` | The Awakening | Hero screen with RYOMEN SUKUNA title, fire flicker, glitch effects |
| 02 | `#techniques` | Cursed Techniques | Split-row layout — Cleave / Dismantle / Fuga with stat bars |
| 03 | `#carnage` | Historical Carnage | 6 battle panels with images, context, verdicts, CE bars |
| 04 | `#shrine` | Malevolent Shrine | Manga panel split layout — domain info + quote |
| 05 | `#voicelines` | Voice Lines | Auto-advancing carousel of 6 iconic Sukuna quotes |
| 06 | `#fallen` | The Fallen | Interactive graveyard — Gojo / Jogo / Megumi with crack-on-click |
| 07 | `#stats` | Special Grade Stats | Comparison table — Sukuna vs Gojo / Yuta / Jogo / Mahoraga |
| 08 | `#fingers` | 20 Fingers | Flash gamification system — find & consume all 20 cursed fingers |

---

## 🎮 20 Fingers Game

A hidden gamification layer spread across the entire site.

**How it works:**
- A `☠` icon flashes for **2.5 seconds** at a random position inside each section
- Tap/click it before it disappears to consume the finger
- It reappears after **5–14 seconds** in a new random position if missed
- **Fingers #2, #3, #4** — triggered by hovering/clicking the Technique images (Cleave / Dismantle / Fuga)
- Press **USE HINT** to reveal which section contains the next finger

**When all 20 are consumed:**
A full-screen **Domain Expansion sequence** triggers:
1. Slash lines tear the screen
2. Screen floods dark red
3. `悪霊廟 · MALEVOLENT SHRINE` appears with staggered lines
4. Sukuna's message reveals
5. **LEAVE THE DOMAIN** button exits back to the page

---

## ⚙️ Technical Features

### Visuals
- Custom red spark **cursor** with trailing particles
- **Blood drip** animation on navbar
- **Scroll progress bar** (left side, red glow)
- Glitch / fireFlicker / shakeViolent CSS animations
- Noise grain overlay via SVG filter
- Sharp cut **page transition** (clip-path wipe)

### Navigation
- **Side nav rail** (160px, desktop) — 8 sections with numbers + labels
- **3-dot toggle button** (mobile) — slides in from left
- **Scroll spy** — active dot updates as user scrolls
- **Keyboard nav** — Arrow Up/Down between sections

### Interactivity
- Technique cards fire **slash screen effect** on hover
- Graveyard cards **crack and bleed** on click
- Voice Lines **auto-advance** every 6 seconds with manual controls
- Stats bars **animate on scroll entry**
- Domain Expansion overlay with **vibration API** on mobile

### Performance
- Parallax disabled on touch devices
- Blood drips disabled on mobile
- Glitch animations disabled on touch
- All scroll listeners use `{ passive: true }`

---

## 🖼️ Images Used

| Section | Subject | URL |
|---------|---------|-----|
| Awakening BG | Sukuna dark art | postimg.cc/hjhnvSMd |
| Technique — Cleave | Manga panel | postimg.cc/nhgc6Sxf |
| Technique — Dismantle | Manga panel | postimg.cc/Kv9Y5vs2 |
| Technique — Fuga | Anime screenshot | postimg.cc/8z9PqXGG |
| Battle 001 | vs Gojo | postimg.cc/2yZPLGJH |
| Battle 002 | vs Mahoraga | postimg.cc/G3T0f3pW |
| Battle 003 | vs Jogo | postimg.cc/cHjpJ2Dg |
| Battle 004 | vs Kashimo | postimg.cc/MpP974BV |
| Battle 005 | vs Yorozu | postimg.cc/VvCxpwjH |
| Battle 006 | vs Yuji & Maki | postimg.cc/sfTFS8xc |
| Shrine | Manga panel | postimg.cc/pXRzpT3G |
| Grave — Gojo | Portrait | postimg.cc/4N9n5TVR |
| Grave — Jogo | Portrait | postimg.cc/3JvWBHmM |
| Grave — Megumi | Portrait | postimg.cc/9XSrZf48 |
| Secret Unlock | Sukuna with flower | postimg.cc/rFfjTxz1 |

---

## 🎨 Design System

```css
--black:   #050505   /* Background */
--deep:    #0a0000   /* Section bg */
--crimson: #8b0000   /* Primary red */
--blood:   #c0000a   /* Hover red */
--bone:    #d4c9b0   /* Text color */
--ash:     #1a1a1a   /* Card bg */
--scar:    #3d0000   /* Border color */
--glow:    #ff1a1a   /* Active/glow */
```

**Fonts:**
- `Cinzel Decorative` — titles & headings
- `Noto Serif JP` — Japanese text
- `IM Fell English` — body / italic quotes
- `Share Tech Mono` — labels / stats / UI

---

## 📱 Browser Support

| Browser | Status |
|---------|--------|
| Chrome Android | ✅ Full support |
| Safari iOS | ✅ Full support |
| Chrome Desktop | ✅ Full support |
| Firefox | ✅ Full support |
| Samsung Internet | ✅ Full support |

---

## ⚠️ Notes

- All content is fan-made. Jujutsu Kaisen belongs to **Gege Akutami & Shueisha**.
- Single `.html` file — no dependencies, no build step, no frameworks.
