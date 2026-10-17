const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
let js = fs.readFileSync('extra.js', 'utf8');

// 1. 改顶栏
html = html.replace(/<header class="header">[\s\S]*?<\/header>/, `<header class="header">
    <div class="header-top">
      <div class="logo">Lou<span>Fung</span></div>
      <div class="greeting" id="greeting">祝你早安</div>
    </div>
    <div class="header-bottom">
      <div class="notice-text" id="noticeText">加载公告中…</div>
    </div>
  </header>`);

// 2. 删除统计，改关于
html = html.replace(/<div class="about-block">[\s\S]*?<\/div>\s*<\/div>/, `<div class="about-block">
    <p class="about-text" id="userAbout"></p>
  </div>`);

// 3. 项目容器清空
html = html.replace(/<div class="works-grid">[\s\S]*?<div class="section-label reveal">联系<\/div>/, `<div class="works-grid" id="worksGrid"></div>\n\n  <div class="section-label reveal">联系</div>`);

// 4. 版本号升级
html = html.replace('./extra.css?v=17', './extra.css?v=18').replace('./extra.js?v=8', './extra.js?v=9');
fs.writeFileSync('index.html', html);

// 5. JS 替换倾斜函数，防止动态加载后失效
js = js.replace(/\/\/ 卡片 3D 倾斜[\s\S]*?\}\)\(\);/, `function bindCardTilt(){
  document.querySelectorAll('.work-card').forEach(function(card){
    if (card.dataset.tiltBound) return;
    card.dataset.tiltBound = '1';
    card.addEventListener('mousemove', function(e){
      var r = card.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = 'perspective(800px) rotateY(' + (x * 8) + 'deg) rotateX(' + (-y * 8) + 'deg) translateY(-3px)';
    });
    card.addEventListener('mouseleave', function(){ card.style.transform = ''; });
  });
}
bindCardTilt();`);

// 6. JS 末尾追加动态接口和动画
js += `
(function(){
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;'); }
  function animateCards() {
    if (typeof gsap === 'undefined') { setTimeout(animateCards, 200); return; }
    document.querySelectorAll('.work-card.reveal').forEach(function(el, i){
      if (el.dataset.animBound) return;
      el.dataset.animBound = '1';
      gsap.fromTo(el, { opacity: 0, x: i % 2 === 0 ? -60 : 60, y: 40 }, { opacity: 1, x: 0, y: 0, duration: 1.0, ease: 'power4.out', scrollTrigger: { trigger: el, start: 'top 92%', end: 'top 60%', scrub: 1.0, toggleActions: 'play reverse play reverse' } });
    });
    if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
  }
  fetch('/api/config', { cache: 'no-store' }).then(r => r.json()).then(cfg => {
    if (document.getElementById('noticeText') && cfg.notice != null) document.getElementById('noticeText').textContent = cfg.notice;
    if (document.getElementById('userAbout') && cfg.about != null) document.getElementById('userAbout').innerHTML = cfg.about;
    if (document.getElementById('worksGrid') && Array.isArray(cfg.cards)) {
      document.getElementById('worksGrid').innerHTML = cfg.cards.map(c => \`<a class="work-card reveal" href="\${esc(c.link || '#')}" target="_blank" rel="noopener"><div class="work-category">\${esc(c.category)}</div><div class="work-name">\${esc(c.name)}</div><div class="work-desc">\${esc(c.desc)}</div>\${c.byline ? \`<div class="work-byline">\${esc(c.byline)}</div>\` : ''}</a>\`).join('');
    }
    bindCardTilt();
    animateCards();
  }).catch(e => console.warn('Config error', e));
})();`;
fs.writeFileSync('extra.js', js);
console.log('✅ 完美修改，没有乱码！');
