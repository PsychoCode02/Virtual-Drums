  
        function playSound(e){
            const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);    
            const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
            if (!audio) return; /* stop the fuction from running all together */
            audio.currentTime = 0;
            audio.play();
            key.classList.add('playing');
         
         }
         function removeTransition(e){
             if(e.propertyName !== 'transform') return; /* omitir si no es transform*/
             this.classList.remove('playing');
         }
         
         const keys = document.querySelectorAll('.key');
         keys.forEach(key => key.addEventListener('transitionend', removeTransition));
         window.addEventListener('keydown', playSound);

         // Play music by mouse click
keys.forEach( key => key.addEventListener('click' , playByMouse ) );
function playByMouse(e)
{
    const keyCode = this.getAttribute('data-key');
	const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
	audio.currentTime = 0;
	audio.play();
	const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    key.classList.add('playing');
}