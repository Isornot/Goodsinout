
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {


    start () {

    }

    onClickStart(){
        cc.director.loadScene('GameMain');
    }
}
