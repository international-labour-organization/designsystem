import React, { useState } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import FormControl, { useFormControl } from "../FormControl/FormControl";
import { FileUploadProps, LabelledFileUploadProps } from "./FileUpload.props";

const FileUpload = React.forwardRef<HTMLInputElement, FileUploadProps>(
  (
    {
      onChange,
      onBlur,
      disabled = false,
      error,
      id,
      multiple,
      name,
      placeholder,
      required,
    },
    ref
  ) => {
    const { prefix } = useGlobalSettings();
    const formControlCtx = useFormControl();
    const { ariaDescribedBy } = formControlCtx;

    const baseClass = `${prefix}--file-upload`;
    const fileUploadClasses = classNames(baseClass, {
      [`error`]: error,
    });
    const inputClass = `${baseClass}--input`;

    const [uploadfiles, setUploadFiles] = useState([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      setUploadFiles(files as any);

      if (onChange) {
        onChange(e);
      }
    };

    return (
      <div className={fileUploadClasses}>
        <input
          ref={ref}
          id={id ? id : name}
          name={name}
          onChange={handleChange}
          onBlur={onBlur}
          disabled={disabled}
          multiple={multiple}
          placeholder={placeholder}
          required={required as any}
          type="file"
          className={inputClass}
          data-label={placeholder}
          aria-describedby={ariaDescribedBy}
        />
        {uploadfiles.length > 0 && (
          <ul className={`${baseClass}--list`}>
            {[...uploadfiles].map((file: any, i: any) => (
              <li
                className={`${baseClass}--list-item`}
                key={`${baseClass}--list-item-${i}`}
              >
                {file.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
);

const LabelledFileUpload = React.forwardRef<
  HTMLInputElement,
  LabelledFileUploadProps
>((props, ref) => {
  const { style, inputStyle, className, ...rest } = props;
  const fieldId = props.id ? props.id : props.name;

  return (
    <FormControl
      fieldId={fieldId}
      style={style}
      className={className}
      {...rest}
    >
      <FileUpload ref={ref} style={inputStyle} {...rest} />
    </FormControl>
  );
});

export default LabelledFileUpload;
