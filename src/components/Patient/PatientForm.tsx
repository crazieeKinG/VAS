import {
    Button,
    Checkbox,
    DatePicker,
    Form,
    Input,
    Select,
    Upload,
} from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { insertPatient, updatePatient } from "../../api/patientApi";
import { FORM_DEFAULT_REQUIRED_RULE } from "../../constants/formRequiredRulle";
import { LIST_PATIENT, LOGIN } from "../../constants/navLinkConstants";
import { PENDING } from "../../constants/sliceConstants";
import { setPatientDetails } from "../../store/slice/patientInformationSlice";
import { AppDispatch, RootState } from "../../store/store";
import { FormAdminPropsInterface } from "../../utils/FormAdminPropsInterface";

const { Item } = Form;
const { Option } = Select;

export const PatientForm = (props: FormAdminPropsInterface) => {
    const { patientId } = useParams();
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const admin = useSelector((state: RootState) => state.login.data.isAdmin);
    console.log(admin);
    const { loading } = useSelector((state: RootState) => state.patient);
    const [form] = Form.useForm();

    const [aggrementChecked, setAggrementChecked] = useState(false);

    const handleForm = async (values: any) => {
        const formData = new FormData();
        let formatedData: any = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            dob: values.dob.format("YYYY-MM-DD").toString(),
            gender: values.gender,
            ethnicity: values.ethnicity,
            state: values.state,
            street: values.street,
            city: values.city,
            insuranceId: values.insuranceId,
            memberId: values.memberId,
            insuranceProvider: values.insuranceProvider,
            isAdmin: values.isAdmin ? true : false,
        };

        for (const key in formatedData) formData.append(key, formatedData[key]);

        if (!!values.password) formData.append("password", values.password);
        if (!!values.document) formData.append("photo", values.document.file);
        if (patientId) formData.append("id", patientId);

        patientId
            ? await dispatch(updatePatient(formData))
            : await dispatch(insertPatient(formData));
        form.resetFields();
        navigate(admin ? LIST_PATIENT : LOGIN);
    };

    const handleAggrement = () => {
        setAggrementChecked((prev: boolean) => !prev);
    };

    return (
        <Form
            form={form}
            labelAlign="left"
            labelCol={{ span: 5 }}
            onFinish={handleForm}
            className="margin-top"
            initialValues={props.initialState}
        >
            <Item
                label="First name"
                name="firstName"
                rules={FORM_DEFAULT_REQUIRED_RULE}
            >
                <Input placeholder="Enter first name" />
            </Item>
            <Item
                label="Last name"
                name="lastName"
                rules={FORM_DEFAULT_REQUIRED_RULE}
            >
                <Input placeholder="Enter last name" />
            </Item>

            <Item
                label="Email "
                name="email"
                rules={[{ ...FORM_DEFAULT_REQUIRED_RULE[0], type: "email" }]}
            >
                <Input placeholder="Enter email address" />
            </Item>
            <Item
                label="Password"
                name="password"
                rules={props.initialState.id ? [] : FORM_DEFAULT_REQUIRED_RULE}
            >
                <Input.Password placeholder="Enter new password" />
            </Item>
            <Item
                label="Date of birth"
                name="dob"
                rules={FORM_DEFAULT_REQUIRED_RULE}
            >
                <DatePicker />
            </Item>
            <Item
                label="Ethnicity"
                name="ethnicity"
                rules={FORM_DEFAULT_REQUIRED_RULE}
            >
                <Input placeholder="Enter your ethnicity" />
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
                <Select placeholder="Select your gender">
                    <Option value="Male">Male</Option>
                    <Option value="Female">Female</Option>
                    <Option value="Other">Other</Option>
                </Select>
            </Item>
            <Item label="Registered Address" required>
                <Input.Group compact>
                    <Item
                        name="street"
                        className="width-30"
                        rules={FORM_DEFAULT_REQUIRED_RULE}
                    >
                        <Input placeholder="Street" />
                    </Item>
                    <Item
                        name="city"
                        className="width-30"
                        rules={FORM_DEFAULT_REQUIRED_RULE}
                    >
                        <Input placeholder="City" />
                    </Item>
                    <Item
                        name="state"
                        className="width-30"
                        rules={FORM_DEFAULT_REQUIRED_RULE}
                    >
                        <Input placeholder="State" />
                    </Item>
                </Input.Group>
            </Item>
            <Item label="Payment Information" required>
                <Input.Group compact>
                    <Item
                        name="insuranceId"
                        className="width-30"
                        rules={FORM_DEFAULT_REQUIRED_RULE}
                    >
                        <Input placeholder="Insurance ID" />
                    </Item>
                    <Item
                        name="memberId"
                        className="width-30"
                        rules={FORM_DEFAULT_REQUIRED_RULE}
                    >
                        <Input placeholder="Member ID" />
                    </Item>
                    <Item
                        name="insuranceProvider"
                        className="width-30"
                        rules={FORM_DEFAULT_REQUIRED_RULE}
                    >
                        <Input placeholder="Insurance Provider" />
                    </Item>
                </Input.Group>
            </Item>

            <Item name="document" label="Document">
                <Upload
                    beforeUpload={() => false}
                    maxCount={1}
                    fileList={undefined}
                >
                    <Button>Upload</Button>
                </Upload>
            </Item>

            {admin && (
                <Item name="isAdmin" valuePropName="checked">
                    <Checkbox>Manager Role</Checkbox>
                </Item>
            )}

            <Item name="aggrement" valuePropName="checked">
                <Checkbox onChange={handleAggrement}>I Agree</Checkbox>
            </Item>

            <Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    disabled={!aggrementChecked}
                    loading={loading === PENDING}
                >
                    {props.admin ? "Submit" : "Register"}
                </Button>
            </Item>
        </Form>
    );
};
