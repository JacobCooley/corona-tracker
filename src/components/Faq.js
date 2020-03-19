import React from "react";
import { ScrollView } from "react-native";
import { FlexRow, FlexCol, Container, Header } from "../styles";
import Anchor from "./Anchor";
import styled from "styled-components";

const HeaderText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const DescText = styled.Text`
  font-size: 16px;
`;
export function Faq() {
  return (
    <Container justifyContent={"center"} flex={1}>
      <Header style={{ marginTop: 40, marginBottom: 40 }} color="black">
        F.A.Q
      </Header>
      <ScrollView style={{ flex: 55, paddingLeft: 10, paddingRight: 10 }}>
        <FlexCol>
          <HeaderText>Who should use the Coronavirus Stopwatch app?</HeaderText>
          <DescText>
            Anyone in an area that has confirmed COVID-19 infections can benefit
            personally from the use of the app and improve conditions for those
            around them. Preventative measures such as social distancing can
            mitigate the spread of the virus. At this stage of the pandemic,
            quarantined time is one of the most important factors to measure.
            Check if your area has confirmed infections{" "}
            <Anchor
              href={
                "https://www.cdc.gov/coronavirus/2019-ncov/cases-updates/world-map.html?CDC_AA_refVal=https%3A%2F%2Fwww.cdc.gov%2Fcoronavirus%2F2019-ncov%2Flocations-confirmed-cases.html"
              }
            >
              here
            </Anchor>
          </DescText>
          <HeaderText>
            Why should I use the Coronavirus Stopwatch app?
          </HeaderText>
          <DescText>
            We designed this app for people that are ready to take more
            responsibility for their personal health, the health of their
            friends and family, and the health of the greater population. The
            time measured on the app provides greater personal comfort and
            lowers the risk of spreading the virus. Based on data from 181
            confirmed cases, researchers estimate the average incubation period
            of COVID-19 is about five days. More than 97% of infected
            individuals show symptoms within 11.5 days. Learn more about the
            incubation period for COVID-19{" "}
            <Anchor
              href={
                "https://www.sciencedaily.com/releases/2020/03/200317175438.htm"
              }
            >
              here
            </Anchor>
          </DescText>
          <HeaderText>
            But what if I am young and healthy? Should I still practice social
            distancing and self-quarantining?{" "}
          </HeaderText>
          <DescText>
            Yes! By acting now through self-containment, i.e. quarantining and
            social distancing, we can prevent the unnecessary loss of life to
            many of our most vulnerable in society. Research from the Imperial
            College of London suggests that the loss of life would likely be in
            the millions if no preventative measures were taken –
            <Anchor>
              https://www.imperial.ac.uk/media/imperial-college/medicine/sph/ide/gida-fellowships/Imperial-College-COVID19-NPI-modelling-16-03-2020.pdf
            </Anchor>
            This Washington Post Coronavirus simulation shows the potential
            spread of the virus based on different levels of social distancing.
            Take a look to better understand the benefits of social distancing -{" "}
            <Anchor>
              https://www.washingtonpost.com/graphics/2020/world/corona-simulator/
            </Anchor>
          </DescText>
          <HeaderText>
            Can I wait to start after I go to my best friend’s wedding?
          </HeaderText>
          <DescText>
            Our hope is that most people’s value preferences favor protecting
            the life of a loved one over social engagements. One of the most
            important lessons the world has learned from the pandemic experience
            in Wuhan, China, is that we dramatically underestimate the number of
            infected cases. When the medical industry believed to have only 444
            COVID-19 patients walking around Wuhan, there was actually 27x as
            many that were discovered after the fact. Learn more about the
            necessity to act now{" "}
            <Anchor
              href={
                "https://medium.com/@tomaspueyo/coronavirus-act-today-or-people-will-die-f4d3d9cd99ca"
              }
            >
              here
            </Anchor>
          </DescText>
          <HeaderText>What is the formula for risk factors?</HeaderText>
          <DescText>
            The range of conditions for identifying risk factors related to a
            person’s “quarantined time” include location, population density,
            social activities including employment and living conditions. Just
            like human fingerprints, no two people share identical lifestyles.
            To begin we are estimating that the average infected person could
            interact with 16 other people per day. Researchers from Arizona
            demonstrated that when a substance was put on the door handle of an
            office building, it took less than four hours for the entire
            building to become infected, including every floor, bathroom,
            kitchen and office. We believe our estimate of 16 infections per day
            is conservative. The other factor related to risk factors is that
            once Person A infects 16 other people on Day 1, there is a
            compounding effect which means that the newly infected people could
            each infect another 16 people on Day 2. So our transmission rate
            formula looks like this- Day 1 = (1*16) = 16 Day 2 = ((1*16)*16) =
            256 Day 3 = ((1*16)*256) = 4096 Day 4 = ((1*16)*4096) = 65536
          </DescText>
          <HeaderText>
            What is the formula for Estimated Lives Saved?
          </HeaderText>
          <DescText>
            The Center for Disease Control and Prevention (CDC) estimates that
            the mortality rate for COVID-19 is between 0.25% - 3.0% varying
            greatly based on age and underlying health issues. We chose an
            estimate of 2.0% for our formula so a user’s Estimated Lives Saved
            formula looks like this – Estimated Lives Saved Day 1 = (16*0.2) =
            0.32 Estimated Lives Saved Day 2 = (256*0.2) = 5.12 Estimated Lives
            Saved Day 3 = (4096*0.2) = 81.92 Estimated Lives Saved Day 4 =
            (65536*0.2) = 1,310.72 Learn more about the mortality rate from the
            CDC here -{" "}
            <Anchor
              href={"https://wwwnc.cdc.gov/eid/article/26/6/20-0320_article"}
            >
              here
            </Anchor>
          </DescText>
        </FlexCol>
      </ScrollView>
    </Container>
  );
}
