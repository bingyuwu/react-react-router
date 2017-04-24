export const paging=(dom,callback,update)=>{
    let height = 0;
    let windowHeight = document.documentElement.clientHeight || document.body.clientHeight ; //可视区内容
    let setTop = 0;
    let Bottom = 0;
    let oldScrollTop = 0;
    let shuldUpdate=update;

  //  let pageHeight = Math.max(document.body.scrollHeight,document.body.offsetHeight)//真是内容的高度
    dom.addEventListener('touchstart',() => {
        height = dom.offsetHeight;//盒子的高度
        setTop = dom.offsetTop;//距离顶部的高度
    
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
       // srollTop//滚动条滚动的距离
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
    return pageHeight - viewportHeight - scrollHeight < 20;
}


export const toParams=(obj)=>{
    let arr=[],str='?';
    for(let i in obj){
        arr.push(i+"="+obj[i])
    }
    
    return str+=arr.join("&");
}

 
