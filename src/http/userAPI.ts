import {jwtDecode} from "jwt-decode";
import { $authHost, $host } from "./index";
import { IUserToken } from "../types/userTypes";

export const registration = async (
    email: string,
    password: string
): Promise<IUserToken> => {
    if (!email || !password) throw new Error("Email и пароль обязательны");

    const { data } = await $host.post<{ token: string }>("api/user/registration", {
        email,
        password,
        role: "ADMIN",
    });

    if (!data.token) throw new Error("Токен не получен с сервера");

    localStorage.setItem("token", data.token);
    return jwtDecode<IUserToken>(data.token);
};

export const login = async (
    email: string,
    password: string
): Promise<IUserToken> => {
    if (!email || !password) throw new Error("Email и пароль обязательны");

    const { data } = await $host.post<{ token: string }>("api/user/login", {
        email,
        password,
    });

    if (!data.token) throw new Error("Токен не получен с сервера");

    localStorage.setItem("token", data.token);
    return jwtDecode<IUserToken>(data.token);
};

export const check = async (): Promise<IUserToken> => {
    const { data } = await $authHost.get<{ token: string }>("api/user/auth");

    if (!data.token) throw new Error("Токен не получен с сервера");

    localStorage.setItem("token", data.token);
    return jwtDecode<IUserToken>(data.token);
};
