import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';
import { timeCrypto } from '../../utils/date-fns'
export const CryptoHistory = ({ transactions }) => {
  return <BaseTable>
    <THead>
      <tr>
        <Th>№</Th>
        <Th>PRICE</Th>
        <Th>AMOUNT</Th>
        <Th>DATE</Th>
      </tr>
    </THead>

    <tbody>
      {transactions.map(({ id, price, amount, date }, i) => {
        return <Tr key={id}>
          <Td>{i + 1}</Td>
          <Td>{price}</Td>
          <Td>{amount}</Td>
          <Td>{timeCrypto(date)}</Td>
        </Tr>
      })}
    </tbody>
  </BaseTable>;
};
