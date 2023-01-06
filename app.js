const btn = document.querySelector('#btn')
const list = document.querySelector('#list')
const inputs = ['input']

;(function startApp() {
 renderList(inputs)
 addInput()
})()

function renderList(inputs) {
 const result = inputs
  .map((input, i) => {
   return `<li><${input} onclick="clearItem(${i})" ></${input}></li>`
  })
  .join('')
 list.innerHTML = result
}

function addInput() {
 btn.addEventListener('click', handeClick)
 function handeClick() {
  inputs.push('input')
  renderList(inputs)
 }
}

function clearItem(index) {
 const arr1 = inputs.slice(0, index)
 const arr2 = inputs.slice(index + 1, inputs.length)
 const newArr = arr1.concat(arr2)
 console.log(index, newArr)
 renderList(newArr)
}
