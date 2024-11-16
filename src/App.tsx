import { MenubarDemo } from "@multi-package-deploy/menubar/src/menubar.tsx"
import { Button } from "@multi-package-deploy/button/src/button.tsx"
import { Input } from "@multi-package-deploy/input/src/input.tsx"

function App() {

  return (
      <div className='p-20 max-w-[1280px] mx-auto flex flex-col gap-10'>
          <MenubarDemo />
          <div className='flex flex-col gap-2'>
              <Input
                  placeholder='Placeholder'
                  label='Label 1'
              />
              <Input
                  placeholder='Placeholder'
                  label='Label 1'
              />
              <Input
                  placeholder='Placeholder'
                  label='Label 1'
              />
              <Input
                  placeholder='Placeholder'
                  label='Label 1'
              />
          </div>
          <Button />
      </div>
  )
}

export default App
