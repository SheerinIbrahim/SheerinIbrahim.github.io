function createDot() {
  var dot = document.createElement('div');
  dot.className = 'dot';
  dot.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
  dot.style.top = Math.floor(Math.random() * window.innerHeight) + 'px';
  document.body.appendChild(dot);
}

setInterval(createDot, 5000);

function createLike() {
  var like = document.createElement('div');
  like.className = 'like';
  like.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
  like.style.top = Math.floor(Math.random() * window.innerHeight) + 'px';
  like.innerHTML = '<i class="fas fa-heart"></i>';
  document.body.appendChild(like);
}

setInterval(createLike, 10000);
