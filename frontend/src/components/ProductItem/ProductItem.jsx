import classNames from "classnames/bind";
import styles from "./ProductItem.module.scss";
import PropTypes from "prop-types";
import { useMemo } from "react";
import Skeleton from "@mui/material/Skeleton";
import { Link, NavLink } from "react-router-dom";
import { formatPrice } from "@/components/formatData/formatData";

const cx = classNames.bind(styles);
function ProductItem({ itemPro, loading }) {
  const discountedPrice = useMemo(() => {
    return Math.ceil(itemPro?.price - itemPro?.discount);
  }, [itemPro]);

  return (
    <div className={cx(" col-md-3 mt-5")}>
      {loading ? (
        <div>
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={210}
            height={118}
          />
          <Skeleton animation="wave" />
          <Skeleton animation="wave" width="60%" />
        </div>
      ) : (
        <div className={cx("product-block")}>
          <div className={cx("product-img")}>
            <Link to={`/products/${itemPro?.slug}`}>
              <picture>
                <source media="(max-width: 767px)" />
                <img src={itemPro?.image?.url} alt="Anh" />
              </picture>
            </Link>
          </div>

          <div className={cx("product-detail")}>
            <div className={cx("pro-name")}>
              <NavLink
                className={cx("conformName")}
                to={`/products/${itemPro?.slug}`}
              >
                {itemPro?.name}
              </NavLink>
            </div>
            <div className={cx("box-pro-detail")}>
              <div className={cx("product-price", "conformName")}>
                {formatPrice(discountedPrice)}
                <span className={cx("price-del")}>
                  <del>{formatPrice(itemPro?.discount)}</del>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

ProductItem.propTypes = {
  itemPro: PropTypes.object,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
};

export default ProductItem;
