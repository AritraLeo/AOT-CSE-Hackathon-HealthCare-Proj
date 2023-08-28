const LoginPage = () => {
  return (
    <div className="relative bg-aqua w-full h-[1024px] overflow-hidden text-left text-base text-white font-inter">
      <input
        className="[border:none] bg-gray-300 absolute top-[calc(50%_-_450px)] left-[calc(50%_-_660px)] rounded-mini w-[1320px] h-[900px]"
        type="text"
      />
      <div className="absolute top-[114px] left-[99px] rounded-7xl bg-darkslategray-300 w-[582px] h-[812px]" />
      <div className="absolute top-[65px] left-[718px] box-border w-1 h-[899px] border-r-[4px] border-solid border-darkslategray-100" />
      <div className="absolute top-[114px] left-[759px] rounded-7xl bg-gray-700 w-[582px] h-[812px]" />
      <img
        className="absolute top-[114px] left-[759px] rounded-[21px] w-[593px] h-[812px] object-cover"
        alt=""
        src="/improvingdoctorpatientrelationshipsindependentprimarycarephysicianheader-1@2x.png"
      />
      <h1 className="m-0 absolute top-[138px] left-[338px] text-17xl font-normal font-inherit text-gray-100">
        Login
      </h1>
      <div className="absolute top-[485px] left-[143px]">Remember Password</div>
      <input
        className="[border:none] font-inter text-lg bg-[transparent] absolute top-[224px] left-[145px] text-white text-left"
        type="text"
      />
      <input
        className="[border:none] bg-lavender absolute top-[252px] left-[135px] rounded-3xs w-[510px] h-[50px]"
        type="text"
      />
      <div className="absolute top-[265px] left-[164px] text-sm text-black">
        name@gmail.com
      </div>
      <button className="cursor-pointer p-0 bg-[transparent] absolute top-[745px] left-[135px] rounded-3xs box-border w-[510px] h-[50px] border-[1px] border-solid border-lightsteelblue" />
      <div className="absolute top-[435px] left-[523px]">Reset Password</div>
      <div className="absolute top-[613px] left-[255px]">
        <span>Don’t have an account?</span>
        <span className="text-black">{` `}</span>
        <span className="text-blueviolet-200">Sign up</span>
      </div>
      <div className="absolute top-[687.5px] left-[134.5px] box-border w-[226px] h-px border-t-[1px] border-solid border-gray-800" />
      <img
        className="absolute top-[687px] left-[410px] w-[235px] h-[2.03px]"
        alt=""
        src="/line-41.svg"
      />
      <div className="absolute top-[679px] left-[374px] text-blueviolet-300">
        OR
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[761px] left-[343px] text-base font-inter text-white text-left inline-block">
        Authorize with Google
      </button>
      <img
        className="absolute top-[758px] left-[303px] w-[25px] h-[25px] object-cover"
        alt=""
        src="/google@2x.png"
      />
      <div className="absolute top-[342px] left-[145px] text-lg">Password</div>
      <input
        className="[border:none] bg-lavender absolute top-[372px] left-[135px] rounded-3xs w-[510px] h-[50px]"
        type="text"
      />
      <img
        className="absolute top-[390px] left-[609px] w-[18px] h-[15px] overflow-hidden"
        alt=""
        src="/iconsaxlineareye.svg"
      />
      <img
        className="absolute top-[392px] left-[167px] w-[129px] h-2.5"
        alt=""
        src="/password-dots.svg"
      />
      <button className="cursor-pointer p-0 bg-[transparent] absolute top-[542px] left-[135px] rounded-3xs box-border w-[510px] h-[50px] border-[1px] border-solid border-snow-200">
        <div className="absolute top-[11px] left-[235px] text-base font-manrope text-white text-left">
          Login
        </div>
      </button>
    </div>
  );
};

export default LoginPage;
