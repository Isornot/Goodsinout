import ViewBase from "./common/ViewBase";

const {ccclass, property} = cc._decorator;

@ccclass
export default class marketItem extends ViewBase {

    @property(cc.Label)
    lblName: cc.Label = null;

    @property(cc.Label)
    lblPrice: cc.Label = null;

    @property(cc.Label)
    lblCount: cc.Label = null;


    // onLoad () {}

    start () {

    }

    updateData(info){
        this.lblName.string = info.name;
        this.lblPrice.string = info.price+'';
        this.lblCount.string = info.count+'';
    }

    onClickItem(){
        cc.log('点击'+this.gid)
        if(this.callback){
            cc.log('sds')
            this.callback();
        }        
    }
}
