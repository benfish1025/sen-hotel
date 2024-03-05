import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "全部" },
          { value: "checked-out", label: "已退房" },
          { value: "checked-in", label: "已入住" },
          { value: "unconfirmed", label: "待入住" },
        ]}
      />

      <SortBy
        options={[
          { value: "startDate-desc", label: "最近订单" },
          { value: "startDate-asc", label: "最早订单" },
          {
            value: "totalPrice-desc",
            label: "按付款总额 降序",
          },
          { value: "totalPrice-asc", label: "按付款总额 升序" },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;
