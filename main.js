const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

window.addEventListener('keydown', e => {
  switch(e.keyCode) {
    case 37:
      e.preventDefault();
      setIndex('prev')
      break;
    case 39:
      e.preventDefault();
      setIndex('next');
      break;
  }
})

let projectIndex = 1;
function setIndex(action) {
  const previousProjectIndex = projectIndex;
  if(action === "prev") {
    if(projectIndex - 1 < 1) {
      projectIndex = 8
    } else {
      projectIndex-- 
    }
  } else if(action === "next") {
    if(projectIndex + 1 > 8) {
      projectIndex = 1
    } else {
      projectIndex++
    }
  }
  handleActive.remove(previousProjectIndex);
  handleActive.set(projectIndex);
}
const handleActive = {
  set(index) {
    document.getElementById(`project${index}`).classList.add('active')

  },
  remove(index) {
    document.getElementById(`project${index}`).classList.remove('active');
  }

}

btnPrev.addEventListener('click', () => setIndex('prev'));
btnNext.addEventListener('click', () => setIndex('next'));