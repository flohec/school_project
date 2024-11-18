import { Rate, Avatar, Button, Modal, Input } from "antd";
import React, { useState } from "react";
import "../../css/review.css";

const ReviewCard = () => {
  const [reviews, setReviews] = useState([
    {
      user: "John Doe",
      rating: 5,
      comment: "Excellent phone, love the new features!",
      avatar: "/images/john-avatar.jpg",
    },
    {
      user: "Jane Smith",
      rating: 4,
      comment: "Good phone, but a bit expensive.",
      avatar: "/images/jane-avatar.jpg",
    },
    {
      user: "Alice Johnson",
      rating: 4.5,
      comment: "Amazing performance and camera quality!",
      avatar: "/images/alice-avatar.jpg",
    },
    {
      user: "Mike Lee",
      rating: 3.5,
      comment: "Battery life could be better.",
      avatar: "/images/mike-avatar.webp",
    },
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newReview, setNewReview] = useState({
    user: "Test User",
    rating: 0,
    comment: "",
    avatar: "/images/default-avatar.jpg",
  });

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setReviews([newReview, ...reviews]);
    setIsModalVisible(false);
    setNewReview({
      user: "",
      rating: 0,
      comment: "",
      avatar: "/images/default-avatar.jpg",
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleInputChange = (field, value) => {
    console.log(value, field);
    setNewReview({ ...newReview, [field]: value });
  };

  return (
    <div className="reviews-section">
      <div className="reviews-header">
        <h3 className="reviews-title">Customer Reviews</h3>
        <Button
          type="primary"
          className="add-review-button"
          onClick={showModal}
        >
          Add your review
        </Button>
      </div>

      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <Avatar src={review.avatar} size={50} className="review-avatar" />
            <div className="review-content">
              <div className="review-header">
                <strong className="review-user">{review.user}</strong>
                <Rate
                  allowHalf
                  disabled
                  defaultValue={review.rating}
                  className="review-rating"
                />
              </div>
              <p className="review-comment">{review.comment}</p>
            </div>
          </div>
        ))}
      </div>

      <Modal
        title="Add your review"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Rate
          allowHalf
          value={newReview.rating}
          onChange={(value) => handleInputChange("rating", value)}
          className="review-input-rating"
        />
        <Input.TextArea
          rows={4}
          placeholder="Your review"
          value={newReview.comment}
          onChange={(e) => handleInputChange("comment", e.target.value)}
          className="review-input"
        />
      </Modal>
    </div>
  );
};

export default ReviewCard;
