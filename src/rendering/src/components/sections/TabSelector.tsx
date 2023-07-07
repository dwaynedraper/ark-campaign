import React, { useState } from 'react';
import { ComponentParams } from '@sitecore-jss/sitecore-jss-nextjs';
import { TabItem } from '@/components/composite/ContentBlockWithVideo';
import ContentBlockWithVideo from '@/components/composite/ContentBlockWithVideo';

interface Fields {
  items: TabItem[];
}

type TabSelectorProps = {
  fields: Fields;
  params: ComponentParams;
};

/**
 * A component with tabs that change the content below. The active tab is visually highlighted.
 * @param {TabSelectorProps} props
 * @returns A component with tabs that change the content below
 */
const TabSelector = (props: TabSelectorProps): JSX.Element => {
  const [activeTab, setactiveTab] = useState(1);

  // Convert children into an array and limit to 5 items
  const tabs: TabItem[] = props.fields.items.slice(0, 5);

  return (
    <section className="spaced">
      <div className="t-flex t-space-x-4 t-container t-mx-auto t-justify-center">
        {tabs.map((tab, index) => {
          return (
            <button
              key={tab.fields.tabTitle.value}
              onClick={() => setactiveTab(index + 1)}
              className={`t-py-4 t-px-6 t-rounded t-font-semibold ${
                activeTab === index + 1 ? 't-bg-neutral-light text-black' : 't-bg-transparent t-text-primary-light hover:t-bg-primary hover:t-text-white'
              }`}
            >
              {tab.fields.tabTitle.value}
            </button>
          );
        })}
      </div>

      <div className="t-mt-16">
        {tabs.map((tab, index) => {
          return <ContentBlockWithVideo key={tab.fields.tabTitle.value} tabIndex={index + 1} activeTab={activeTab} tab={tab} params={props.params} />;
        })}
      </div>
    </section>
  );
};

export default TabSelector;
