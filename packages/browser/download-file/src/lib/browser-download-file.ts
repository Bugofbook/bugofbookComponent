import bodyAppendLink from "./bodyAppendLink";
import setFileName from "./setFileName";
import handleDownload from "./handleDownload";
import createLink from "./createLink";
export function browserDownloadFile(): string {
  return 'browser-download-file';
}

function createExcelBolb(buffer: BlobPart): Blob {
  return new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;' });
}

export function downloadExcel(buffer: BlobPart, fileName: string) {
  const bolb = createExcelBolb(buffer);
  const link = createLink(bolb);
  const nameLink = setFileName(`${fileName}.xlsx`)(link)
  const bodyLink = bodyAppendLink(nameLink);
  const clickLink = handleDownload(bodyLink);
  return clickLink
}
