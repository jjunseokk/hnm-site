import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

const menuList = ['여성',
  'Divided',
  '남성',
  '신생아/유아',
  '아동',
  'H&M HOME',
  'Sale',
  '지속가능성',
];
const Navbar = ({authenticate, setAuthenticate}) => {

  const navigate = useNavigate()

  const search = (event) => {
    if (event.key === "Enter") {
      //입력한 검색어를 읽어와서 url을 바꿔준다.
      let keyword = event.target.value;

      navigate(`/?q=${keyword}`);
    }
  }
  const showHome = () => {
    navigate('/');
  }

  console.log(authenticate);

  return (
    <div>
      <div>
        {authenticate ? (
          <div onClick={() => setAuthenticate(false)} className='login-button'>
            <FontAwesomeIcon icon={faUser} />
            <span>로그아웃</span>
          </div>
        ) : (
          <div onClick={() => navigate("/login")} className='login-button'>
            <FontAwesomeIcon icon={faUser} />
            <span>로그인</span>
          </div>
        )}
      </div>
      <div className='nav-section'>
        <img width={80} onClick={showHome} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/709px-H%26M-Logo.svg.png?20130107164928" alt="" />
      </div>
      <div className='menu-area'>
        <ul className='menu-list'>
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <div className='search-area'>
          <FontAwesomeIcon icon={faSearch} className="font" />
          <input type="text" placeholder='제품검색' onKeyPress={(event) => search(event)}>

          </input>
        </div>
      </div>
    </div>

  )
}

export default Navbar