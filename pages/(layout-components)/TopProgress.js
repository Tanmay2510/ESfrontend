"use client";
import ProgressBar from "next-nprogress-bar";

const TopProgress = () => {
  return (
    <ProgressBar
      height="4px"
      color="teal"
      options={{ showSpinner: false }}
      shallowRouting
      appDirectory
    />
  );
};
export default TopProgress;
