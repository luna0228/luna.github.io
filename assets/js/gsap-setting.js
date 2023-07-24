//滑鼠箭頭動畫
var cursor = document.querySelector(".cursor"),
    page_link = document.querySelectorAll("a"),
    banner_title = document.querySelectorAll(".banner-title h2"),
    work_item = document.querySelectorAll(".work-list li")
mouseX = 0,
    mouseY = 0

gsap.to({}, 0.010, {
    repeat: -1,

    onRepeat: function () {
        gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        })
    }

});


window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY
});


page_link.forEach(link => {
    link.addEventListener("mouseleave", () => {
        cursor.classList.remove("grow");
    });
    link.addEventListener("mousemove", () => {
        cursor.classList.add("grow");

    });
});


banner_title.forEach(link => {
    link.addEventListener("mouseleave", () => {
        cursor.classList.remove("grow-big");
    });
    link.addEventListener("mousemove", () => {
        cursor.classList.add("grow-big");
    });
});

work_item.forEach(link => {
    link.addEventListener("mouseleave", () => {
        cursor.classList.remove("black");
    });
    link.addEventListener("mousemove", () => {
        cursor.classList.add("black");
    });
});


//照片進入
gsap.utils.toArray('.page-content .imgBox').forEach((item, index) => {

    gsap.fromTo(item, { x: 0, y: 50, autoAlpha: 0 }, {
        duration: 2,
        delay: 0.5,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto",
        scrollTrigger: {
            trigger: item,
            toggleActions: "restart resume none resume"
        }
    });
});


//home
//月亮升起

const moon = gsap.timeline();
ScrollTrigger.create({
    animation: moon,
    trigger: ".section-banner",//偵測區塊
    start: "top top",//偵測區塊 動畫開始點
    end: "+=1000",//偵測區塊 動畫結束點
    scrub: 5,//跟著滾輪滾動時true 或數字(越大越滑順)
    pin: true,
    anticipatePin: 1
});

var moveX = window.innerWidth < 991 ? -200 : -600;
var moveY = window.innerWidth < 991 ? 650 : 500;

moon.from(
    ".moon",
    { yPercent: moveY, xPercent: moveX, ease: "ease", },
    "up"
)

//關於我進入
const aboutme = gsap.timeline();
ScrollTrigger.create({
    animation: aboutme,
    trigger: ".section-aboutme",
    toggleActions: "restart resume restart resume"
});

aboutme.fromTo(".section-aboutme .right", { x: 100, y: 0, autoAlpha: 0 }, {
    duration: 2,
    delay: 0.5,
    x: 0,
    y: 0,
    autoAlpha: 1,
    ease: "expo",
    overwrite: "auto"
});


//技能滾動
//console.log(window.innerWidth)

if (window.innerWidth > 991) {
    var skill_W = document.querySelector(".skill-list").scrollWidth,
        skillBox_W = document.querySelector(".skill-box").offsetWidth;
    //console.log(skill_W - skillBox_W);

    gsap.to(".skill-list", {
        scrollTrigger: {
            trigger: ".section-skills",
            //star: "top bottom",
            //end: "bottom top",
            scrub: 5,
        },
        x: (-(skill_W - skillBox_W))
    });
}



//經驗進入
gsap.utils.toArray('.experience-list li').forEach((item, index) => {

    gsap.fromTo(item, { x: 0, y: 100, autoAlpha: 0 }, {
        duration: 2,
        delay: 0.5,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto",
        scrollTrigger: {
            trigger: item,
            toggleActions: "restart resume restart resume"
        }
    });
});
