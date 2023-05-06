import { ForbesListItem } from 'components';
import {
  BoardHeader,
  LeaderBoard,
  BoardTitle,
  TitleTop,
  TitleBottom,
  LeaderBoardProfiles,
} from './ForbesList.styled';

export const ForbesList = ({forbes}) => {
  return <LeaderBoard>
  <BoardHeader>
    <BoardTitle>
      <TitleTop>Forbes</TitleTop>
      <TitleBottom>Leader board</TitleBottom>
    </BoardTitle>
  </BoardHeader>

  <LeaderBoardProfiles>
      {forbes.map(({ avatar, name, capital, isIncrease, id}) => {
        return (<ForbesListItem avatar={avatar} name={name} capital={capital} isIncrease ={isIncrease} key={id}
      />)})} 
  </LeaderBoardProfiles>
</LeaderBoard>;
};
