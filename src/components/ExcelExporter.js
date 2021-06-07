import { ReactComponent as ExcelLogo } from "../assets/excel-logo.svg";
import { FRAME, LINE, SHAPE } from "../utils/constants";
import { updateFileContent } from "../utils/export";
import { getMiroWidgets } from "../utils/miro.functions";

const ExcelExporter = () => {
  const getAllBoardObjects = async () => {
    const allLines = await getMiroWidgets({ type: LINE });
    const allShapes = await getMiroWidgets({ type: SHAPE });
    const allFrames = await getMiroWidgets({ type: FRAME });

    return {
      frames: allFrames,
      widgets: [...allLines, ...allShapes],
    };
  };

  const handleSaveFile = async () => {
    const boardContent = await getAllBoardObjects();
    const fileContent = updateFileContent(boardContent);

    console.log(fileContent);

    // eslint-disable-next-line no-undef
    alasql('SELECT * INTO XLSX("sample_file.xlsx",?) FROM ?', fileContent);
  };

  return (
    <>
      <h3 className="section-heading">
        <span>Type</span>
      </h3>
      <button className="excel-export-button" onClick={handleSaveFile}>
        <ExcelLogo className="excel-export-logo" />
        Export Board to Excel
      </button>
    </>
  );
};

export default ExcelExporter;
