import React from "react";
import { ScrollView, View } from "react-native";
import { FlexCol, Container, Header } from "../styles";
import Anchor from "./Anchor";
import styled from "styled-components";

const HeaderText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  flex: 1;
  align-self: stretch;
`;

const DescText = styled.Text`
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 20px;
`;
export function Faq() {
  return (
    <Container justifyContent={"center"} flex={1}>
      <View style={{ height: "100%", paddingLeft: 20, paddingRight: 20, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
        <ScrollView style={{}}>
          <FlexCol>
            <Header style={{ marginTop: 40, marginBottom: 40 }} color="black">
              F.A.Q
            </Header>
            <HeaderText>
              Who should use the Coronavirus Stopwatch app?
            </HeaderText>
            <DescText>
              Anyone in an area that has confirmed COVID-19 infections can
              benefit personally from the use of the app and improve conditions
              for those around them. Preventative measures such as social
              distancing can mitigate the spread of the virus. At this stage of
              the pandemic, quarantined time is one of the most important
              factors to measure.
              <Anchor
                href={
                  "https://www.cdc.gov/coronavirus/2019-ncov/cases-updates/world-map.html?CDC_AA_refVal=https%3A%2F%2Fwww.cdc.gov%2Fcoronavirus%2F2019-ncov%2Flocations-confirmed-cases.html"
                }
              >
                Check if your area has confirmed infections here
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
              confirmed cases, researchers estimate the average incubation
              period of COVID-19 is about five days. More than 97% of infected
              individuals show symptoms within 11.5 days.
              <Anchor
                href={
                  "https://www.sciencedaily.com/releases/2020/03/200317175438.htm"
                }
              >
                Learn more about the incubation period for COVID-19 here
              </Anchor>
            </DescText>
            <HeaderText>
              But what if I am young and healthy? Should I still practice social
              distancing and self-quarantining?{" "}
            </HeaderText>
            <DescText>
              Yes! By acting now through self-containment, i.e. quarantining and
              social distancing, we can prevent the unnecessary loss of life to
              many of our most vulnerable in society. –
              <Anchor
                href={
                  "https://www.imperial.ac.uk/media/imperial-college/medicine/sph/ide/gida-fellowships/Imperial-College-COVID19-NPI-modelling-16-03-2020.pdf"
                }
              >
                Research from the Imperial College of London suggests that the
                loss of life would likely be in the millions if no preventative
                measures were taken
              </Anchor>
              This Washington Post Coronavirus simulation shows the potential
              spread of the virus based on different levels of social
              distancing.
              <Anchor
                href={
                  "https://www.washingtonpost.com/graphics/2020/world/corona-simulator/"
                }
              >
                Take a look to better understand the benefits of social
                distancing
              </Anchor>
            </DescText>
            <HeaderText>
              Can I wait to start after I go to my best friend’s wedding?
            </HeaderText>
            <DescText>
              Our hope is that most people’s value preferences favor protecting
              the life of a loved one over social engagements. One of the most
              important lessons the world has learned from the pandemic
              experience in Wuhan, China, is that we dramatically underestimate
              the number of infected cases. When the medical industry believed
              to have only 444 COVID-19 patients walking around Wuhan, there was
              actually 27x as many that were discovered after the fact.
              <Anchor
                href={
                  "https://medium.com/@tomaspueyo/coronavirus-act-today-or-people-will-die-f4d3d9cd99ca"
                }
              >
                Learn more about the necessity to act now here
              </Anchor>
            </DescText>
          </FlexCol>
        </ScrollView>
      </View>
    </Container>
  );
}
