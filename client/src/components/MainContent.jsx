import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import AdminUsers from "../pages/AdminUsers";
import ModalApp from "../components/ModalApp";
import EmptaskList from "../pages/EmptaskList";
import Buddy from "../pages/Buddy";
import MyTeam from "../pages/MyTeam";

function Maincontent({data}) {
return <Container>
<Navbar data={data}/>

<SubContainer>

    <SectionOne>
        <ColumnOne1>
        
            {/* <TitleText></TitleText> */}
            <Welcome />
          
        
        </ColumnOne1>

        <ColumnTwo1>
        <EmptaskList />
        </ColumnTwo1>
    </SectionOne>


    <SectionTwo>
    <ColumnOne2>
    {/* <Buddy /> */}
    </ColumnOne2>



        <ColumnTwo2>
        
        </ColumnTwo2>
     </SectionTwo>


</SubContainer>

</Container>

}

const Container = styled.div`
  width: 100%;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-bottom-left-radius: 2rem;
  border-top-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  border-top-right-radius: 2rem;
  margin: 1rem 8rem 1rem 4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;

const SubContainer = styled.div`
  margin: 0.5rem 0;
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: 100%;
  }
`;
const SectionOne = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80%;
  gap: 2rem;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    align-items: left;
    height: max-content;
  }
`;
const ColumnOne1 = styled.div`
  display: flex;
  gap: rem;
  // background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }
`;

const ColumnTwo1 = styled.div`
// background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  display: flex;
  flex-direction: column;
  height: 115%;
  width: 100%;
  
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    justify-content: left;
    align-items: left;
  }
`;

const TitleText = styled.h3`
  height: 20%;
  /* padding-top */
`;

const SectionTwo = styled.div`
// background: linear-gradient(to bottom right, white 0%, #e6e4ff 90%);
  display: flex;
  gap: 2rem;
  height: 26vh;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    height: max-content;
    width: 100%;
  }
`;
const ColumnOne2 = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;
const InvoiceContainer = styled.div`
  height: 60%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;

const ColumnTwo2 = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export default Maincontent