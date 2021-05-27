/* eslint-disable no-undef */
import { ReactComponent as ExcelLogo } from "../assets/excel-logo.svg";
import { FRAME, LINE, SHAPE } from "../utils/constants";
import { updateFileContent } from "../utils/export";

const ExcelExporter = () => {
  const getAllBoardObjects = async () => {
    const allLines = await miro.board.widgets.get({ type: LINE });
    const allShapes = await miro.board.widgets.get({ type: SHAPE });
    const allFrames = await miro.board.widgets.get({ type: FRAME });

    console.log(allLines);
    console.log(allShapes);
    console.log(allFrames);

    return {
      frames: allFrames,
      widgets: [...allLines, ...allShapes],
    };
  };

  const handleSaveFile = async () => {
    const boardContent = await getAllBoardObjects();
    const fileContent = updateFileContent(boardContent);

    console.log(fileContent);

    alasql('SELECT * INTO XLSX("sample_file.xlsx",?) FROM ?', fileContent);
  };

  return (
    <button className="excel-export-button" onClick={handleSaveFile}>
      <ExcelLogo className="excel-export-logo" />
      Save to File
    </button>
  );
};

export default ExcelExporter;
