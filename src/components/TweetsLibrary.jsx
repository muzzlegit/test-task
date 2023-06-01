import Card from './Card';
import { useGetTweetsQuery } from 'state/api';

const TweetsLibrary = () => {
  const { data, isError } = useGetTweetsQuery();

  return (
    <div>
      {data?.map(tweet => (
        <Card tweet={tweet} />
      ))}
    </div>
  );
};

export default TweetsLibrary;
