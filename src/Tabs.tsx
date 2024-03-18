import React, { PropsWithChildren, useState } from "react";

import TabButton from "./TabButton";

const Tabs: React.FC<PropsWithChildren> = ({
  children,
}): React.ReactElement => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleActiveTab = (index: number) => {
    setActiveTab(index);
  };

  if (!Array.isArray(children)) return <>{children}</>;

  const tabs = children!.map((child: React.ReactElement, index: number) => {
    const viewElement = React.cloneElement(child, {
      tabIndex: index,
    });

    return (
      <div className='tabs'>
        <TabButton
          key={index}
          index={index}
          toggleActiveTab={toggleActiveTab}
          isActive={activeTab === index}
          {...child.props}
        ></TabButton>
        {viewElement.props.tabIndex === activeTab ? viewElement : ""}
      </div>
    );
  });
  return <div className='tabs-container'>{tabs}</div>;
};

export default Tabs;
