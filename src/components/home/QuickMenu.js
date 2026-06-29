import React from 'react';
import franchise from '../../images/franchise_consult.svg';
import customer from '../../images/customer_consult.svg';
import appDownload from '../../images/download_app.svg';
import topBtn from '../../images/arrow_up.svg';

function QuickMenu() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <ul className='quick_menu'>
      <li className='franchise'>
        <a href="#none">
          <img src={franchise} alt="가맹점 문의" />
          <p>가맹 문의</p>
          <div className='quick_hover'>
            <p>가맹점 문의 <br />02-3276-9581</p>
          </div>
        </a>
      </li>

      <li className='customer'>
        <a href="#none">
          <img src={customer} alt="고객문의" />
          <p>고객 문의</p>
          <div className='quick_hover'>
            <p>대표 전화 <br />02-779-7758</p>
          </div>
        </a>
      </li>

      <li className='download'>
        <a href="#none">
          <img src={appDownload} alt="앱 다운로드" />
          <p>앱 다운로드</p>
        </a>
      </li>

      <li className='top_btn'>
        <button onClick={scrollToTop}>
          <img src={topBtn} alt="위로가기" />
          <p>Top</p>
        </button>
      </li>
    </ul>
  );
}

export default QuickMenu;
