/* eslint-disable no-undef */
import { ReactComponent as ExcelLogo } from "../assets/excel-logo.svg";
import { FRAME, LINE, SHAPE } from "../utils/constants";

const ExcelExporter = () => {
  const getAllBoardObjects = async () => {
    const allLines = await miro.board.widgets.get({ type: LINE });
    const allShapes = await miro.board.widgets.get({ type: SHAPE });
    const allFrames = await miro.board.widgets.get({ type: FRAME });

    console.log(allLines);
    console.log(allShapes);
    console.log(allFrames);
  };

  const handleSaveFile = () => {
    getAllBoardObjects();
  };

  return (
    <button onClick={handleSaveFile}>
      <ExcelLogo />
      Save to File
    </button>
  );
};

export default ExcelExporter;
