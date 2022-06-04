import React, { FC } from 'react';

import Title from 'components/title/Title';

import styles from './Portfolio.module.scss';
import ProjectCard from './projectCard/ProjectCard';

const Portfolio: FC = () => {
  const projects = [
    {
      title: 'Gallery',
      img: 'gallery.png',
      text:
        'Photo gallery with add and delete functionality using ReactJS and Tailwind CSS',
      link: 'https://github.com/jeanaica/gallery',
      href: 'https://sample-gallery.jeanaica.com',
    },
    {
      title: 'Epoch Table',
      img: 'epoch-table.png',
      text: 'Epoch table using GraphQL with Apollo, ReactJS, and Material UI',
      link: 'https://github.com/jeanaica/epoch-table',
      href: 'https://gql-epoch.jeanaica.com',
    },
    {
      title: 'Cat Directory',
      img: 'crud.png',
      text:
        'CRUD Application of Cats using Firebase, Tailwind CSS, and ReactJS',
      link: 'https://github.com/jeanaica/meow-crud',
      href: 'https://crud.jeanaica.com',
    },
  ];

  return (
    <div className={styles.portfolio}>
      <div className={styles.header}>
        <Title
          className={styles.title}
          header="Portfolio"
          subText="Study. Code. Repeat."
        />
      </div>
      <div className={styles.content}>
        {projects.map(({ title, img, text, link, href }, index) => (
          <ProjectCard
            key={title}
            right={index % 2 !== 0}
            title={title}
            img={img}
            text={text}
            link={link}
            href={href}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
