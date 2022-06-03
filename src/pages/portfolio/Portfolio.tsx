import React, { FC } from 'react';

import Title from 'components/title/Title';
import Card from 'components/card/Card';

import styles from './Portfolio.module.scss';

const Portfolio: FC = () => {
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
        <Card
          title="Gallery[demo]"
          summary="Photo gallery with add and delete functionality using ReactJS and Tailwind CSS"
          img="gallery.png"
          href="https://sample-gallery.jeanaica.com"
          linkText="Go to repository"
          link="https://github.com/jeanaica/gallery"
        />
        <Card
          title="Epoch Table[demo]"
          summary="Epoch table using GraphQL with Apollo, ReactJS, and Material UI"
          img="epoch-table.png"
          href="https://gql-epoch.jeanaica.com/"
          linkText="Go to repository"
          link="https://github.com/jeanaica/epoch-table"
          right
        />
        <Card
          title="Cat Directory[demo]"
          summary="CRUD Application of Cats using Firebase, Tailwind CSS, and ReactJS"
          img="crud.png"
          href="https://crud.jeanaica.com"
          link="https://github.com/jeanaica/meow-crud"
          linkText="Go to repository"
        />
      </div>
    </div>
  );
};

export default Portfolio;
