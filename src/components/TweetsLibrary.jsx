import { useState } from 'react';
import Card from './Card';
import Filter from './Filter';
import useTweets from 'hooks/useTweets';

const TweetsLibrary = () => {
  const [filter, setFilter] = useState('all');
  const { tweets, filteredTweets, tweetsAmount, getNextTweets, isAllLoad } =
    useTweets(filter);

  return (
    <section className="mt-[20px] ">
      <div className="mx-auto w-[1280px]">
        <Filter filter={filter} setFilter={setFilter} />
        <div className="mr-auto">{`${tweets?.length}/${tweetsAmount}`}</div>
        <div className=" h-[464px] overflow-y-auto pr-1 flex flex-wrap justify-center gap-[20px]">
          {filteredTweets?.map(tweet => (
            <Card key={tweet.id} tweet={tweet} />
          ))}
        </div>

        <button type="button" onClick={getNextTweets} disabled={isAllLoad}>
          Show More
        </button>
      </div>
    </section>
  );
};

export default TweetsLibrary;
