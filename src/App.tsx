import { Menubar } from "@multi-package-deploy/menubar"
import { Button } from "@multi-package-deploy/button"
import { Input } from "@multi-package-deploy/input"

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
