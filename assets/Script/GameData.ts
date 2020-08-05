export class GameData{
    static BUSINESS_VALUE = 0    //产业价值
    static MONEYNAME = '银两'   //钱币名称

    static GoodsName = [
        'AA',
        'BB',
        'CC',
        'DD',
        'EE'
    ]

    /**
     * 货物信息
     * level - 价格波动等级：
     *      1、未出现涨跌时
     *          level 1（初始价格十）：波动在30以内， 出现涨跌30-50内
     *          level 2（初始价格百）：波动在150以内， 出现涨跌150-300内
     *          level 3（初始价格千）：正常波动500以内， 出现涨跌1000-2000内
     */
    static GOODS = [
        {id: 1, name: GameData.GoodsName[0], price: 1550, level: 3},
        {id: 2, name: GameData.GoodsName[1], price: 9110, level: 3},
        {id: 3, name: GameData.GoodsName[2], price: 220, level: 3},
        {id: 4, name: GameData.GoodsName[3], price: 30, level: 3},
        {id: 5, name: GameData.GoodsName[4], price: 2320, level: 3},
    ]

    /**
     * 市场波动情况
     */
    static MarketChange = [
        {id: 1, name: GameData.GoodsName[0], isAddPrice:true, tip:GameData.GoodsName[0]+'价格上涨'},
        {id: 2, name: GameData.GoodsName[0], isAddPrice:false, tip:GameData.GoodsName[0]+'价格下跌'},
        {id: 3, name: GameData.GoodsName[1], isAddPrice:true, tip:GameData.GoodsName[1]+'价格上涨'},
        {id: 4, name: GameData.GoodsName[1], isAddPrice:false, tip:GameData.GoodsName[1]+'价格下跌'},
        {id: 5, name: GameData.GoodsName[2], isAddPrice:true, tip:GameData.GoodsName[2]+'价格上涨'},
        {id: 6, name: GameData.GoodsName[2], isAddPrice:false, tip:GameData.GoodsName[2]+'价格下跌'},
        {id: 7, name: GameData.GoodsName[3], isAddPrice:true, tip:GameData.GoodsName[3]+'价格上涨'},
        {id: 8, name: GameData.GoodsName[3], isAddPrice:false, tip:GameData.GoodsName[3]+'价格下跌'},
        {id: 9, name: GameData.GoodsName[4], isAddPrice:true, tip:GameData.GoodsName[4]+'价格上涨'},
        {id: 10, name: GameData.GoodsName[4], isAddPrice:false, tip:GameData.GoodsName[4]+'价格下跌'},
    ]
}