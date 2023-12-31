import classNames from "classnames/bind";
import styles from "./OrderInformation.module.scss";
import { formatPrice } from "@/components/formatData/formatData";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);
function OrderInformation({ cart, diliveryPrice, totalPrice }) {
  return (
    <div className={cx("sidebar-content")}>
      <div className={cx("order-summary-selection")}>
        <div className={cx("product-table")}>
          <div className={cx("product-body")}>
            {cart?.cartItems?.map((proItem, index) => {
              return (
                <div className={cx("product-item")} key={index}>
                  <div className={cx("product-img")}>
                    <div className={cx("product-thumbnail-wrapper")}>
                      <img src={proItem?.image} alt="" />
                    </div>
                    <span className={cx("product-thumbnail-quantity")}>
                      {proItem?.amount}
                    </span>
                  </div>
                  <div className={cx("product-description")}>
                    <span className={cx("name")}>{proItem?.name}</span>
                    <div className={cx("item-desc")}>
                      <span>{`${proItem?.size || ""} / ${
                        proItem?.color || ""
                      }`}</span>
                    </div>
                  </div>
                  <div className={cx("product-price")}>
                    <span>{formatPrice(proItem?.price)}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={cx("payment-lines")}>
          <div className={cx("title")}>
            <p>
              Tạm tính
              <span>{formatPrice(cart?.cartTotalAmount)}</span>
            </p>
            <p>
              Phí vận chuyển
              <span>{formatPrice(diliveryPrice)}</span>
            </p>
          </div>
          <div className={cx("total")}>
            <h2>
              Tổng cộng
              <span>{formatPrice(totalPrice)}</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

OrderInformation.propTypes = {
  cart: PropTypes.object,
  diliveryPrice: PropTypes.number,
  totalPrice: PropTypes.number,
};

export default OrderInformation;
