import { VaccineServiceForm } from "../../components/Vaccine/VaccineServiceForm";
import { SetCurrentPage } from "../../utils/SetCurrentPage";

export const VaccineRegister = () => {
    SetCurrentPage("Vaccination", "Manage vaccine services", "vaccine");
    return (
        <div>
            <VaccineServiceForm />
        </div>
    );
};
