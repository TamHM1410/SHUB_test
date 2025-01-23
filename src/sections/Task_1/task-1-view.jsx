import { useQuery } from "@tanstack/react-query";
import { get_data_excel } from "@/api/test";
import * as XLSX from "xlsx";

import TableDemo from "./table";

export default function TaskOneView() {
  const { data ,isLoading} = useQuery({
    queryKey: ["excel"],
    queryFn: async () => {
      const res = await get_data_excel();
      const file = new Uint8Array(res.data);
      const workbook = XLSX.read(file, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet);

      const normalizedData = jsonData.map((item) => {
        const normalizedItem = {};
        Object.keys(item).forEach((key) => {
          const trimmedKey = key.trim();
          normalizedItem[trimmedKey] = item[key];
        });
        return normalizedItem;
      });
      const mappedArr = normalizedData.filter((item) => item?.Sales > 50000);

      return mappedArr;
    },
  });

  const columns = [
    {
      accessorKey: "Segment",
      header: "Name",
    },
    {
      accessorKey: "Country",
      header: "Country",
    },
    {
      accessorKey: "Product",
      header: "Product",
    },
    {
      accessorKey: "Sales",
      header: "Sales ",
      Cell:(info)=>{
        return <span>
          {
            new Intl.NumberFormat('vi-VN',info.row?.original?.Sales )
          }
        </span>
      }
    },
  ];


  if(isLoading) return <div  className="py-40"> Is loading file ...</div>
  return (
    <div className="py-20">
      <div>List product sales greater than 50.000</div>
      <TableDemo data={data ? data : []} columns={columns} />
    </div>
  );
}
