import { FC, useState } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { FileUploadProps } from "./FileUpload.props";
import { Fieldset } from "../Fieldset";
import { FormElement } from "../FormElement";

const FileUpload: FC<FileUploadProps> = ({
  callback,
  disabled = false,
  error,
  helper,
  id,
  label,
  multiple,
  name,
  placeholder,
  required,
  tooltip,
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--file-upload`;
  const FileUploadClasses = classNames("", {
    [baseClass]: true,
    [`error`]: error,
  });

  const [uploadfiles, setUploadFiles] = useState([]);

  /**
   * On change, add file to listed files, if there is a callback, call it
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setUploadFiles(files as any);

    if (callback) {
      callback(e);
    }
  };

  return (
    <Fieldset className={"file-upload"}>
      <FormElement
        elemid={name as any}
        label={label}
        helper={helper as any}
        error={error as any}
        required={required as any}
        tooltip={tooltip}
        type={"file"}
      >
        <input
          id={id ? id : name}
          name={name}
          onChange={handleChange}
          disabled={disabled}
          multiple={multiple}
          placeholder={placeholder}
          required={required as any}
          type={"file"}
          className={FileUploadClasses}
          data-label={placeholder}
        />
      </FormElement>
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
    </Fieldset>
  );
};

export default FileUpload;
