
gsap.registerPlugin(ScrollTrigger);

//헤더 로고 오파시티
gsap.to(".header .headertxt", {
    opacity:0,
    x:-30,
    scrollTrigger: {
        trigger:".header",
        start:"130% top",
        end:"150% top",
        scrub: 1,
        // markers:true,
    }
});

// sc_home
//메인 이미지 pin
gsap.to(".sc_home .group_main", {
    scrollTrigger: {
        trigger:".group_main",
        start:"0% top",
        end:"50% top",
        pin: true,
        // markers:true
    }
});

const homeMotion = gsap.timeline({scrollTrigger: {
    trigger:".sc_home",
    start:"0% top",
    end:"70% top",
    scrub: 1,
    pin:".group_title",
    // markers: true,
}});
homeMotion
.addLabel('a')
.to(".sc_home .group_main .thumb_box", {width:"49%"},'a')
.to(".sc_home .group_main .home_bg", {width:"49%"},'a')
.to(".sc_home .group_sub1", {y:-600},'a')
.to(".sc_home .group_sub1 .home_bg", {opacity:0.4, delay:0.2},'a')
.addLabel('b')
.to(".sc_home .group_sub2", {y: -300},'b')
.to(".sc_home .group_sub2 .home_bg", {opacity:0.4},'b')
.addLabel('c')
.to(".sc_home .group_sub3", {y: -200},'c')
.to(".sc_home .group_sub3 .home_bg", {opacity:0.4},'c');



/*sc_round */
// top round 모션
const roundMotion = gsap.timeline({scrollTrigger: {
    trigger:".sc_round.r_top",
    start:"0% 20%",
    end:"20% top",
    scrub: 1,
    // markers: true,
    // pin:true,
}});
roundMotion
.addLabel('d')
.to(".sc_round.r_top .round_inner", {
    // scale:1.5,
    paddingBottom:"175%",
     width:"175%",
    //  yPercent:5,
    //  backgroundPosition:"-10% 0"
    },'d')
.to(".sc_round.r_top .first",{paddingBottom:"69.9%", width:"69.9%", top:"15.1%", left:"15.1%"},'d')
.to(".sc_round.r_top .third",{paddingBottom:"39.9%", width:"39.9%", top:"30.1%", left:"30.1%"},'d')
.to(".sc_round.r_top .fifth",{paddingBottom:"9.9%", width:"9.9%", top:"45.1%", left:"45.1%"},'d')
// .to(".sc_round.r_top .round_inner", {
//     y:100,
//     },'d+=0.1')




// roundEl = document.querySelectorAll('.sc_round .round_inner');
// roundEl.forEach(l99 => {
//     const roundMotion = gsap.timeline({scrollTrigger: {
//         trigger: l99,
//         start:"-7% top",
//         end:"20% top",
//         scrub: 1,
//         markers:true,
//     }});
// roundMotion
// .addLabel('d')
// .to(".sc_round .round_inner", {paddingBottom:"175%", width:"175%", y:346, backgroundPosition:"-10% 0"},'d')
// .to(".sc_round .first",{paddingBottom:"69.9%", width:"69.9%", top:"15.1%", left:"15.1%"},'d')
// .to(".sc_round .third",{paddingBottom:"39.9%", width:"39.9%", top:"30.1%", left:"30.1%"},'d')
// .to(".sc_round .fifth",{paddingBottom:"9.9%", width:"9.9%", top:"45.1%", left:"45.1%"},'d');
// });


/*sc_work*/
//content_inner 슬라이드업 공통 모션
let i = 0;
slideTxtEl = document.querySelectorAll('.content_inner');
slideTxtEl.forEach(l => {

    const startData = (l.dataset.start)?l.dataset.start:"-20% 88%";
    const endData = (l.dataset.end)?l.dataset.end:"0% 68%";

    const slideUpTxt = gsap.timeline({scrollTrigger: {
        trigger: l,
        start: startData,
        end: endData,
        scrub: 1,
        // markers:true,
    }});

    
    if(i === 1){                      
        slideUpTxt.from(l, {y:"10vw", opacity:0})
    }else if(i === 2){
        slideUpTxt.from(l, {y:"0vw", opacity:1})
    }
    else{
        slideUpTxt.from(l, {y:"20vw", opacity:0})
    }
    i++;
    console.log(i)
});

