function openNav() {
    document.getElementById("navbar").classList.toggle("start-0");
    document.body.classList.toggle("overflow_hidden");
    document.getElementById("menubtn-icon").classList.toggle("cross");
};

AOS.init({ once: true });

document.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});

document.getElementById('back-to-top').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

setTimeout(() => {
    const preloader = document.getElementById("preloader")
    preloader.classList.add("d-none")
    document.body.classList.remove("overflow-hidden")
}, 3000)