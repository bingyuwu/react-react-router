import React,{Component} from 'react'
export default class Category extends Component{
    constructor(){
        super();
        this.state={
            active:false,
            csData:[
                {
                    title:"面料",
                    active:false,
                    data:[
                        {name:"棉纶"},
                        {name:"纯棉"},
                        {name:"涤纶"},
                        {name:"棉锦"}
                      ]
                },
                {
                    title:"棉料",
                    active:false,
                    data:[
                        {name:"棉纶"},
                        {name:"纯棉"},
                        {name:"涤纶"},
                        {name:"棉锦"}
                      ]
                }
            ]
        }
    }
    toggleClass(index){
        const {csData} = this.state;
        csData[index].active=!csData[index].active
        this.setState({csData:csData})
    }
    render(){
            const list=this.state.csData.map((item,index)=>(
                <div key={index}>
                <span className={`dt ${item.active==true?'down':''}`}
                      onClick={this.toggleClass.bind(this,index)}>
                     {item.title}
                </span>
                <ul className={item.active==true?'show':''}>
                   {item.data.map((val,i)=>( <li key={i}>{val.name}</li>))}
                </ul>
                </div>
               ))
          return(
            <div>
                <header className="header">
                    <h1>分类</h1>
                </header>
                <div className="categoryContent paddingTop padingBottom">
                {list }
                </div>
            </div>
            )
    }
}