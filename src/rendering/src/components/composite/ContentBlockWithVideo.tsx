import { Field, Image, ImageField, Link, LinkField, useSitecoreContext, EditFrame, ComponentParams } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { HiArrowRight } from 'react-icons/hi';
import { FieldEditButton } from '@sitecore-jss/sitecore-jss-react';
import classNames from 'classnames';

export interface TabItemFields {
  tabTitle: Field<string>;
  video: LinkField;
  image: ImageField;
  headline: Field<string>;
  subheadline: Field<string>;
  cta: LinkField;
  ctaText: Field<string>;
}

export interface TabItem {
  fields: TabItemFields;
  itemId: string;
  id: string;
}

type ContentBlockWithVideoProps = {
  tab: TabItem;
  tabIndex: number;
  activeTab: number;
  params: ComponentParams;
};

type MediaComponentProps = {
  videoSource: LinkField;
  image: ImageField;
  className?: string;
};

function MediaComponent(props: MediaComponentProps): React.ReactElement<MediaComponentProps> {
  const { sitecoreContext } = useSitecoreContext();
  const hasVideo = props.videoSource.value?.href || false;
  const hasImage = props.image.value?.src || false;

  return (
    <div className={classNames({ 'w-full lg:t-w-1/2': true, [props.className || '']: !!props.className })}>
      {(sitecoreContext.pageEditing || hasVideo) && (
        <video controls>
          <source src={props.videoSource.value?.href} type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      )}
      {(sitecoreContext.pageEditing || (!hasVideo && hasImage)) && <Image field={props.image} />}
    </div>
  );
}

const ContentBlockWithViewVideo = (props: ContentBlockWithVideoProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();

  // Only show the content when the tab is active or if we are in the Experience Editor
  if (!sitecoreContext.pageEditing && props.tabIndex !== props.activeTab) {
    return <></>;
  }

  props.tab.itemId = props.tab.id;
  const videoAlignment = props.params.videoAlignment;

  const editButtons: FieldEditButton[] = [
    {
      fields: ['video', 'tabTitle'],
      icon: '/~/icon/office/16x16/pencil.png',
    },
  ];

  return (
    <EditFrame dataSource={props.tab} buttons={editButtons} title="Edit Tab Item">
      <div
        className={classNames({
          't-flex t-items-center t-container t-mx-auto t-flex-col-reverse lg:t-flex-row': true,
          'lg:t-flex-row-reverse': videoAlignment === 'right',
        })}
      >
        <MediaComponent
          videoSource={props.tab.fields.video}
          image={props.tab.fields.image}
          className={classNames({
            'lg:t-mr-10': videoAlignment === 'left',
            'lg:t-ml-10': videoAlignment === 'right',
            't-hidden': videoAlignment === 'center',
          })}
        />
        <div
          className={classNames({
            'w-full t-px-0 t-py-12 lg:t-py-0 lg:t-px-12': true,
            't-mx-auto': videoAlignment === 'center',
          })}
        >
          <h2
            className={classNames({
              't-text-7xl t-text-black t-mb-8': true,
              't-text-center': videoAlignment === 'center',
            })}
          >
            <Text field={props.tab.fields.headline} />
          </h2>
          <h5 className={classNames({ 't-text-center': videoAlignment === 'center' })}>
            <Text field={props.tab.fields.subheadline} />
          </h5>
          <Link
            field={props.tab.fields.cta}
            className={classNames({
              't-text-primary t-font-bold t-mt-8 t-flex t-items-center t-border-b-2 t-border-primary t-w-fit': true,
              't-mx-auto': videoAlignment === 'center',
            })}
          >
            <Text field={props.tab.fields.ctaText} />
            <HiArrowRight className="t-ml-2" />
          </Link>
        </div>
      </div>
    </EditFrame>
  );
};

export default ContentBlockWithViewVideo;
