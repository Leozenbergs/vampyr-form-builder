function getAugmentedNamespace(n) {
  if (Object.prototype.hasOwnProperty.call(n, "__esModule")) return n;
  var f = n.default;
  if (typeof f == "function") {
    var a = function a2() {
      var isInstance = false;
      try {
        isInstance = this instanceof a2;
      } catch {
      }
      if (isInstance) {
        return Reflect.construct(f, arguments, this.constructor);
      }
      return f.apply(this, arguments);
    };
    a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
const __viteBrowserExternal = {};
const __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" }));
const require$$1 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
var electron;
var hasRequiredElectron;
function requireElectron() {
  if (hasRequiredElectron) return electron;
  hasRequiredElectron = 1;
  var define_process_env_default = {};
  const fs = require$$1;
  const path = require$$1;
  const pathFile = path.join(__dirname, "path.txt");
  function getElectronPath() {
    let executablePath;
    if (fs.existsSync(pathFile)) {
      executablePath = fs.readFileSync(pathFile, "utf-8");
    }
    if (define_process_env_default.ELECTRON_OVERRIDE_DIST_PATH) {
      return path.join(define_process_env_default.ELECTRON_OVERRIDE_DIST_PATH, executablePath || "electron");
    }
    if (executablePath) {
      return path.join(__dirname, "dist", executablePath);
    } else {
      throw new Error("Electron failed to install correctly, please delete node_modules/electron and try installing again");
    }
  }
  electron = getElectronPath();
  return electron;
}
var electronExports = requireElectron();
const api = {
  // Exemplo de chamada: Renderizador -> Principal (invoke) -> Renderizador
  invokeExample: (arg) => electronExports.ipcRenderer.invoke("my-api:invoke-data", arg),
  // Exemplo de eventos: Principal -> Renderizador
  onEventFromMain: (callback) => {
    electronExports.ipcRenderer.on("main-event:data-update", (_event, data) => callback(data));
  }
};
electronExports.contextBridge.exposeInMainWorld("electronAPI", api);
