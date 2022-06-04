import React, { FC } from 'react';

import Card from 'components/card/Card';
import Content from 'components/card/content/Content';
import Header from 'components/card/header/Header';
import Preview from 'components/card/preview/Preview';
import Summary from 'components/card/summary/Summary';

type Props = {
  title: string;
  text: string;
  link?: string;
  href?: string;
  img?: string;
  right?: boolean;
};

const ProjectCard: FC<Props> = ({ title, text, link, href, img, right }) => (
  <Card right={right}>
    <Preview
      right={right}
      img={img}
      href={href}
    />
    <Content right={right}>
      <Header
        title={title}
        href={href}
      />
      <Summary
        right={right}
        text={text}
        link={link}
        linkText='Go to repository >>'
      />
    </Content>
  </Card>
);

export default ProjectCard;
