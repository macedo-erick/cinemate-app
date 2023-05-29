interface MovieProps {
  params: { id: string };
}

const Movie = ({ params }: MovieProps) => {
  return (
    <>
      <h1>{params.id}</h1>
    </>
  );
};

export default Movie;
