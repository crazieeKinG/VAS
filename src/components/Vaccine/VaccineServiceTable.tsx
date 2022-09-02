import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import moment from "moment";
import { useSelector } from "react-redux";
import { UPDATE_VACCINATION } from "../../constants/navLinkConstants";
import { vaccineServiceInterface } from "../../store/sliceInterface/vaccineServiceInterface";
import { RootState } from "../../store/store";
import { UpdateAndDeleteLinks } from "../utils/UpdateAndDeleteLinks";

const columns: ColumnsType<vaccineServiceInterface> = [
    { key: "serviceName", title: "Service Name", dataIndex: "serviceName" },
    {
        key: "serviceLocation",
        title: "Service Location",
        dataIndex: "serviceLocation",
    },
    {
        key: "numberOfDoses",
        title: "Number Of Doses",
        dataIndex: "numberOfDoses",
    },
    {
        key: "startDate",
        title: "Start Date",
        dataIndex: "startDate",
        render: (value) => moment(value).format("YYYY-MM-DD"),
    },
    {
        key: "enddate",
        title: "End Date",
        dataIndex: "endDate",
        render: (value) => moment(value).format("YYYY-MM-DD"),
    },
    {
        key: "actions",
        title: "Actions",
        render: (value) => (
            <UpdateAndDeleteLinks
                updateLink={`${UPDATE_VACCINATION.replace(
                    ":vaccineId",
                    value.id
                )}`}
                deleteLink={{ type: "vaccine", id: value.id }}
            />
        ),
    },
];

export const VaccineServiceTable = () => {
    const data = useSelector((state: RootState) => state.vaccine.data);

    return (
        <div>
            <Table
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 10 }}
                rowKey="id"
            />
        </div>
    );
};
