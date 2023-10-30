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
  { type: "Conference", title: "ICMDT", year: 2022},
  { type: "Conference", title: "SPML, Best presentor", year: 2022 },
  { type: "Conference", title: "ICDL", year: 2022},
  { type: "Journal", title: "JMST", year: 2022},
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