const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');
const appGalary = document.getElementById('app-galary')
const SINGLEAPI = fetch(`https://fakestoreapi.com/products/${myParam}`);
const API = fetch('https://fakestoreapi.com/products');
const gridAfter = document.getElementById('grid-after')
let might = document.getElementById("might");
let localStorageData = JSON.parse(localStorage.getItem("data")) || [];

function count() {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = localStorageData.map((x) => x.item).reduce((x, y) => x + y, 0);
};
count()
function getSingleData() {
    SINGLEAPI.then(response => response.clone().json())
        .then(data => {
            // localStorageData.map((e) => { let { id, item } = e })
            console.log(localStorageData);

            appGalary.innerHTML = `
                    <div class="row">
                        <div class="col-lg-5 col-md-6">
                            <img src="${data.image}"/>
                        </div>
                        <div class="col-lg-7 col-md-6">
                            <h2>${data.title}</h2>
                        <div> ${data.rating.rate > 4 ?

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
                        
                                            <span class="ms-2">${data.rating.rate}/5</span>
                        
                                            </div>
                                            <h6>$ ${data.price}</h6>
                            <p>${data.description}</p>
                            <div class="colors">
                            <p>Select Colors</p>
                            <div class="color">
                            <div onclick="color(1)" id="active-color"></div>
                            <div onclick="color(2)"></div>
                            <div onclick="color(3)"></div>
                            </div>
                            </div>
                            <div class="d-flex align-items-center">
                        <div class="cart-buttons">
                                    <div class="buttons d-flex">
                                    <i onclick="decrement(${data.id})" class="bi bi-dash-lg">
                                    <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.8125 10.0001C17.8125 10.2488 17.7137 10.4872 17.5379 10.663C17.3621 10.8388 17.1236 10.9376 16.875 10.9376H3.125C2.87636 10.9376 2.6379 10.8388 2.46209 10.663C2.28627 10.4872 2.1875 10.2488 2.1875 10.0001C2.1875 9.75148 2.28627 9.51302 2.46209 9.33721C2.6379 9.16139 2.87636 9.06262 3.125 9.06262H16.875C17.1236 9.06262 17.3621 9.16139 17.5379 9.33721C17.7137 9.51302 17.8125 9.75148 17.8125 10.0001Z" fill="black"/>
    </svg>
    
                                    </i>
                                    <div id=${data.id} class="quantity">${num}</div>
                                    <i onclick="increment(${data.id})" class="bi bi-plus-lg">
                                    <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.8125 10C17.8125 10.2486 17.7137 10.4871 17.5379 10.6629C17.3621 10.8387 17.1236 10.9375 16.875 10.9375H10.9375V16.875C10.9375 17.1236 10.8387 17.3621 10.6629 17.5379C10.4871 17.7137 10.2486 17.8125 10 17.8125C9.75136 17.8125 9.5129 17.7137 9.33709 17.5379C9.16127 17.3621 9.0625 17.1236 9.0625 16.875V10.9375H3.125C2.87636 10.9375 2.6379 10.8387 2.46209 10.6629C2.28627 10.4871 2.1875 10.2486 2.1875 10C2.1875 9.75136 2.28627 9.5129 2.46209 9.33709C2.6379 9.16127 2.87636 9.0625 3.125 9.0625H9.0625V3.125C9.0625 2.87636 9.16127 2.6379 9.33709 2.46209C9.5129 2.28627 9.75136 2.1875 10 2.1875C10.2486 2.1875 10.4871 2.28627 10.6629 2.46209C10.8387 2.6379 10.9375 2.87636 10.9375 3.125V9.0625H16.875C17.1236 9.0625 17.3621 9.16127 17.5379 9.33709C17.7137 9.5129 17.8125 9.75136 17.8125 10Z" fill="black"/>
    </svg>
    
                                    </i>
                                   
                                </div>
                            </div>
                        <button class="HomeBtn" onclick="addToCart(${data.id})">Add to Cart</button>

                            </div>
                        </div>
                    </div>
                `
            // return (
            //     appGalary.innerHTML =
            //     console.log(data)

            // )

            // console.log(elment);
            console.log(localStorageData);


        }).catch(error => console.error('Error:', error));
}
getSingleData();
let num = 1;
let increment = (id) => {
    num++
    console.log(num);
    getSingleData();
};

let decrement = (id) => {
    num = (num - 1 <= 0) ? 1 : num - 1

    getSingleData();

};
const activeColor = document.getElementById('active-color')
console.log(activeColor);
function color(id) {
    console.log(id);
    activeColor.classList.add(`color-${id}`)
    console.log(activeColor);
}
// activeColor.addEventListener('click', function () {
// })
let addToCart = (id) => {
    let selectedItem = id;
    let search = localStorageData.find((x) => x.id === selectedItem);

    if (search === undefined) {
        localStorageData.push({
            id: selectedItem,
            item: num
        })

    }
    else {
        search.item += num;
    }
    getSingleData();
    count()
    localStorage.setItem("data", JSON.stringify(localStorageData));

};

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        console.log(tab.dataset.style);
        gridAfter.style.left = `${tab.dataset.style}% `;
        console.log(gridAfter);
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})




function getData() {
    API.then(response => response.clone().json())
        .then(data => {
            return (
                might.innerHTML =
                data.slice(0, 4).map((e) => {
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
getData()