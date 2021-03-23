var p = document.querySelector('p');
var c = 'AC,%,x²,/,7,8,9,*,4,5,6,-,1,2,3,+,0,.,=';
var cs = c.split(',');

for (var i = 0; i < cs.length; i++) {
  var b = document.createElement('button');
  b.setAttribute('onclick', 'btn(this)');
  document.querySelector('.calbtn').appendChild(b);
  b.innerText = cs[i];
}

function btn(def) {
  var v = def.innerText;
  if (v == '=') {
    p.innerText = eval(p.innerText);
  } else if (v == 'AC') {
    p.innerText = '';
  } else if (v == '%') {
    p.innerText = eval(p.innerText * 1 / 100);
  } else if (v == 'x²') {
    p.innerText = eval(p.innerText ** 2);
  } else {
    p.innerText += v;
  }
}