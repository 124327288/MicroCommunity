package com.java110.web.smo.order;

import com.java110.core.context.IPageData;
import com.java110.utils.exception.SMOException;
import org.springframework.http.ResponseEntity;

public interface IListOrdersSMO {
    /**
     * 查询订单信息
     *
     * @param pd 页面数据封装
     * @return ResponseEntity 对象数据
     * @throws SMOException 业务代码层
     */
    ResponseEntity<String> listOrders(IPageData pd) throws SMOException;
}
