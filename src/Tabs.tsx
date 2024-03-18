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

  const updatedChildren = children.map(
    (child: React.ReactElement, index: number) => {
      return React.cloneElement(child, {
        tabIndex: index,
      });
    }
  );

  return (
    <div className='tabs-container'>
      {updatedChildren.map((child: React.ReactElement, index: number) => {
        const {
          tabIndex,
          children,
        }: { tabIndex: number; children: React.ReactElement } = child.props;
        return (
          <div className='tabs'>
            <TabButton
              key={index}
              index={index}
              toggleActiveTab={toggleActiveTab}
              isActive={activeTab === index}
              {...child.props}
            ></TabButton>
            {tabIndex === activeTab ? children : ""}
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
