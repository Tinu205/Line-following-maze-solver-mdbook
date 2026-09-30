# Competition Timeline

<style>
.tl-wrap {
  --tl-fg: var(--fg, #e8e8ea);
  --tl-bg: var(--bg, #141414);
  --tl-muted: color-mix(in srgb, var(--tl-fg) 55%, transparent);
  --tl-line: color-mix(in srgb, var(--tl-fg) 22%, transparent);
  --tl-card: color-mix(in srgb, var(--tl-fg) 3%, var(--tl-bg));
  --tl-done: #8b9cff;
  --tl-live: #f2d64b;
  --tl-mono: "Source Code Pro", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  margin: 1.5rem 0 3rem;
}
/* darker accents on mdBook's light themes so text stays readable */
html.light .tl-wrap, html.rust .tl-wrap { --tl-done: #4353c9; --tl-live: #9a7300; }

.tl-head { text-align: center; margin-bottom: 2.5rem; }
.tl-head p { margin: 0; }
.tl-stage { color: var(--tl-live); font-weight: 700; font-size: .8em; letter-spacing: .06em; text-transform: uppercase; }
.tl-wrap .tl-title { margin: .1em 0 .25em; font-size: 1.6em; font-weight: 700; color: var(--tl-fg); }
.tl-range { font-family: var(--tl-mono); color: var(--tl-live); }
.tl-head .tl-intro { max-width: 30em; margin: 1em auto 0; line-height: 1.55; }

.tl { position: relative; }
.tl-row { position: relative; display: grid; grid-template-columns: 1fr 72px 1fr; align-items: start; }
.tl-row + .tl-row { margin-top: -4.5rem; }
.tl-row .tl-card, .tl-row .tl-node { grid-row: 1; }
.tl-row.left .tl-card { grid-column: 1; }
.tl-row.right .tl-card { grid-column: 3; }
.tl-row .tl-node { grid-column: 2; }

.tl-node {
  box-sizing: border-box; position: relative; z-index: 2;
  justify-self: center; margin-top: 12px; width: 40px; height: 40px;
  display: grid; place-items: center; border-radius: 50%;
  background: var(--tl-bg); border: 1px solid var(--tl-line);
  font: 12px var(--tl-mono); color: var(--tl-muted);
}
.tl-node::before { content: ""; position: absolute; top: 50%; width: 17px; height: 1px; background: var(--tl-line); }
.tl-row.left .tl-node::before { right: 100%; }
.tl-row.right .tl-node::before { left: 100%; }

.tl-card { box-sizing: border-box; min-width: 0; padding: 14px 18px 12px; border: 1px solid var(--tl-line); border-radius: 8px; background: var(--tl-card); }
.tl-top { display: flex; justify-content: space-between; align-items: baseline; gap: 1rem; }
.tl-wrap .tl-name { margin: 0; font-size: 1.05em; font-weight: 700; color: var(--tl-done); }
.tl-wrap .tl-name a:link, .tl-wrap .tl-name a:visited { color: inherit; text-decoration: none; }
.tl-wrap .tl-name a:hover { text-decoration: underline; }
.tl-len { font: 11px var(--tl-mono); color: var(--tl-muted); white-space: nowrap; }
.tl-card .tl-dates { margin: .35em 0 .5em; font-family: var(--tl-mono); }
.tl-card .tl-text { margin: 0 0 .9em; line-height: 1.5; }
.tl-foot { display: flex; justify-content: space-between; gap: 1rem; padding-top: 10px; border-top: 1px solid var(--tl-line); font-size: 11px; }
.tl-status { display: inline-flex; align-items: center; gap: 6px; font-weight: 700; }
.tl-status::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
.tl-when { font-family: var(--tl-mono); color: var(--tl-muted); }
.tl-progress { display: none; height: 2px; margin-top: 10px; background: var(--tl-line); }
.tl-progress span { display: block; height: 100%; background: var(--tl-live); }

.is-done .tl-card { border-color: color-mix(in srgb, var(--tl-done) 45%, transparent); }
.is-done .tl-status { color: var(--tl-done); }
.is-done .tl-node { background: var(--tl-done); border-color: var(--tl-done); color: var(--tl-bg); }
.is-live .tl-card { border-color: var(--tl-live); background: color-mix(in srgb, var(--tl-live) 8%, var(--tl-bg)); }
.is-live .tl-dates, .is-live .tl-status, .is-live .tl-when { color: var(--tl-live); }
.is-live .tl-when { font-weight: 700; }
.is-live .tl-node { border: 2px solid var(--tl-live); color: var(--tl-fg); }
.is-live .tl-progress { display: block; }
.is-upcoming .tl-status { color: var(--tl-muted); }

.tl-line, .tl-bar, .tl-now { position: absolute; z-index: 1; transform: translateX(-50%); }
.tl-line { width: 1px; background: var(--tl-line); }
.tl-bar { width: 2px; background: var(--tl-live); }
.tl-now { z-index: 3; width: 9px; height: 9px; border-radius: 50%; background: var(--tl-live); transform: translate(-50%, -50%); box-shadow: 0 0 0 3px color-mix(in srgb, var(--tl-live) 25%, transparent); }

@media (max-width: 640px) {
  .tl-row { grid-template-columns: 40px 1fr; column-gap: 16px; }
  .tl-row + .tl-row { margin-top: 1.25rem; }
  .tl-row.left .tl-card, .tl-row.right .tl-card { grid-column: 2; }
  .tl-row .tl-node { grid-column: 1; }
  .tl-row.left .tl-node::before, .tl-row.right .tl-node::before { left: 100%; right: auto; }
}
</style>

<div class="tl-wrap">
<header class="tl-head">
<p class="tl-stage">Stage 1</p>
<h2 class="tl-title">Learning &amp; Simulation</h2>
<p class="tl-range">1 Sep – 16 Nov 2026</p>
<p class="tl-intro">Self-paced, MOOC-style tasks that build your team’s skills from the basics up – simulation, algorithms, and the core tools your theme runs on.</p>
</header>
<div class="tl" id="tl-stage1"></div>
</div>

<script>
(function () {
  // ===== Edit your tasks here =====================================
  // start / end are inclusive dates (YYYY-MM-DD).
  // link is optional: the page's path from the book root, ending in .html
  const TASKS = [
    { name: "Task 0", start: "2026-09-01", end: "2026-09-14",
      text: "Install and verify your simulation environment so every later task runs smoothly." },
    { name: "Task 1", start: "2026-09-15", end: "2026-10-05",
      text: "Foundational concepts and preliminary tasks for your theme’s tech stack.",
      link: "Tasks/Task_1/Brief.html" },
    { name: "Task 2", start: "2026-10-06", end: "2026-10-26",
      text: "A deeper dive into your theme’s problem statement and the techniques you’ll apply.",
      link: "Tasks/Task_2/Brief.html" },
    { name: "Task 3", start: "2026-10-27", end: "2026-11-16",
      text: "Bring it all together: a complete maze-solving run in simulation.",
      link: "Tasks/Task_3/Brief.html" },
  ];
  const UTC_OFFSET = "+05:30"; // deadlines are in IST
  // ================================================================

  const root = document.getElementById("tl-stage1");
  if (!root) return;

  const DAY = 864e5;
  const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const startOf = d => new Date(d + "T00:00:00" + UTC_OFFSET).getTime();
  const endOf = d => new Date(d + "T23:59:59" + UTC_OFFSET).getTime();
  const ymd = s => s.split("-").map(Number);
  const plural = (n, w) => n + " " + w + (n === 1 ? "" : "s");

  function range(a, b) {
    const [ay, am, ad] = ymd(a), [by, bm, bd] = ymd(b);
    return ad + " " + MONTHS[am - 1] + (ay !== by ? " " + ay : "") + " – " + bd + " " + MONTHS[bm - 1] + " " + by;
  }
  function span(ms) {
    const m = Math.max(0, Math.floor(ms / 6e4));
    const d = Math.floor(m / 1440), h = Math.floor((m % 1440) / 60);
    return (d ? d + "d " : "") + h + "h " + (m % 60) + "m";
  }

  const base = typeof path_to_root === "string" ? path_to_root : "";
  root.innerHTML =
    '<div class="tl-line"></div><div class="tl-bar"></div><div class="tl-now" hidden></div>' +
    TASKS.map((t, i) => {
      const weeks = Math.max(1, Math.round((endOf(t.end) - startOf(t.start)) / DAY / 7));
      const title = t.link ? '<a href="' + esc(base + t.link) + '">' + esc(t.name) + "</a>" : esc(t.name);
      const num = (t.name.match(/\d+\w*/) || [i])[0];
      return '<div class="tl-row ' + (i % 2 ? "right" : "left") + '">' +
        '<article class="tl-card">' +
          '<div class="tl-top"><div class="tl-name" role="heading" aria-level="3">' + title + '</div><span class="tl-len">' + plural(weeks, "week") + "</span></div>" +
          '<p class="tl-dates">' + range(t.start, t.end) + "</p>" +
          '<p class="tl-text">' + esc(t.text) + "</p>" +
          '<div class="tl-foot"><span class="tl-status"></span><span class="tl-when"></span></div>' +
          '<div class="tl-progress"><span></span></div>' +
        "</article>" +
        '<div class="tl-node" aria-hidden="true">' + esc(num) + "</div>" +
      "</div>";
    }).join("");

  const rows = [...root.querySelectorAll(".tl-row")];
  const line = root.querySelector(".tl-line"), bar = root.querySelector(".tl-bar"), dot = root.querySelector(".tl-now");
  let live = -1, frac = 0, lastDone = -1;

  function update() {
    const now = Date.now();
    live = -1; lastDone = -1;
    TASKS.forEach((t, i) => {
      const s = startOf(t.start), e = endOf(t.end), r = rows[i];
      let state, status, when;
      if (now > e) {
        state = "done"; status = "Completed"; lastDone = i;
        const d = Math.floor((now - e) / DAY);
        when = d < 1 ? "closed today" : "closed " + plural(d, "day") + " ago";
      } else if (now >= s) {
        state = "live"; status = "Live now"; live = i; frac = (now - s) / (e - s);
        when = span(e - now) + " left";
      } else {
        state = "upcoming"; status = "Upcoming";
        when = s - now < DAY ? "opens in " + span(s - now) : "opens in " + plural(Math.ceil((s - now) / DAY), "day");
      }
      r.className = "tl-row " + (i % 2 ? "right" : "left") + " is-" + state;
      r.querySelector(".tl-status").textContent = status;
      r.querySelector(".tl-when").textContent = when;
      r.querySelector(".tl-progress span").style.width = state === "live" ? (frac * 100).toFixed(1) + "%" : "0";
    });
    place();
  }

  function place() {
    const box = root.getBoundingClientRect();
    const c = rows.map(r => {
      const n = r.querySelector(".tl-node").getBoundingClientRect();
      return { x: n.left - box.left + n.width / 2, y: n.top - box.top + n.height / 2 };
    });
    const x = c[0].x + "px", top = c[0].y;
    const set = (el, y1, y2) => { el.style.left = x; el.style.top = y1 + "px"; el.style.height = Math.max(0, y2 - y1) + "px"; };
    set(line, top, c[c.length - 1].y);
    let end = top;
    if (live >= 0) {
      const a = c[live].y, b = live + 1 < c.length ? c[live + 1].y : a + 80;
      end = a + (b - a) * frac;
    } else if (lastDone >= 0) {
      end = c[lastDone].y;
    }
    set(bar, top, end);
    dot.hidden = live < 0;
    dot.style.left = x; dot.style.top = end + "px";
  }

  update();
  setInterval(update, 30000);
  if (window.ResizeObserver) new ResizeObserver(place).observe(root);
  else window.addEventListener("resize", place);
})();
</script>