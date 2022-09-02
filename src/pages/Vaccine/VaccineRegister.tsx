import moment from "moment";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { VaccineServiceForm } from "../../components/Vaccine/VaccineServiceForm";
import { vaccineServiceInterface } from "../../store/sliceInterface/vaccineServiceInterface";
import { RootState } from "../../store/store";
import { SetCurrentPage } from "../../utils/SetCurrentPage";

export const VaccineRegister = () => {
    SetCurrentPage("Vaccination", "Manage vaccine services", "vaccine");
    const { vaccineId } = useParams();
    let initialState = {};

    const allvaccines = useSelector((state: RootState) => state.vaccine.data);

    if (vaccineId) {
        const selectedData = allvaccines.filter(
            (vaccine: vaccineServiceInterface) => vaccine.id === +vaccineId
        );

        initialState = {
            ...selectedData[0],
            startDate: moment(selectedData[0].startDate),
            endDate: moment(selectedData[0].endDate),
        };
    }

    const admin = useSelector((state: RootState) => state.login.data.isAdmin);
    return (
        <div>
            <VaccineServiceForm admin={admin} initialState={initialState} />
        </div>
    );
};
