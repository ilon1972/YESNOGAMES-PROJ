// live search
document.querySelector('#yesnogameLinkInput').oninput = function () {
    let val = this.value.trim().toLowerCase();
    let elasticItems = document.querySelectorAll('.yesnogame-links li a');
    if (val != '') {
        elasticItems.forEach(function (elem) {
            if (elem.innerText.search(val) == -1) {
                elem.classList.add('hide');
                elem.innerHTML = elem.innerText;
            }
            else {
                elem.classList.remove('hide');
                let str = elem.innerText;
                elem.innerHTML = insertMark(str, elem.innerText.search(val), val.length);
            }
        });
    }
    else {
        elasticItems.forEach(function (elem) {
            elem.classList.add('hide');
            elem.innerHTML = elem.innerText;
        });
    }
}
function insertMark(string, pos, len) {
    return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
}

// smooth achnors
const $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

// mobile menu cntrl                    
const burger = document.getElementById("burger");
const nav = document.getElementById("navlist");
const navSlide = ()=>{
    burger.addEventListener("click", ()=>{
        nav.classList.toggle("nav-active");
        burger.classList.toggle("toggle");
    })
}
navSlide();