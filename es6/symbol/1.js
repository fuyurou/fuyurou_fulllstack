class PureFullPage{
    constructor(options){
        const defaultOptions={
            isShowNav :true,
            delay:1000,
            definePages:()=>{}
        }

        this.options=Object.assign(defaultOptions,options);
        console.log(this.options);
        this.container=document.getElementById('pureFULLpAGE');
        this.viewHeight=document.documentElement.clientHeight;
        this.DELAY=this.options.delay;
        this.currentPosition=0;
        this,init();
    }
    init(){
        this.container.style.height=`${this.viewHeight.Height}px`;
        const handleMouseWheel=untils.throttle(this.scrollMouse,this,this.DELAY)
        if(navigator.userAgent.toLocaleLowerCase().indexOf('firefox')===-1){
            document.addEventListener('mousewheel',handleMouseWheel,false);
        }
        else {
            docume
        }
    }
}