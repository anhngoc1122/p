import "bootstrap/dist/css/bootstrap.min.css"; // Import CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import JS (bao gồm Popper)
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";
import useToggleMenu from "../JS/useToggleMenu";
function Header() {
  const { isMenuOpen, toggleMenu } = useToggleMenu();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [searchState, setSearch]  = useState('');
  const navigate = useNavigate();

  const handleLoginClose = () => setShowLogin(false);
  const handleLoginShow = () => setShowLogin(true);

  const handleRegisterClose = () => setShowRegister(false);
  const handleRegisterShow = () => setShowRegister(true);

  const handleSearchSubmitForm = (event) => {
    event.preventDefault();
    navigate(`/search?query=${searchState}`);
  }
  return (
    <div className="headerr">
      <div className="footer1  ">
        <div className="social">
          <a href="#">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
        <div className="welcome">
          <p>Welcome to ADHK book page</p>
        </div>
        <div className="contact">
          <a href="tel:1900571596">
            <i className="fa-solid fa-phone-volume"></i>(+84) 1900571596
          </a>
          <a href="mailto:AHDKbook@gmail.com">
            <i className="fa-solid fa-envelope"></i>AHDKbook@gmail.com
          </a>
        </div>
      </div>
      {/* nav */}
      <div className="testnav ">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              ADHK
            </a>
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            >
              {isMenuOpen ? (
                <span style={{ fontSize: "24px" }}>✖</span> // Icon "X"
              ) : (
                <span className="navbar-toggler-icon"></span> // Default Hamburger icon
              )}
            </button>
            <div
              className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
              id="navbarScroll"
            >
              <ul
                className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
                style={{ "--bs-scroll-height": "100px" }}
              >
                <li className="nav-item">
                  <Link href="/" className="nav-link  fs-5" aria-current="page">
                    Trang chủ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active fs-5" to="/shop">
                    Cửa Hàng
                  </Link>
                </li>
              </ul>
              {/* Search của Kiên */}
              <form className="d-flex mt-1 me-5" role="search" onSubmit={handleSearchSubmitForm}>
                <input
                  className="form-control me-2   "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={event=>setSearch(event.target.value)}
                />
                <button className="btn btn-outline-success " type="submit">
                  Search
                </button>
              </form>
              
              {/* dang nhap dang ky */}
              <div className="log nav-item d-flex ">
                <a
                  href="#"
                  className=" nav-link me-4 mb-1 fs-5 dn"
                  onClick={handleLoginShow}
                >
                  <i className="fa-solid fa-right-to-bracket"></i>Đăng nhập
                </a>
                <Modal
                  show={showLogin}
                  onHide={handleLoginClose}
                  dialogClassName="custom-modal"
                >
                  <Modal.Header closeButton>
                    <Modal.Title className="custom-title">
                      Đăng nhập
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form className="custom-form">
                      <Form.Group controlId="formBasicEmail" className="mb-3">
                        <div className="input-group">
                          <span className="input-group-text">
                            <i className="fa fa-envelope"></i>
                          </span>
                          <Form.Control
                            type="email"
                            placeholder="Email"
                            className="custom-input"
                          />
                        </div>
                      </Form.Group>

                      <Form.Group
                        controlId="formBasicPassword"
                        className="mb-3"
                      >
                        <div className="input-group">
                          <span className="input-group-text">
                            <i className="fa fa-lock"></i>
                          </span>
                          <Form.Control
                            type="password"
                            placeholder="Mật khẩu"
                            className="custom-input"
                          />
                        </div>
                      </Form.Group>
                      <Button
                        variant="primary"
                        type="submit"
                        className="custom-login-btn"
                      >
                        <b>Đăng nhập</b>
                      </Button>

                      <div className="text-center mb-3">
                        <a href="#" className="forgot-password">
                          Quên mật khẩu?
                        </a>{" "}
                        hoặc{" "}
                        <a
                          href="#"
                          className="register"
                          onClick={handleRegisterShow}
                        >
                          Đăng ký
                        </a>
                      </div>
                    </Form>
                  </Modal.Body>
                </Modal>
                <a
                  href="#"
                  className="nav-link me-5 mb-1 fs-5 dk"
                  onClick={handleRegisterShow}
                >
                  <i className="fas fa-edit"></i>Đăng ký
                </a>
                <Modal
                  show={showRegister}
                  onHide={handleRegisterClose}
                  dialogClassName="custom-modal"
                >
                  <Modal.Header closeButton>
                    <Modal.Title className="custom-title">
                      Tạo tài khoản
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form className="custom-form">
                      <Form.Group
                        controlId="formBasicFirstName"
                        className="mb-3"
                      >
                        <div className="input-group">
                          <span className="input-group-text">
                            <i className="fa fa-user"></i>
                          </span>
                          <Form.Control
                            type="text"
                            placeholder="Họ"
                            className="custom-input"
                          />
                        </div>
                      </Form.Group>

                      <Form.Group
                        controlId="formBasicLastName"
                        className="mb-3"
                      >
                        <div className="input-group">
                          <span className="input-group-text">
                            <i className="fa fa-user"></i>
                          </span>
                          <Form.Control
                            type="password"
                            placeholder="Tên"
                            className="custom-input"
                          />
                        </div>
                      </Form.Group>

                      <Form.Group controlId="formBasicEmail" className="mb-3">
                        <div className="input-group">
                          <span className="input-group-text">
                            <i className="fa fa-envelope"></i>
                          </span>
                          <Form.Control
                            type="email"
                            placeholder="Email"
                            className="custom-input"
                          />
                        </div>
                      </Form.Group>

                      <Form.Group
                        controlId="formBasicPassword"
                        className="mb-3"
                      >
                        <div className="input-group">
                          <span className="input-group-text">
                            <i className="fa fa-lock"></i>
                          </span>
                          <Form.Control
                            type="password"
                            placeholder="Mật khẩu"
                            className="custom-input"
                          />
                        </div>
                      </Form.Group>

                      <Button
                        variant="primary"
                        type="submit"
                        className="custom-login-btn"
                      >
                        <b>Đăng ký</b>
                      </Button>
                    </Form>
                  </Modal.Body>
                </Modal>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <hr></hr>

      {/* gio hang cua Anh */}
      <a href="#" className="giohang nav-link me-5 ms-2 ">
                <i className="fa-solid fa-bag-shopping"></i>
                <span className="count">0</span>
              </a>
      
    </div>
  );
}

export default Header;
