import React from 'react';

export const LoadMore = (props) => {
  const { fetchNextPage, isFetchingNextPage, isFetching } = props;

  return (
    <>
      <br />
      <div>
        <button onClick={fetchNextPage} disabled={isFetchingNextPage}>
          {isFetchingNextPage ? 'Loading more...' : 'Load More'}
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
    </>
  );
};
