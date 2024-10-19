document.addEventListener('DOMContentLoaded', () => {
  let isDragging = false;
  let dragStartX, dragStartY, initialX, initialY;
  const player = document.getElementById('spotify-player');
  const expandButton = document.getElementById('expandButton');
  const minimizeButton = document.getElementById('minimizeButton');
  const playerContent = document.getElementById('playerContent');
  const closeButton = document.getElementById('closeButton');

  player.addEventListener('mousedown', dragStart);
  document.addEventListener('mousemove', drag);
  document.addEventListener('mouseup', dragEnd);

  function dragStart(e) {
    if (e.target.id === 'dragHandle') {
      isDragging = true;
      dragStartX = e.clientX - player.offsetLeft;
      dragStartY = e.clientY - player.offsetTop;
      initialX = player.offsetLeft;
      initialY = player.offsetTop;
    }
  }

  function drag(e) {
    if (isDragging) {
      e.preventDefault();
      const newX = e.clientX - dragStartX;
      const newY = e.clientY - dragStartY;
      player.style.left = `${newX}px`;
      player.style.top = `${newY}px`;
    }
  }

  function dragEnd() {
    isDragging = false;
  }

  function toggleMinimize() {
    if (player.style.display === 'none') {
      player.style.display = 'block';
      expandButton.style.display = 'none';
    } else {
      player.style.display = 'none';
      expandButton.style.display = 'block';
      expandButton.style.left = player.style.left;
      expandButton.style.top = player.style.top;
    }
  }

  function closePlayer() {
    player.style.display = 'none';
    expandButton.style.display = 'none';
  }

  minimizeButton.addEventListener('click', toggleMinimize);
  expandButton.addEventListener('click', toggleMinimize);
  closeButton.addEventListener('click', closePlayer);
});
