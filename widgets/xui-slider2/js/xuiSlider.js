((function(){
    var xuiSlider = function(options){
        var settings = $.extend({}, {
            selector:'.xui-slider',
            default_index: 0,
            interval: 2000,
            slide_speed: 500
        }, options );

        this.$slide = $(settings.selector);
        this.current_index = settings.default_index;
        this.interval = settings.interval;
        this.slide_speed = settings.slide_speed;
        
        this.slide_num = 0;
        this.$wrap = this.$slide.find(".xui-slider-wrap");
        this.slide_width = this.$slide.width();
    
        this.$slide.find(".xui-slider-stage").width(this.slide_width+'px');
        this.$slide.find(".xui-slider-item").width(this.slide_width+'px');
        
        this.init();

        setInterval(function(){
            this.next();
        }.bind(this), this.interval);
    };
    
    xuiSlider.prototype.init = function(){
        var $first = this.$slide.find(".xui-slider-item").first().clone();
        var $last = this.$slide.find(".xui-slider-item").last().clone();
        this.$wrap.append($first);
        this.$wrap.prepend($last);

        this.slide_num = this.$slide.find(".xui-slider-item").length;
        this.$wrap.width(this.slide_width * this.slide_num + 'px');
        
        console.log(":) xuiSlider inited.");   
    };

    xuiSlider.prototype.swap = function(index){
        this.current_index = index;
        var offset_left = -this.current_index * this.slide_width;
        this.$wrap.css('left', offset_left + 'px');
    };

    xuiSlider.prototype.next = function(){
        if (this.current_index >= (this.slide_num-1)){
            this.swap(1);
        }
        this.current_index ++;
        console.log(this.current_index);
        var offset_left = -this.current_index * this.slide_width;

        this.$wrap.animate({left: offset_left + 'px'}, this.slide_speed, "linear");
    }
    
    window.xuiSlider = xuiSlider;
})(jQuery));