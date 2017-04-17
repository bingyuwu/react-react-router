export const paging=(dom,callback,update)=>{
    let height = 0;
    let windowHeight = window.screen.height;
    let setTop = 0;
    let Bottom = 0;
    let oldScrollTop = 0;
    let timer = null;
    let shuldUpdate=update;

  //  let pageHeight = Math.max(document.body.scrollHeight,document.body.offsetHeight)//真是内容的高度
    dom.addEventListener('touchstart',() => {
        height = dom.offsetHeight;//盒子的高度
        setTop = dom.offsetTop;//距离顶部的高度
      //  Bottom = parseInt(Tool.getStyle(dom,'marginBottom'));
    },false)
    dom.addEventListener('touchmove',() => {
        loadMore();

    },false)

    dom.addEventListener('touchend',() => {
        oldScrollTop = document.body.scrollTop
        moveEnd()
    },false)

    let requestID;
    const moveEnd = () => {
        requestID = requestAnimationFrame(() => {
            if (document.body.scrollTop != oldScrollTop) {
                oldScrollTop = document.body.scrollTop;
                moveEnd()
            }else{
                loadMore();
            }
        })
    }


    const loadMore = () => {
            if(shuldUpdate==true){
                if (document.body.scrollTop+windowHeight >= height+setTop) {
                    cancelAnimationFrame(requestID)
                    shuldUpdate=false
                    callback();
                    console.log("到底部触发")
                }
            }

            console.log(shuldUpdate);
    }

}

const lowEnough=()=>{
    var pageHeight = Math.max(document.body.scrollHeight,document.body.offsetHeight)//真是内容的高度

    var viewportHeight = document.documentElement.clientHeight || document.body.clientHeight ; //可视区内容

    var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop //滚动条滚动的距离
    // console.log(pageHeight);
    // console.log(viewportHeight);
    // console.log(scrollHeight);
    return pageHeight - viewportHeight - scrollHeight < 20;
}
