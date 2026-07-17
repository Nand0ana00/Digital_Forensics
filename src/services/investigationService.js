import api from "../integration/api";

export async function investigate() {
  const response = await api.get("/investigate");
  return response.data;
}