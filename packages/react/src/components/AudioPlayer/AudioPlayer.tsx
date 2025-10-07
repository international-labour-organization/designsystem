import classNames from "classnames";
import { Icon } from "../Icon";
import useGlobalSettings from "../../hooks/useGlobalSettings";

export interface AudioPlayerProps {
  /**
   * Path to audio file
   */
  src: string;

  /**
   * Specify custom class name for styling
   */
  className?: string;

  /**
   * The name of the audio track
   */
  name: string;

  /**
   * The name of the programme that the audio track belongs to
   */
  programme: string;

  /**
   * The name of the creator of the audio track
   */
  creator: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  className,
  name,
  programme,
  creator,
}) => {
  const { prefix } = useGlobalSettings();
  const baseClass = `${prefix}--audio-player`;

  const audioPlayerClasses = classNames(baseClass, className);

  return (
    <div className={audioPlayerClasses}>
      <div className={`${baseClass}--progress`} />
      <div className={`${baseClass}--body`}>
        <div className={`${baseClass}--left`}>
          <p className={`${baseClass}--track-name`}>{name}</p>
          <div className={`${baseClass}--track-details`}>
            <span className={`${baseClass}--track-programme`}>{programme}</span>
            <span className={`${baseClass}--track-creator`}>{creator}</span>
          </div>
        </div>
        <div className={`${baseClass}--center`}>
          <Icon name="Ffbackward_15" />
          <Icon name="TriangleRight" size={32} />
          <Icon name="Fforward_15" />
        </div>
        <div className={`${baseClass}--right`}>
          <div className={`${baseClass}--duration`}>
            <p className={`${baseClass}--duration-played`}>00:10</p>
            <p className={`${baseClass}--duration-total`}>59:59</p>
          </div>
          <div className={`${baseClass}--volume`}>
            <Icon name="SoundOn" />
          </div>
        </div>
      </div>
    </div>
  );
};
