import { Button, Form, Input, InputNumber, Select } from "antd";
import { useDispatch } from "react-redux";
import { FORM_DEFAULT_REQUIRED_RULE } from "../../constants/formRequiredRulle";
import { setAppointment } from "../../store/slice/appointmentSlice";

export const CreateAppointmentForm = () => {
    const { Item } = Form;
    const { Option } = Select;

    const dispatch = useDispatch();

    const handleAppointment = (values: any) => {
        const formattedData = {
            patientId: values.patientId,
            siteLocation: values.siteLocation,
            serviceType: values.serviceType,
            confirmationCode: values.confirmationCode,
        };

        dispatch(setAppointment(formattedData));
    };

    return (
        <Form
            labelCol={{ span: 8 }}
            labelAlign="left"
            onFinish={handleAppointment}
            className="margin-top"
        >
            <Item
                name="patientId"
                label="Paitent ID"
                rules={FORM_DEFAULT_REQUIRED_RULE}
            >
                <Input placeholder="Enter Paitent ID" />
            </Item>
            <Item
                name="siteLocation"
                label="Site Location"
                rules={FORM_DEFAULT_REQUIRED_RULE}
            >
                <Select placeholder="Select site location">
                    <Option value="Kathmandu">Kathmandu</Option>
                </Select>
            </Item>
            <Item
                name="serviceType"
                label="Service Type"
                rules={FORM_DEFAULT_REQUIRED_RULE}
            >
                <Select placeholder="Select service type">
                    <Option value="Verocel">Verocel</Option>
                    <Option value="Johnson & Johnson’s JanssenF">Johnson & Johnson’s JanssenF</Option>
                </Select>
            </Item>
            <Item
                name="confirmationCode"
                label="Confirmation Code"
                rules={FORM_DEFAULT_REQUIRED_RULE}
            >
                <InputNumber
                    style={{ width: "100%" }}
                    placeholder="Enter confirmation code"
                    max={999999}
                    min={0}
                />
            </Item>
            <Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Item>
        </Form>
    );
};
