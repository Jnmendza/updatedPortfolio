"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const data = [
  {
    title: "Skills",
    desc: "skills",
    content: (
      <ul className='list-disc pl-2'>
        <li>Node.js</li>
        <li>React</li>
        <li>Javascript</li>
        <li>Express</li>
        <li>Prisma</li>
      </ul>
    ),
  },
  {
    title: "Education",
    desc: "education",
    content: (
      <ul className='list-disc pl-2'>
        <li>Bloomtech Institute</li>
      </ul>
    ),
  },
  {
    title: "Certificates",
    desc: "certificates",
    content: (
      <ul className='list-disc pl-2'>
        <li>UCSD Media content creation</li>
      </ul>
    ),
  },
];

const AboutMe = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className='text-white'>
      <div
        className='md:grid md:grid-cols-2 gap-8 items-center py-8px4
         xl:gap-16 sm:py-16 xl:px-16'
      >
        <Image
          src='/images/about-image.png'
          alt='illustration of computer'
          width={500}
          height={500}
        />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base md:text-lg '>
            Im a full-stack web developer with an 8-year background in graphic
            design. My most recent experience has been in startup environments,
            loaded with tight deadlines and multiple responsibilities. My
            creativity has led me to this career because Ive always wanted to
            have an understanding of every step of the creative process from
            beginning to end. As a developer Im always looking to learn and
            implement new methods or new approaches to any problem.
          </p>
          <div className='flex flex-row mt-8'>
            {data.map((item, index) => (
              <div key={index}>
                <TabButton
                  selectTab={() => handleTabChange(item.desc)}
                  active={tab === item.desc}
                >
                  {" "}
                  {item.title}{" "}
                </TabButton>
              </div>
            ))}
          </div>
          <div className='mt-8'>
            {data.find((item) => item.desc === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
