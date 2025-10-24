import { contextBridge, ipcRenderer } from "electron";
const api = {
  // Exemplo de chamada: Renderizador -> Principal (invoke) -> Renderizador
  invokeExample: (arg) => ipcRenderer.invoke("my-api:invoke-data", arg),
  // Exemplo de eventos: Principal -> Renderizador
  onEventFromMain: (callback) => {
    ipcRenderer.on("main-event:data-update", (_event, data) => callback(data));
  }
};
contextBridge.exposeInMainWorld("electronAPI", api);
