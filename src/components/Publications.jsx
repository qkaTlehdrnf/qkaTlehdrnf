import styled from "styled-components";
import { Title } from "./globalStyledComponents";
import { Element } from "react-scroll";

const StyledPublications = styled.section`
  .publication {
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }
`;

// 예시 데이터
const publications = [
  { type: "1st Author"},
  { type: "Internationl Journal", title: "JMST", year: 2023},
  { type: "Poster", title: "기계공학과 학술대회 포스터 발표", year: 2023},
  { type: "Conference contributed paper", title: "ICMDT", year: 2023},
  { type: "Conference contributed paper", title: "SPML, Best presentor", year: 2023 },
  { type: "Conference contributed paper", title: "ICDL", year: 2023},
  { type: "2nd Author"},
  { type: "Internationl Journal", title: "IEEE-Frontier", year: 2023},
  { type: "Internationl Journal", title: "MDPI-Electronics", year: 2023},
];

export default function Publications() {
  return (
    <Element name={"Publications"} id="publications">
        <StyledPublications className="section">
        <Title>
            <h2>My Publications</h2>
            <div className="underline"></div>
        </Title>
        <div className="publication-list">
            {publications.map((pub, index) => (
            <div key={index} className="publication">
                <strong>{pub.type}:</strong> {pub.title} ({pub.year})
            </div>
            ))}
        </div>
        </StyledPublications>
    </Element>
  );
}