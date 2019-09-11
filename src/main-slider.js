export default function() {
    const mainSlider = document.querySelector('header.top')
    const ImgSrcs = [
        '../public/img/main_slider/top1.jpg',
        '../public/img/main_slider/top2.jpg',
        '../public/img/main_slider/top3.jpg'
    ]
    window.Images = ImgSrcs.map(function(src){
        const image = new Image()
        image.src = src
        return image
    })

    let i = 0
    const ImgsLength = ImgSrcs.length

    setInterval(function(){
        console.log('now:'+ImgSrcs[i])
        mainSlider.style = `background-image: url('${ImgSrcs[i]}')`
        i++
        if (i === ImgsLength) {
            i = 0
        }
    }, 3000)
}