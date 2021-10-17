const slides = document.querySelectorAll('.slide'),
      controls = document.querySelectorAll('.control');

let index = 0;
let change = document.querySelector('#text');
      
    const activeSlide = n => {
        for(let slide of slides){
            slide.classList.remove('slide-active');
        };
        slides[n].classList.add('slide-active');
    }
    const activeControl = n => {
        for(let control of controls){
            control.classList.remove('active');
        };
        controls[n].classList.add('active');
    }
    
    const active = ind => {
        activeSlide(ind);
        activeRec(ind);
    }
    
    const nextSlide = () => {
        if(index == slides.length-1){
            index = 0;
            active(index);
            changeText(index);
        }else{
            index++;
            active(index);
            changeText(index);
        }
    };
    
    const prevSlide = () => {
        if(index == 0){
            index = slides.length-1;
            active(index);
            changeText(index);
        }else{
            index--;
            active(index);
            changeText(index);
        }
    };
    
    controls.forEach((item, indexRec) => {
        item.addEventListener('click', () => {
            index = indexRec;
            active(index);
            changeText(index);
        })
    });
    
    let text = ['slide 1', 'slide 2', 'slide 3', 'slide 4']

    const changeText = index => {
        change.innerHTML = text[index];
    };;    

