import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "全部" },
          { value: "no-discount", label: "无折扣" },
          { value: "with-discount", label: "折扣" },
        ]}
      />

      <SortBy
        options={[
          { value: "name-asc", label: "按名称 升序" },
          { value: "name-desc", label: "按名称 降序" },
          { value: "regularPrice-asc", label: "按价格 升序" },
          { value: "regularPrice-desc", label: "按价格 降序" },
          { value: "maxCapacity-asc", label: "按人数 升序" },
          { value: "maxCapacity-desc", label: "按人数 降序" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
