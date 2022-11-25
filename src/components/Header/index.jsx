import React, { Component } from 'react';
import './index.css';
import craiyon_img from './craiyon.png';
import dalle_svg from './dalle.svg';
class Header extends Component {
  render() {
    return (
      <div>
        {!this.props.lower && (
          <div
            style={
              this.props.notice
                ? { position: 'fixed', top: '0px', left: '0px' }
                : { top: '0px', left: '0px' }
            }
          >
            <div className="e5479_22292" />
            <div className="e5479_22293">
              <img
                src={dalle_svg}
                alt="craiyon logo"
                style={{ width: 33, marginLeft: 20 }}
              />
            </div>
            <div className="e5479_22296">
              {' '}
              {/* profile */}
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9 2.99971C9 4.65679 7.65679 6 5.99972 6C4.34321 6 3 4.65679 3 2.99971C3 1.3432 4.34321 0 5.99972 0C7.65679 0 9 1.3432 9 2.99971ZM12 10.3331V12H0V10.3331C0 9.44937 0.31612 8.60125 0.878629 7.97625C1.44114 7.35125 2.20446 7 2.99985 7H9.00015C9.79554 7 10.5589 7.35125 11.1214 7.97625C11.6839 8.60125 12 9.44937 12 10.3331Z"
                  fill="#4F4F4F"
                />
              </svg>
            </div>
            <span className="e5479_22299">Dall-E</span>
            <span className="e5479_22300">20.4k Auditors</span>

            <div
              className="e5479_22319"
              onClick={() => {
                this.props.setPage('Follow');
              }}
            >
              <span className="e5479_22320">Following </span>
              <svg
                width="8"
                height="6"
                viewBox="0 0 8 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6L0.535898 -1.75695e-07L7.4641 4.29987e-07L4 6Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        )}
        <div className="e5479_22339">
          <div className="e5479_22353" />
          <div className="e5479_22340" />
          <span className="e5479_22341">
            <b>Quick Audit</b>
          </span>
          <div
            className="e5479_22342"
            onClick={() => {
              this.props.setPage('Home');
            }}
          >
            <svg
              width="43"
              height="21"
              viewBox="0 0 43 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.41241 6.00534C6.48166 6.00534 6.54306 6.03214 6.59661 6.08564L7.09726 6.62879C6.82016 6.97199 6.47851 7.23489 6.07236 7.41754C5.66931 7.60014 5.18446 7.69149 4.61771 7.69149C4.11076 7.69149 3.6542 7.60489 3.24805 7.43169C2.845 7.25854 2.50026 7.01764 2.21371 6.70909C1.92721 6.40054 1.70676 6.03214 1.55251 5.60394C1.40136 5.17569 1.32581 4.70814 1.32581 4.20119C1.32581 3.68799 1.40766 3.21884 1.57141 2.79379C1.73511 2.36554 1.96496 1.99714 2.26096 1.68859C2.56006 1.38004 2.91586 1.14074 3.32831 0.970688C3.74081 0.797538 4.19736 0.710938 4.69796 0.710938C5.19546 0.710938 5.63625 0.792789 6.0204 0.956539C6.4077 1.12029 6.73671 1.33439 7.00751 1.59884L6.58245 2.18924C6.55725 2.22699 6.52421 2.26009 6.48326 2.28839C6.44546 2.31674 6.39195 2.33089 6.32265 2.33089C6.27545 2.33089 6.22666 2.31834 6.17626 2.29314C6.12591 2.26479 6.07081 2.23174 6.01096 2.19394C5.95116 2.15304 5.88186 2.10894 5.80316 2.06169C5.72446 2.01449 5.63311 1.97199 5.52921 1.93419C5.42531 1.89324 5.30411 1.86019 5.16556 1.83499C5.03016 1.80669 4.87271 1.79249 4.69326 1.79249C4.38786 1.79249 4.10761 1.84759 3.85256 1.95779C3.60066 2.06484 3.38341 2.22229 3.20081 2.43009C3.01821 2.63474 2.8765 2.88664 2.77575 3.18579C2.675 3.48174 2.62461 3.82024 2.62461 4.20119C2.62461 4.58534 2.67811 4.92694 2.78521 5.22609C2.89541 5.52519 3.04335 5.77709 3.22915 5.98174C3.4149 6.18639 3.63375 6.34384 3.8856 6.45404C4.1375 6.56109 4.40831 6.61464 4.69796 6.61464C4.87116 6.61464 5.02701 6.60519 5.16556 6.58629C5.30726 6.56739 5.43631 6.53749 5.5528 6.49654C5.6725 6.45564 5.78426 6.40369 5.88815 6.34069C5.9952 6.27459 6.10071 6.19429 6.20461 6.09984C6.2361 6.07149 6.26916 6.04944 6.30381 6.03369C6.33841 6.01479 6.37461 6.00534 6.41241 6.00534ZM10.9761 4.03589C11.2153 4.03589 11.4231 4.00599 11.5995 3.94614C11.779 3.88634 11.9253 3.80449 12.0387 3.70054C12.1552 3.59354 12.2418 3.46759 12.2985 3.32274C12.3551 3.17789 12.3835 3.01889 12.3835 2.84574C12.3835 2.49934 12.2686 2.23329 12.0387 2.04754C11.8121 1.86179 11.4641 1.76889 10.9949 1.76889H10.1826V4.03589H10.9761ZM14.2444 7.61589H13.0967C12.8794 7.61589 12.722 7.53089 12.6244 7.36084L11.1886 5.17414C11.135 5.09229 11.0752 5.03404 11.0091 4.99939C10.9461 4.96474 10.8517 4.94744 10.7257 4.94744H10.1826V7.61589H8.91211V0.786488H10.9949C11.4578 0.786488 11.8546 0.835288 12.1851 0.932938C12.5189 1.02739 12.7913 1.16119 13.0021 1.33439C13.2163 1.50754 13.3737 1.71534 13.4745 1.95779C13.5752 2.19709 13.6256 2.46159 13.6256 2.75124C13.6256 2.98109 13.591 3.19834 13.5218 3.40304C13.4556 3.60769 13.358 3.79344 13.2289 3.96034C13.1029 4.12719 12.9455 4.27364 12.7566 4.39954C12.5708 4.52549 12.3583 4.62469 12.119 4.69709C12.2009 4.74434 12.2765 4.80104 12.3457 4.86714C12.4149 4.93009 12.4779 5.00569 12.5346 5.09384L14.2444 7.61589ZM22.3471 4.20119C22.3471 4.70184 22.2637 5.16624 22.0969 5.59449C21.9331 6.01954 21.7001 6.38794 21.3978 6.69964C21.0955 7.01134 20.7319 7.25539 20.3069 7.43169C19.8818 7.60489 19.4095 7.69149 18.8899 7.69149C18.3736 7.69149 17.9028 7.60489 17.4778 7.43169C17.0527 7.25539 16.6874 7.01134 16.3821 6.69964C16.0797 6.38794 15.8452 6.01954 15.6783 5.59449C15.5115 5.16624 15.428 4.70184 15.428 4.20119C15.428 3.70054 15.5115 3.23774 15.6783 2.81264C15.8452 2.38444 16.0797 2.01449 16.3821 1.70279C16.6874 1.39104 17.0527 1.14859 17.4778 0.975439C17.9028 0.799089 18.3736 0.710938 18.8899 0.710938C19.2363 0.710938 19.5621 0.751888 19.8676 0.833738C20.173 0.912438 20.4532 1.02579 20.7083 1.17379C20.9633 1.31864 21.1916 1.49654 21.3931 1.70749C21.5977 1.91529 21.7709 2.14829 21.9126 2.40649C22.0543 2.66469 22.1614 2.94489 22.2338 3.24719C22.3094 3.54944 22.3471 3.86744 22.3471 4.20119ZM21.0483 4.20119C21.0483 3.82654 20.9979 3.49119 20.8971 3.19519C20.7965 2.89609 20.6532 2.64264 20.4674 2.43479C20.2817 2.22699 20.0549 2.06799 19.7873 1.95779C19.5228 1.84759 19.2237 1.79249 18.8899 1.79249C18.5562 1.79249 18.2555 1.84759 17.9878 1.95779C17.7234 2.06799 17.4967 2.22699 17.3077 2.43479C17.122 2.64264 16.9787 2.89609 16.8779 3.19519C16.7772 3.49119 16.7269 3.82654 16.7269 4.20119C16.7269 4.57589 16.7772 4.91279 16.8779 5.21189C16.9787 5.50789 17.122 5.75979 17.3077 5.96759C17.4967 6.17224 17.7234 6.32969 17.9878 6.43989C18.2555 6.55009 18.5562 6.60519 18.8899 6.60519C19.2237 6.60519 19.5228 6.55009 19.7873 6.43989C20.0549 6.32969 20.2817 6.17224 20.4674 5.96759C20.6532 5.75979 20.7965 5.50789 20.8971 5.21189C20.9979 4.91279 21.0483 4.57589 21.0483 4.20119ZM33.356 0.786488L31.2354 7.61589H30.0877L28.5953 2.94964C28.5544 2.83629 28.5166 2.69774 28.482 2.53399C28.463 2.61274 28.4442 2.68669 28.4252 2.75599C28.4064 2.82524 28.3859 2.88979 28.3639 2.94964L26.8572 7.61589H25.7048L23.589 0.786488H24.6517C24.7619 0.786488 24.8531 0.813289 24.9256 0.866789C25.0011 0.917189 25.0515 0.986439 25.0767 1.07459L26.2386 5.15994C26.2637 5.26074 26.2873 5.37094 26.3094 5.49054C26.3346 5.60704 26.3597 5.72984 26.3849 5.85894C26.4101 5.72669 26.437 5.60234 26.4652 5.48584C26.4968 5.36934 26.5298 5.26074 26.5645 5.15994L27.9057 1.07459C27.9309 1.00219 27.9797 0.936088 28.0521 0.876238C28.1277 0.816438 28.2191 0.786488 28.3261 0.786488H28.6992C28.8094 0.786488 28.8992 0.813289 28.9684 0.866789C29.0377 0.920339 29.0896 0.989589 29.1243 1.07459L30.4609 5.15994C30.527 5.35519 30.5868 5.58029 30.6403 5.83534C30.6813 5.58659 30.727 5.36149 30.7773 5.15994L31.9392 1.07459C31.958 0.995889 32.0052 0.928188 32.0808 0.871538C32.1596 0.814838 32.2524 0.786488 32.3595 0.786488H33.356ZM41.2035 4.20119C41.2035 4.70184 41.12 5.16154 40.953 5.58029C40.7865 5.99909 40.5515 6.35959 40.2495 6.66184C39.947 6.96414 39.5835 7.19869 39.1585 7.36559C38.7335 7.53244 38.261 7.61589 37.7415 7.61589H35.139V0.786488H37.7415C38.261 0.786488 38.7335 0.871538 39.1585 1.04154C39.5835 1.20844 39.947 1.44299 40.2495 1.74529C40.5515 2.04439 40.7865 2.40334 40.953 2.82209C41.12 3.24089 41.2035 3.70054 41.2035 4.20119ZM39.9 4.20119C39.9 3.82654 39.8495 3.49119 39.749 3.19519C39.651 2.89609 39.508 2.64419 39.319 2.43954C39.1335 2.23174 38.9065 2.07274 38.639 1.96254C38.3745 1.85234 38.0755 1.79724 37.7415 1.79724H36.4145V6.60519H37.7415C38.0755 6.60519 38.3745 6.55009 38.639 6.43989C38.9065 6.32969 39.1335 6.17224 39.319 5.96759C39.508 5.75979 39.651 5.50789 39.749 5.21189C39.8495 4.91279 39.9 4.57589 39.9 4.20119ZM5.33086 16.5756L4.49961 14.3039C4.45871 14.2031 4.41615 14.0835 4.3721 13.9449C4.328 13.8064 4.28395 13.6568 4.23985 13.4963C4.1989 13.6568 4.1564 13.808 4.1123 13.9496C4.06825 14.0882 4.02576 14.2094 3.98481 14.3133L3.15831 16.5756H5.33086ZM7.57425 19.1543H6.59186C6.48166 19.1543 6.39195 19.1276 6.32265 19.0741C6.2534 19.0174 6.20146 18.9481 6.16681 18.8663L5.65676 17.473H2.82771L2.31761 18.8663C2.29241 18.9387 2.24361 19.0048 2.17121 19.0646C2.09876 19.1244 2.00906 19.1543 1.90201 19.1543H0.910156L3.59751 12.3249H4.89161L7.57425 19.1543ZM11.8085 18.1294C12.0541 18.1294 12.2729 18.0886 12.4649 18.0066C12.6601 17.9248 12.8239 17.8099 12.9562 17.6619C13.0884 17.5139 13.1892 17.3344 13.2584 17.1235C13.3308 16.9125 13.3671 16.6764 13.3671 16.415V12.3249H14.6375V16.415C14.6375 16.8212 14.5714 17.1975 14.4392 17.5439C14.31 17.887 14.1227 18.1845 13.8771 18.4365C13.6346 18.6852 13.3387 18.8804 12.9892 19.0221C12.6397 19.1606 12.2461 19.2299 11.8085 19.2299C11.3676 19.2299 10.9725 19.1606 10.623 19.0221C10.2735 18.8804 9.97596 18.6852 9.73041 18.4365C9.48791 18.1845 9.30056 17.887 9.16831 17.5439C9.03921 17.1975 8.97466 16.8212 8.97466 16.415V12.3249H10.2451V16.4103C10.2451 16.6716 10.2798 16.9078 10.3491 17.1188C10.4215 17.3297 10.5238 17.5108 10.6561 17.6619C10.7915 17.8099 10.9552 17.9248 11.1472 18.0066C11.3424 18.0886 11.5629 18.1294 11.8085 18.1294ZM23.0792 15.7396C23.0792 16.2403 22.9957 16.7 22.8289 17.1188C22.662 17.5375 22.4274 17.898 22.1251 18.2003C21.8229 18.5026 21.4593 18.7371 21.0342 18.9041C20.6091 19.0709 20.1368 19.1543 19.6172 19.1543H17.0149V12.3249H19.6172C20.1368 12.3249 20.6091 12.41 21.0342 12.58C21.4593 12.7468 21.8229 12.9815 22.1251 13.2838C22.4274 13.5828 22.662 13.9417 22.8289 14.3606C22.9957 14.7793 23.0792 15.239 23.0792 15.7396ZM21.7756 15.7396C21.7756 15.3649 21.7253 15.0296 21.6246 14.7337C21.527 14.4345 21.3837 14.1826 21.1947 13.978C21.009 13.7702 20.7822 13.6112 20.5146 13.501C20.2501 13.3908 19.951 13.3357 19.6172 13.3357H18.2901V18.1437H19.6172C19.951 18.1437 20.2501 18.0886 20.5146 17.9783C20.7822 17.8681 21.009 17.7107 21.1947 17.5061C21.3837 17.2982 21.527 17.0464 21.6246 16.7504C21.7253 16.4513 21.7756 16.1143 21.7756 15.7396ZM26.4206 19.1543H25.1454V12.3249H26.4206V19.1543Z"
                fill="#4F4F4F"
              />
              <path
                d="M41.88 11.726C40.51 12.0933 38.9045 12.2508 37.4195 12.2508C35.934 12.2508 34.3285 12.0933 32.9587 11.726L32.6963 12.7755C33.6723 13.0379 34.7955 13.2111 35.845 13.3003V20.1223H36.8945V16.9737H37.944V20.1223H38.9935V13.3003C40.043 13.2111 41.166 13.0379 42.142 12.7755L41.88 11.726ZM37.4195 11.726C37.9965 11.726 38.469 11.2537 38.469 10.6765C38.469 10.0992 37.9965 9.62695 37.4195 9.62695C36.842 9.62695 36.37 10.0992 36.37 10.6765C36.37 11.2537 36.842 11.726 37.4195 11.726Z"
                fill="#128F6E"
              />
              <path
                d="M37.6815 11.726C36.312 12.0933 34.706 12.2508 33.221 12.2508C31.7359 12.2508 30.1301 12.0933 28.7604 11.726L28.498 12.7755C29.4741 13.0379 30.5972 13.2111 31.6467 13.3003V20.1223H32.6962V16.9737H33.7458V20.1223H34.7955V13.3003C35.845 13.2111 36.968 13.0379 37.944 12.7755L37.6815 11.726ZM33.221 11.726C33.7982 11.726 34.2705 11.2537 34.2705 10.6765C34.2705 10.0992 33.7982 9.62695 33.221 9.62695C32.6438 9.62695 32.1715 10.0992 32.1715 10.6765C32.1715 11.2537 32.6438 11.726 33.221 11.726Z"
                fill="#128F6E"
              />
              <path
                d="M22.1156 4.25017C22.1156 6.10882 20.6088 7.61552 18.7502 7.61552C16.8915 7.61552 15.3848 6.10882 15.3848 4.25017C15.3848 2.39147 16.8915 0.884766 18.7502 0.884766C20.6088 0.884766 22.1156 2.39147 22.1156 4.25017Z"
                fill="#4F4F4F"
              />
            </svg>
          </div>
        </div>
        <div
          className="e5479_22347"
          onClick={() => {
            this.props.setPage('HomeNotice');
          }}
        >
          {' '}
          {/* Info */}
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 10C7.7615 10 10 7.7614 10 5C10 2.2386 7.7615 0 5 0C2.2385 0 0 2.2386 0 5C0 7.7614 2.2385 10 5 10Z"
              fill="#19835D"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.5 3C4.5 2.72386 4.72386 2.5 5 2.5H5.005C5.28115 2.5 5.505 2.72386 5.505 3C5.505 3.27614 5.28115 3.5 5.005 3.5H5C4.72386 3.5 4.5 3.27614 4.5 3ZM5 4.5C5.27614 4.5 5.5 4.72386 5.5 5V7C5.5 7.27614 5.27614 7.5 5 7.5C4.72386 7.5 4.5 7.27614 4.5 7V5C4.5 4.72386 4.72386 4.5 5 4.5Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="e5479_22350">
          {/* X */}
          <svg
            onClick={() => {
              window.close();
            }}
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.5607 2.56066C15.1464 1.97487 15.1464 1.02513 14.5607 0.43934C13.9749 -0.146447 13.0251 -0.146447 12.4393 0.43934L7.25 5.62868L2.56066 0.93934C1.97487 0.353553 1.02513 0.353553 0.43934 0.93934C-0.146447 1.52513 -0.146447 2.47487 0.43934 3.06066L5.12868 7.75L0.43934 12.4393C-0.146447 13.0251 -0.146447 13.9749 0.43934 14.5607C1.02513 15.1464 1.97487 15.1464 2.56066 14.5607L7.25 9.87132L12.4393 15.0607C13.0251 15.6464 13.9749 15.6464 14.5607 15.0607C15.1464 14.4749 15.1464 13.5251 14.5607 12.9393L9.37132 7.75L14.5607 2.56066Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    );
  }
}

export default Header;
