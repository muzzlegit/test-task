import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TweetsLibrary from 'components/TweetsLibrary';
import Filter from 'components/Filter';

const Tweets = () => {
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-center items-center">
        <button
          className={`mr-[20px] w-[196px] h-[50px] px-[28px] py-[14px]
           bg-buttonBg text-secondaryText  rounded-[10px]
           shadow-buttonShadow cursor-pointer
           font-semibold text-[12px]/[14px] uppercase
           hover:bg-activeButtonBg
           `}
          type="button"
          onClick={() => navigate('/')}
        >
          Back to home page
        </button>
        <Filter filter={filter} setFilter={setFilter} />
      </div>

      <TweetsLibrary filter={filter} />
    </div>
  );
};

export default Tweets;
