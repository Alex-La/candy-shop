import React, { useState, useContext, useEffect } from "react";

import { Link } from "react-router-dom";

import M from "materialize-css";

import UserContext from "../../../../context/UserContext";

import { useQuery, useMutation } from "@apollo/react-hooks";
import PRODUCT_REVIEWS_QUERY from "../../../../graphql/queries/productReviews";
import PRODUCT_REVIEW_MUTATION from "../../../../graphql/mutations/productReview";

const Reviews = ({ instance, vendorCode }) => {
  const [createReview, setCreateReview] = useState(false);
  const [review, setReview] = useState("");

  const user = useContext(UserContext);

  const { data, loading, refetch } = useQuery(PRODUCT_REVIEWS_QUERY, {
    notifyOnNetworkStatusChange: true,
    variables: {
      vendorCode,
    },
  });

  const [sendReview, results] = useMutation(PRODUCT_REVIEW_MUTATION, {
    onCompleted: () => {
      refetch();
    },
  });

  useEffect(() => {
    if (results.data) {
      M.toast({ html: results.data.productReview.successMessage });
    }
  }, [results.data]);

  const onChange = (event) => {
    setReview(event.target.value);
  };

  const onSend = () => {
    if (review.length === 0) return M.toast({ html: "Напишите отзыв!" });

    sendReview({
      variables: { data: { vendorCode, name: user.name, review } },
    });
    refetch();
  };

  return (
    <div className="row">
      <div className="col s12">
        <ul className="collection">
          {loading ? (
            <div className="progress">
              <div className="indeterminate"></div>
            </div>
          ) : data && data.productReviews.length !== 0 ? (
            data.productReviews.map((prod, index) => {
              const date = new Date(prod.createdAt);

              return (
                <li key={index} className="collection-item avatar">
                  <i className="material-icons circle red">rate_review</i>
                  <span className="title">
                    <b>Отзыв от: {prod.name}</b>
                  </span>
                  <p>
                    <i>
                      Отзыв добавлен: {date.getDate()}.{date.getMonth() + 1}.
                      {date.getFullYear()}
                    </i>
                    <br />
                    <br />
                    {prod.review}
                  </p>
                </li>
              );
            })
          ) : (
            <div className="center card-panel orange-text">
              <h6>На этот товар нет отзывов. Будте первым!</h6>
            </div>
          )}
        </ul>

        {user ? (
          createReview ? (
            <div className="center card-panel">
              <div className="row">
                <div className="input-field col s11">
                  <textarea
                    value={review}
                    onChange={onChange}
                    id="textarea1"
                    className="materialize-textarea"
                  ></textarea>
                  <label htmlFor="textarea1">Добавить отзыв</label>
                  <div
                    onClick={onSend}
                    className={`waves-effect waves-light black btn ${
                      review === "" || (results.loading && "disabled")
                    }`}
                  >
                    Отправить
                  </div>
                </div>
                <div className="col s1">
                  <i
                    style={{ cursor: "pointer" }}
                    onClick={() => setCreateReview(false)}
                    className="material-icons"
                  >
                    close
                  </i>
                </div>
              </div>
            </div>
          ) : (
            <div className="col s12">
              <button
                onClick={() => setCreateReview(true)}
                className="waves-effect waves-dark btn-flat orange-text right"
              >
                Добавить свой отзыв
              </button>
            </div>
          )
        ) : (
          <div className="center card-panel orange-text row">
            <div className="col s12 m8">
              Отзывы могут оставлять только зарегистрированные пользователи.
            </div>
            <div className="col s12 m4">
              <Link
                to="/auth"
                onClick={() => instance.close()}
                className="waves-effect waves-light black btn-small right"
              >
                Авторизоваться
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reviews;
