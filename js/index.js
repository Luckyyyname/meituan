window.onload = function() {
    let dropdown = document.getElementById("dropdown");

    let dropright = document.getElementById("dropright");
    let droprightLi = dropright.getElementsByTagName("li");

    let playLeftButton = document.getElementById("buttonLeft");
    let playRightButton = document.getElementById("buttonRight");

    let carouselPic = document.getElementById("carousel");
    let carouselBox = document.getElementById("carouselBox");
    let links = carouselBox.getElementsByTagName("a");
    let carouselBarLi = document.getElementById("carouselBar").getElementsByTagName("li");

    let movieBody = document.getElementById("movieBody");
    let movieLeftButton = document.getElementById("movieLeft");
    let movieRightButton = document.getElementById("movieRight");

    let movieHead = document.getElementById("movieHead");
    let movieHeadLi = movieHead.getElementsByTagName("li");
    let movieOnTag = movieHead.getElementsByClassName("triangle");

    let movieHot = document.getElementById("movieHot");
    let movieUpcoming = document.getElementById("movieUpcoming");

    let hotelHead = document.getElementById("hotelHead");
    let hotelHeadLi = hotelHead.getElementsByTagName("li");
    let hotelOnTag = hotelHead.getElementsByClassName("triangle-hotel");
    let hotelBody = document.getElementsByClassName("hotel-body-main");

    let i, k, play;
    let add = 1, num = 0, selectArea = 1, hotelnow = 0;
    let picHref = ['https://waimai.meituan.com/','https://bj.meituan.com/meishi/','https://www.maoyan.com/','https://hotel.meituan.com/beijing/','https://paidui.meituan.com/?activity_code=169_00038142'];
    carouselBarLi[0].style.cssText = "background: #fff; opacity: 1; ";
    links[0].href = picHref[0];

    //首部右侧hover效果
    dropdown.onmouseover = function(e){
        const target = e.target || e.srcElement;
        const targetLi = target.parentNode;
        if(targetLi.id !== "phoneapp"){
            targetLi.classList.add("show");
            target.classList.add("navBorder");
        }
    }
    dropdown.onmouseout = function(e){
        const target = e.target || e.srcElement;
        const targetLi = target.parentNode;
        if(targetLi.id !== "phoneapp"){
            targetLi.classList.remove("show");
            target.classList.remove("navBorder");
        }
    }

    //主体部分左侧菜单栏hover后效果
    for(i = 0; i < droprightLi.length; i++){

        droprightLi[i].onmouseover = function(){

            this.classList.add("show");

            let droprightSpan = this.getElementsByTagName("span")[0];
            droprightSpan.classList.add("fweight");

            if(droprightSpan.innerHTML === "酒店"){
                let droprightHot = this.getElementsByTagName("span")[1];
                droprightHot.classList.add("getHot");
            }

        };
        droprightLi[i].onmouseout = function(){

            this.classList.remove("show");

            let droprightSpan = this.getElementsByTagName("span")[0];
            droprightSpan.classList.remove("fweight");

            if(droprightSpan.innerHTML === "酒店"){
                let droprightHot = this.getElementsByTagName("span")[1];
                droprightHot.classList.remove("getHot");
            }

        };
    }


    //轮播条函数
    let barPlay = function(){
        k = add - 1;
        links[0].href = picHref[k];
        for(i = 0; i <carouselBarLi.length; i++){
            carouselBarLi[i].style.cssText = "background: #fff; opacity: .2; ";
            if( i === k){
                carouselBarLi[i].style.cssText = "background: #fff; opacity: 1; ";
            }
        }
    };

    //轮播图效果
    function carouselPlay() {
        play = setInterval(function(){
            add++;
            if(add > 5){
                add = 1;
            }
            carouselPic.src = "images/ad0"+ add +".jpg";

            barPlay();
        },3000);
    };

    carouselPlay();

    //轮播图区域左右键显示
    carouselBox.onmouseover = function(){
        playLeftButton.style.display = "block";
        playRightButton.style.display = "block";

        clearInterval(play);
    };
    carouselBox.onmouseout = function(){
        playLeftButton.style.display = "none";
        playRightButton.style.display = "none";

        carouselPlay();
    };

    //轮播图区域左右键切换图片
    playLeftButton.onclick = function(){
        add--;
        if(add <= 0){
            add = 5;
        }
        carouselPic.src = "images/ad0"+ add +".jpg";

        barPlay();
    };
    playRightButton.onclick = function(){
        add++;
        if(add > 5){
            add = 1;
        }
        carouselPic.src = "images/ad0"+ add +".jpg";

        barPlay();
    };

    //鼠标滑过轮播条切换图片
    for(i = 0; i < carouselBarLi.length; i++){
        carouselBarLi[i].onmouseover = function(){
            add = this.innerHTML;
            carouselPic.src = "images/ad0"+ add +".jpg";
            links[0].href = picHref[add - 1];

            barPlay();
        }
    }

    //电影主题区域左右键显示
    movieBody.onmouseover = function(){
        movieLeftButton.style.display = "block";
        movieRightButton.style.display = "block";
    }
    movieBody.onmouseout = function(){
        movieLeftButton.style.display = "none";
        movieRightButton.style.display = "none";
    }

    //电影滑动效果
    let timenum = 0;
    movieRightButton.onclick = function(){
        let moviePlayRight = setInterval(function(){
            if(timenum <= 47 && timenum >= 0){
                num -= 29.125;
                if(selectArea === 1){
                    movieHot.style.left = num + "px";
                }else {
                    movieUpcoming.style.left = num + "px";
                }
                timenum++;
                if(timenum === 32){
                    clearInterval(moviePlayRight);
                }
                if(timenum === 48 ){
                    clearInterval(moviePlayRight);
                }
            }else {
                clearInterval(moviePlayRight);
            }
        },20);
    }
    movieLeftButton.onclick = function(){
        let moviePlayLeft = setInterval(function(){
            if(timenum <= 48 && timenum > 0){
                num += 29.125;
                if(selectArea === 1){
                    movieHot.style.left = num + "px";
                }else {
                    movieUpcoming.style.left = num + "px";
                }
                timenum--;
                if(timenum === 32){
                    clearInterval(moviePlayLeft);
                }
                if(timenum === 0){
                    clearInterval(moviePlayLeft);
                }
            }else {
                clearInterval(moviePlayLeft);
            }
        },20);
    }

    //鼠标滑过电影头部箭头效果
    movieHeadLi[1].onmouseover = function(){
        movieHot.style.display = "block";
        movieUpcoming.style.display = "none";

        movieOnTag[1].classList.add("displaynone");
        movieOnTag[0].classList.remove("displaynone");

        num = 0;
        movieUpcoming.style.left = num + "px";
        timenum = 0;
        selectArea = 1;
    };
    movieHeadLi[2].onmouseover = function(){
        movieUpcoming.style.display = "block";
        movieHot.style.display = "none";

        movieOnTag[0].classList.add("displaynone");
        movieOnTag[1].classList.remove("displaynone");
        num = 0;
        movieHot.style.left = num + "px";
        timenum = 0;
        selectArea = -1;
    };

    //推荐民宿头部
    for(let x = 1; x < hotelHeadLi.length - 1; x++){
        hotelHeadLi[x].onmouseover = function(){
            hotelBody[hotelnow].classList.add("displaynone");
            hotelOnTag[hotelnow].classList.add("displaynone");
            hotelnow = x-1;
            hotelBody[hotelnow].classList.remove("displaynone");
            hotelOnTag[hotelnow].classList.remove("displaynone");
        }
    }                                 
};
 