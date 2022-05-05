var navOffCanvas = document.getElementById('nav-off-canvas')
navOffCanvas.addEventListener('hidden.bs.offcanvas',
    function () {
        console.log('hidden')
        navOffCanvas.remove('offcanvas offcanvas-end');
    })

var navOffCanvas = document.getElementById('nav-off-canvas')
navOffCanvas.addEventListener('show.bs.offcanvas',
    function () {
        navOffCanvas.add('offcanvas offcanvas-end');
        console.log('show')
    })