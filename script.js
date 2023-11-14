// Показ або приховання кнопки "Повернутися вгору" при прокручуванні
window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("scrollToTopButton").style.display = "block";
    } else {
        document.getElementById("scrollToTopButton").style.display = "none";
    }
};

// Функція для плавного прокручування сторінки нагору
function scrollToTop() {
    const currentY = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentY > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, currentY - currentY / 8);
    }
}

document.addEventListener("DOMContentLoaded", function(){
    const cars = document.querySelectorAll('.modelcar');
    //список всіх моделей машин
    cars.forEach((car) => {
        const image = car.querySelector('img');
        //зображення конкретної машини

        const detailes = car.querySelector('.details');
        //вікно інформації конкретної машини

        image.addEventListener("click", (event) => {
            event.preventDefault();
            detailes.style.display = "block";
            //показує вікно detailes
            document.body.style.overflow = "hidden";
            //значення hidden для overflow означає, що контет обрізається, без надання прокрутки

        });

        const closeBtn = detailes.querySelector('.close');
        //коли натискаєш на closeBtn вікно detailes повинно приховатись

        closeBtn.addEventListener("click", (event) => {
            event.preventDefault();
            detailes.style.display = "none";
            //показує вікно detailes
            document.body.style.overflow = "";//повернулось значення за замовчуванням для overflow
        });

    });
    
});

//addEventListener - дозволяє встановлювати 
//обробники подій для DOMелемнтів
//перший параметр - це подія
//дургий параметр - це функція яка повинна виконатись при цій події


/*
// Отримуємо посилання на модальне вікно та інші елементи
var modal = document.getElementById('myModal');
var modalImage = document.getElementById('modalImage');
var closeModal = document.getElementById('closeModal');

// Функція для відкриття модального вікна з зображенням
function openModal(imageSrc, captionText) {
    modal.style.display = 'block';
    modalImage.src = imageSrc;
    caption.innerHTML = captionText;
}

// Функція для закриття модального вікна
function closeModalFunction() {
    modal.style.display = 'none';
}

// Наслідуємо клік на "хрестик" для закриття модального вікна
closeModal.onclick = closeModalFunction;

// Наслідуємо клік на затемненому фоні для закриття модального вікна
modal.onclick = function(event) {
    if (event.target == modal) {
        closeModalFunction();
    }
};

// Наслідуємо клавішу Esc для закриття модального вікна
document.onkeydown = function(event) {
    if (event.key === 'Escape') {
        closeModalFunction();
    }
};

// Отримуємо всі зображення всередині класу modelcar
var modelCarImages = document.querySelectorAll('.modelcar img');

// Наслідуємо кліки на зображеннях в класі modelcar
modelCarImages.forEach(function(image, index) {
    image.onclick = function() {
        openModal(image.src, 'Зображення ' + (index + 1));
    };
});
*/