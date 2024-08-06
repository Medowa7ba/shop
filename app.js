
const header = document.querySelector('header');
const nav = document.querySelector('.nav');
const API = fetch('https://fakestoreapi.com/products');
let localStorageData = JSON.parse(localStorage.getItem("data")) || [];
let shop = document.getElementById("shop");
let selling = document.getElementById("selling");
const leadMore = document.getElementById('leadMore');
const leadMoreBtn = document.getElementById('leadMoreBtn');
const leadMoreSelling = document.getElementById('leadMoreSelling');
const leadMoreBtnSelling = document.getElementById('leadMoreBtnSelling');
let more = 4;
let more2 = 4;
leadMore.addEventListener('click', function () {
    more += 4;
    getData(shop, more);
})
leadMoreSelling.addEventListener('click', function () {
    more2 += 4;
    getData(selling, more2);
})
function getData(doc, mor) {
    console.log(mor);
    API.then(response => response.clone().json())
        .then(data => {
            if (data.length === more) {
                leadMoreBtn.style.display = 'none';
            }
            if (data.length === more2) {
                leadMoreBtnSelling.style.display = 'none';
            }
            return (
                doc.innerHTML =
                data.slice(0, mor).map((e) => {
                    let { id, title, image, price, rating } = e;
                    return `
                    <div id=product-id-${id} class="item col-lg-3 col-md-6 col-sm-6 card">
                    <a href="./single.html?id=${id}" onclick="">
                    <div class="card-img">
                    <img width="220" src=${image} alt="">
                    </div>
                      
                      <div class="details">
                        <h4>${title}</h4>
                        <div> ${rating.rate > 4 ?

                            `                <svg  width="104" height="19" viewBox="0 0 104 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z" fill="#FFC633"/>
                            <path d="M33.0467 0.255005L35.6659 5.89491L41.8392 6.6431L37.2847 10.8769L38.4807 16.9793L33.0467 13.956L27.6127 16.9793L28.8087 10.8769L24.2542 6.6431L30.4275 5.89491L33.0467 0.255005Z" fill="#FFC633"/>
                            <path d="M56.8489 0.255005L59.4681 5.89491L65.6414 6.6431L61.0869 10.8769L62.283 16.9793L56.8489 13.956L51.4149 16.9793L52.611 10.8769L48.0565 6.6431L54.2297 5.89491L56.8489 0.255005Z" fill="#FFC633"/>
                            <path d="M80.6507 0.255005L83.2699 5.89491L89.4432 6.6431L84.8887 10.8769L86.0847 16.9793L80.6507 13.956L75.2167 16.9793L76.4127 10.8769L71.8582 6.6431L78.0315 5.89491L80.6507 0.255005Z" fill="#FFC633"/>
                            <path d="M98.5659 16.9793L104 13.956V0.255005L101.381 5.89491L95.2075 6.6431L99.762 10.8769L98.5659 16.9793Z" fill="#FFC633"/>
                            </svg>`
                            :
                            `                            <svg width="81" height="19" viewBox="0 0 81 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z" fill="#FFC633"/>
    <path d="M33.0467 0.255005L35.6659 5.89491L41.8392 6.6431L37.2847 10.8769L38.4807 16.9793L33.0467 13.956L27.6127 16.9793L28.8087 10.8769L24.2542 6.6431L30.4275 5.89491L33.0467 0.255005Z" fill="#FFC633"/>
    <path d="M56.8489 0.255005L59.4681 5.89491L65.6414 6.6431L61.0869 10.8769L62.283 16.9793L56.8489 13.956L51.4149 16.9793L52.611 10.8769L48.0565 6.6431L54.2297 5.89491L56.8489 0.255005Z" fill="#FFC633"/>
    <path d="M74.7642 16.9793L80.1982 13.956V0.255005L77.579 5.89491L71.4058 6.6431L75.9603 10.8769L74.7642 16.9793Z" fill="#FFC633"/>
    </svg>`

                        }
    
                        <span class="ms-2">${rating.rate}/5</span>
    
                        </div>
                        <div class="price-quantity">
                          <h6>$ ${price} </h6>
                        </div>
                      </div>
                      </a>
                  </div>
                `;
                })
                    .join(""))
        })
        .catch(error => console.error('Error:', error));
}
getData(shop, 4);
getData(selling, 4);

navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    console.log(lat, long);
});

// let increment = (id) => {
//     let selectedItem = id;
//     let search = localStorageData.find((x) => x.id === selectedItem);
//     if (search === undefined) {
//         localStorageData.push({
//             id: selectedItem,
//             item: 1,
//         });
//     } else {
//         search.item += 1;
//     }
//     console.log(search);
//     localStorage.setItem("data", JSON.stringify(localStorageData));
// };
// let decrement = (id) => {
//     let selectedItem = id;
//     let search = localStorageData.find((x) => x.id === selectedItem);
//     console.log(search);
//     if (search === undefined) return;
//     else if (search.item === 0) return;
//     else {
//         search.item -= 1;
//     }
//     getData()

//     localStorageData = localStorageData.filter((x) => x.item !== 0);
//     localStorage.setItem("data", JSON.stringify(localStorageData));
// };

///////
const navHieght = nav.getBoundingClientRect().height;
console.log(navHieght);
const stickyNav = function (entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) nav.classList.add('sticky');
    else nav.classList.remove('sticky')
}
const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `0px`,
});
headerObserver.observe(header);
//
(() => {
    const counter = document.querySelectorAll('.counter');
    const array = Array.from(counter);
    array.map((item) => {
        let counterInnerText = item.textContent;
        let count = 1;
        let speed = item.dataset.speed / counterInnerText
        function counterUp() {
            item.textContent = count++
            if (counterInnerText < count) {
                clearInterval(stop);
            }
        }
        const stop = setInterval(() => {
            counterUp();
        }, speed);
    })
})()

function count() {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = localStorageData.map((x) => x.item).reduce((x, y) => x + y, 0);
};
count();


