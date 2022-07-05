import { FC, useState } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { CreditProps } from "./Credit.props";

const Credit: FC<CreditProps> = ({ className, credit }) => {
  const [showcredit, showCredit] = useState(false);

  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--credit`;
  const creditClasses = classNames(className, {
    [baseClass]: true,
    ["show"]: showcredit,
  });

  /**
   * Show credit tooltip
   */
  const showCreditTip = () => {
    showCredit(true);
  };

  /**
   * Hide credit tooltip
   */
  const hideCreditTip = () => {
    showCredit(false);
  };

  return (
    <span
      className={creditClasses}
      onMouseEnter={showCreditTip}
      onMouseLeave={hideCreditTip}
    >
      <span className={`${baseClass}--label`}>{credit}</span>
    </span>
  );
};

export default Credit;
