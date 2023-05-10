import './invitation.scss';

const Invitation = () => {
  return (
    <div className='white-background invitation-container'>
      <div className='invitation-title'>
        <span className='text-black'>Trân trọng kính mời</span>
      </div>
      <div className='invitation'>
        <div className='invitation-content'>
          <div className='invitation-content-text text-black'>
            <p>tới dự hôn lễ của hai vợ chồng vào hồi</p>
          </div>
          <div className='invitation-content-datetime'>
            <div className='invitation-content-time text-black'>
              <div>
                <p>09:00</p>
              </div>
            </div>
            <div className='invitation-content-date'>
              <div>
                <p className='text-yellow'>06 . 09 . 2069</p>
              </div>
            </div>
            <div className='invitation-content-time text-black'>
              <div>
                <p className='text-black'>Thứ Sáu</p>
              </div>
            </div>
          </div>
          <div className='invitation-content-address'>
            <div className='invitation-content-address__underline'>
              <a href='#' className='text-black'>
                Số 4 Tôn Thất Thuyết, Dịch Vọng Hậu, Cầu Giấy, Hà Nội
              </a>
            </div>
            <div className='invitation-content-address__text'>
              <p className='text-black'>
                Sự hiện diện của bạn là niềm vinh hạnh của chúng tôi!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invitation;
