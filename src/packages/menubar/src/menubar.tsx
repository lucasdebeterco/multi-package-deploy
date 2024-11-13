import * as Menubar from "@radix-ui/react-menubar"
import { useState } from "react"

const RADIO_ITEMS = ["Andy", "Benoît", "Luis"];
const CHECK_ITEMS = ["Always Show Bookmarks Bar", "Always Show Full URLs"];

export function MenubarDemo() {
    const [checkedSelection, setCheckedSelection] = useState([
        CHECK_ITEMS[1],
    ]);
    const [radioSelection, setRadioSelection] = useState(RADIO_ITEMS[2]);

    return (
        <Menubar.Root className="flex rounded-md bg-white p-[3px] shadow-[0_2px_10px] shadow-zinc-100">
            <Menubar.Menu>
                <Menubar.Trigger className="flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-[13px] font-medium leading-none text-violet-600 outline-none data-[highlighted]:bg-violet-50 data-[state=open]:bg-violet-50">
                    File
                </Menubar.Trigger>
                <Menubar.Portal>
                    <Menubar.Content
                        className="min-w-[220px] rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[transform,opacity] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)]"
                        align="start"
                        sideOffset={5}
                        alignOffset={-3}
                    >
                        <Menubar.Item className="group relative flex h-[25px] select-none items-center rounded px-2.5 text-[13px] leading-none text-violet-900 outline-none data-[disabled]:pointer-events-none data-[state=open]:bg-violet-50 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet-500 data-[highlighted]:to-violet-800 data-[disabled]:text-zinc-600 data-[highlighted]:data-[state=open]:text-violet-400 data-[highlighted]:text-violet-400 data-[state=open]:text-violet-800">
                            New Tab{" "}
                        </Menubar.Item>
                        <Menubar.Item className="group relative flex h-[25px] select-none items-center rounded px-2.5 text-[13px] leading-none text-violet-900 outline-none data-[disabled]:pointer-events-none data-[state=open]:bg-violet-50 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet-500 data-[highlighted]:to-violet-800 data-[disabled]:text-zinc-600 data-[highlighted]:data-[state=open]:text-violet-400 data-[highlighted]:text-violet-400 data-[state=open]:text-violet-800">
                            New Window{" "}
                        </Menubar.Item>
                        <Menubar.Item className="relative flex h-[25px] select-none items-center rounded px-2.5 text-[13px] leading-none text-violet-900 outline-none data-[disabled]:pointer-events-none data-[state=open]:bg-violet4 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[disabled]:text-mauve8 data-[highlighted]:data-[state=open]:text-violet1 data-[highlighted]:text-violet1 data-[state=open]:text-violet-900">
                            New Incognito Window
                        </Menubar.Item>
                    </Menubar.Content>
                </Menubar.Portal>
            </Menubar.Menu>

            <Menubar.Menu>
                <Menubar.Trigger className="flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-[13px] font-medium leading-none text-violet-900 outline-none data-[highlighted]:bg-violet4 data-[state=open]:bg-violet4">
                    Edit
                </Menubar.Trigger>
                <Menubar.Portal>
                    <Menubar.Content
                        className="min-w-[220px] rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[transform,opacity] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)]"
                        align="start"
                        sideOffset={5}
                        alignOffset={-3}
                    >
                        <Menubar.Item className="group relative flex h-[25px] select-none items-center rounded px-2.5 text-[13px] leading-none text-violet-900 outline-none data-[disabled]:pointer-events-none data-[state=open]:bg-violet4 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[disabled]:text-mauve8 data-[highlighted]:data-[state=open]:text-violet1 data-[highlighted]:text-violet1 data-[state=open]:text-violet-900">
                            Undo{" "}
                            <div className="ml-auto pl-5 text-mauve9 group-data-[disabled]:text-mauve8 group-data-[highlighted]:text-white">
                                ⌘ Z
                            </div>
                        </Menubar.Item>
                        <Menubar.Item className="group relative flex h-[25px] select-none items-center rounded px-2.5 text-[13px] leading-none text-violet-900 outline-none data-[disabled]:pointer-events-none data-[state=open]:bg-violet4 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[disabled]:text-mauve8 data-[highlighted]:data-[state=open]:text-violet1 data-[highlighted]:text-violet1 data-[state=open]:text-violet-900">
                            Redo{" "}
                            <div className="ml-auto pl-5 text-mauve9 group-data-[disabled]:text-mauve8 group-data-[highlighted]:text-white">
                                ⇧ ⌘ Z
                            </div>
                        </Menubar.Item>
                    </Menubar.Content>
                </Menubar.Portal>
            </Menubar.Menu>
        </Menubar.Root>
    )
}