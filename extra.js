(function(){
  var o1 = document.createElement('div'); o1.className = 'hero-orb'; document.body.appendChild(o1);
  var o2 = document.createElement('div'); o2.className = 'hero-orb-2'; document.body.appendChild(o2);
})();
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
