import { useEffect, useState } from 'react';
import Card from './Card';
import { useGetTweetsQuery, useGetTweetsAmoutQuery } from 'state/api';

const TweetsLibrary = () => {
  const [tweets, setTweets] = useState([]);
  const [page, setPage] = useState(1);
  const [firstTweetId, setfirstTweetId] = useState(null);
  const { data: tweetsAmount } = useGetTweetsAmoutQuery();
  const { data } = useGetTweetsQuery(page);

  useEffect(() => {
    if (data) {
      setfirstTweetId(data[0].id);
      setTweets(prev =>
        prev[0]?.id === data[0].id ? prev : [...prev, ...data]
      );
    }
  }, [data]);

  useEffect(() => {
    document.getElementById(firstTweetId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, [firstTweetId]);

  const onLoadmoreClick = () => {
    if (tweets.length >= tweetsAmount) return;
    setPage(prev => prev + 1);
  };

  return (
    <section className="mt-[20px] ">
      <div className="mx-auto w-[1280px]">
        <div className="mr-auto">{`${tweets?.length}/${tweetsAmount}`}</div>
        <div className=" h-[464px] overflow-y-auto pr-1 flex flex-wrap justify-center gap-[20px]">
          {tweets?.map(tweet => (
            <Card key={tweet.id} tweet={tweet} />
          ))}
        </div>

        <button type="button" onClick={onLoadmoreClick}>
          Shov More
        </button>
      </div>
    </section>
  );
};

export default TweetsLibrary;
