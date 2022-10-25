import bodyAppendLink from "./bodyAppendLink";
import setFileName from "./setFileName";
import handleDownload from "./handleDownload";
import createLink from "./createLink";
import pipe from "./pipe";

function createExcelBolb(buffer: BlobPart): Blob {
  return new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;' });
}

type CreateLink = (bolb: Blob) => HTMLAnchorElement

export default function downloadExcel(buffer: BlobPart, fileName: string) {
    const bolb = createExcelBolb(buffer);
    const createExcelLink: CreateLink = pipe(
        createLink,
        setFileName(`${fileName}.xlsx`),
        bodyAppendLink,
        handleDownload
    )
    return createExcelLink(bolb)
}
