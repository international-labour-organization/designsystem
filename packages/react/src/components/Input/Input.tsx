/* @ESLINT-DEBT During new eslint refactoring this file was omitted because of heavy type refactoring */
/* eslint-disable */

import React, { forwardRef, FC } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { InputProps } from "./Input.props";
import { Fieldset } from "../Fieldset";
import { FormElement } from "../FormElement";

const Input: FC<InputProps & React.RefAttributes<HTMLInputElement>> =
  forwardRef<HTMLInputElement, InputProps>(
    (
      {
        callback,
        disabled = false,
        error,
        helper,
        id,
        label,
        name,
        placeholder,
        required,
        tooltip,
        value,
        type = "text",
      },
      ref
    ) => {
      const { prefix } = useGlobalSettings();
      const baseClass = `${prefix}--input`;

      const InputClasses = classNames("", {
        [baseClass]: true,
        [`error`]: error,
      });

      /**
       * On change, if there is a callback, call it
       */
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (callback) {
          callback(e);
        }
      };

      return (
        <Fieldset>
          <FormElement
            elemid={name as any}
            label={label as any}
            helper={helper as any}
            error={error as any}
            required={required as any}
            tooltip={tooltip}
          >
            <input
              id={id ? id : name}
              name={name}
              onChange={handleChange}
              disabled={disabled}
              placeholder={placeholder}
              required={required as any}
              type={type}
              value={value}
              className={InputClasses}
              ref={ref}
            />
          </FormElement>
        </Fieldset>
      );
    }
  );

export default Input;
