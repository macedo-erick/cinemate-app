import { useEffect, useState } from 'react';
import { Review as ReviewModel } from '@/models/review.model';
import MovieService from '@/services/movie-service';
import ReviewCard from '@/components/ReviewCard';

interface ReviewProps {
  id: number;
}

const Reviews = ({ id }: ReviewProps) => {
  const [reviews, setReviews] = useState<ReviewModel[]>([]);
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    MovieService.getMovieReviews(id)
      .then((res) => setReviews(res.data))
      .finally(() => setLoaded(true));
  }, [id]);

  return (
    <>
      {loaded && reviews.length ? (
        <>
          <section className="mb-8">
            <h1 className="section__title">Reviews</h1>

            <ul className="flex flex-col gap-8">
              {reviews?.map((r, i) => (
                <ReviewCard review={r} key={i}></ReviewCard>
              ))}
            </ul>
          </section>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Reviews;
