import { Container } from "react-bootstrap";
import MainBtn from "../UI/Buttons/MainBtn";
import SecondaryBtn from "../UI/Buttons/SeconderyBtn";
import TerinaryBtn from "../UI/Buttons/TerinaryBtn";
import BasicTable from "../UI/Tables/BasicTable";
import StrippedTable from "../UI/Tables/StrippedTable";
import ColoredTable from "../UI/Tables/ColoredTable";
import BasicCard from "../UI/Cards/BasicCard";
import CardWithHeaderFooter from "../UI/Cards/CardWithHeader&Footer";
import ColoredCards from "../UI/Cards/ColoredCards";
import AccordionElement from "../UI/Accordion/Accordion";
import CarouselElement from "../UI/Carousel.js/CarouselElement";
import TabElement from "../UI/Tabs/TabElement";
import ScrollingTabs from "../UI/Tabs/ScrollingTabs";
const UIElements = function () {
  return (
    <Container>
      <MainBtn></MainBtn>
      <SecondaryBtn></SecondaryBtn>
      <TerinaryBtn></TerinaryBtn>
      <BasicTable />
      <StrippedTable />
      <ColoredTable />
      <BasicCard />
      <CardWithHeaderFooter />
      <ColoredCards />
      <AccordionElement />
      <CarouselElement />
      <TabElement />
      {/* <ScrollingTabs /> */}
    </Container>
  );
};
export default UIElements;
