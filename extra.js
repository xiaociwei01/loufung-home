// 光晕
(function(){
  var o1 = document.createElement('div'); o1.className = 'hero-orb'; document.body.appendChild(o1);
  var o2 = document.createElement('div'); o2.className = 'hero-orb-2'; document.body.appendChild(o2);
})();

// 卡片 3D 倾斜
(function(){
  document.querySelectorAll('.work-card').forEach(function(card){
    card.addEventListener('mousemove', function(e){
      var r = card.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5;
      var y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = 'perspective(800px) rotateY(' + (x * 8) + 'deg) rotateX(' + (-y * 8) + 'deg) translateY(-3px)';
    });
    card.addEventListener('mouseleave', function(){ card.style.transform = ''; });
  });
})();

// 问候语定时切换（早/午/晚安）
(function(){
  function updateGreeting() {
    var el = document.getElementById('greeting');
    if (!el) return;
    var h = new Date().getHours();
    var g;
    if (h >= 5 && h < 11)       g = '祝你早安';
    else if (h >= 11 && h < 18) g = '祝你午安';
    else                        g = '祝你晚安';
    if (el.textContent !== g) {
      el.style.transition = 'opacity 0.4s';
      el.style.opacity = '0';
      setTimeout(function(){
        el.textContent = g;
        el.style.opacity = '1';
      }, 200);
    }
  }
  updateGreeting();
  setInterval(updateGreeting, 60 * 1000);
})();
