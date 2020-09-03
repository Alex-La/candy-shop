/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useReducer, useState } from "react";

import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";

import REVIEWS_QUERY from "../../graphql/queries/reviews";
import { reducer, initialState } from "../../reducers/reviewsReducer";

import { useLocation } from "react-router-dom";

const Responses = () => {
  const [revData, setRevData] = useState({ reviews: null });

  const { data, loading, refetch } = useQuery(REVIEWS_QUERY);
  const [rev, setRev] = useReducer(reducer, initialState);
  const location = useLocation();

  useEffect(() => {
    if (!loading && location.pathname === "/responses") {
      refetch();
    }
  }, [loading, location, refetch]);

  useEffect(() => {
    if (data) {
      setRevData(data);
      for (let i in data.reviews) {
        setRev({ type: data.reviews[i].rate });
      }
    }
  }, [data]);

  const handleFilter = (e) => {
    e.preventDefault();
    setRevData({
      reviews: data.reviews.filter((review) => review.rate === e.target.id),
    });
  };

  const handleBlur = () => {
    setRevData(data);
  };

  return (
    <div className="section">
      <div className="row">
        <div className="col s12">
          <ul className="breadcrumb">
            <li>
              <Link to="/" className="orange-text">
                Главная страница
              </Link>
            </li>
            <li className="black-text">Отзывы</li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col s12 m4 xl3" style={{ marginBottom: 50 }}>
            <ul className="collection with-header ">
              <li className="collection-header">
                <h4>
                  <b>Отзывы о магазине</b>
                </h4>
              </li>
              <a
                href=""
                className="collection-item black-text"
                id="Отличный магазин"
                onClick={handleFilter}
                onBlur={handleBlur}
              >
                <span
                  className="new badge"
                  data-badge-caption=""
                  id="Отличный магазин"
                >
                  {rev.first}
                </span>
                Отличный магазин
              </a>
              <a
                href=""
                className="collection-item black-text"
                id="Хороший магазин"
                onClick={handleFilter}
                onBlur={handleBlur}
              >
                <span
                  className="new badge"
                  data-badge-caption=""
                  id="Хороший магазин"
                >
                  {rev.second}
                </span>
                Хороший магазин
              </a>
              <a
                href=""
                className="collection-item black-text"
                id="Обычный магазин"
                onClick={handleFilter}
                onBlur={handleBlur}
              >
                <span
                  className="new badge"
                  data-badge-caption=""
                  id="Обычный магазин"
                >
                  {rev.third}
                </span>
                Обычный магазин
              </a>
              <a
                href=""
                className="collection-item black-text"
                id="Плохой магазин"
                onClick={handleFilter}
                onBlur={handleBlur}
              >
                <span
                  className="new badge"
                  data-badge-caption=""
                  id="Плохой магазин"
                >
                  {rev.fourth}
                </span>
                Плохой магазин
              </a>
              <a
                href=""
                className="collection-item black-text"
                id="Ужасный магазин"
                onClick={handleFilter}
                onBlur={handleBlur}
              >
                <span
                  className="new badge"
                  data-badge-caption=""
                  id="Ужасный магазин"
                >
                  {rev.fifth}
                </span>
                Ужасный магазин
              </a>
            </ul>

            <Link
              to="/responses/new"
              className="btn orange waves-effect waves-light"
            >
              Написать отзыв
            </Link>
          </div>

          <div className="col s12 m8 xl9">
            {loading ? (
              <div className="progress">
                <div className="indeterminate"></div>
              </div>
            ) : (
              <ul className="collection">
                {revData &&
                  revData.reviews &&
                  revData.reviews.map((review, index) => {
                    const date = new Date(review.createdAt);

                    return (
                      <li className="collection-item avatar" key={index}>
                        <i className="material-icons circle red">rate_review</i>
                        <span className="title">
                          <b>
                            {review.rate} от: {review.name}
                          </b>
                        </span>
                        <p>
                          <i>
                            Отзыв добавлен: {date.getDate()}.
                            {date.getMonth() + 1}.{date.getFullYear()}
                          </i>
                          <br />
                          <br />
                          {review.review}
                        </p>
                      </li>
                    );
                  })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Responses;
