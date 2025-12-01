import AutoLaunch from "auto-launch";

import { ipcMain } from "electron";

import { mainWindow } from "./window";

export const autoLaunch = new AutoLaunch({
  name: "Nova Chat",
});

ipcMain.on("isAutostart?", () =>
  autoLaunch
    .isEnabled()
    .then((enabled) => mainWindow.webContents.send("isAutostart", enabled)),
);

ipcMain.on("setAutostart", (state) =>
  state ? autoLaunch.enable() : autoLaunch.disable(),
);
