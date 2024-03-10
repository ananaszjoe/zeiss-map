export const machineSchema = {
  type: "object",
  properties: {
    id: { type: "string" },
    status: { type: "string" },
    machine_type: { type: "string" },
    longitude: { type: "number" },
    latitude: { type: "number" },
    last_maintenance: { type: "string" },
    install_date: { type: "string" },
    floor: { type: "integer" }
  },
  required: ["id", "status", "machine_type", "longitude", "latitude", "last_maintenance", "install_date", "floor"]
};

export const machineListResponseSchema = {
  type: "object",
  properties: {
    data: {
      type: "array",
      items: machineSchema
    }
  },
  required: ["data"]
};