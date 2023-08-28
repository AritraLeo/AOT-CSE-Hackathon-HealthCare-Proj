const SignUpPage = () => {
  return (
    <div className="relative bg-aqua w-full h-[1024px] overflow-hidden text-left text-lg text-white font-inter">
      <div className="absolute top-[calc(50%_-_450px)] left-[calc(50%_-_660px)] rounded-mini bg-gray-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1320px] h-[900px]" />
      <img
        className="absolute top-[100px] left-[754px] rounded-mini w-[587px] h-[823px] object-cover"
        alt=""
        src="/image-1@2x.png"
      />
      <div className="absolute top-[0px] left-[0px] w-[1440px] h-[1024px] overflow-hidden">
        <div className="absolute top-[100px] left-[100px] rounded-mini bg-darkslategray-400 w-[591px] h-[824px]" />
        <div className="absolute top-[140px] left-[342px] text-17xl">
          Sign up
        </div>
        <div className="absolute top-[322px] left-[143px] w-[510px] h-[78px]">
          <div className="absolute top-[0px] left-[10px]">Mobile Number</div>
          <input
            className="[border:none] bg-lavender absolute top-[28px] left-[0px] rounded-3xs w-[510px] h-[50px]"
            type="text"
          />
          <div className="absolute top-[44px] left-[26px] text-sm text-gray-900">
            Enter 10 digits
          </div>
        </div>
        <div className="absolute top-[430px] left-[143px] w-[510px] h-[78px]">
          <div className="absolute top-[0px] left-[10px]">Email address</div>
          <input
            className="[border:none] bg-lavender absolute top-[28px] left-[0px] rounded-3xs w-[510px] h-[50px]"
            type="text"
          />
          <div className="absolute top-[41px] left-[29px] text-sm text-gray-900">
            name@gmail.com
          </div>
        </div>
        <div className="absolute top-[539px] left-[143px] w-[510px] h-[78px]">
          <div className="absolute top-[0px] left-[10px]">User Name</div>
          <input
            className="[border:none] bg-lavender absolute top-[28px] left-[0px] rounded-3xs w-[510px] h-[50px]"
            type="text"
          />
        </div>
        <div className="absolute top-[647px] left-[143px] w-[510px] h-[78px]">
          <div className="absolute top-[0px] left-[10px]">Password</div>
          <input
            className="[border:none] bg-lavender absolute top-[28px] left-[0px] rounded-3xs w-[510px] h-[50px]"
            type="text"
          />
        </div>
        <div className="absolute top-[214px] left-[143px] w-[510px] h-[78px]">
          <div className="absolute top-[0px] left-[10px]">Full Name</div>
          <input
            className="[border:none] bg-lavender absolute top-[28px] left-[0px] rounded-3xs w-[510px] h-[50px]"
            type="text"
          />
          <div className="absolute top-[41px] left-[29px] text-sm text-gray-900">
            full name
          </div>
        </div>
        <div className="absolute top-[691px] left-[172px] text-sm text-gray-900">{`at least 8 characters `}</div>
        <img
          className="absolute top-[692px] left-[614px] w-[18px] h-[15px] overflow-hidden"
          alt=""
          src="/iconsaxlineareye.svg"
        />
        <button className="cursor-pointer [border:none] p-0 bg-aqua absolute top-[774px] left-[153px] rounded-[7px] w-[210px] h-[60px]" />
        <div className="absolute top-[793px] left-[191px] text-black">
          Create Account
        </div>
        <div className="absolute top-[877px] left-[143px]">
          Already have an account ? Login
        </div>
        <div className="absolute top-[756px] left-[440px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[212.5px] h-[91.44px] text-black font-manrope">
          <img
            className="absolute top-[-0.23px] left-[3.13px] rounded-8xs w-[209.46px] h-[91.85px]"
            alt=""
            src="/rectangle-72.svg"
          />
          <div className="absolute top-[1px] left-[18px] w-[195px] h-[91px] overflow-hidden">
            <div className="absolute top-[17px] left-[37.5px] font-light whitespace-pre-wrap inline-block w-[135px] h-[55px]">
              <p className="[margin-block-start:0] [margin-block-end:2px]">{`Doctor ?  If so `}</p>
              <p className="m-0">use toggle .</p>
            </div>
          </div>
        </div>
        <img
          className="absolute top-[789px] left-[395px] rounded-xl w-[45px] h-[26px]"
          alt=""
          src="/toggle-button.svg"
        />
        <div className="absolute top-[65px] left-[718px] box-border w-1 h-[899px] border-r-[4px] border-solid border-darkslategray-100" />
      </div>
    </div>
  );
};

export default SignUpPage;
