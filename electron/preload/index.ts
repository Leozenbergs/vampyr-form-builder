// electron/preload/index.ts
import { contextBridge, ipcRenderer } from 'electron';

// 1. Defina sua API (exponha apenas o que é estritamente necessário)
const api = {
  // Exemplo de chamada: Renderizador -> Principal (invoke) -> Renderizador
  invokeExample: (arg: string) => ipcRenderer.invoke('my-api:invoke-data', arg),

  // Exemplo de eventos: Principal -> Renderizador
  onEventFromMain: (callback: (data: unknown) => void) => {
    ipcRenderer.on('main-event:data-update', (_event, data) => callback(data));
  }
};

// 2. Expõe a API para o frontend React
contextBridge.exposeInMainWorld('electronAPI', api);

// 3. Tipagem (opcional, mas altamente recomendado)
// Crie um global.d.ts para que seu frontend React possa usar 'window.electronAPI'
// com segurança de tipos.