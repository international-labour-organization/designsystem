import React, { useState } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import FormControl, { useFormControl } from "../FormControl/FormControl";
import { FileUploadProps, LabelledFileUploadProps } from "./FileUpload.props";

function formatBytes(bytes: number, decimals = 2) {
  if (!+bytes) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

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
      accept,
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

    const [uploadfiles, setUploadFiles] = useState<null | FileList>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      setUploadFiles(files);

      if (onChange) {
        onChange(e);
      }
    };

    const inputId = id ? id : name;

    return (
      <>
        <div className={fileUploadClasses}>
          <label className={inputClass}>
            {placeholder}
            <input
              ref={ref}
              id={inputId}
              name={name}
              accept={accept}
              onChange={handleChange}
              onBlur={onBlur}
              disabled={disabled}
              multiple={multiple}
              placeholder={placeholder}
              required={required as any}
              type="file"
              data-label={placeholder}
              aria-describedby={ariaDescribedBy}
            />
          </label>
        </div>
        {uploadfiles && uploadfiles.length > 0 && (
          <ul className={`${baseClass}--list`}>
            {[...uploadfiles].map((file, i) => (
              <li
                className={`${baseClass}--list-item`}
                key={`${baseClass}--list-item-${i}`}
              >
                {`${file.name} (${formatBytes(file.size)})`}
              </li>
            ))}
          </ul>
        )}
      </>
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
