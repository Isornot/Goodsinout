import ViewBase from "./common/ViewBase";

const {ccclass, property} = cc._decorator;

@ccclass
export default class buyGoods extends ViewBase {

    @property(cc.EditBox)
    buyCount: cc.EditBox = null;

    @property(cc.Label)
    lblName: cc.Label = null; 

    @property(cc.Label)
    lblMostCount: cc.Label = null;     //  

    mostCount:0;
    price:0;    //单价

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.buyCount.string = '1';
    }

    updateData(info){
        this.price = info.price
        this.buyCount.string = (info.mostCount==0?0:1)+'';
        this.lblMostCount.string = '最多可购入'+info.name+info.mostCount+'杯';
        this.mostCount = info.mostCount;
        this.lblName.string = info.name;
    }

    onSliderChange(slider){
        cc.log('拖动数量滑块'+Math.floor(slider.progress*this.mostCount))
        this.buyCount.string = Math.floor(slider.progress*this.mostCount)+'';
    }

    onClickSure(){
        // cc.log('点击确定 ')
        let buyCount = parseInt(this.buyCount.string)
        if(this.callback){
            this.callback(buyCount*this.price);
        }
        // this.node.active = false;
    }

    onClickCanel(){
        if(this.callback){
            this.callback(0);
        }
    }

    // update (dt) {}
}
