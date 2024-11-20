import { MenubarDemo } from "@multi-package-deploy/menubar/src/menubar.tsx"
import { Button } from "@multi-package-deploy/button/src/button.tsx"
import { Input } from "@multi-package-deploy/input/src/input.tsx"

function App() {
  return (
      <div className='p-20 max-w-[1280px] mx-auto flex flex-col gap-10'>
          <MenubarDemo />
          <div className='flex flex-col gap-2'>
              <Input
                  label='First example input'
                  name='first-input'
              />
              <Input
                  label='Second example input'
                  name='second-input'
              />
              <Input
                  label='Third example input'
                  name='third-input'
              />
              <Input
                  label='Fourth example input'
                  name='fourth-input'
              />
          </div>
          <Button />
      </div>
  )
}

export default App
