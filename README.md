# خمس دقائق في التميز الوطني
### Five Minutes in National Excellence

An interactive school initiative for secondary-school students in the Kingdom of Bahrain.
Students register (name, grade, school), pick a character, and light up as many numbered circles as they can in five minutes by solving questions taken from the Grade 12 National Examination (Mathematical Skills 2026). Each correct answer plays a sound, shows a celebration effect, and earns points.

برنامج تفاعلي لطلاب المرحلة الثانوية في مملكة البحرين: تسجيل الاسم والصف والمدرسة، واختيار شخصية، وحل أسئلة من الامتحانات الوطنية داخل دوائر تضيء عند الإجابة الصحيحة، مع موسيقى هادئة وأصوات ونقاط وعبارات تحفيزية.

## Features

- Registration with name, grade and school, plus a boy or girl character
- 15 questions shown as circles on a map, with a five-minute challenge timer
- Model answer after each question and a motivational phrase
- Points: 10 for a correct first try, 5 for a correct second try
- Calm background music and answer sounds (generated in the browser, no audio files)
- Sound toggle in the top bar
- Celebration effect (star burst and confetti) on every correct answer
- Leaderboard saved on the device (browser localStorage)
- Light and dark themes, works on phones

## Files

```
index.html   the page structure (registration, circles, question panel, result)
style.css    all styles and colors
script.js    the questions, scoring, timer, sounds and effects
README.md    this file
```

`index.html` loads the other two files with:

```html
<link rel="stylesheet" href="style.css">
<script src="script.js"></script>
```

Keep the three files in the same folder.

## Publish with GitHub Pages

1. Create a **public** repository on github.com.
2. Upload `index.html`, `style.css`, `script.js` and `README.md` to the repository root (**Add file → Upload files → Commit changes**).
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
5. After one to three minutes, the public link appears at the top of the Pages screen:
   `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`

To change something later, edit the file on GitHub and commit. The site updates by itself.

## Edit the questions

Open `script.js` and find the `QUESTIONS` list at the top. Each question has this shape:

```js
{ n: 5, topic: 'النمو السنوي',
  pre: ['Question text...'],
  tables: [],
  post: [],
  ask: 'The question itself?',
  options: ['Option A', 'Option B', 'Option C', 'Option D'],
  answer: 3,            // index of the right option: 0 = A, 1 = B, 2 = C, 3 = D
  explain: 'Model answer shown after the student answers.' }
```

Text inside double braces, like `{{BD 25}}`, is shown left to right so numbers and amounts keep their order inside Arabic sentences.
The map shows one circle per question, so adding or removing questions changes the number of circles automatically.

## Change colors, uniforms and sounds

- Colors: the variables at the top of `style.css` (`--brand`, `--gold`, `--red`, and so on).
- Character uniforms: the `<g id="av-girl">` and `<g id="av-boy">` drawings in `index.html`. The uniform colors are the `fill` values (`#1F3B6E` for the pinafore and tie, `#5F6B7A` for the trousers).
- Timer length and points: `TOTAL_SECONDS` and `POINTS` in `script.js`.

## Notes

- Questions are from the Education & Training Quality Authority (Kingdom of Bahrain), Grade 12 National Examinations, Mathematical Skills 2026, with answers from the published mark scheme.
- The leaderboard is stored only in the browser on each device. It does not collect or send student data anywhere.
- Fonts (Reem Kufi and IBM Plex Sans Arabic) load from Google Fonts, so an internet connection is needed on first load.
