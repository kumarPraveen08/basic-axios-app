import { styled } from "styled-components";
import { image342, posterFallbackImage } from "../api/Api";
import { useNavigate } from "react-router-dom";

export default function Item({ data }) {
  const navigate = useNavigate();
  return (
    <ItemContainer>
      <div className="movie">
        <img
          src={image342(data?.poster_path) || posterFallbackImage}
          alt={data?.title}
          onClick={() => navigate(`/movie/${data?.id}`)}
        />
        <div className="details">
          <span onClick={() => navigate(`/movie/${data?.id}`)}>
            {data?.title?.length > 16
              ? data.title.slice(0, 16) + "..."
              : data.title}
          </span>
          <span>{data?.vote_average}</span>
        </div>
      </div>
    </ItemContainer>
  );
}

const ItemContainer = styled.div`
  .movie {
    max-width: 160px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
    img {
      width: 100%;
      height: 240px;
      object-fit: cover;
      border-radius: 8px;
      cursor: pointer;
    }
    .details {
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      gap: 5px;
      span {
        &:first-child {
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;
