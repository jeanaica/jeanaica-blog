import React, { FC } from 'react';

import Image from 'components/image/Image';
import Title from 'components/title/Title';
import Link from 'components/link/Link';

import styles from './About.module.scss';

const About: FC = () => {
  return (
    <div className={styles.about}>
      <Title className={styles.content} header="About">
        <div className={styles.text}>
          <p>
            Jeanaica Suplido is a Frontend Software Engineer which specializes
            in React and Angular. She brings beautiful wireframes into working
            applications in either mobile, web, and/or desktop.
          </p>
          <br />
          <p>
            Jeanaica also enjoys travelling, painting, singing, and writing.
          </p>
          <br />
          <p>
            Want someone to work on your website? Email her{' '}
            <Link href="mailto:sjeanaica@gmail.com">here.</Link>
          </p>
        </div>
      </Title>
      <Image className={styles.profile} size="medium" src="profile.JPG" />
    </div>
  );
};

export default About;
