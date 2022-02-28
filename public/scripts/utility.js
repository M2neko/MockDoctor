const HTMLCARD = '<div class="card border-0 shadow-lg pt-5 my-5 position-relative"><div class="card-body p-4"><div class="member-profile position-absolute w-100 text-center"><img class="rounded-circle mx-auto d-inline-block shadow-sm doctorimg" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt=""></div>' +
    '<div class="card-text pt-1"><h5 class="member-name mb-0 text-center text-primary font-weight-bold fullname">Mark Swift, M.D.</h5><div class="text-center spec">surgery</div><div class="mt-2 mb-3 text-center">' +
    '<div class="stars"></div>' +
    '</div><div class="summary">She is an occupational medicine physician and internist, with a special interest in the health and well-being of healthcare personnel.</div><hr><div> Location: <span class="location" style="font-size: small;">1800 Orleans St, Baltimore, MD 21287</span> </div><div> Email: <span class="email" style="color: darkblue; font-size: small;">markswift@mockdoctor.com</span> </div>' +
    '</div></div><div class=" card-footer theme-bg-primary border-0 text-center"><ul class="social-list list-inline mb-0 mx-auto"><li class="list-inline-item"><a class="text-dark" href="javascript:void(0);"><svg class="svg-inline--fa fa-linkedin-in fa-w-14 fa-fw" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">' +
    '<path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg><!-- <i class="fab fa-linkedin-in fa-fw"></i> Font Awesome fontawesome.com --></a></li>' +
    '<li class="list-inline-item"><a class="text-dark" href="javascript:void(0);"><svg class="svg-inline--fa fa-twitter fa-w-16 fa-fw" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">' +
    '</path> </svg><!-- <i class="fab fa-twitter fa-fw"></i> Font Awesome fontawesome.com --></a></li></ul></div></div>';

const STAR1 = '<span class="fa fa-star checked" aria-hidden="true"></span><span class="fa fa-star unchecked" aria-hidden="true"></span><span class="fa fa-star unchecked" aria-hidden="true"></span><span class="fa fa-star unchecked" aria-hidden="true"></span><span class="fa fa-star unchecked" aria-hidden="true"></span>';
const STAR2 = '<span class="fa fa-star checked" aria-hidden="true"></span><span class="fa fa-star checked" aria-hidden="true"></span><span class="fa fa-star unchecked" aria-hidden="true"></span><span class="fa fa-star unchecked" aria-hidden="true"></span><span class="fa fa-star unchecked" aria-hidden="true"></span>';
const STAR3 = '<span class="fa fa-star checked" aria-hidden="true"></span><span class="fa fa-star checked" aria-hidden="true"></span><span class="fa fa-star checked" aria-hidden="true"></span><span class="fa fa-star unchecked" aria-hidden="true"></span><span class="fa fa-star unchecked" aria-hidden="true"></span>';
const STAR4 = '<span class="fa fa-star checked" aria-hidden="true"></span><span class="fa fa-star checked" aria-hidden="true"></span><span class="fa fa-star checked" aria-hidden="true"></span><span class="fa fa-star checked" aria-hidden="true"></span><span class="fa fa-star unchecked" aria-hidden="true"></span>';
const STAR5 = '<span class="fa fa-star checked" aria-hidden="true"></span><span class="fa fa-star checked" aria-hidden="true"></span><span class="fa fa-star checked" aria-hidden="true"></span><span class="fa fa-star checked" aria-hidden="true"></span><span class="fa fa-star checked" aria-hidden="true"></span>';

export function makeDoctorCard(doctor) {
    var newCard = document.createElement('div');
    newCard.className = "col-12 col-md-6 col-lg-4";
    newCard.innerHTML = HTMLCARD;
    newCard.id = doctor.name;
    if (doctor.name > "h") newCard.getElementsByClassName('doctorimg')[0].src = "../images/doctor-portrait1.jpg";
    else newCard.getElementsByClassName('doctorimg')[0].src = "../images/doctor-portrait2.jpg";
    newCard.getElementsByClassName('fullname')[0].textContent = doctor.fullname;
    newCard.getElementsByClassName('summary')[0].textContent = doctor.comment;
    newCard.getElementsByClassName('email')[0].textContent = doctor.name + "@mockdoctor.com";

    let stars = doctor.rating;
    if (stars == 1) newCard.getElementsByClassName('stars')[0].innerHTML = STAR1;
    if (stars == 2) newCard.getElementsByClassName('stars')[0].innerHTML = STAR2;
    if (stars == 3) newCard.getElementsByClassName('stars')[0].innerHTML = STAR3;
    if (stars == 4) newCard.getElementsByClassName('stars')[0].innerHTML = STAR4;
    if (stars == 5) newCard.getElementsByClassName('stars')[0].innerHTML = STAR5;
    
    newCard.getElementsByClassName('spec')[0].textContent = doctor.speciality;

    newCard.getElementsByClassName('location')[0].textContent = doctor.location;

    newCard.getElementsByClassName('doctorimg')[0].addEventListener('click', () => location.href = '/doctors/' + doctor.name);

    newCard.getElementsByClassName('fullname')[0].addEventListener('click', () => location.href = '/doctors/' + doctor.name);

    document.getElementById('doctorselection').appendChild(newCard);
}