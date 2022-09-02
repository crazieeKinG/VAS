import { Button, DatePicker, Form, Input, InputNumber, Select } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { insertAppointment, updateAppointment } from "../../api/appointmentApi";
import { FORM_DEFAULT_REQUIRED_RULE } from "../../constants/formRequiredRulle";
import {
    LIST_APPOINTMENT,
    PATIENT_APPOINTMENT,
} from "../../constants/navLinkConstants";
import { PENDING } from "../../constants/sliceConstants";
import { AppDispatch, RootState } from "../../store/store";
import { FormAdminPropsInterface } from "../../utils/FormAdminPropsInterface";

export const AppointmentForm = (props: FormAdminPropsInterface) => {
    const { appointmentId } = useParams();
    const { Item } = Form;
    const { Option } = Select;

    const dispatch = useDispatch<AppDispatch>();
    const loading = useSelector(
        (state: RootState) => state.appointment.loading
    );
    const navigate = useNavigate();
    const admin = useSelector((state: RootState) => state.login.data.isAdmin);

    const vaccine = useSelector((state: RootState) => state.vaccine.data);

    const serviceLocations: string[] = [];
    vaccine.forEach((vaccine) => {
        if (!serviceLocations.includes(vaccine.serviceLocation)) {
            serviceLocations.push(vaccine.serviceLocation);
        }
    });

    const [selectedService, setSelectedService] = useState<string[]>([]);

    const handleAppointment = async (values: any) => {
        const formattedData = {
            patientId: values.patientId,
            siteLocation: values.siteLocation,
            serviceType: values.serviceType,
            appointmentDate: values.appointmentDate.format("YYYY-MM-DD"),
        };
        
        appointmentId
            ? await dispatch(
                  updateAppointment({ ...formattedData, id: +appointmentId })
              )
            : await dispatch(insertAppointment(formattedData));
        navigate(admin ? LIST_APPOINTMENT : PATIENT_APPOINTMENT);
    };

    const changeSiteLocation = (value: string) => {
        const serviceTypes: string[] = [];
        vaccine.forEach((vaccine) => {
            if (vaccine.serviceLocation === value)
                serviceTypes.push(vaccine.serviceName);
        });
        setSelectedService(serviceTypes);
    };

    return (
        <Form
            labelCol={{ span: 8 }}
            labelAlign="left"
            onFinish={handleAppointment}
            className="margin-top"
            initialValues={props.initialState}
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
                <Select
                    placeholder="Select site location"
                    onChange={changeSiteLocation}
                >
                    {serviceLocations.map((serviceLocation) => (
                        <Option key={serviceLocation} value={serviceLocation}>
                            {serviceLocation}
                        </Option>
                    ))}
                </Select>
            </Item>
            <Item
                name="serviceType"
                label="Service Type"
                rules={FORM_DEFAULT_REQUIRED_RULE}
            >
                <Select
                    placeholder="Select service type"
                    value={selectedService[0]}
                >
                    {selectedService.map((value) => (
                        <Option key={value} value={value}>
                            {value}
                        </Option>
                    ))}
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
                <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading === PENDING}
                >
                    {props.admin ? "Submit" : "Apply"}
                </Button>
            </Item>
        </Form>
    );
};
