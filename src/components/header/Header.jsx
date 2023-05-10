import './header.scss';

const Header = () => {
  return (
    <div className='intro'>
      <div className="intro-container">
        <div className='intro-first'>Chúng tôi cưới</div>
        <div className='intro-second'>
          <div className='intro-second-groom'>Chú rể</div>
          <div className='intro-second-and'>&</div>
          <div className='intro-second-bride'>Cô dâu</div>
        </div>
        <div className='intro-third'>06 . 09 . 2022</div>
      </div>
    </div>
  );
};

export default Header;
