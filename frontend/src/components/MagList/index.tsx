import React from 'react';
import styled from '@styles/themed-components';

import MagLargeCard from '@components/Common/Card/MagLargeCard';

const MagList = ({ magList }) => {
  return (
    <ListContainer>
      {magList &&
        magList?.map((track, index) => (
          <>
            {index > 0 && <DivdieContainer />}
            <MagLargeCard key={track.id} data={track} />
          </>
        ))}
    </ListContainer>
  );
};

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 964px;
  margin: 40px auto 70px;
  color: #232323;
`;

const DivdieContainer = styled.hr`
  padding: 1rem 0;
`;

export default MagList;
