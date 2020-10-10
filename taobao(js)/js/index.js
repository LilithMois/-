window.addEventListener('load', function () {
    //APP精灵图
    var app = document.getElementById('app');
    var appList = app.querySelectorAll("li");
    for (let i = 0; i < appList.length; i++) {
        var index = i * 67 + 15;
        appList[i].style.backgroundPosition = '-' + index + 'px -11px';
    }
//搜索光标取消value  鼠标切换搜索方式
    var search = document.getElementById('search');
    search.onfocus = function () {
        if (this.placeholder == '711实验室') {
            this.placeholder = '';
        }
        this.style.color = '#333';
    }
    search.onblur = function () {
        if (this.placeholder == '') {
            this.placeholder = '711实验室';
        }
        this.style.color = '#999';
    }

    var choice = document.getElementById('choice');
    var choices = choice.querySelectorAll('a');
    for (let i = 0; i < choices.length; i++) {
        choices[i].onclick = function () {
            for (let i = 0; i < choices.length; i++) {
                choices[i].style.backgroundColor = '';
                choices[i].style.color = '';
            }
            this.style.backgroundColor = '#ffa550';
            this.style.color = '#fff';
        }
    }
//导航栏左侧模块
    var dd = document.getElementById('dd');
    var dds = dd.querySelectorAll('li');
    var left_expand = document.getElementById('left_expand');
    var left_expands = left_expand.querySelectorAll('li');
    var focus = document.getElementById('focus');
    var newsflash = document.getElementById('newsflash');
    for (let i = 0; i < dds.length; i++) {
        left_expands[i].innerHTML = "<h1>" + i + "</h1>";
        dds[i].onmousemove = function () {
            for (let i = 0; i < dds.length; i++) {
                left_expands[i].style.display = 'none';
            }
            left_expands[i].style.display = 'block';
            focus.style.display = 'none';
            newsflash.style.display = 'none';
        }
        dds[i].onmouseout = function () {
            for (let i = 0; i < dds.length; i++) {
                left_expands[i].style.display = 'none';
            }
            focus.style.display = 'block';
            newsflash.style.display = 'block';
        }
        left_expands[i].onmousemove = function () {
            for (let i = 0; i < dds.length; i++) {
                left_expands[i].style.display = 'none';
            }
            left_expands[i].style.display = 'block';
            focus.style.display = 'none';
            newsflash.style.display = 'none';
        }
        left_expands[i].onmouseout = function () {
            for (let i = 0; i < dds.length; i++) {
                left_expands[i].style.display = 'none';
            }
            focus.style.display = 'block';
            newsflash.style.display = 'block';
        }
    }

//animate函数
    function animate(obj, target, callback) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var step = (target - obj.offsetLeft) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            // var step = target - obj.offsetLeft;
            if (obj.offsetLeft == target) {
                clearInterval(obj.timer);
                if (callback) {
                    callback();
                }
            }
            obj.style.left = obj.offsetLeft + step + 'px';
        }, 15)
    }

//轮播图
    var arrow_l = document.getElementById('arrow_l');
    var arrow_r = document.getElementById('arrow_r');
    var focusWidth = focus.offsetWidth;
    focus.addEventListener('mouseenter', function () {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener('mouseleave', function () {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
    })

    var imgul = focus.querySelector('ul');
    var imgol = focus.querySelector('.circle');
    for (let i = 0; i < imgul.children.length; i++) {
        var imgli = document.createElement('li');
        imgli.setAttribute('index', i);
        imgol.appendChild(imgli);
        imgli.addEventListener('click', function () {
            for (let i = 0; i < imgol.children.length; i++) {
                imgol.children[i].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('index');
            num = index;
            circle = index;
            circle = num;
            animate(imgul, -index * focusWidth);
        })
    }
    imgol.children[0].className = 'current';
    var first = imgul.children[0].cloneNode(true);
    imgul.appendChild(first);
    var num = 0;
    var circle = 0;
    arrow_r.addEventListener('click', function () {
        if (num == 5) {
            imgul.style.left = 0;
            num = 0;
        }
        num++;
        animate(imgul, -num * focusWidth);
        circle++;
        if (circle == 4) {
            circle = 0;
        }
        for (let i = 0; i < imgol.children.length; i++) {
            imgol.children[i].className = '';
        }
        imgol.children[circle].className = 'current';
    })
    arrow_l.addEventListener('click', function () {
        if (num == 0) {
            num = imgul.children.length - 1;
            imgul.style.left = -num * focusWidth + 'px';
        }
        num--;
        animate(imgul, -num * focusWidth);
        circle--;
        if (circle < 0) {
            circle = 4;
        }
        for (let i = 0; i < imgol.children.length; i++) {
            imgol.children[i].className = '';
        }
        imgol.children[circle].className = 'current';
    })
    var timer = setInterval(function () {
        arrow_r.click();
    }, 2000)
})