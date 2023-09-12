let ele = document.getElementsByClassName('typed-text');
var i=0
function dis(){
  ele[i].style.width='100%';
}
function rem(){
  ele[i].style.width='0%';
}

function apply(){
  dis()
  setTimeout(() => {
    rem()
    if( i == 2){
      i=0;
    }else{
      i++;
    }
  }, 3000);
}
setInterval(() => {
  apply()
}, 5000);

var skll = document.querySelectorAll('.skl_ind')
var lvls = document.querySelectorAll('.lvl')
window.addEventListener('scroll',()=>{
  console.log(document.getElementsByClassName('hero')[1].getBoundingClientRect().top)
  for (let index = 0; index < skll.length; index++) {
    if(skll[index].getBoundingClientRect().top < 600){
      skll[index].classList.add('enb')
      // console.log(lvls[index].getAttribute('wid'))
      lvls[index].style.width = lvls[index].getAttribute('wid')+"%";
    }else{
      skll[index].classList.remove('enb')
      lvls[index].style.width = "0%";

    }
  }
});


var bts = document.querySelectorAll('nav ul li')



bts.forEach(element => {
    element.addEventListener('click',()=>{
      if(document.getElementsByClassName(element.innerHTML)[0].getBoundingClientRect().top <= 0){
          var int = setInterval(() => {
            if(document.getElementsByClassName(element.innerHTML)[0].getBoundingClientRect().top >= 0){
              clearInterval(int)
            }
            scrollBy(0,-10);
          }, 5);
      }
      else if(document.getElementsByClassName(element.innerHTML)[0].getBoundingClientRect().top >= 0){
        var int = setInterval(() => {
          if(document.getElementsByClassName(element.innerHTML)[0].getBoundingClientRect().top <= 0){
            clearInterval(int)
          }
          scrollBy(0,10);
        }, 5);
      }
    })
});