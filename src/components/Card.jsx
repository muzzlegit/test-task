import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { ReactComponent as BgPicture } from 'assets/images/picture.svg';
import { ReactComponent as Line } from 'assets/images/line.svg';
import { ReactComponent as UserFrame } from 'assets/images/frame.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { useSelector } from 'react-redux/es/exports';
import { useAddFollowMutation } from 'state/api';
import { addUser, removeUser, getFollowList } from 'state/userSlice';

const Card = ({ tweet }) => {
  const { id, tweets, followers, avatar, user } = tweet;
  const followList = useSelector(getFollowList);
  const dispatch = useDispatch();
  const [addFollow] = useAddFollowMutation();
  const [isFolowing, setIsFolowing] = useState(followList.includes(id));

  const onButtonClick = async e => {
    const id = e.target.id;
    try {
      const { data, error } = await addFollow({
        id,
        followers: {
          followers: isFolowing ? followers - 1 : followers + 1,
        },
      });
      if (data) {
        if (isFolowing) {
          dispatch(removeUser(id));
          setIsFolowing(false);
        } else {
          dispatch(addUser(id));
          setIsFolowing(true);
        }
      }
      if (error) {
        throw error;
      }
    } catch (error) {
      console.log(error.data);
    }
  };

  return (
    <article
      className="relative w-[380px] h-[460px] shadow-cardShadow bg-articleBg rounded-[20px]"
      id={id}
    >
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
        <img
          className="absolute z-30 left-1/2 -translate-x-1/2 w-[56px] rounded-[50%]"
          src={avatar}
          alt={user}
        />
      </div>
      <div className="text-center">
        <p className="mb-[16px] text-text font-medium text-[20px]/[24px] uppercase">
          {tweets} tweets
        </p>
        <p className="mb-[26px] text-text font-medium text-[20px]/[24px] uppercase">
          {followers} followers
        </p>
        <button
          id={id}
          className={`w-[196px] h-[50px] px-[28px] py-[14px] ${
            isFolowing ? 'bg-activeButtonBg' : 'bg-buttonBg'
          } rounded-[10px] shadow-buttonShadow cursor-pointer text-textSecondary font-semibold text-[18px]/[22px] uppercase`}
          type="button"
          onClick={onButtonClick}
        >
          Follow
        </button>
      </div>
    </article>
  );
};

export default Card;
