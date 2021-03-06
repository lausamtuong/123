import React, { useEffect, useState } from "react";
import "./style.scss";
import video from "../../images/home__vd.mp4";
import v_light from "../../images/Vlight.svg";
import cntm_1 from "../../images/cntm_1.png";
import cntm_2 from "../../images/cntm_2png.png";
import cntm_3 from "../../images/cntm_3.png";
import cntm_4 from "../../images/cntm_4.png";
import cntm_5 from "../../images/cntm_5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import Card from "../../components/Card/Card";
import LuxA20 from "../../images/A20.gif";
import LuxA20_ from "../../images/LuxA_.png";
import Fadil from "../../images/Fadil-360.gif";
import Fadil_ from "../../images/Fadil 1_.png";
import LuxSA from "../../images/LuxSA20.gif";
import LuxSA_ from "../../images/LuxSA_.png";
import Pre from "../../images/Pre.gif";
import Pre_ from "../../images/president_.png";
import VFe34 from "../../images/Vfe34.gif";
import VFe34_ from "../../images/VFe34_.png";
import xe_may from "../../images/xe-may-dien.mp4";
import vlight_up from "../../images/Vlight-up.png";
import vlight_down from "../../images/Vlight-down.png";
import klaraA2_ from "../../images/klaraA2_.png";
import tempest_ from "../../images/tempest_.png";
import klaraS_ from "../../images/klaraS_.png";
import feliz_ from "../../images/feliz_.png";
import theon_ from "../../images/theon_.png";
import bg_tab from "../../images/bg.jpg";
import bg_mobile from "../../images/bg_mobile.png";
import { useDispatch, useSelector } from "react-redux";
import MessengerCustomerChat from "react-messenger-customer-chat";
import { loginUser } from "../../reduxToolkit/apiRequest";
import { useNavigate } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import TextField from "@mui/material/TextField";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { Avatar, Button, Input } from "@nextui-org/react";

