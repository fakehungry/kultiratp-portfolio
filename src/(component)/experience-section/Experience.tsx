import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

type Props = {};

const Experience = (props: Props) => {
  return (
    <ExperienceSection>
      <ExperienceTitle>Experience</ExperienceTitle>
      <ExperienceTabs>
        <TabList>
          <Tab>
            <Image
              src="/png/self-employed.png"
              alt="self-employed"
              width={24}
              height={24}
            />
            <span>Self-Employed</span>
          </Tab>
          <Tab>
            <PTTEPImgContainer>
              <Image
                src="https://s3-alpha-sig.figma.com/img/bd6c/56cc/6f25f2f2e34dba98419868e6b622dd73?Expires=1701648000&Signature=ZzJKJRdrgLmEBJTaDAEq6R4oJY2nPlaR59ihaa~urpUy5MyfX-8ZR25cT2ZnopAG7R3K42BbaBLhSVN5pGRSXq0FirKpNuOzCM95ilBrMR68vkuPFI5davx03~zeYpH-aMwNNB9swEQFqZ1BRpJrBXdXboGprM-bUlQ8AIt8fKv-gXsV5gklEN76d7lw4bwB4FF7aubol4sIAmWUMMe298d2dJkRjGbHpIugFFQIYDdRGnf~FAnTQ3PKPdkTMbtyx-vdcgvfPvLdIcNESL1ZJIuXWavjEF5u2r-R2uioZSM1Sn1NUIv3lNn1IDBjpn9~JbGeMgIhp5BOxiUX5spMpg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="pttep"
                style={{ objectFit: "cover" }}
                fill
              />
            </PTTEPImgContainer>
            <span>PTTEP</span>
          </Tab>
        </TabList>
        <TabPanel>
          <h3>UX/UI Designer</h3>
          <h3>May 2023 - Present</h3>
          <h4>Responsibility:</h4>
          <ul>
            <li>
              Research user experiences by selecting research methods to get
              insight, behavior, pain point and potential improvements Analyze
              synthetic data to define persona, user&aposs problems, ideate
              wireframe & prototype for design solution
            </li>
            <li>
              Create UI designs for mobile responsive and develop design system
              in Figma
            </li>
          </ul>
          <h4>Projects:</h4>
          <ul>
            <li>FINNIE - Personal Financial Planner</li>
            <li>CMMS Dashboard</li>
            <li>Revamping KTC Mobile App</li>
            <li>Design challenge for easy money transaction</li>
          </ul>
          <h4>Certification:</h4>
          <ul>
            <li>UXUI Studio Bootcamp</li>
            <li>
              Google : Foundations of User Experiences Design, Issued in Aug
              2021
            </li>
            <li>
              Google : Certificate in Starting the UX Design Process, Issued in
              Jun 2023
            </li>
            <li>
              Udemy : Master UI Design and Prototyping, Issued in May 2023
            </li>
            <li>Udemy : Advanced UI Design, Issued in Sep 2023</li>
            <li>Udemy : Web development 2023 Bootcamp Issued in Oct 2023</li>
          </ul>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </ExperienceTabs>
    </ExperienceSection>
  );
};

export default Experience;

const ExperienceSection = styled.section`
  display: flex;
  background: #fcfcfd;
  margin: 120px 80px;
  flex-direction: column;
  height: 100vh;
`;

const ExperienceTitle = styled.h2`
  color: #00639b;
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.96px;
`;

const ExperienceTabs = styled(Tabs)`
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  .react-tabs__tab-list {
    display: flex;
    gap: 24px;
    cursor: pointer;
    width: 100%;
  }

  .react-tabs__tab {
    width: 100%;
    text-align: center;
    padding: 12px 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    border-radius: 40px;
    background: #f8fafd;
    backdrop-filter: blur(2px);
    color: #000;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.5;
  }

  .react-tabs__tab--selected {
    background: #fff1b8;
    font-weight: 500;
    border: none;
  }

  .react-tabs__tab-panel {
    padding: 32px 40px;
    border-radius: 24px;
    background: #fffdf6;
  }

  h3 {
    color: #1f1f1f;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
  }

  h4 {
    color: #1f1f1f;
    font-size: 16px;
    font-weight: 600;
    margin-top: 24px;
    line-height: 1.5;
  }

  ul {
    margin-left: 1em;
  }

  li {
    color: #1f1f1f;
    font-size: 16px;
    line-height: 1.5;
    list-style-type: disc;
    list-style-position: outside;
    padding-left: 0.5em;
  }
`;

const PTTEPImgContainer = styled.div`
  width: 24px;
  height: 30px;
  position: relative;
`;
