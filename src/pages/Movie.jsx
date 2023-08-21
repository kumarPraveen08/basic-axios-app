import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { bannerFallbackImage, fetchMovieDetails, image780 } from "../api/Api";

export default function Movie() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getMovieDetails(id);
    setLoading(false);
  }, [id]);

  const getMovieDetails = async (id) => {
    const data = await fetchMovieDetails(id);
    setMovie(data);
  };
  return (
    <MovieContainer>
      <h1>
        <span onClick={() => navigate("/")}>{`< go back`}</span>single movie
        page
      </h1>
      {loading ? (
        "Loading..."
      ) : (
        <div className="main">
          <div className="left">
            <img
              src={image780(movie?.backdrop_path) || bannerFallbackImage}
              alt={movie?.title}
            />
          </div>
          <div className="right">
            <h2>{movie?.title}</h2>
            <p>{movie?.overview}</p>
          </div>
        </div>
      )}
    </MovieContainer>
  );
}

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 100px;
  margin: auto;
  h1 {
    span {
      padding: 10px;
      border: none;
      background-color: gray;
      color: white;
      font-size: 18px;
      font-weight: 400;
      margin-right: 20px;
      border-radius: 10px;
      cursor: pointer;
    }
  }
  .main {
    display: flex;
    gap: 20px;
    .left {
      flex: 1;
      img {
        width: 100%;
        max-height: 500px;
        object-fit: cover;
        border-radius: 10px;
      }
    }
    .right {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 20px;
      h2 {
        font-size: 32px;
      }
      p {
        font-size: 18px;
        color: #2d2d2d;
      }
    }
  }
`;
