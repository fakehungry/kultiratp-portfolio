import React, { useEffect, useState } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import dayjs from "dayjs";

type Props = {};

const Experience = (props: Props) => {
  const [experiences, setExperiences] = useState<any>();
  const now = dayjs();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/experiences", { cache: "no-store" });

        return res.json();
      } catch (error) {}
    })().then((data) => {
      setExperiences(data.experiences);
    });
  }, []);

  return (
    <ExperienceSection>
      <ExperienceTitle>Experience</ExperienceTitle>
      <ExperienceTabs>
        <TabList>
          {experiences?.map((experience: any, i: number) => (
            <Tab key={i}>
              {experience.job_title === "Self-Employed" ? (
                <>
                  <Image
                    src="/png/self-employed.png"
                    alt={experience.job_title}
                    width={24}
                    height={24}
                  />
                  <span>{experience.job_title}</span>
                </>
              ) : (
                <>
                  <PTTEPImgContainer>
                    <Image
                      src="/png/pttep.png"
                      alt={experience.job_title}
                      style={{ objectFit: "cover" }}
                      fill
                    />
                  </PTTEPImgContainer>
                  <span>{experience.job_title}</span>
                </>
              )}
            </Tab>
          ))}
        </TabList>
        {experiences?.map((experience: any) => (
          <>
            <TabPanel key={experience.position}>
              <h3>{experience.position}</h3>
              <h3>{`${dayjs(experience.start_date).format("MMMM YYYY")} - ${
                now.diff(dayjs(experience.end_date), "day") <= 30
                  ? "Present"
                  : dayjs(experience.end_date).format("MMMM YYYY")
              }`}</h3>
              <h4>Responsibility:</h4>
              <ul>
                {experience.responsibility.map((resp: string) => (
                  <li key={resp}>{resp}</li>
                ))}
              </ul>
              <h4>Projects:</h4>
              <ul>
                {experience.projects.map((project: string) => (
                  <li key={project}>{project}</li>
                ))}
              </ul>
              <h4>Certification:</h4>
              <ul>
                {experience.certification.map((cert: string) => (
                  <li key={cert}>{cert}</li>
                ))}
              </ul>
            </TabPanel>
          </>
        ))}
      </ExperienceTabs>
    </ExperienceSection>
  );
};

export default Experience;

const ExperienceSection = styled.section`
  display: flex;
  background: ${({ theme }) => theme.primaryBgColor};
  margin: 120px 80px;
  flex-direction: column;

  @media (max-width: 450px) {
    margin: 60px 0;
  }
`;

const ExperienceTitle = styled.h2`
  color: ${({ theme }) => theme.tertiaryFgColor};
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.96px;

  @media (max-width: 450px) {
    font-size: 20px;
  }
`;

const ExperienceTabs = styled(Tabs)`
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  .react-tabs__tab-list {
    display: flex;
    gap: 24px;
    cursor: pointer;
    margin: 0 0 24px 0;
    background-color: ${({ theme }) => theme.tertiaryBgColor};
    border-radius: 40px;

    @media (max-width: 450px) {
      margin: 0 16px 24px;
      gap: 16px;
    }
  }

  .react-tabs__tab {
    width: 100%;
    text-align: center;
    padding: 12px 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    backdrop-filter: blur(2px);
    color: ${({ theme }) => theme.primaryFgColor};
    font-size: 18px;
    font-weight: 400;
    line-height: 1.5;
    background-color: ${({ theme }) => theme.tertiaryBgColor};

    span {
      margin-left: 8px;
    }

    @media (max-width: 450px) {
      font-size: 14px;
      padding: 8px 12px;
    }
  }

  .react-tabs__tab--selected {
    background: #fff1b8;
    color: black;
    font-weight: 500;
    border: none;
  }

  .react-tabs__tab-panel {
    display: none;
    padding: 32px 40px;
    border-radius: 24px;
    background: ${({ theme }) => theme.tertiaryBgColor};

    @media (max-width: 450px) {
      padding: 24px 16px;
    }
  }

  .react-tabs__tab-panel--selected {
    display: block;
  }

  h3 {
    color: ${({ theme }) => theme.primaryFgColor};
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;

    @media (max-width: 450px) {
      font-size: 16px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }

  h4 {
    color: ${({ theme }) => theme.primaryFgColor};
    font-size: 16px;
    font-weight: 600;
    margin-top: 24px;
    line-height: 1.5;

    @media (max-width: 450px) {
      font-weight: 500;
    }
  }

  ul {
    margin-left: 1em;
  }

  li {
    color: ${({ theme }) => theme.primaryFgColor};
    font-size: 16px;
    line-height: 1.5;
    list-style-type: disc;
    list-style-position: outside;
    padding-left: 0.5em;

    @media (max-width: 450px) {
      font-size: 14px;
    }
  }
`;

const PTTEPImgContainer = styled.div`
  width: 24px;
  height: 30px;
  position: relative;
`;