//hide_box 공통 모션
workimageEl = document.querySelectorAll('.sc_work .hide_box');
let i2 = 0;
workimageEl.forEach(l2 => {
    const hideBoxMotion = gsap.timeline({scrollTrigger: {
        trigger: l2,
        start: "0% 90%",
        end: "10% 90%",
        // markers:true,
    }});

    if(i2 === 2){                      
        hideBoxMotion.to(l2, 1.5, {height:0, ease: Power3.easeInOut})
    }else{
        hideBoxMotion.to(l2, 1.5, {width:0, ease: Power3.easeInOut})
    }
    i2++;
});

//group_bottom 프로젝트 stagger
gsap.to(".sc_work .project_inner", {
    opacity:1,
    y:0,
    stagger: 0.2,
    scrollTrigger: {
        trigger:".sc_work .group_bottom",
        start:"0% 70%",
        end:"20% 70%",
        // markers:true,
    }
});



//more_area 공통 스크롤 애니메이션
moreScaleEl = document.querySelectorAll('.sc_work .more_area');
moreScaleEl.forEach(l3 => {
        gsap.to(l3,{
        scale:1.4,
        scrollTrigger: {
            trigger: l3,
            start:"15% 80%",
            end:"105% 80%",
            toggleActions: "play reverse play reverse",
            // markers:true,
        }
    });
});



//sc_activity 가로스크롤 + 타이틀 슬라이드 업


// $(window).scroll(function(){
//     horizontalScroll.scrollTrigger.update()
// })
// $(window).resize(function(){
//     horizontalScroll.scrollTrigger.update()
//     horizontalScroll.scrollTrigger.refresh()
// })

const textBox = gsap.utils.toArray(".sc_activity .group_slide .text_box");
const horizontalScroll = gsap.timeline({
    ease:'none',
    scrollTrigger: {
    trigger: ".activity_inner1",
    pin:true,
    // pin: ".activity_inner1",
    // pinSpacing: false,
    scrub: 1,
    start: "0% -20%",
    end: "+=2500",
    // markers: true,
    
}});
horizontalScroll
.addLabel('f')
// .to(textBox, {xPercent: (-100 * (textBox.length - 1))},'f')
// .to(textBox, {xPercent: (-100+$(window).width())},'f')
.to('.slide_inner3', {xPercent:-60},'f')
// .to('.slide_inner3', {x:window.innerWidth},'f')
.to(".sc_activity .group_text", {duration:0.03, y:-300},'f');



ScrollTrigger.matchMedia({
    // large
    "(min-width: 1025px)": function() {
        // 시간순서대로
  
    },
    // medium
    "(min-width: 768px) and (max-width: 1024px)": function() {
        // 시간순서대로
    
    },
    // small
    "(max-width: 767px)": function() {
        // 시간순서대로
          
    },
    // all
    "all": function() {
      // 시간순서대로
       
    }
  });



  //bottom round 모션
const roundMotion2 = gsap.timeline({scrollTrigger: {
    trigger:".sc_round.r_bottom .round_inner",
    start:"50% 105%",
    end:"65% 105%",
    scrub: 1,
    // markers: true,
}});
roundMotion2
.addLabel('d')
.to(".sc_round.r_bottom .round_inner", {
    // scale:1.5,
    paddingBottom:"175%",
     width:"175%",
    //  yPercent:5,
    //  backgroundPosition:"-10% 0"
    },'d')
.to(".sc_round.r_bottom .first",{paddingBottom:"69.9%", width:"69.9%", top:"15.1%", left:"15.1%"},'d')
.to(".sc_round.r_bottom .third",{paddingBottom:"39.9%", width:"39.9%", top:"30.1%", left:"30.1%"},'d')
.to(".sc_round.r_bottom .fifth",{paddingBottom:"9.9%", width:"9.9%", top:"45.1%", left:"45.1%"},'d')




// sc_relation 
const relationMotion = gsap.timeline({scrollTrigger: {
    trigger:".sc_relation",
    start:"0% 80%",
    end:"40% 170%",
    // scrub: 1,
    // pin:".group_title",
    markers: true,
    toggleActions:"play play reset play",
    // onEnterBack:function(){
    //     // alert('1')
    //     console.log(111);
    // },
    // onLeaveBack:function(){
    //     // alert('1')
    //     console.log(222);
    // }
},

});
relationMotion
.to(".relation_inner", {y:"-10vw", opacity:1})
.to(".relation_wrap", {y:0, opacity:1, stagger:0.2});





