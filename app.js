$(function() {
    var letterColors = ['#57f035','#ffa1da','#f4a01e','#f5ff55','#e12195','#e55d82','#409edb','#e8bd00','#7b6500','#dd2020','#781112','#666829','#00818c','#6c879a','#131e3a'];
    var pinks = ['#E08296','#EE5C7B','#F298AC','#C51B40','#9F394F'];
    var images = [];
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var changeLetterColors = function(){
        for (i = 0; i < $('body span').length; i++) {
            var num = getRandomInt(0,letterColors.length);
            $($('body span')[i]).css('color',letterColors[num]);
        }
    };
    setInterval(changeLetterColors, 3000);
    changeLetterColors();

    var changeBGColors = function(){
        var num = getRandomInt(0,pinks.length);
        $('body').css('background',pinks[num]);
    };
    setInterval(changeBGColors, 3000);
    changeBGColors();
});
