import { Button, DatePicker, Form, Input, InputNumber, Select } from "antd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FORM_DEFAULT_REQUIRED_RULE } from "../../constants/formRequiredRulle";
import {
    LIST_APPOINTMENT,
    PATIENT_APPOINTMENT,
} from "../../constants/navLinkConstants";
import { setAppointment } from "../../store/slice/appointmentSlice";
import { RootState } from "../../store/store";
import { FormAdminPropsInterface } from "../../utils/FormAdminPropsInterface";

export const AppointmentForm = (props: FormAdminPropsInterface) => {
    const { Item } = Form;
    const { Option } = Select;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const admin = useSelector((state: RootState) => state.login.data.isAdmin);

    const handleAppointment = (values: any) => {
        const formattedData = {
            patientId: values.patientId,
            siteLocation: values.siteLocation,
            serviceType: values.serviceType,
            appointmentDate: values.appointmentDate.format("YYYY-MM-DD"),
            confirmationCode: values.confirmationCode,
        };

        dispatch(setAppointment(formattedData));
        navigate(admin ? LIST_APPOINTMENT : PATIENT_APPOINTMENT);
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
                    <Option value="Johnson & Johnson’s JanssenF">
                        Johnson & Johnson’s JanssenF
                    </Option>
                </Select>
            </Item>
            <Item
                label="Appointment date"
                name="appointmentDate"
                rules={FORM_DEFAULT_REQUIRED_RULE}
            >
                <DatePicker />
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
                    {props.admin ? "Submit" : "Apply"}
                </Button>
            </Item>
        </Form>
    );
};
