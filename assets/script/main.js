let count = 0;

function move(el) {
  count++;
  if (count >= 3) {
    setJao();
  }

  let div = document.getElementsByClassName('container-button');

  let width = Math.ceil(el.clientWidth);
  let height = Math.ceil(el.clientHeight);

  let wdh = Math.floor(div[0].clientHeight);
  let wdw = Math.floor(div[0].clientWidth);

  var changeTop = Math.floor(Math.random() * (wdh - height + 1));
  var changeLeft = Math.floor(Math.random() * (wdw - width + 1));
  console.log('Height: ' + changeTop + ' Width: ' + changeLeft);

  el.style.marginTop = changeTop + 'px';
  el.style.marginLeft = changeLeft + 'px';
}

function setJao() {
  document.getElementById('botao').style.display = 'none';
  document.getElementById('jao').style.display = 'block';
}
