import { Menubar } from "./packages/menubar"
import { Button } from "./packages/button"
import { Input } from "./packages/input"

function App() {

  return (
      <div className='p-20 max-w-[1280px] mx-auto flex flex-col gap-10'>
          <Menubar />
          <Button />
          <Input />
      </div>
  )
}

export default App
