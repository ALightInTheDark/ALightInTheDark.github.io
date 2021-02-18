// 浏览器搞笑标题
 var OriginTitile = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.title = '看不见我看不见我~~';
        clearTimeout(titleTime);
    }
    else {
        document.title = OriginTitile;
        titleTime = setTimeout(function() {
            document.title = OriginTitile;
        }, 500);
    }
 });
