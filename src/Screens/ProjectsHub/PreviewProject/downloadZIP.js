import JSZip from "jszip";
import { saveAs } from "file-saver";

var zip = JSZip();

const download = () => {
  zip.generateAsync({ type: "blob" }).then(function(blob) {
    saveAs(blob, "schematics.zip");
  });
};

export const generateZip = arr => {
  if (arr.length) {
    let imgId=0;
    for (const element of arr) {
        // console.log(element.diagramImage.split(','));
        imgId = imgId + 1;
      zip.file(`images/image_${imgId}.png`, element.diagramImage.split(',')[1], { base64: true });
    }

    download();
  }
};