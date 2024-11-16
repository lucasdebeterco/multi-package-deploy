import * as Menubar from "@radix-ui/react-menubar"
export function MenubarDemo() {

    return (
        <Menubar.Root className="flex rounded-md bg-zinc-800 p-2 shadow-[0_2px_10px] shadow-zinc-900">
            <Menubar.Menu>
                <Menubar.Trigger className="flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 font-medium leading-none text-zinc-100 outline-none data-[state=open]:bg-zinc-900">
                    File
                </Menubar.Trigger>
                <Menubar.Portal>
                    <Menubar.Content
                        className="min-w-[220px] rounded-md bg-zinc-700 p-[5px]"
                        align="start"
                        sideOffset={5}
                        alignOffset={-3}
                    >
                        <Menubar.Item className="group relative flex h-[25px] select-none items-center rounded px-2.5 leading-none text-violet-400 outline-none data-[disabled]:pointer-events-none data-[state=open]:bg-violet-50 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet-500 data-[highlighted]:to-violet-800 data-[disabled]:text-zinc-600 data-[highlighted]:data-[state=open]:text-violet-400 data-[highlighted]:text-violet-400 data-[state=open]:text-violet-800">
                            New Tab{" "}
                        </Menubar.Item>
                        <Menubar.Item className="group relative flex h-[25px] select-none items-center rounded px-2.5 leading-none text-violet-400 outline-none data-[disabled]:pointer-events-none data-[state=open]:bg-violet-50 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet-500 data-[highlighted]:to-violet-800 data-[disabled]:text-zinc-600 data-[highlighted]:data-[state=open]:text-violet-400 data-[highlighted]:text-violet-400 data-[state=open]:text-violet-800">
                            New Window{" "}
                        </Menubar.Item>
                        <Menubar.Item className="relative flex h-[25px] select-none items-center rounded px-2.5 leading-none text-violet-400 outline-none data-[disabled]:pointer-events-none data-[state=open]:bg-violet-50 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet-900 data-[highlighted]:to-violet-900 data-[disabled]:text-zinc-500 data-[highlighted]:data-[state=open]:text-violet-950 data-[highlighted]:text-violet-950 data-[state=open]:text-violet-900">
                            New Incognito Window
                        </Menubar.Item>
                    </Menubar.Content>
                </Menubar.Portal>
            </Menubar.Menu>

            <Menubar.Menu>
                <Menubar.Trigger className="flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 font-medium leading-none text-zinc-100 outline-none data-[state=open]:bg-zinc-900">
                    Edit
                </Menubar.Trigger>
                <Menubar.Portal>
                    <Menubar.Content
                        className="min-w-[220px] rounded-md bg-white p-[5px]"
                        align="start"
                        sideOffset={5}
                        alignOffset={-3}
                    >
                        <Menubar.Item className="group relative flex h-[25px] select-none items-center rounded px-2.5 leading-none text-violet-900 outline-none data-[disabled]:pointer-events-none data-[state=open]:bg-violet-50 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet-900 data-[highlighted]:to-violet-900 data-[disabled]:text-zinc-500 data-[highlighted]:data-[state=open]:text-violet-950 data-[highlighted]:text-violet-950 data-[state=open]:text-violet-900">
                            Undo{" "}
                        </Menubar.Item>
                        <Menubar.Item className="group relative flex h-[25px] select-none items-center rounded px-2.5 leading-none text-violet-900 outline-none data-[disabled]:pointer-events-none data-[state=open]:bg-violet-50 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet-900 data-[highlighted]:to-violet-900 data-[disabled]:text-zinc-500 data-[highlighted]:data-[state=open]:text-violet-950 data-[highlighted]:text-violet-950 data-[state=open]:text-violet-900">
                            Redo{" "}
                        </Menubar.Item>
                    </Menubar.Content>
                </Menubar.Portal>
            </Menubar.Menu>
        </Menubar.Root>
    )
}