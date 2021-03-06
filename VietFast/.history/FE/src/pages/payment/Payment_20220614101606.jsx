import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./payment.scss";
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";
import { payment } from "../../reduxToolkit/apiRequest";
import axios from "axios";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: #ffffff;
`;
const Payment = () => {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + " " + time;
  window.scrollTo(0, 0);
  let [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const api = useSelector((state) => state.auth.API);
  const user = useSelector((state) => state?.auth?.login?.currentUser);
  const [discount, setDiscount] = useState(0);
  const params = useParams();

  let item = api.ALL.filter((x) => x.params == params.id);
  const submitHandle = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 3000);
  };
  const navigate = useNavigate();
  const [items, setItems] = useState({});

  const getData = async () => {
    const x = await axios
      .post("http://localhost:8080/WEB/Vietfast/BE/index.php", {
        action: "getItem",
        email: user?.email,
      })
      .then((res) => {
        return res.data;
      });
    return x;
  };
  useEffect(() => {
    const promise = getData();
    promise.then((res) => {
      setItems({
        item: res[0].item,
        total: res[0].total,
      });
    });
  }, []);
  const paymentHandle = () => {
    payment({
      action: "payment",
      name: user.username,
      time: dateTime,
      image: user.image,
      email: user.email,
      item: items.item + params.id + ",",
      amount: item[0].price,
      total:
        Number(items.total) +
        Number(item[0].price.split(" ")[0].replaceAll(".", "")),
    });
  };
  return (
    <form className="payment" onSubmit={submitHandle}>
      {loading && (
        <div className="overlay__loading">
          <DotLoader
            color={"#ffffff"}
            loading={loading}
            css={override}
            size={150}
          />
        </div>
      )}
      {success && (
        <div className="success">
          <div className="wrapper">
            <div className="text">
              <div className="content">
                <box-icon
                  name="chevron-down-circle"
                  type="solid"
                  color="#2bbb34"
                  size="lg"
                ></box-icon>
              </div>
              <p>Đặt hàng thành công. Chúc bạn mua sắm vui vẻ</p>
            </div>
            <div className="home">
              <button
                type="button"
                className="btn btn__home"
                onClick={() => navigate("/")}
              >
                Về trang chủ
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="payment__customer">
        <div className="user__info">
          <div className="label">THÔNG TIN KHÁCH HÀNG</div>
          <span>
            Thông tin khách hàng sẽ được đưa vào thỏa thuận hợp đồng. Quý khách
            vui lòng nhập chính xác các nội dung dưới đây.
          </span>
          <div className="input">
            <div className="input__field">
              <label htmlFor="name">HỌ VÀ TÊN</label>
              <input
                required
                type="text"
                id="name"
                placeholder="Nhập họ và tên"
              />
            </div>
            <div className="input__field">
              <label htmlFor="phone">SỐ ĐIỆN THOẠI</label>
              <input
                required
                type="text"
                id="phone"
                placeholder="Nhập số điện thoại"
              />
            </div>
            <div className="input__field">
              <label htmlFor="id">CMND/CCCD</label>
              <input
                required
                type="text"
                id="id"
                placeholder="Nhập CMND/CCCD"
              />
            </div>
            <div className="input__field">
              <label htmlFor="email">Email</label>
              <input
                required
                type="email"
                id="email"
                placeholder="Nhập Email "
              />
            </div>
          </div>
        </div>
        <div className="voucher">
          <div className="label">Mã ưu đãi</div>
          <div className="input">
            <input type="text" placeholder="Nhập mã E-voucher" />
            <button
              type="button"
              className="btn btn__voucher"
              onClick={() => {
                setDiscount(
                  Number(item[0].price.split(" ")[0].replaceAll(".", "")) * 0.9
                );
                alert("Áp dụng voucher thành công");
              }}
            >
              ÁP DỤNG
            </button>
          </div>
          <p>
            CHƯƠNG TRÌNH <span>THẺ XANH CHÀO NGÀY MỚI</span>{" "}
            <a href="#">Xem chương trình chi tiết</a>
          </p>
        </div>
        <div className="thanhtoan">
          <div className="label">THANH TOÁN</div>
          <span>
            Để hoàn thành đơn đặt hàng. Quý khách vui lòng thanh toán{" "}
            {discount||item[0].price} cho VietnFast bằng cách lựa chọn một trong các
            phương thức thanh toán sau:
          </span>
          <div className="option">
            <input type="radio" id="tienmat" checked />
            <label htmlFor="tienmat">
              Thanh toán bằng tiền mặt khi nhận xe
            </label>
          </div>
        </div>
      </div>
      <div className="payment__card">
        <div className="image">
          <img src={item[0].detail.img.main} alt="" />
        </div>
        <div className="name">{item[0].name.split(" ")[0]}</div>
        <div className="price">
          <span>Giá xe</span>
          <p>{item[0].price}</p>
        </div>
        <div className="total_price">
          <span>Giá trị đơn hàng</span>
          {discount?( <p className='line' style={{ fontWeight: "bold", }}>{item[0].price}</p>): <p style={{ fontWeight: "bold" }}>{item[0].price}</p>}
          <span>Giá trị đơn hàng</span>
        </div>
        <div className="total_price">
          <span>Tổng</span>
          {discount?( <p style={{ fontWeight: "bold", }}>{discount}</p>): <p style={{ fontWeight: "bold" }}>{item[0].price}</p>}
         
        </div>
        
        <div className="payment__btn">
          <button
            type="submit"
            className={`btn btn__payment`}
            onClick={paymentHandle}
          >
            Thanh toán
          </button>
        </div>
      </div>
    </form>
  );
};

export default Payment;
