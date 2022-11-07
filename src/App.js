import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Component/Navbar';
import Login from './Page/Login';
import ProductAll from './Page/ProductAll';
import {useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

/* 
1. 유저는 메뉴와 상품들을 볼 수 있다.
2. 유저는 로그인을 할 수 있다.
3. 유저는 상품디테일을 보기 위해 로그인을 해야한다.
4. 로그인한 유저는 상품디테일정보를 볼 수 있다.
5. 유저는 상품을 검색할 수 있다.
6. 유저는 로그아웃할 수 있다.
 */


/* 
1. 전체 상품 페이지, 로그인, 상품상세페이지
1-1. 네비게이션 바를 만든다.
2. 전체 상품 페이지에서는 전체 상품을 볼 수 있다.
3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
3. 상품디테일을 눌렀으나, 로그인이 안되있을 경우에는 로그인페이지가 먼저나온다.
4. 로그인이 되어있을 경우에는 상품 디테일 페이지를 볼 수 있다.
5. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
5. 로그아웃이 되면 상품 디테일 페이지를 볼수 없다, 다시 로그인 페이지가 보인다.
6. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
7. 상품을 검색할 수 있다.
*/
function App() {
  const [authenticate, setAuthenticate] = useState(false); // true면 로그인 됌. false면 안됌
  console.log("asdasdasd", authenticate);
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes >
        <Route path='/' element={<ProductAll />} />
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate}/>}/>
        <Route path='/product/:id' element={<PrivateRoute authenticate={authenticate}/>} />
      </Routes>
    </div>
  );
}

export default App;
