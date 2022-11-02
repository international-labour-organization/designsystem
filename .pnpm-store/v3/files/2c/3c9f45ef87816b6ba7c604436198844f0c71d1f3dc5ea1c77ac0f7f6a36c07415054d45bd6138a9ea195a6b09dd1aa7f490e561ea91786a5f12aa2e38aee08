import { hiddenFileAnchorId } from '../selectors';
export function saveFile(storyName, current) {
    const anchor = document.getElementById(hiddenFileAnchorId);
    if (anchor) {
        anchor.setAttribute('href', 'data:text/json,' + encodeURIComponent(JSON.stringify(current, null, 2)));
        anchor.setAttribute('download', `${storyName}.json`);
        anchor.click();
    }
}
export function readFile(e, callback) {
    const reader = new FileReader();
    const { files } = e.currentTarget;
    if (files && files.length) {
        reader.readAsText(files[0]);
        reader.onload = ({ target }) => {
            if (target) {
                const context = JSON.parse(target.result);
                const [storyName] = files[0].name.split('.json');
                callback(context, storyName);
            }
        };
    }
}
