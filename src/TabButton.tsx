const TabButton = ({
  index,
  title,
  toggleActiveTab,
  isActive,
}: {
  index: number;
  title: string;
  toggleActiveTab: Function;
  isActive: boolean;
}) => {
  const changeActiveTab = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    toggleActiveTab(index);
  };

  const buttonClasses = `btn ${isActive ? "btn-active" : ""}`;
  return (
    <button
      className={buttonClasses}
      onClick={changeActiveTab}
      disabled={isActive}
    >
      {title}
    </button>
  );
};

export default TabButton;
