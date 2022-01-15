import index from './js/index';
import signin from './js/signin';
import signup from './js/signup';
import detail from './js/detail';
import mypage from './js/mypage';
import mypageEdit from './js/mypageEdit';
import header from './js/header';

const history = require('history-events');

const $root = document.querySelector('.root');

const render = html => {
  $root.innerHTML = html;
};

const switchDependsOnUrl = () => {
  const url = window.location.pathname.split('/');
  const pageCase = url[1] === '' ? '/' : `/${url[1]}`;
  switch (pageCase) {
    case '/':
      render(index.indexHtml);
      index.indexEvent();
      break;
    case '/detail':
      render(detail.detailHtml);
      detail.detailEvent();
      break;
    case '/signin':
      render(signin.signinHtml);
      signin.signinEvent();
      break;
    case '/signup':
      render(signup.signupHtml);
      signup.signupEvent();
      break;
    case '/develog':
      // Develog
      break;
    case '/mypage':
      render(mypage.mypageHtml);
      mypage.mypageEvent();
      break;
    case '/mypageEdit':
      render(mypageEdit.mypageEditHtml);
      mypageEdit.mypageEditEvent();
      break;
    case 'upload':
      // upload
      break;
    default:
      // 404page 뿌려주기
      alert('잘못된 페이지입니다.');
  }
};

switchDependsOnUrl();

// url 변경감지
window.addEventListener('changestate', () => {
  switchDependsOnUrl();
});
