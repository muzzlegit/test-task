import React from 'react';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { ReactComponent as BgPicture } from 'assets/images/picture.svg';
import { ReactComponent as Line } from 'assets/images/line.svg';
import { ReactComponent as UserFrame } from 'assets/images/frame.svg';
import { ReactComponent as Avatar } from 'assets/images/avatar.svg';
const Card = () => {
  return (
    <article className="relative mx-auto my-10 w-[380px] h-[460px] shadow-cardShadow bg-articleBg rounded-[20px]">
      <div className=" relative h-[178px]">
        <a
          className="inline-block pl-[20px] pt-[20px]"
          href="https://www.youtube.com/"
        >
          <Logo className="h-full inline-block" />
        </a>
        <BgPicture className="absolute z-10  top-[28px] left-1/2 -translate-x-1/2" />
      </div>

      <div className="mb-[26px] h-[80px] flex items-center">
        <Line />
        <UserFrame className="absolute z-20 left-1/2 -translate-x-1/2" />
        <Avatar className="absolute z-30 left-1/2 -translate-x-1/2" />
      </div>
      <div className="text-center">
        <p className="mb-[16px] text-text font-medium text-[20px]/[24px] uppercase">
          {'777'} tweets
        </p>
        <p className="mb-[26px] text-text font-medium text-[20px]/[24px] uppercase">
          {'100500'} followers
        </p>
        <button
          className="w-[196px] h-[50px] px-[28px] py-[14px] bg-buttonBg rounded-[10px] shadow-buttonShadow cursor-pointer text-textSecondary font-semibold text-[18px]/[22px] uppercase"
          type="button"
        >
          Follow
        </button>
      </div>
    </article>
  );
};

export default Card;
