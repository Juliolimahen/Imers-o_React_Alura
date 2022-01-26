export const ValidationUser = {
    username(username = ""){
        return username.replace(/\D/g, "").length >2;
    },
};
