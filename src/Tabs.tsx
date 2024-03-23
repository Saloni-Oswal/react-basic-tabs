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

  return (
    <div className='tabs-container'>
      {children.map((child: React.ReactElement, index: number) => {
        const { children }: { children: React.ReactElement } = child.props;
        return (
          <div className='tabs'>
            <TabButton
              key={index}
              index={index}
              toggleActiveTab={toggleActiveTab}
              isActive={activeTab === index}
              {...child.props}
            ></TabButton>
            {index === activeTab ? children : ""}
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
