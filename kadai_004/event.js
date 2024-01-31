// HTMLドキュメントが読み込み完了したとき
$(window).on({
    'load':() =>{
        console.log('ロードされました');
    },
        
//画面をスクロールしたとき scrollイベントが発生しました
    'scroll':() =>{
        console.log('スクロールされました');
    },
});