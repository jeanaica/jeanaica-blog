import React, { FC } from 'react';

import Anchor from 'components/anchor/Anchor';
import Image from 'components/image/Image';
import Title from 'components/title/Title';

import styles from './About.module.scss';

const About: FC = () => {
  return (
    <div className={styles.about}>
      <Title
        className={styles.content}
        header='About'>
        <div className={styles.text}>
          <p>
            Jeanaica Suplido is a Software Engineer which specializes in
            Frontend Development. She brings beautiful wireframes into working
            applications in either mobile, web, and/or desktop.
          </p>
          <br />
          <p>
            Jeanaica also enjoys travelling, painting, singing, and writing.
          </p>
          <br />
          <p>Want someone to work on your website?</p>
          <br />
          <p>
            Email her <Anchor href='mailto:sjeanaica@gmail.com'>here.</Anchor>
          </p>
        </div>
      </Title>
      <Image
        className={styles.profile}
        src='profile.JPG'
      />
    </div>
  );
};

export default About;
