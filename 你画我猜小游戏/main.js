const canvas = document.querySelector('.mycanvas')
const ctx = canvas.getContext('2d')
ctx.fillStyle = '#c0c0c0'
    ctx.fillRect(0, 0, 300, 150) //画布范围
console.log('aaaaaa')
canvas.addEventListener('mousedown', () => { 
  canvas.onmousemove = (e) => { 
      move(e)
  }
})
canvas.addEventListener('mouseup', () => { 
  canvas.onmousemove = null
})

function move(e) { 
  ctx.clearRect(e.clientX,e.clientY,12,12)
}