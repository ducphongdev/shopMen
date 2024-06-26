import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { PUBLICROUTER } from "@/config/routes";

const cx = classNames.bind(styles);
function Sidebar() {
  const user = useSelector((state) => state.auth.login?.currentUser);

  return (
    <div className={cx("sidebar")}>
      <h3 className={cx("title")}>Tài Khoản</h3>
      <div className={cx("account-list")}>
        <ul className={cx("list-unstyled")}>
          <li>
            <Link to={PUBLICROUTER.account}>
              <i className="bi bi-stop-circle"></i>Thông tin tài khoản
            </Link>
          </li>
          <li>
            <Link to={PUBLICROUTER.orderStatistics.index}>
              <i className="bi bi-stop-circle"></i> Đơn hàng
            </Link>
          </li>
          <li>
            <Link to={PUBLICROUTER.address}>
              <i className="bi bi-stop-circle"></i> Danh sách địa chỉ
            </Link>
          </li>
          <li className={cx("last")}>
            <a>
              <i className="bi bi-stop-circle"></i>Đăng xuất
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
