import React from "react";

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: string[];
}

const TabButton = ({ active, selectTab, children }: TabButtonProps) => {
  const buttonClasses = active
    ? "text-white border-b border-purple-500"
    : "text-[#ADB7BE]";
  return (
    <span onClick={selectTab}>
      <p
        className={`mr-3 font-semibold hover:text-white cursor-pointer ${buttonClasses}`}
      >
        {children}
      </p>
    </span>
  );
};

export default TabButton;
