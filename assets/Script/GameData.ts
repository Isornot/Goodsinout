export class GameData{
    static BUSINESS_VALUE = 0    //产业价值

    /**
     * 货物信息
     * level - 价格波动等级：
     *      1、未出现涨跌时
     *          level 1（初始价格十）：波动在30以内， 出现涨跌30-50内
     *          level 2（初始价格百）：波动在150以内， 出现涨跌150-300内
     *          level 3（初始价格千）：正常波动500以内， 出现涨跌1000-2000内
     */
    static GOODS = [
        {id: 1, name:'山茶', price:1230, level: 3, priceNormalChange:30, priceBigChange:50},
    ]
}