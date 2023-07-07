// React/Next imports
import React from 'react';
import { IconContext } from 'react-icons/lib';

// Other imports
import styles from '@/styles/Footer.module.scss';
import { FaYoutube, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { Text, Link, Image, ComponentParams, Field, ImageField, LinkField, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import classNames from 'classnames';

interface Fields {
  copyright: Field<string>;
  distributionNotice: Field<string>;
  logo: ImageField;
  logoLink: LinkField;
  facebook: LinkField;
  twitter: LinkField;
  instagram: LinkField;
  youtube: LinkField;
}

type FooterProps = {
  fields: Fields;
  params: ComponentParams;
};

const Footer = (props: FooterProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext(); // need this to check for EE active
  const isEEActive = sitecoreContext.pageEditing;
  const links = isEEActive || props.fields.facebook.value.href || props.fields.twitter.value.href || props.fields.instagram.value.href || props.fields.youtube.value.href;
  const logoPosition = props.params?.logoAlignment ?? 'left';

  return (
    <footer className={`${styles['footer']}`}>
      <div
        className={classNames({
          [`${styles['footer-container']}`]: true,
          't-flex-col md:t-flex-row': logoPosition === 'left',
          't-flex-col md:t-flex-row-reverse': logoPosition === 'right',
        })}
      >
        <div
          className={classNames({
            [`${styles['logo-container']}`]: true,
            'md:t-mr-10': logoPosition === 'left',
            'md:t-ml-10': logoPosition === 'right',
          })}
        >
          <Image field={props.fields.logo} width={128} height={48} />
        </div>
        <div>
          <div>
            <Text field={props.fields.copyright} />
          </div>
          <div>
            <Text field={props.fields.distributionNotice} />
          </div>
        </div>
      </div>
      {links && (
        <div className={styles.social}>
          <IconContext.Provider value={{ className: 't-text-2xl t-mr-4', size: '2em' }}>
            {(props.fields.facebook.value.href || isEEActive) && (
              <Link field={props.fields.facebook}>
                <FaFacebook />
              </Link>
            )}
            {(props.fields.twitter.value.href || isEEActive) && (
              <Link field={props.fields.twitter}>
                <FaTwitter />
              </Link>
            )}
            {(props.fields.instagram.value.href || isEEActive) && (
              <Link field={props.fields.instagram}>
                <FaInstagram />
              </Link>
            )}
            {(props.fields.youtube.value.href || isEEActive) && (
              <Link field={props.fields.youtube}>
                <FaYoutube />
              </Link>
            )}
          </IconContext.Provider>
        </div>
      )}
    </footer>
  );
};

export default Footer;
