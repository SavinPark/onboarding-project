import { css } from "@emotion/react";
import { IBoardItem } from "./BoardItem.interface";

const VBoardItem: React.FC<IBoardItem.IVProps> = props => {
    const { no, title, author, createdAt, updatedAt } = props;

    return (
        <div css={BoardItemStyle}>
            <div>no</div>
            <div>title</div>
            <div>author</div>
            <div>createdAt</div>
            <div>updatedAt</div>
        </div>
    );
};

const BoardItemStyle = css`
    width: 1200px;
    height: 90px;
    margin-top: 4px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
`;

export default VBoardItem;