import React, { use, useEffect, useState } from "react";
import Image from "next/image";
import styled from "@emotion/styled";

type Props = {};

const Design = (props: Props) => {
  const [designsStack1, setDesignsStack1] = useState<any>();
  const [designsStack2, setDesignsStack2] = useState<any>();
  const [designsStack3, setDesignsStack3] = useState<any>();

  let card = 1;

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/designs", { cache: "no-store" });

        return res.json();
      } catch (error) {}
    })().then((data) => {
      setDesignsStack1(data.designs.slice(0, 3));
      setDesignsStack2(data.designs.slice(3, 6));
      setDesignsStack3(data.designs.slice(6, 9));
    });
  }, []);

  return (
    <>
      <DesignSection>
        <DesignContent>
          <DesignTitle>Design:</DesignTitle>
          <DesignDesc>
            {`The design skills I've gained from UX/UI practices, coupled with
        web development skills as demonstrated through this portfolio website.`}
          </DesignDesc>
          <CardStack>
            <ul
              className="card-stacks"
              onClick={() => {
                document
                  .querySelector(".card-stacks")
                  ?.classList.toggle("transition");
              }}
            >
              <li className={`stack stack-1`}>
                <ul className="cards-down">
                  {designsStack1?.map((design: any) => (
                    <li key={design.title} className={`card card-${card++}`}>
                      <div dangerouslySetInnerHTML={{ __html: design.icon }} />
                      <div className="content">
                        <h1>{design.title}</h1>
                        <p>{design.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </li>

              <li className={`stack stack-2`}>
                <ul className="cards-down">
                  {designsStack2?.map((design: any) => (
                    <li
                      key={design.title}
                      className={`card card-${card++ % 3}`}
                    >
                      <div dangerouslySetInnerHTML={{ __html: design.icon }} />
                      <div className="content">
                        <h1>{design.title}</h1>
                        <p>{design.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </li>

              <li className={`stack stack-3`}>
                <ul className="cards-down">
                  {designsStack3?.map((design: any) => (
                    <li
                      key={design.title}
                      className={`card card-${card++ % 3}`}
                    >
                      <div dangerouslySetInnerHTML={{ __html: design.icon }} />
                      <div className="content">
                        <h1>{design.title}</h1>
                        <p>{design.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </CardStack>
        </DesignContent>
      </DesignSection>
    </>
  );
};

export default Design;

const DesignSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 120px 80px;
  height: fit-content;
`;

const DesignContent = styled.div`
  display: flex;
  flex-direction: column;

  padding: 32px 40px;
  border-radius: 24px;
  background: ${({ theme }) => theme.tertiaryBgColor};
`;

const DesignTitle = styled.h2`
  color: ${({ theme }) => theme.tertiaryFgColor};
  font-size: 24px;
  font-weight: 700;
  line-height: 1.3;
`;

const DesignDesc = styled.p`
  color: ${({ theme }) => theme.primaryFgColor};
  text-align: justify;
  font-size: 16px;
  line-height: 1.5;
  max-width: 600px;
  margin-top: 24px;
  margin-bottom: 60px;
`;

const CardStack = styled.div`
  ul.card-stacks {
    max-width: 660px;
    list-style-type: none;
    margin: 0 auto 20px;
    padding: 0;
    position: relative;
    cursor: pointer;
    height: 250px;
    transition: all 0.4s cubic-bezier(0.63, 0.15, 0.03, 1.22);
    transition-delay: 0.4s;

    li.stack {
      position: absolute;
      left: 0px;
      transition: all 0.4s cubic-bezier(0.63, 0.15, 0.03, 1.02);
      ul.cards-down {
        position: relative;
        margin: 0 0 20px;
        padding: 20px;
        list-style-type: none;
        margin: 0;
        padding: 0;
        li.card {
          transition: all 0.4s cubic-bezier(0.63, 0.15, 0.03, 1.22);
          left: 0px;
          transition-delay: 0.4s;
          background: ${({ theme }) => theme.secondaryBgColor};
          color: ${({ theme }) => theme.secondaryFgColor};
          overflow: hidden;
          height: 200px;
          width: 200px;
          border-radius: 10px;
          position: absolute;
          top: 0px;
          box-shadow: 1px 2px 2px 0 #aaa;
          img {
            max-width: 100%;
            height: auto;
          }
          div.content {
            padding: 5px 10px;
            h1 {
            }
            p {
            }
          }

          &.card-1 {
            z-index: 10;
            transform: rotateZ(-2deg);
          }
          &.card-2 {
            z-index: 9;
            transform: rotateZ(-7deg);
          }
          &.card-3 {
            z-index: 8;
            transform: rotateZ(5deg);
          }
        }
      }
    }

    &.transition {
      height: 700px;
      transition: all 0.4s cubic-bezier(0.63, 0.15, 0.03, 1.22);
      transition-delay: 0.4s;

      li.stack {
        &.stack-1 {
          left: 0px;
        }
        &.stack-2 {
          left: 220px;
        }
        &.stack-3 {
          left: 440px;
        }
        ul.cards-down {
          li.card {
            transform: rotateZ(0deg);
            &.card-1 {
              top: 440px;
            }
            &.card-2 {
              top: 220px;
            }
            &.card-3 {
            }
          }
        }
      }
    }
  }
`;
