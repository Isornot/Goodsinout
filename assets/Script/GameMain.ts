import { GameData } from "./GameData";
import ViewBase from "./common/ViewBase";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends ViewBase {

    @property(cc.Prefab)
    pbMarketItem: cc.Prefab = null;   //市场预制

    @property(cc.Node)
    cttMarket: cc.Node = null;   //市场ctt

    @property(cc.Node)
    cttWareHouse: cc.Node = null;   //货仓ctt

    @property(cc.Label)
    lblTime: cc.Label = null;   //时间 - 时间：1/60年

    @property(cc.Label)
    lblMoney: cc.Label = null;   //现银 - 现银：0

    @property(cc.Label)
    lblProperty: cc.Label = null;   //身家 - 身家：0

    @property(cc.Label)
    lblReputation: cc.Label = null;   //名声 - 名声：0

    @property(cc.Label)
    lblMood: cc.Label = null;   //心情 - 心情：50(<30||>70触发事件)

    @property(cc.Label)
    lblMarketInfo: cc.Label = null;   //市场信息

    @property(cc.Prefab)      //购买货物弹窗
    goodsBuyPrefab: cc.Prefab = null;

    @property(cc.Node)      //遮罩
    mask: cc.Node = null;

    currentTime = 1;     //当前时间
    totalTime = 60;  //总时间
    money = 0;   //钱
    mood = 50; //心情
    reputation = 0;  //名声
    showGoodsTotalCount = 4; //显示的商品总量
    dialogGoodsBuy: cc.Node;    //弹窗-购买货物
    

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        super.start();
    }

    initData(){
        this.currentTime = 1;
        this.totalTime = 60;
        this.money = 10000;
        this.mood = 50;
        this.reputation = 0;
    }

    initView(){
        this.updateTime();
        this.updateMoney();
        this.updateProperty();
        this.updateMood();
        this.updateReputation();
        this.updateGoods();
    }
    
    /**
     * 设置时间
     * @param value 当前时间（可选）
     */
    updateTime(value?){
        if(value){
            this.currentTime = value;
        }
        this.lblTime.string = '时间:'+this.currentTime+'/'+this.totalTime;
    }

    /**
     * 更新现银
     * @param value 当前现银
     */
    updateMoney(value?){
        if(value){
            this.money = value;
        }
        this.lblMoney.string = '现银：'+this.money;
        this.updateProperty();
    }

    /**
     * 更新身家
     */
    updateProperty(){
        this.lblProperty.string = '身家：'+this.money+GameData.BUSINESS_VALUE;
    }

    /**
     * 更新心情值
     * @param value 心情值
     */
    updateMood(value?){
        if(value){
            this.mood = value;
        }
        this.lblMood.string = '心情：'+this.mood;
    }

    /**
     * 更新名声值
     * @param value 名声值
     */
    updateReputation(value?){
        if(value){
            this.reputation = value;
        }
        this.lblReputation.string = '名声：'+this.reputation;
    }

    updateGoods(){
        let array = GameData.GOODS;
        cc.log('array..'+JSON.stringify(array))
        let getedIdArr = [];
        for(let i = 0; i<this.showGoodsTotalCount; i++){
            let randNum = 0
            let bNew = false;
            let count = 0;  //测试数据
            while(!bNew){
                count++;
                bNew = true;
                cc.log('凑童年：'+count);
                randNum = parseInt(Math.random()*array.length+'');
                cc.log('randNum:'+randNum)
                if(array[randNum]){
                    for(let j = 0; j<getedIdArr.length; j++){
                        if(randNum == getedIdArr[j]){
                            bNew = false;
                        }
                    }
                    if(bNew){
                        getedIdArr.push(randNum);
                        bNew = true;
                    }
                }                    
            }
        }

        cc.log('geditedarrl:'+JSON.stringify(getedIdArr))
        for (let i = 0; i < getedIdArr.length; i++) {
            const element = array[getedIdArr[i]];
            let item = cc.instantiate(this.pbMarketItem);
            let info = {
                id: element.id,
                name: element.name,
                price: element.price    //TODO 根据涨幅判定价格
            }
            item.getComponent(item.name).updateData(info);
            item.getComponent(item.name).setCallBack(()=>{
                cc.log('点击购买货物')
                this.showGoodsBuyDialog(info);
            });
            this.cttMarket.addChild(item);
            // 准备加载item
        }
    }
    
    showGoodsBuyDialog(info){
        cc.log('显示购买窗口')
        if(this.dialogGoodsBuy){
            this.dialogGoodsBuy.active = true;
            this.mask.active = true;
            this.dialogGoodsBuy.getComponent(this.dialogGoodsBuy.name).updateData(info);
        }else{
            this.node.addChild(cc.instantiate(this.goodsBuyPrefab));
        }
    }

    showMask(bflag){
        this.mask.active = bflag;
    }

    /*=================================== 点击事件 ===================================*/

    onClickMask(){
        this.showMask(false);
    }

    onClickNext(){
        // cc.log('点击下一年');
        this.currentTime += 1;
        this.lblTime.string = '时间：'+this.currentTime+'/'+this.totalTime;
    }

    // update (dt) {}
}
