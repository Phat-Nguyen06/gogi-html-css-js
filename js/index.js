window.addEventListener("load", function () {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.style.opacity = "0";
      loader.style.transition = "opacity 0.5s ease";
      setTimeout(() => loader.style.display = "none", 500); // ẩn hẳn sau khi mờ đi
    }
  }, 1200);
});

const sliderData = [
  {
    title: "Lẩu bull gogi",
    description: "Lẩu Bulgogi là món ăn truyền thống của Hàn Quốc, được tạo nên từ các loại thịt bò được ướp trong nước sốt đậm đà và nấu trong nồi lẩu sôi sùng sục. Thịt bò mềm ngọt hòa quyện cùng các loại rau củ tươi ngon như nấm, bắp cải và hành lá, tạo ra hương vị đậm đà và hấp dẫn. Món lẩu này được thưởng thức nóng hổi, giúp ấm áp cơ thể và khơi dậy vị giác. Lẩu Bulgogi là sự lựa chọn hoàn hảo cho bữa ăn gia đình hay tụ họp bạn bè, mang đến trải nghiệm ẩm thực đầy thú vị.",
    image: "../assets/img/img-slider-right/lau_bulgogi_1.png"
  },
  {
    title: "Canh kim chi",
    description: "Canh Kim Chi là món canh truyền thống của Hàn Quốc, mang hương vị đặc trưng của kim chi chua cay, kết hợp cùng các nguyên liệu tươi ngon khác. Lớp nước canh trong veo được nêm nếm vừa vặn, tôn lên vị chua của kim chi và vị ngọt tự nhiên của các thành phần khác như tôm, thịt, nấm và rau củ. Sự hòa quyện của những hương vị này tạo nên một món canh đầy dinh dưỡng và hấp dẫn, vừa ấm áp dễ uống lại vừa kích thích vị giác. Canh Kim Chi là một lựa chọn hoàn hảo để bắt đầu hoặc kết thúc bữa ăn truyền thống Hàn Quốc.",
    image: "../assets/img/img-slider-right/Canh_kim_chi_1.png"
  },
  {
    title: "Tôm nướng Gogi (ALC)",
    description: "Tôm Nướng Gogi là một món ăn hấp dẫn trong ẩm thực Hàn Quốc, kết hợp hương vị ngọt của tôm với vị cay, thơm của nước sốt gogi. Những con tôm tươi ngon được nướng vàng ươm trên ngọn lửa, tạo ra lớp vỏ giòn bên ngoài và thịt tôm mềm ngọt bên trong. Món ăn được chan đều nước sốt gogi chua cay, mang lại sự hoà quyện đầy thú vị giữa các hương vị. Tôm Nướng Gogi thường được thưởng thức cùng các món ăn khác như cơm, rau sống và kim chi, tạo nên một bữa ăn Hàn Quốc đậm đà và đầy hấp dẫn.",
    image: "../assets/img/img-slider-right/tom_alc_1.png"
  },
  {
    title: "Má heo Mỹ tươi/Sốt obathan",
    description: "Má heo Mỹ tươi với sốt obathan gogi là một món ăn truyền thống của Hàn Quốc. Thịt lợn được ướp gia vị đậm đà, xào cùng với sốt obathan gogi cân bằng ngọt, mặn và cay. Món ăn này thường được ăn kèm với cơm trắng hoặc rau sống để tạo nên một bữa ăn hoàn chỉnh.",
    image: "../assets/img/img-slider-right/ma-heo-my.png"
  },
  {
    title: "Diềm bụng bò Mỹ/ Canada Tươi/ sốt OBT",
    description: "Salad cải bó xôi là một món ăn gồm những chiếc lá cải bó xôi tươi xanh mướt, được trộn với các nguyên liệu như thịt bò, hành tây, tỏi, nước tương và gia vị. Các thành phần này thường được nướng lên để tạo ra hương vị đậm đà, ngọt bùi. Khi ăn, salad được cuốn cùng với các loại rau sống như xà lách, rau mùi và chan thêm nước sốt đặc trưng. Sự kết hợp giữa vị ngọt của thịt nướng, vị chua của nước sốt và sự giòn mềm của các loại rau tạo nên một món ăn đầy hương vị và cân bằng dinh dưỡng.",
    image: "../assets/img/img-slider-right/diem_bung_tuoi_200_1.png"
  },
  {
    title: "Sườn Non Bò Mỹ LA Sốt Galbir",
    description: "Salad cải bó xôi là một món ăn gồm những chiếc lá cải bó xôi tươi xanh mướt, được trộn với các nguyên liệu như thịt bò, hành tây, tỏi, nước tương và gia vị. Các thành phần này thường được nướng lên để tạo ra hương vị đậm đà, ngọt bùi. Khi ăn, salad được cuốn cùng với các loại rau sống như xà lách, rau mùi và chan thêm nước sốt đặc trưng. Sự kết hợp giữa vị ngọt của thịt nướng, vị chua của nước sốt và sự giòn mềm của các loại rau tạo nên một món ăn đầy hương vị và cân bằng dinh dưỡng.",
    image: "../assets/img/img-slider-right/ba_chi_bo_my_sot_mat_ong_1_1.png"
  },
];

