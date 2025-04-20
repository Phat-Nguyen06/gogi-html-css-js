let sildersBlog = document.querySelectorAll(".blog-post");
let currslider = 0;

function showSliderBlog(index) {
    sildersBlog.forEach(sliderData => {
        sliderData.classList.remove("blog-post-active");
    });

    sildersBlog[index].classList.add("blog-post-active");
}

function autoAnimationSliderBlog() {
    currslider++;
    if(currslider >= sildersBlog.length) {
        currslider = 0;
    }

    showSliderBlog(currslider);
}

setInterval(autoAnimationSliderBlog, 3000);