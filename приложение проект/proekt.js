let time = document.querySelector('.time')
let min = document.querySelector('.min')
let sec = document.querySelector('.sec')
let msec = document.querySelector('.msec')

setInterval(()=> {        //вызывает функцию регулярно с заданным интервалом, чтоб остановит нужен clearInterval()
    let data = new Date(); // new Date это текущая дата
    time.textContent = data.getHours()
    min.textContent = data.getMinutes()  //textContent предназначено для работы с текстовым контентом элемента
    sec.textContent = data.getSeconds()
    msec.textContent = data.getMilliseconds()
},1)       // 1 это: все это происходит в интервале 1 миллисекунды 