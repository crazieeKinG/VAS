import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useSelector } from "react-redux";
import { vaccineServiceInterface } from "../../store/sliceInterface/vaccineServiceInterface";
import { RootState } from "../../store/store";
import CreateUpdateAndDeleteLinks from "../utils/CreateUpdateAndDeleteLinks";

const columns: ColumnsType<vaccineServiceInterface> = [
    {
        title: "Service Name",
        dataIndex: "serviceName",
    },
    {
        title: "Service Location",
        dataIndex: "serviceLocation",
    },
    {
        title: "Start Date",
        dataIndex: "startDate",
    },
    {
        title: "Actions",
        render: CreateUpdateAndDeleteLinks,
    },
];

export const ListVaccineServiceTable = () => {
    const data = useSelector((state: RootState) => state.vaccine.data);

    return (
        <div>
            <Table
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 1 }}
            />
        </div>
    );
};