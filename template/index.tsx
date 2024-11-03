import ErrorBoundary from "@components/ErrorBoundary";
import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { findByCodeLazy, findByPropsLazy } from "@webpack";
import { definePluginSettings } from "@api/Settings";
import { Button, FluxDispatcher, GuildChannelStore, GuildStore, React, ReadStateStore } from "@webpack/common";

const settings = definePluginSettings({
    
})
export default definePlugin({
    name: "MyCoolPlugin",
    description: "Nice!",
    authors: [{ name: "natounet21", id: 1249028780463231097n }],
    settings,
});