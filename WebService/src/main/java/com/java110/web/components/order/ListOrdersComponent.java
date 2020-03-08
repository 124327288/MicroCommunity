package com.java110.web.components.order;


import com.java110.core.context.IPageData;
import com.java110.web.smo.order.IListOrdersSMO;
import com.java110.web.smo.org.IListOrgCommunitysSMO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;


/**
 *
 */
@Component("listOrders")
public class ListOrdersComponent {

    @Autowired
    private IListOrdersSMO listOrdersSMO;


    /**
     * 查询订单列表
     *
     * @param pd 页面数据封装
     * @return 返回 ResponseEntity 对象
     */
    public ResponseEntity<String> list(IPageData pd) {
        return listOrdersSMO.listOrders(pd);
    }

}
