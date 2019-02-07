let audioObject = null;

export default function playListTrigger() {
  document.addEventListener('click', (e) => {
    e.preventDefault();
    const result = e.path.filter(e => e.classList ? e.classList.contains('music') : false);

    if (result.length > 0) {
      if (audioObject) audioObject.pause();
      const track = result[0].getAttribute('data-track-preview');

      if (!result[0].classList.contains('active')) {
        audioObject = new Audio(track);
        audioObject.play();
      }
      result[0].classList.add('active');

      audioObject.addEventListener('pause', () => {
        result[0].classList.remove('active');
      });
    }
  });
}
