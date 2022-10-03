function CheckBoxChange() {
  const checkbox = document.getElementById('checkbox')
  const fundo = document.getElementById('fundo')
  if (checkbox.checked == true) {
    fundo.style.background = '#292C35'
  } else {
    fundo.style.background = '#f1f1f1'
  }
}
