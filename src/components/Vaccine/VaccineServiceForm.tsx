import { Button, DatePicker, Form, Input, InputNumber, Select } from "antd";
import { useDispatch } from "react-redux";
import { FORM_DEFAULT_REQUIRED_RULE } from "../../constants/formRequiredRulle";
import { setVaccine } from "../../store/slice/vaccineSlice";

export const VaccineServiceForm = () => {
    const dispatch = useDispatch();
    const { Item } = Form;
    const { Option } = Select;

    const handleForm = (values: any) => {
        const formattedData = {
            serviceName: values.serviceName,
            serviceLocation: values.serviceLocation,
            startDate: values.startDate.format("YYYY-MM-DD"),
            endDate: values.endDate.format("YYYY-MM-DD"),
            doses: values.doses,
            gender: values.gender,
            age: values.age,
            ethinicity: values.ethinicity,
        };

        dispatch(setVaccine(formattedData));
    };

    return (
        <Form
            labelCol={{ span: 8 }}
            labelAlign="left"
            className="margin-top"
            onFinish={handleForm}
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
                name="doses"
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
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Item>
        </Form>
    );
};
