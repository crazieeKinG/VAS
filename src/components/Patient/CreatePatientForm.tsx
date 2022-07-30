import {
    Button,
    Checkbox,
    DatePicker,
    Form,
    Input,
    Select,
    Upload,
    UploadFile,
    UploadProps,
} from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setPatientDetails } from "../../store/slice/patientInformationSlice";
import "./createPatientForm.css";

const { Item } = Form;
const { Option } = Select;

export const CreatePatientForm = () => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    const [aggrementChecked, setAggrementChecked] = useState(false);

    const handleForm = (values: any) => {
        const formatedData = {
            firstName: values.firstName,
            lastName: values.lastName,
            dob: values.dob.format("YYYY-MM-DD").toString(),
            gender: values.gender,
            ethnicity: values.ethnicity,
            address: {
                state: values.state,
                street: values.street,
                city: values.city,
            },
            payment: {
                insuranceId: values.insuranceId,
                memberId: values.memberId,
                insuranceProvider: values.insuranceProvider,
            },
            document: values.document
        };
        dispatch(setPatientDetails(formatedData));

        form.resetFields();
    };

    const uploadProps: UploadProps = {
        onRemove: (file) => {
            const index = fileList.indexOf(file);
            const newFileList = fileList.slice();
            newFileList.splice(index, 1);
            setFileList(newFileList);
        },
        beforeUpload: (file) => {
            setFileList([...fileList, file]);

            return false;
        },
        fileList,
    };

    const handleAggrement = () => {
        setAggrementChecked((prev: boolean) => !prev);
    };

    return (
        <Form
            labelAlign="left"
            labelCol={{ span: 8 }}
            onFinish={handleForm}
            className="margin-top"
        >
            <Item
                label="First name"
                name="firstName"
                rules={[{ required: true, message: "Please fill this field!" }]}
            >
                <Input placeholder="Enter first name" />
            </Item>
            <Item
                label="Last name"
                name="lastName"
                rules={[{ required: true, message: "Please fill this field!" }]}
            >
                <Input placeholder="Enter last name" />
            </Item>
            <Item
                label="Date of birth"
                name="dob"
                rules={[{ required: true, message: "Please fill this field!" }]}
            >
                <DatePicker />
            </Item>
            <Item
                label="Ethnicity"
                name="ethnicity"
                rules={[{ required: true, message: "Please fill this field!" }]}
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
                        name="city"
                        className="width-30"
                        rules={[
                            {
                                required: true,
                                message: "Please fill this field!",
                            },
                        ]}
                    >
                        <Input placeholder="City" />
                    </Item>
                    <Item
                        name="street"
                        className="width-30"
                        rules={[
                            {
                                required: true,
                                message: "Please fill this field!",
                            },
                        ]}
                    >
                        <Input placeholder="Street" />
                    </Item>
                    <Item
                        name="state"
                        className="width-30"
                        rules={[
                            {
                                required: true,
                                message: "Please fill this field!",
                            },
                        ]}
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
                        rules={[
                            {
                                required: true,
                                message: "Please fill this field!",
                            },
                        ]}
                    >
                        <Input placeholder="Insurance ID" />
                    </Item>
                    <Item
                        name="memberId"
                        className="width-30"
                        rules={[
                            {
                                required: true,
                                message: "Please fill this field!",
                            },
                        ]}
                    >
                        <Input placeholder="Member ID" />
                    </Item>
                    <Item
                        name="insuranceProvider"
                        className="width-30"
                        rules={[
                            {
                                required: true,
                                message: "Please fill this field!",
                            },
                        ]}
                    >
                        <Input placeholder="Insurance Provider" />
                    </Item>
                </Input.Group>
            </Item>

            <Item
                name="document"
                label="Document Image"
            >
                <Upload {...uploadProps}>
                    <Button>Upload</Button>
                </Upload>
            </Item>

            <Item name="aggrement" valuePropName="checked">
                <Checkbox onChange={handleAggrement}>I Agree</Checkbox>
            </Item>

            <Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    disabled={!aggrementChecked}
                >
                    Submit
                </Button>
            </Item>
        </Form>
    );
};
