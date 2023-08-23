import JSZip from "jszip";
import { saveAs } from "file-saver";

var zip = JSZip();

const download = () => {
  zip.generateAsync({ type: "blob" }).then(function(blob) {
    saveAs(blob, "codes.zip");
  });
};

export const generateCodesZip = arr => {
  if (arr.length) {
    let codeId=0;
    for (const element of arr) {
        console.log(element);
        codeId = codeId + 1;
      zip.file(`codes/${element.fileName}`, element.code);
    }

    download();
  }
};