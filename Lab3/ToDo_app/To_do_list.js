function aler(el) {
  const list = document.querySelector(".text_p."+el.className)
  console.log(list)
  if(el.checked) {
    list.style.textDecoration = "line-through"
  }
  else{
    list.style.textDecoration = "none"
  }
}
function del(el){
  const list = document.getElementById(el.id)
  console.log(list)
  list.remove()
}
let t=""
let id_b=0
/*
function fun() {
  id_b++
  t = document.getElementById("input_text").value;
  let todo = document.querySelector('.m3')
  let div_n = document.createElement('div')
  let p = document.createElement('p')
  let check = document.createElement('input')
  id_el = 'id' + id_b
  check.type = 'checkbox'
  check.className=id_el
  p.className = 'text_p '+id_el
  p.textContent = t
  check.onclick=aler()
  div_n.appendChild(check)
  div_n.appendChild(p)
  div_n.className = 'todopart ' + id_el
  todo.appendChild(div_n)
}
*/
function fun(){
  id_b++
  t = document.getElementById("input_text").value;
  let todo = document.querySelector('.m3')
  id_el = 'id' + id_b
  let n='<div class="todopart" id="'+id_el+'"><input type="checkbox" onclick="aler(this)" class="'+id_el+'"><p class="text_p '+id_el+'">'+t+'</p><div class="tr"><img src="tr.png" id="'+id_el+'" onclick="del(this)" class="im"></div></div>'
  todo.innerHTML=todo.innerHTML+n
}
