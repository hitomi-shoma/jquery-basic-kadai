$(function(){
    // id="change-color"ボタンを押すと、p要素(id=target)の文字色が変わる
    $('#change-color').on('click',function(){
        $('#target').css('color','red');
    });
    // id="change-text"ボタンを押すと、p要素(id=target)の文字内容が変わる
    $('#change-text').on('click',function(){
        $('#target').text('Hello!に変わりました');
    });
    // id="fade-out"ボタンを押すと、p要素(id=target)のフェードアウトで文字が消える
    $('#fade-out').on('click',function(){
        $('#target').fadeOut();
    });
    // id="fade-inボタンを押すと、フェードインでp要素(id=target)の文字が現れる
    $('#fade-in').on('click',function(){
        $('#target').fadeIn();
    });
});