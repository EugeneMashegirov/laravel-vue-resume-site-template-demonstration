let activeLink = "";
let counter = 0;

handleScroll();

let anchors = document.querySelectorAll('.nav-link');

for (let anchor of anchors) {
     anchor.addEventListener('click', function (e) {
        e.preventDefault();
                
        let blockID = anchor.getAttribute('href');
                
        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    })
}

window.addEventListener("scroll", this.handleScroll);




let backToTop = document.querySelector(".back-to-top");
        let showNav = document.getElementById("showNav");
        let aside = document.querySelector("aside");
        let mainContent = document.querySelector(".main-content");

        window.onresize = function(e) {
            if (document.documentElement.clientWidth > 1180) {
                aside.classList.remove("hideAside");
                aside.classList.add("showAside");
            } else {
                aside.classList.remove("showAside");
                aside.classList.add("hideAside");
            }
        }

        backToTop.onclick = function(e) {
            document.documentElement.scrollIntoView({
                behavior: "smooth",
            });
        };

        showNav.onclick = function(e) {
            if (showNav.classList.contains("bi-list") && (document.documentElement.clientWidth <= 1180)) {
                // aside.style.left = 0 + "px";
                aside.classList.remove("hideAside");
                aside.classList.add("showAside");
                // mainContent.style.overflow = "auto";
                //mainContent.classList.add("o-hid");
                showNav.classList.remove("bi-list");
                showNav.classList.add("bi-x");
            } else {
                // aside.style.left = -300 + "px";
                aside.classList.remove("showAside");
                aside.classList.add("hideAside");
                mainContent.style.overflow = "";
                showNav.classList.remove("bi-x");
                showNav.classList.add("bi-list");
            }
        };

        setInterval(() => {
            let profession = document.getElementById("profession-animation");

            if (counter === 0) {
                profession.innerHTML += "|";
                counter = 1;
            } else {
                profession.innerHTML = "Developer";
                counter = 0;
            }
        }, 300);








function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
        top: box.top + scrollY,
        left: box.left + scrollY
    };
}
function handleScroll(event) {
    // let ids = ["home", "about", "resume", "portfolio", "blog", "contact"];
    let ids = ["home", "about", "resume", "portfolio", "contact"];
    let iteration = 1;

    for (let id of ids) {
        let elem = document.getElementById(id);

        if (Math.floor(getCoords(elem).top) <= scrollY) {
            if (activeLink !== "") {
                activeLink.classList.remove("active");
            }

            let link = document.getElementById("link_" + iteration);
            link.classList.add("active");
            activeLink = link;
        }

        ++iteration;
    }

    let backToTop = document.querySelector(".back-to-top");

    if (scrollY >= 200) {
        backToTop.classList.add("active");
    } else {
        backToTop.classList.remove("active");
    }
}