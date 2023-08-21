import { styled } from "styled-components";
import Item from "../components/Item";
import { useEffect, useState } from "react";
import { fetchMovies } from "../api/Api";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const data = await fetchMovies();
    setMovies(data.results);
  };

  return (
    <HomeContainer>
      <div className="container">
        <h2>movies</h2>
        <div className="list">
          {movies?.map((movie) => (
            <Item data={movie} key={movie?.id} />
          ))}
        </div>
      </div>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  margin: 40px 100px;
  .container {
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin: auto;
    h2 {
      font-size: 36px;
    }
    .list {
      display: flex;
      align-items: center;
      gap: 20px;
      flex-wrap: wrap;
    }
  }
`;
