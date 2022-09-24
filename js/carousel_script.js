const nextButton = document.querySelector('.next-carousel-button')
nextButton.addEventListener('click', changeImgNext)

const prevButton = document.querySelector('.prev-carousel-button')
prevButton.addEventListener('click', changeImgPrev)

function changeImgNext(){
    const activeImage = document.querySelector('.active_img')
    const activeImageClass = activeImage.classList[1]
    const activeImageNumber = activeImageClass.slice(-1)
    let number = parseInt(activeImageNumber)
    let nextNum;
    if(number === 8){
        nextNum = 1
    }else{
        nextNum = number + 1
    }
    const nextImage = document.querySelector(`.carousel-img-${nextNum}`)
    activeImage.classList.remove('active_img')
    nextImage.classList.add('active_img')

    const activeInfo = document.querySelector('.active_info')

    const nextInfo = document.querySelector(`.keyfeatures-info-div${nextNum}`)
    activeInfo.classList.remove('active_info')
    setTimeout(() => {
        nextInfo.classList.add('active_info')
        document.querySelector('.carousel-image-counter').innerHTML = `${nextNum}/8`
    }, 300)
}
function changeImgPrev(){
    const activeImage = document.querySelector('.active_img')
    const activeImageClass = activeImage.classList[1]
    const activeImageNumber = activeImageClass.slice(-1)
    let number = parseInt(activeImageNumber)
    let prevNum;
    if(number === 1){
        prevNum = 8
    }else{
        prevNum = number - 1
    }

    const prevImage = document.querySelector(`.carousel-img-${prevNum}`)
    activeImage.classList.remove('active_img')
    prevImage.classList.add('active_img')

    const activeInfo = document.querySelector('.active_info')

    const nextInfo = document.querySelector(`.keyfeatures-info-div${prevNum}`)
    activeInfo.classList.remove('active_info')
    setTimeout(() => {
        nextInfo.classList.add('active_info')
        document.querySelector('.carousel-image-counter').innerHTML = `${prevNum}/8`
    }, 300)
}
