/*
 * jQuery.minAccord  v0.5.2
 * Copyright (c) 2014-10-15 15:10 Jensen
 * 功能：简易的选项卡切换效果
 * 注意：选项卡下面的内容的位置顺序不能变
 * 修复：只有一个选项卡下面内容不显示问题
 */

jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d)},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b},easeInBounce:function(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*.5+b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b}});

(function($){

    $.ui = $.ui || {};
    $.ui.version = '0.5.2';

    $.fn.extend({
        accordion: function(options,data){
            var args = Array.prototype.slice.call(arguments, 1);
            return this.each(function(){
                if(typeof options == 'string'){
                    var accordion = $.data(this,'ui-tab');
                    accordion[options].apply(accordion,args);
                }else if(!$(this).is('.ui-tab')){
                    $.data(this,'ui-tab',new $.ui.accordion(this,options));
                };
            });
        }
    });

    $.ui.accordion = function(container,options){
        var $this = $(container);
        var _this = this;
        $this.addClass('ui-tab');
        _this.options = options = $.extend({},options);

        var opts = $.extend({
            childId: options.childId,                       //横方向内容展示父节点id, @可缺省
            zHeadClass: options.zHeadClass,                 //只用为纵方向选项卡参数
            zContClass: options.zContClass,                 //只用为纵方向选项卡参数
            chooseClass: options.chooseClass || 'on',       //选项卡被选中样式
            linkA: false,                                   //父节点下面的选中样式是否在a标签上
            events: options.events || 'click',              //事件,默认点击事件
            easings: options.easings,                       //效果种类
            index: options.index || 1,                      //默认显示第几个标签
            autoPlay: options.autoPlay || false,            //是否自动播放
            speed: options.speed || 3                       //播放速度/秒
        },options);

        var parentChilds;  //父节点下面所有子节点
        var childsAll;     //内容所有子节点
        var s = -1;        //初始化标签的序号
        var _scrollObj;    //定时对象
        var styleBoolean = (opts.zHeadClass == undefined); //判断是否纵向选项卡 - 横
        var easingBoolen = (opts.easings == undefined);    //判断是否有动态效果 - 无效果
        var contHeight = 0;    //纵向内容高度
        s += opts.index;   //加上默认第几个显示的数量
        opts.speed = opts.speed * 1000;

        //检验数据合法性
        if(opts.index > len){
            alert('index数值过大');
            return;
        }else if(opts.index <=0 ){
            alert('index数值过小');
            return;
        };

        //通过zHeadClass判断是否横向和竖向选项卡
        if(styleBoolean){    //横向
            parentChilds = $this.children().siblings();
            if(opts.childId == undefined){
                childsAll  = $this.next().children().siblings();
            }else{
                childsAll = $(opts.childId);
            }
            //var childNewId = opts.childId == undefined ? $this.next() : opts.childId;    //判断子切换节点为空或自己定义其他名字

        }else{   //纵向
            parentChilds = $this.find(opts.zHeadClass);
            childsAll = $this.find(opts.zContClass);
            parentChilds.each(function(i){
                $(this).attr('rel',i);
            });
        };

        var len = parentChilds.length;    //标签的数量
        if(len == 0){
            $this.children().addClass(opts.chooseClass);
            $this.next().children().show();
            return;
        }

        //初始化纵向内容框高度
        if(!styleBoolean){
            contHeight = $this.height() - parentChilds.eq(0).outerHeight() * len;     //+边框的高度
            childsAll.css('height',contHeight);
        };

        //标签和下面内容对应显示
        function showCont(n){
            if(easingBoolen){
                childsAll.hide().eq(n).show();
            };
            if(styleBoolean){    //-横向
                var parentNewChild = opts.linkA ? $this.find('a') : parentChilds;
                parentNewChild.removeClass(opts.chooseClass).eq(n).addClass(opts.chooseClass);
                if(!easingBoolen){    //显示效果
                    childsAll.slideUp().eq(n).slideDown({duration:200,easing:opts.easings});
                };
            }else{     //-纵向
                parentChilds.removeClass(opts.chooseClass).eq(n).addClass(opts.chooseClass);
                parentChilds.find('s').removeClass('on').eq(n).addClass('on');    //纵选项卡右侧小点图标切换
                if(!easingBoolen){    //显示效果
                    if(n == 0){    //判断第一个显示效果
                        childsAll.hide().eq(0).show({'height':contHeight},{duration:200,easing:opts.easings});
                    }else{
                        childsAll.hide({'height':0},{duration:200,easing:opts.easings});
                        childsAll.eq(n).show({'height':contHeight},{duration:200,easing:opts.easings});
                    };
                };
            };
        };

        //默认选中显示的标签
        showCont(opts.index - 1);

        //标签效果切换
        parentChilds.bind(opts.events,function(){
            //传参控制效果是否有效
            var options = $.data(container,'ui-tab').options;
            if(!options.disabled && options.disabled != undefined)    //非字符引用会显示undefined
                return false;

            //防止重复点击
            var t = 0;
            parentChilds.each(function(i){
                if($(this).hasClass(opts.chooseClass)){
                    t = $(this).attr('rel');
                    if(t == undefined) t = $(this).index();
                };
                if($(this).find('a').hasClass(opts.chooseClass)){
                    t = $(this).index();
                };
            });

            if(styleBoolean){
                s = $(this).index();    //点击后改变s的值
            }else{
                s = parseInt($(this).attr('rel'));
            };
            if(t == s) return false;
            showCont(s);
        });

        if(len == 1){
            childsAll.show();
            return;
        }

        //播放控制
        var autoControl = {
            init:function(){
                _this = this;
                _this.play();
                _this.binds();
            },
            slide: function(j){
                s += j;
                s = s >= len ? 0 : s;
                showCont(s);
            },
            play: function(){
                _scrollObj = setInterval(function(){
                    _this.slide(1);
                },opts.speed);
            },
            stop: function(){
                clearInterval(_scrollObj);
            },
            binds: function(){
                $this.bind('mouseover',function(){_this.stop();});
                $this.bind('mouseout',function(){_this.play();});
            }
        };

        //判断是否自动播放
        if(opts.autoPlay){
            autoControl.init();
        };

    };

//控制选项卡操作，起效与无效等
    $.ui.accordion.prototype = {
        enable: function(){
            this.options.disabled = true;
        },
        disable: function(){
            this.options.disabled = false;
        }
    };

})(jQuery);