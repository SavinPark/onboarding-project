import { IBoardBox } from "./BoardBox.interface";
import VBoardBox from "./BoardBox.view";
import { useQuery } from "react-query";
import boardService from "@Board/services/board.service";

const BoardBox: React.FC<IBoardBox.IProps> = () => {
    // get board
    const {
        data: boardData,
        refetch: getBoardRefetch,
        isLoading,
    } = useQuery(["getBoard"], () => boardService.getBoard({ limit: 5 }));

    if (isLoading) return <p>Loading . . .</p>;

    return <VBoardBox boardData={boardData} />;
};

export default BoardBox;
