import styled from "styled-components";
import { Link } from "react-router-dom";

import Tag from "../../ui/Tag";
import Button from "../../ui/Button";
import CheckoutButton from "./CheckoutButton";

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 8rem 5rem 1fr 7rem 9rem;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;

const Guest = styled.div`
  font-weight: 500;
`;

function TodayItem({ activity }) {
  const { id, status, guests, numNights } = activity;

  return (
    <StyledTodayItem>
      {status === "unconfirmed" && <Tag type="green">今日待入住</Tag>}
      {status === "checked-in" && <Tag type="blue">今日待退房</Tag>}

      <Guest>{guests?.fullName}</Guest>
      <div>{guests?.phone}</div>
      <div>{numNights} 晚</div>

      {status === "unconfirmed" && (
        <Button
          size="small"
          variation="primary"
          as={Link}
          to={`/checkin/${id}`}
        >
          入住
        </Button>
      )}
      {status === "checked-in" && <CheckoutButton bookingId={id}/>}
    </StyledTodayItem>
  );
}

export default TodayItem;
