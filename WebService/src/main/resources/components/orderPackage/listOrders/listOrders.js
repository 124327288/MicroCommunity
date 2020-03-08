/**
    入驻小区
**/
(function(vc){
    vc.extends({
        data:{
            orderManageInfo:{
                orderInfo:[],
                total:0,
                records:1,
                // storeTypeCd:vc.getData('/nav/getUserInfo').storeTypeCd,
                conditions: {
                    // name: '',
                    // cityCode:'',
                    // communityId:''
                }
            }
        },
        _initMethod:function(){
            vc.component.listOrders();
        },
        _initEvent:function(){
            vc.on('listOrders','list',function(_param){
                  vc.component.listOrders();
            });
        },
        methods:{
            listOrders:function(){
                vc.component.orderManageInfo.conditions.page = _page;
                vc.component.orderManageInfo.conditions.row = _rows;
                var _param = {
                    params:vc.component.orderManageInfo.conditions
                }
               //发送get请求
               vc.http.get('listOrders',
                            'list',
                            _param,
                             function(json,res){
                                vc.component.orderManageInfo.orderInfo=JSON.parse(json);
                             },function(errInfo,error){
                                console.log('请求失败处理');
                             }
                           );
            },
            _openExitCommunityModel:function(_community){
                vc.emit('storeExitCommunity','openStoreExitCommunityModal',_community);
            },
            _showCommunityStatus(_statusCd){
                if(_statusCd == '1000'){
                    return "入驻审核";
                }else if(_statusCd == '1200'){
                    return "入驻失败";
                }else if(_statusCd == '1100'){
                    return "入驻成功";
                }

                return "未知";
            }
        }
    });
})(window.vc);