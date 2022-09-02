export const setHeader = () => {
    const token = localStorage.getItem("accessToken");

    return {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
};
