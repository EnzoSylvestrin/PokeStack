export const FormatUser = (user : string) : string => {
    return user.substring(0, 1).toLocaleUpperCase() + user.substring(1);
}
