import { FC, useState } from "react";
import classNames from "classnames";
import useGlobalSettings from "../../hooks/useGlobalSettings";
import { FileUploadProps } from "./FileUpload.props";

const FileUpload: FC<FileUploadProps> = ({
  onChange,
  disabled = false,
  error,
  id,
  multiple,
  name,
  placeholder,
  required,
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--file-upload`;
  const fileUploadClasses = classNames("", {
    [baseClass]: true,
    [`error`]: error,
  });
  const inputClass = `${baseClass}--input`;

  const [uploadfiles, setUploadFiles] = useState([]);

  /**
   * On change, add file to listed files, if there is a callback, call it
   */
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
        id={id ? id : name}
        name={name}
        onChange={handleChange}
        disabled={disabled}
        multiple={multiple}
        placeholder={placeholder}
        required={required as any}
        type="file"
        className={inputClass}
        data-label={placeholder}
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
};

export default FileUpload;
