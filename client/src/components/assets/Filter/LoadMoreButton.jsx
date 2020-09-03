import React, { Fragment } from "react";

const LoadMoreButton = ({
  cursor,
  hasMore,
  loading,
  setLoadingOnButton,
  fetchMore,
}) => {
  const onLoadMoreClick = () => {
    setLoadingOnButton(true);
    fetchMore({
      variables: {
        after: cursor,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return previousResult;

        const products = [
          ...previousResult.products.products,
          ...fetchMoreResult.products.products,
        ];

        return {
          ...fetchMoreResult,
          products: {
            ...fetchMoreResult.products,
            products,
          },
        };
      },
    });
  };

  return hasMore ? (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col s12 center">
            <div
              className={`btn black ${loading && "disabled"}`}
              onClick={onLoadMoreClick}
            >
              Больше
              {loading && (
                <div className="progress black">
                  <div className="indeterminate grey lighten-4"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Fragment />
  );
};

export default LoadMoreButton;
