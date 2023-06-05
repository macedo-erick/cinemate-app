import { Review } from '@/models/review.model';
import { Avatar, Rating } from '@mui/material';

interface ReviewProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewProps) => {
  return (
    <>
      <li className="flex gap-7 bg-white px-4 py-6 rounded shadow-lg">
        <Avatar src={review.avatar} sx={{ width: 56, height: 56 }}></Avatar>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <p className="text-black text-base text-justify font-bold">
              {review.author}
            </p>
            <Rating
              value={review.rating / 2}
              precision={0.5}
              size="small"
              readOnly
            ></Rating>
          </div>
          <p className="text-xs text-slate-400">
            {new Date(review.createdDate).toLocaleDateString('en', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
            })}
          </p>
          <p className="text-black text-sm text-justify">{review.content}</p>
        </div>
      </li>
    </>
  );
};

export default ReviewCard;