const sliderList = document.querySelector(".header-slider-right-js");
let currentIndex = 0;

// Render tất cả slide một lần
function renderSlides() {
  let slidesHTML = '';

  sliderData.forEach((item, index) => {
    slidesHTML += `
      <div class="header-slider-content ${index === 0 ? 'active' : ''}">
        <h2 class="slider-title">${item.title}</h2>
        <p class="slider-description">${item.description}</p>
        <button class="see-more">See more</button>
        <div class="image-slider">
          <button class="prev">&lt;</button>
          <img src="${item.image}" alt="Món ăn" id="slider-image" class="slider-image">
          <button class="next">&gt;</button>
        </div>
      </div>
    `;
  });

  sliderList.innerHTML = slidesHTML;

  // Gắn sự kiện cho tất cả prev/next sau khi render xong
  sliderList.querySelectorAll(".prev").forEach(btn => {
    btn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + sliderData.length) % sliderData.length;
      updateActiveSlide();
    });
  });

  sliderList.querySelectorAll(".next").forEach(btn => {
    btn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % sliderData.length;
      updateActiveSlide();
    });
  });
}

// Hiển thị đúng slide
function updateActiveSlide() {
  document.querySelectorAll(".header-slider-content").forEach((slide, index) => {
    if (index === currentIndex) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}

renderSlides();

// Tự động chuyển slide
let sliderInterval;
let isPaused = false;

function startAutoSlide() {
  sliderInterval = setInterval(() => {
    if (!isPaused) {
      currentIndex = (currentIndex + 1) % sliderData.length;
      updateActiveSlide();
    }
  }, 4000);
}

startAutoSlide();
// ------------------------------------------------------------

let descTitle = document.getElementById("desc-title");
let descContent = document.getElementById("desc-content");
let imgDesc = document.querySelector(".img-from-slider");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const targetText = document.querySelector(".slider-title");

    if (!targetText) return;

    if (entry.isIntersecting) {
      // console.log("⚡ Người dùng đã vào phần mô tả");
      clearInterval(sliderInterval); // Dừng tự động chuyển slide
      isPaused = true; // Đánh dấu là đang dừng
      descTitle.textContent = sliderData[currentIndex].title;
      descTitle.style.animation = 'headerShowContent 0.3s ease-in-out 1 forwards';
      descContent.textContent = sliderData[currentIndex].description;
      descContent.style.animation = 'headerShowContent 0.5s 0.3s ease-in-out 1 forwards';
      imgDesc.src = sliderData[currentIndex].image;
      imgDesc.alt = sliderData[currentIndex].title;
    } else {
      // console.log("👋 Người dùng đã rời khỏi phần mô tả");
      if (isPaused) {
        startAutoSlide(); // Chạy lại tự động
        isPaused = false;
      }
    }
  });
}, {
  root: null,
  threshold: 0.5,
});


const target = document.getElementById("header_product_desciption-js");
observer.observe(target);


// YOUR BEST CHOICE
const bestChoiceSection = document.querySelector(".your-best-choice-js");
let bestChoiceItem = document.querySelectorAll(".best-choice-item");
let BestChoiceTitle = document.querySelector(".best-choice-title");

const bestChoiceObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      BestChoiceTitle.style.animation = "bestChoiceTitle 0.8s ease-in-out 1 forwards";

      bestChoiceItem.forEach(item => {
        item.style.animation = "bestChoiceItem 0.8s ease-in-out 1 forwards";
      });
    }
  });
}, {
  root: null,       // Mặc định là viewport
  threshold: 0.3    // Phải thấy ít nhất 30% phần tử
});

if (bestChoiceSection) {
  bestChoiceObserver.observe(bestChoiceSection);
}




// Làm tính năng thêm giỏ hàng với click giỏ hàng




// let imgArray = ["img1", "img2", "img3"];
// let imgDesc = document.querySelector(".desc-img");


// let silders = document.querySelectorAll(".header-slider-content");
// let currslider = 0;

// function showSlider(index) {
//     silders.forEach(element => {
//         element.classList.remove("active");
//     });

//     silders[index].classList.add("active");

//     imgDesc.innerHTML = imgArray[index];
// }


// let prev = document.querySelector(".prev");
// let next = document.querySelector(".next");

// prev.addEventListener('click', () => {
//     currslider--;
//     if(currslider < 0) {
//         currslider = silders.length -1;
//     }

//     showSlider(currslider);
// });

// next.addEventListener('click', () => {
//     currslider++;
//     if(currslider == silders.length) {
//         currslider = 0;
//     }

//     showSlider(currslider);
// });

// function autoAnimationSlider() {
//     currslider++;
//     if(currslider == silders.length) {
//         currslider = 0;
//     }

//     showSlider(currslider);

// }

// let id = setInterval(autoAnimationSlider, 5000);
// clearInterval(id);
