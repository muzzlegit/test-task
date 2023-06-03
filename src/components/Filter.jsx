import { useState } from 'react';
import { GrFilter } from 'react-icons/gr';

const OPTIONS = ['all', 'follow', 'following'];

const Filter = ({ filter, setFilter }) => {
  const [showList, setShowList] = useState(false);

  return (
    <div>
      <div className="flex justify-center items-center gap-[16px]">
        <p>{filter}</p>
        <GrFilter
          size="24px"
          className=""
          onClick={() => setShowList(prev => !prev)}
        />
      </div>
      {showList ? (
        <ul>
          {OPTIONS?.map(option => (
            <li
              key={option}
              id={option}
              onClick={e => {
                setFilter(e.target.id);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Filter;
