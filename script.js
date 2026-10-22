/* Priya Mane portfolio behaviour. Content is NOT here; edit content.js instead. */
const $ = s => document.querySelector(s);
/* Fill in the data-driven parts of the page (the data itself lives in content.js) */
document.querySelectorAll('[data-link]').forEach(a => { const k = a.dataset.link; a.href = k === 'email' ? 'mailto:' + links.email : links[k]; if (a.hasAttribute('data-show-text')) a.textContent = links.email });
$('#edu').innerHTML = education.map(e => `<li><div><b>${e[0]}</b><span>${e[1]}</span></div><em>${e[2]}</em></li>`).join('');
$('#bg').innerHTML = achievements.map(a => `<article class="rv"><h3>${a[0]}</h3><p>${a[1]}</p></article>`).join('');
$('#plist').innerHTML = projects.map((p, i) => `<div class="pj rv"><button aria-expanded="false" aria-controls="pb${i}"><span class="n">0${i + 1}</span><span class="t">${p.t}</span><span class="y">${p.y}</span></button>
<div class="body" id="pb${i}"><div class="in"><div class="cols"><div><div class="k">${p.sub}</div><ul>${p.pts.map(x => `<li>${x}</li>`).join('')}</ul></div>
<div><div class="k">Stack</div><div class="chips">${p.stack.map(s => `<span>${s}</span>`).join('')}</div>${p.github || p.demo ? `<div class="ctas">${p.github ? `<a class="btn g" style="color:#fff;border-color:#fff" href="${p.github}">GitHub</a>` : ''}${p.demo ? `<a class="btn g" style="color:#fff;border-color:#fff" href="${p.demo}">Live demo</a>` : ''}</div>` : ''}</div></div></div></div></div>`).join('');
$('#sk').innerHTML = skills.map((s, i) => `<div class="sg"><header><span class="no">0${i + 1}</span><h3>${s[0]}</h3></header><ul>${s[1].map(x => `<li>${x}</li>`).join('')}</ul></div>`).join('');
$('#cl').innerHTML = certs.map(c => `<li><b>${c[0]}</b><span>${c[1]}</span><span>${c[2]}</span></li>`).join('');

document.querySelectorAll('.pj>button').forEach(b => b.addEventListener('click', () => {
    const pj = b.parentElement, o = pj.classList.toggle('open'); b.setAttribute('aria-expanded', o);
}));
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { threshold: .12 });
document.querySelectorAll('.rv').forEach(el => io.observe(el));
function fit() { document.querySelectorAll('.big').forEach(el => { el.style.fontSize = ''; let s = parseFloat(getComputedStyle(el).fontSize); while (el.scrollWidth > el.clientWidth + 1 && s > 40) { s -= 4; el.style.fontSize = s + 'px' } }) }
fit(); addEventListener('resize', fit); if (document.fonts) document.fonts.ready.then(fit);
const hd = $('#hd'); addEventListener('scroll', () => hd.classList.toggle('solid', scrollY > window.innerHeight * .7), { passive: true });
const bg = $('#burger'), mn = $('#menu');
function tog(f) { const o = f === undefined ? !mn.classList.contains('open') : f; mn.classList.toggle('open', o); hd.classList.toggle('menu', o); bg.setAttribute('aria-expanded', o); bg.textContent = o ? 'CLOSE' : 'MENU' }
bg.addEventListener('click', () => tog()); mn.querySelectorAll('a').forEach(a => a.addEventListener('click', () => tog(false)));
addEventListener('keydown', e => { if (e.key === 'Escape') tog(false) });
