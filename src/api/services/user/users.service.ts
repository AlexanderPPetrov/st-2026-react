import { networkClient } from "../../network-client";
import type { Users } from "./types";

export async function getUsers(): Promise<Users> {
    const response = await networkClient.get('/users')
    return response.data
}