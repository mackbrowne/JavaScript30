
window.addEventListener('keydown', (e)=>{
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  console.log(audio);
  if(!audio) return;
  audio.currentTime = 0;
  key.classList.add('playing');
  audio.play();
});

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', function(e){
  if(e.propertyName !== 'transform') return;
  console.log(this);
  this.classList.remove('playing');
}));
