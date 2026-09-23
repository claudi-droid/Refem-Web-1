document.querySelectorAll('.ad input[type=range]').forEach(function(r){
  var s=function(){r.parentElement.style.setProperty('--pos',r.value+'%')};r.addEventListener('input',s);s();});
