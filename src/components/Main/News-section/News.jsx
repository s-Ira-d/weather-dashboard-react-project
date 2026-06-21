import { useEffect, useState } from "react";
import {
  Section,
  Container,
  Card,
  Image,
  Title,
  LoadMoreButton,
  TitleSection,
} from "./News.styled.js";

const API_KEY = "fed3addeaa5448a2b45b98d990cc78b4";

const NewsSection = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/everything?q=weather&language=en&pageSize=4&page=${page}&apiKey=${API_KEY}`,
        );

        const data = await res.json();

        if (!data.articles) return;

        if (page === 1) {
          setNews(data.articles);
        } else {
          setNews((prev) => [...prev, ...data.articles]);
        }

        if (data.articles.length < 4) {
          setHasMore(false);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchNews();
  }, [page]);

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <Section>
      <TitleSection>Latest Weather News</TitleSection>

      <Container>
        {news.map((item, index) => (
          <Card key={index}>
            <Image
              src={
                item.urlToImage ||
                "https://via.placeholder.com/300x180?text=News"
              }
              alt="news"
            />

            <Title>{item.title}</Title>
          </Card>
        ))}
      </Container>

      {hasMore && <LoadMoreButton onClick={loadMore}>See more</LoadMoreButton>}
    </Section>
  );
};

export default NewsSection;
