import React from 'react';

// Other imports
import styles from '@/styles/Header.module.scss';
import { ComponentParams, ImageField, Link, LinkField, Image, Field, Text, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import LinkButton from 'components/base/LinkButton';
import classNames from 'classnames';

interface Fields {
  logoImage: ImageField;
  logoLink: LinkField;
  cta: LinkField;
  ctaText: Field<string>;
}

type HeaderProps = {
  fields: Fields;
  params: ComponentParams;
};

const Header = (props: HeaderProps): JSX.Element => {
  const { logoImage, logoLink, cta, ctaText } = props.fields;
  const { backgroundColor } = props.params;
  const { sitecoreContext } = useSitecoreContext();
  const renderCta = sitecoreContext.pageEditing || (cta.value.href && ctaText.value);

  return (
    <header
      className={classNames({
        // main styles
        [styles.header]: backgroundColor === 'white',
        [styles.headerReverse]: backgroundColor !== 'white',
        // border styles
        't-border-1': true,
        't-border-neutral-lighter': backgroundColor === 'white',
        't-border-transparent': backgroundColor !== 'white',
      })}
    >
      <div className={styles.container}>
        <div className="t-w-[127px] t-h-[48px]">
          <Link field={logoLink}>
            <Image field={logoImage} fill />
          </Link>
        </div>
        {renderCta && (
          <div>
            <LinkButton field={cta} variant={backgroundColor} outline arrow>
              <Text field={props.fields.ctaText} />
            </LinkButton>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
