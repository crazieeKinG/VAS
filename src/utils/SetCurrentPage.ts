import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTitle } from "../store/slice/interfaceSlice";

export const SetCurrentPage = (
    pageTitle: string,
    pageSubTitle: string,
    navbarlink: string
) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            setTitle({
                title: pageTitle,
                subTitle: pageSubTitle,
                navbarLink: navbarlink,
            })
        );
    });
};