const ListCar = [
  {
    img: LuxA20_,
    gif: LuxA20,
    title: "T???n h?????ng t???ng kho???nh kh???c",
    name: "LUX A2.0",
    type: "SEDAN",
    price: "t??? 949 tri???u",
    params: "852e08d81c1fbb0662d06e45e4e24216",
  },
  {
    img: Fadil_,
    gif: Fadil,
    title: "T???i ??u m???i tr???i nghi???m",
    name: "FADIL",
    type: "HATCHBACK",
    price: "t??? 382 tri???u",
    params: "10a8089a99d768720e714c4ea2d31bc1",
  },
  {
    img: LuxSA_,
    gif: LuxSA,
    title: "Chinh ph???c m???i cung ???????ng",
    name: "LUX SA2.0",
    type: "SUV",
    price: "t??? 1.2 t???",
    params: "6b8d7fcc6d6935e68cbb0c9463123c0a",
  },
  {
    img: VFe34_,
    gif: VFe34,
    title: "C??ng b???n b???t ph?? m???i gi???i h???n",
    name: "VF e34",
    type: "SUV",
    price: "690 tri???u",
    params: "4595e77181130d268b637271ebfc0008",
  },
  {
    img: Pre_,
    gif: Pre,
    title: "D???u ???n ng?????i th??? l??nh",
    name: "PRESIDENT",
    type: "SUV",
    price: "t??? 3.8 t???",
    params: "f260104e761c83997b267621c1ff11e3",
  },
];
const ListMoto = [
  {
    img: theon_,
    gif: theon_,
    title: "C??ng ngh??? b???t ph?? ?????nh cao",
    name: "THEON",
    type: "CAO C???P",
    price: "63.9 tri???u",
  },
  {
    img: feliz_,
    gif: feliz_,
    title: "S???ng xanh thanh l???ch",
    name: "FELIZ",
    type: "TRUNG C???P",
    price: "24.9 tri???u",
    params: "a2eea0d38e433c288b4fab47862c574c",
  },
  {
    img: klaraS_,
    gif: klaraS_,
    title: "Kh???i ?????u phong c??ch m???i",
    name: "KLARA S",
    type: "TRUNG C???P",
    price: "39.9 tri???u",
    params: "27cd252a8e5cd53f76aec0e5ba8af043",
  },
  {
    img: tempest_,
    gif: tempest_,
    title: "T???a kh?? ch???t - H??t ??nh nh??n",
    name: "TEMPEST",
    type: "PH??? TH??NG",
    price: "19.25 tri???u",
    params: "0dad95c3f89c96b58d8d34d23d75136f",
  },
  {
    img: klaraA2_,
    gif: klaraA2_,
    title: "S???ng xanh thanh l???ch",
    name: "KLARA A2",
    type: "TRUNG C???P",
    price: "26.9 tri???u",
    params: "f4b6854c76fbc79c2528dabbf7c4a495",
  },
];
const Home = ({ width }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ITEM = useSelector((state) => state.auth.API.CAR);
  const user = JSON.parse(window.localStorage.getItem("user"));
  const [selectedImage, setSelectedImage] = useState();
 
  const saveFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };
  const removeSelectedImage = () => {
    setSelectedImage();
  };
  
  window.scrollTo(0, 0);
  return (
    <div className="Home__wrapper">
      <div className="Home__video">
        {selectedImage ? (
          <img src={URL.createObjectURL(selectedImage)} alt="Thumb" />
        ) : (
          <video autoPlay playsInline muted loop>
            <source src={video} type="video/mp4" />
          </video>
        )}
      </div>
      <div className="container-fluid cta-button">
        <div className="row justify-content-center">
          {" "}
          <a
            className="deposit"
            href="https://reserve.vinfastauto.com/"
            onClick="gtag_custom_link(this);"
          >
            ?????t c???c ngay
          </a>{" "}
          <a
            className="more-information"
            href="https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwb84ed557/raisinghands/documents/VF8-VF9_Brochure.pdf"
            onClick="gtag_custom_link(this);"
          >
            T??m hi???u th??m
          </a>
        </div>
      </div>
      <div className="v-light">
        <img alt="v-light" src={v_light} />
      </div>
      <div className="block-new-home-cntm">
        <div className="container-fluid">
          <div className="swiper-box">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              autoplay={true}
            >
              <SwiperSlide>
                {" "}
                <div className="swiper_item">
                  <div className="swiper_item-head">
                    <h1 className="swiper_item-name">
                      C??ng ngh??? th??ng minh cho t????ng lai
                    </h1>
                    <p className="swiper_item-des">
                      ?????t kh??ch h??ng l??m tr???ng t??m, c??c m???u xe th??ng minh c???a
                      VietFast ???????c ???ng d???ng nh???ng c??ng ngh??? ??u vi???t h??ng ?????u
                      th??? gi???i, m??? ra kh??ng gian h?????ng th??? ti???n nghi, gi???i tr??
                      ho??n h???o c??ng tr???i nghi???m c?? nh??n h??a ????ng gi?? nh???t
                    </p>
                  </div>
                  <div className="swiper_item-body">
                    <img src={cntm_1} atl="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="swiper_item">
                  <div className="swiper_item-head">
                    <h1 className="swiper_item-name">Thi???t k??? ?????y ??am m??</h1>
                    <p className="swiper_item-des">
                      K???t h???p v???i nh?? thi???t k??? xe n???i ti???ng th??? gi???i
                      Pininfarina, VietFast mang ?????n ch???t l?????ng thi???t k??? ?????ng
                      c???p cho t???ng d??ng xe. Theo ??u???i tri???t l?? tr???i nghi???m ch???m
                      sinh h???c, nh???ng chi???c xe VietFast s??? h???u v??? ngo??i sang
                      tr???ng ?????c tr??ng c??ng khoang n???i th???t ?????m ch???t t????ng lai,
                      ???????c ch??m ch??t trong t???ng chi ti???t.
                    </p>
                  </div>
                  <div className="swiper_item-body">
                    <img src={cntm_2} atl="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="swiper_item">
                  <div className="swiper_item-head">
                    <h1 className="swiper_item-name">
                      ?????ng c???p an to??n qu???c t???
                    </h1>
                    <p className="swiper_item-des">
                      ?????t s??? an t??m c???a kh??ch h??ng l??n tr??n h???t, nh???ng chi???c xe
                      c???a VietFast ???????c trang b??? c??c t??nh n??ng an to??n t???i t??n
                      nh???t ????? b???o v??? ng?????i l??i v?? m???i h??nh kh??ch tr??n xe, ????p
                      ???ng ti??u chu???n kh???t khe c???a c??c t??? ch???c ????nh gi?? xe uy t??n
                      h??ng ?????u th??? gi???i nh?? ASEAN NCAP, EURO NCAP, NHTSA...
                    </p>
                  </div>
                  <div className="swiper_item-body">
                    <img src={cntm_3} atl="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="swiper_item">
                  <div className="swiper_item-head">
                    <h1 className="swiper_item-name">Tr???i nghi???m xu???t s???c</h1>
                    <p className="swiper_item-des">
                      S??? h???u xe VietFast ch??nh l?? t???n h?????ng nh???ng gi?? tr??? t???t
                      nh???t c???a m???t h??? sinh th??i ?????ng c???p, t??? m?? h??nh O2O t??ch
                      h???p th????ng m???i ??i???n t??? v?? tr???i nghi???m t???i h??? th???ng ?????i
                      l??/Showroom/Tr???m s???c r???ng kh???p, t???i ch???t l?????ng d???ch v??? h???u
                      m??i v?????t tr???i v?? s??? t???n t??m trong t???ng kho???nh kh???c c???a
                      kh??ch h??ng.
                    </p>
                  </div>
                  <div className="swiper_item-body">
                    <img src={cntm_4} atl="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="swiper_item">
                  <div className="swiper_item-head">
                    <h1 className="swiper_item-name">Ch??nh s??ch th???u hi???u</h1>
                    <p className="swiper_item-des">
                      VietFast lu??n c?? ch??nh s??ch b??n h??ng v?? h???u m??i c?? l???i
                      nh???t cho kh??ch h??ng. VietFast c??ng ti??n phong th??c ?????y xu
                      h?????ng s??? d???ng xe ??i???n, h?????ng t???i t????ng lai xanh, b???n v???ng
                      b???ng ch??nh s??ch pin v?? ch??? ????? b???o h??nh 10 n??m duy nh???t
                      tr??n th??? tr?????ng cho ?? t?? ??i???n.
                    </p>
                  </div>
                  <div className="swiper_item-body">
                    <img src={cntm_5} atl="" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="swiper_item-head">
              <h1 className="swiper_item-name">Xe ?? t??</h1>
              <p className="swiper_item-des">
                H??n c??? vi???c t???o n??n m???t chi???c xe m???i, VietFast ra ?????i ?????i di???n
                cho tinh th???n v?? ni???m ki??u h??nh d??n t???c.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="block-new-home-car">
        <div className="container-fluid">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={width}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={true}
          >
            {ListCar.map((item, index) => (
              <SwiperSlide key={index}>
                <Card
                  img={item.img}
                  name={item.name}
                  gif={item.gif}
                  title={item.title}
                  price={item.price}
                  type={item.type}
                  params={item.params}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="block-newhome-videomiddle">
        <div className="v-light absolute">
          <img src={vlight_up} />
        </div>
        <video autoPlay playsInline muted loop>
          <source src={xe_may} type="video/mp4" />
        </video>
      </div>

      <div className="swiper_item-head">
        <h1 className="swiper_item-name">Xe m??y ??i???n</h1>
        <p className="swiper_item-des">
          S???n ph???m c???a ng?????i Vi???t, d??nh cho ng?????i Vi???t v???i c??c ch??nh s??ch ??u ????i
          t???t nh???t th??? tr?????ng.
        </p>
      </div>
      <div className="block-new-home-car">
        <div className="container-fluid">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={width}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={true}
          >
            {ListMoto.map((item, index) => (
              <SwiperSlide key={index}>
                <Card
                  img={item.img}
                  name={item.name}
                  gif={item.img}
                  title={item.title}
                  price={item.price}
                  type={item.type}
                  params={item.params}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="block-new-home-testimonial">
        <img
          alt="background-tablet"
          className="background-tablet"
          src={bg_tab}
        />
        <img
          alt="background-mobile"
          className="background-mobile"
          src={bg_mobile}
        />
        <div className="background__title">
          <p> H??nh tr??nh chinh ph???c th??? gi???i</p>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={true}
          >
            <SwiperSlide>
              <p className="slogan">
                ???Trong ng??nh c??ng nghi???p xe h??i, vi???c thi???t k??? v?? ch??? t???o kh??ng
                ch??? m???t m?? hai chi???c xe ch??? trong v??ng 12 th??ng l?? t???c ????? kh??ng
                t?????ng???
              </p>
              <p className="author">- Top Gear -</p>
            </SwiperSlide>
            <SwiperSlide>
              <p className="slogan">
                ???Ch??a kh??a ????? ?????t th??nh c??ng ngay t??? kh??u s???n xu???t c???a VinFast
                ch??nh l?? c??c ?????i t??c m???nh m??? nh?? ABB, Bosch, Magna Steyr v??
                Siemens???
              </p>
              <p className="author">- CNBC -</p>
            </SwiperSlide>
            <SwiperSlide>
              <p className="slogan">
                ???VinFast, th????ng hi???u ?? t?? Vi???t thu???c T???p ??o??n Vingroup l?? ??i???n
                h??nh ti??u bi???u c???a vi???c nhanh ch??ng ph???c h???i v?? c?? ti???n b?????c
                nhanh ch??ng sau khi Vi???t Nam th??nh c??ng ch???ng d???ch Covid...???
              </p>
              <p className="author">- Bloomberg -</p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {user?.isAdmin == "true" ? (
        <div className="model_contact">
          <AiFillEdit onClick={()=>document.querySelector('.popup-edit').classList.toggle('none')}/>
        </div>
      ) : (
        ""
      )}
      <div className="popup-edit none">
        <div className="popup_box">
          <h2>Qu???n l?? trang public</h2>
          <div className="popup_box_content">
            <p>Thay ?????i ???nh n???n</p>
            <div className="imgUpdate">
              {selectedImage && (
                <div className="imageChose">
                  <img src={URL.createObjectURL(selectedImage)} alt="Thumb" />
                  <div className="removeImage" onClick={removeSelectedImage}>
                    <Button shadow auto color="error">
                      Remove this image
                    </Button>
                  </div>
                </div>
              )}
              {!selectedImage && (
                <label htmlFor="imageFile" className="inputImage">
                  {/* <Button type="button"> */}
                  <AddPhotoAlternateIcon style={{ color: "#ffffff" }} />
                  <span>Import Your Image</span>
                  <input
                    type="file"
                    accept="image/*"
                    id="imageFile"
                    onChange={(e) => {
                      saveFile(e);
                    }}
                    hidden
                  />
                  {/* </Button> */}
                </label>
              )}
            </div>
          </div>
          <div className="popup_box_content">
            <p>Thay ?????i T??n C??ng Ty </p>
            <TextField id="filled-basic" label="VietFast" variant="filled" />
          </div>
          <div className="popup_box_btn">
         
          <Button variant="contained" onClick={()=>document.querySelector('.popup-edit').classList.toggle('none')}>Ho??n t???t</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
