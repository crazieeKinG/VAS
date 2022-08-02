import { useSelector } from "react-redux";
import { CreatePatientForm } from "../../../components/Patient/CreatePatientForm";
import { RootState } from "../../../store/store";

export const CreatePatient = () => {
    const patientData = useSelector((state: RootState) => state.patient.data);

    return (
        <div className="container">
            <CreatePatientForm admin={true}/>
            <div>
                Patient Information
                <ul>
                    <li>Name: {patientData.firstName} {patientData.lastName}</li>
                    <li>Date of birth: {patientData.dob}</li>
                    <li>Ethnicity: {patientData.ethnicity}</li>
                    <li>Gender: {patientData.gender}</li>
                    <li>Address: {patientData.address.street}, {patientData.address.city}, {patientData.address.state}</li>
                    <li>Payment Information: {patientData.payment.insuranceId}, {patientData.payment.memberId}, {patientData.payment.insuranceProvider}</li>
                    <li>Document: {JSON.stringify(patientData.document)}</li>
                </ul>
            </div>
        </div>
    );
};
