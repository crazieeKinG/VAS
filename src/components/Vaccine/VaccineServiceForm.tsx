import { Button, DatePicker, Form, Input, InputNumber, Select } from "antd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { insertVaccine, updateVaccine } from "../../api/vaccineApi";
import { FORM_DEFAULT_REQUIRED_RULE } from "../../constants/formRequiredRulle";
import { LIST_VACCINATION } from "../../constants/navLinkConstants";
import { PENDING } from "../../constants/sliceConstants";
import { setVaccine } from "../../store/slice/vaccineSlice";
import { AppDispatch, RootState } from "../../store/store";
import { FormAdminPropsInterface } from "../../utils/FormAdminPropsInterface";

export const VaccineServiceForm = (props: FormAdminPropsInterface) => {
    const { vaccineId } = useParams();
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const loading = useSelector((state: RootState) => state.vaccine.loading);
    const { Item } = Form;
    const { Option } = Select;

    const handleForm = async (values: any) => {
        const formattedData = {
            serviceName: values.serviceName,
            serviceLocation: values.serviceLocation,
            startDate: values.startDate.format("YYYY-MM-DD"),
            endDate: values.endDate.format("YYYY-MM-DD"),
            numberOfDoses: values.numberOfDoses,
            gender: values.gender,
            age: values.age,
            ethnicity: values.ethnicity,
        };

        vaccineId
            ? await dispatch(
                  updateVaccine({ ...formattedData, id: +vaccineId })
              )
            : await dispatch(insertVaccine(formattedData));
        navigate(LIST_VACCINATION);
    };

    return (
        <Form
            labelCol={{ span: 8 }}
            labelAlign="left"
            className="margin-top"
            onFinish={handleForm}
            initialValues={props.initialState}
        >
            <Item
                label="Service name"
                name="serviceName"
                rules={FORM_DEFAULT_REQUIRED_RULE}
            >
                <Input placeholder="Enter service name" />
            </Item>
            <Item
                label="Service location"
                name="serviceLocation"
                rules={FORM_DEFAULT_REQUIRED_RULE}
            >
                <Input placeholder="Enter service location" />
            </Item>
            <Item
                label="Start date"
                name="startDate"
                rules={FORM_DEFAULT_REQUIRED_RULE}
            >
                <DatePicker />
            </Item>
            <Item
                label="End date"
                name="endDate"
                rules={FORM_DEFAULT_REQUIRED_RULE}
            >
                <DatePicker />
            </Item>
            <Item
                label="Number of doses"
                name="numberOfDoses"
                rules={FORM_DEFAULT_REQUIRED_RULE}
            >
                <InputNumber
                    placeholder="Enter number of doses"
                    style={{ width: "100%" }}
                />
            </Item>
            <Item
                label="Gender"
                name="gender"
                rules={[
                    {
                        required: true,
                        message: "Please fill this field!",
                    },
                ]}
            >
                <Select placeholder="Select gender for vaccine">
                    <Option value="Male only">Male only</Option>
                    <Option value="Female only">Female only</Option>
                    <Option value="Both">Both</Option>
                </Select>
            </Item>
            <Item
                label="For age (Greater than)"
                name="age"
                rules={FORM_DEFAULT_REQUIRED_RULE}
            >
                <InputNumber
                    placeholder="Enter age for the vaccine"
                    style={{ width: "100%" }}
                />
            </Item>
            <Item
                label="Ethnicity"
                name="ethnicity"
                rules={FORM_DEFAULT_REQUIRED_RULE}
            >
                <Input placeholder="Enter ethnicity" />
            </Item>
            <Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading === PENDING}
                >
                    Submit
                </Button>
            </Item>
        </Form>
    );
};
