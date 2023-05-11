import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const Header = () => {


    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isTest, setTest] = useState(false)
  return (
    <HeaderComponent>
      <Navbar>
        <NavLeft>
          <Link to="/">
            <img
              src="/images/icon-navi-logo.svg"
              alt="숨고 메인페이지로 가기"
            />
          </Link>
        </NavLeft>

        {isLoggedIn ? (
          <NavRight>
            <ul>
              <li>
                <Link to="/community/soomgo-life">커뮤니티</Link>
              </li>
              <li>
                <Link to="/mypage/bookmark">북마크</Link>
              </li>

              <li>
                <div
                  style={{ cursor: 'pointer' }}
                
                >
                  계정설정
                </div>
              </li>
              {isTest ? (
                <Modal>
                  <Wrap>
                    <h4 style={{ fontSize: '18px', color: 'gray' }}>
                      고객님
                    </h4>
                    <div
                      style={{
                        cursor: 'pointer',
                        width: '100%',
                        textAlign: 'center',
                      }}
                     
                    >
                      마이페이지
                    </div>
                    <hr />
                    {isTest ? (
                      <button
                       
                      >
                        고객으로 전환
                      </button>
                    ) : (
                      <button
                      
                      >
                        고수로 전환
                      </button>
                    )}
                  </Wrap>
                </Modal>
              ) : null}
              <button
                className="btn-gosu"
             
              >
                로그아웃
              </button>
            </ul>
          </NavRight>
        ) : (
          <NavRight>
            <ul>
              <li>
                <Link to="/community/soomgo-life">커뮤니티</Link>
              </li>
              <li>
                <Link to="/login">로그인</Link>
              </li>
              <li>
                <Link to="/signup">
                  <button className="btn-gosu">회원가입</button>
                </Link>
              </li>
            </ul>
          </NavRight>
        )}
      </Navbar>
    </HeaderComponent>
  );
};

export default Header;

const HeaderComponent = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid #f2f2f2;
  background: #fff;
  z-index: 100;
`;

const Navbar = styled.nav`
  display: flex;
  width: 100%;
  max-width: 970px;
  height: 72px;
  margin: 0 auto;
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
`;

const NavRight = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;
  ul {
    display: flex;
    align-items: center;
    gap: 24px;
  }
  button.btn-gosu {
    min-width: 80px;
    height: 36px;
    padding: 6.5px 0;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

const Modal = styled.div`
  position: absolute;
  top: 60px;
  right: 40px;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 180px;
  border: 1px solid gray;
  padding: 20px;
  position: relative;
  background-color: white;

  div {
    margin-top: 10px;
  }
  hr {
    width: 100%;
  }

  button {
    position: absolute;
    width: 80%;
    bottom: 10px;
  }
`;
