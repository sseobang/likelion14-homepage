import { useState } from "react";
import styled from "styled-components";
import TopSection from "../../components/topsection/Topsection.jsx";
import InfoBox from "../../components/infobox/Infobox.jsx";
import ItemDummy from "./ItemDummy";

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #FAFBF8;
`;

const Content = styled.div`
  padding: 80px;
`;

const Section = styled.section`
  margin-bottom: 80px;
`;

const SubSection = styled.div`
  margin-bottom: 60px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: ${({ $isMain }) => ($isMain ? "30px" : "20px")};
  font-weight: 700;
  margin-bottom: 40px;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 28px;
  flex-wrap: wrap;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PositionText = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

const renderCards = (items) => (
  <CardContainer>
    {items.map((item) => (
      <CardWrapper key={item.id}>
        {item.position && <PositionText>{item.position}</PositionText>}

        <InfoBox name={item.name} major={item.major} />
      </CardWrapper>
    ))}
  </CardContainer>
);

export default function Members() {
  const [selected, setSelected] = useState("14기");

  const getItems = () => {
    if (selected === "14기") {
      return ItemDummy;
    }

    return ItemDummy.map((item) => ({
      ...item,
      name: "김멋사",
      major: "소프트웨어학과 23학번",
    }));
  };

  const items = getItems();

  const filterItems = (title, group) =>
    items.filter(
      (item) => item.part === title && (!group || item.group === group)
    );

  const renderSection = (title, group) => {
    const filteredItems = filterItems(title, group);

    return (
      <Section>
        <SectionTitle $isMain={title === "운영진"}>{title}</SectionTitle>
        {renderCards(filteredItems)}
      </Section>
    );
  };

  const renderSubSection = (title, group) => {
    const filteredItems = filterItems(title, group);

    return (
      <SubSection>
        <SectionTitle>{title}</SectionTitle>
        {renderCards(filteredItems)}
      </SubSection>
    );
  };

  return (
    <PageContainer>
      <TopSection selected={selected} onSelect={setSelected} />

      <Content>
        {renderSection("운영진")}
        {renderSection("PO", "middle")}
        {renderSection("FRONTEND", "middle")}
        {renderSection("BACKEND", "middle")}

        <Section>
          <SectionTitle $isMain>아기사자</SectionTitle>
          {renderSubSection("PO", "baby")}
          {renderSubSection("FRONTEND", "baby")}
          {renderSubSection("BACKEND", "baby")}
        </Section>
      </Content>
    </PageContainer>
  );
}