import 'dotenv/config'
import { execSync } from 'child_process'
import { existsSync, unlinkSync, writeFileSync } from 'fs'
import { join } from 'path'

const packageName = process.argv.find(arg => arg.startsWith('--package='))?.split('=')[1]
const npmToken = process.env.NPM_TOKEN

const npmrcPath = join(process.cwd(), '.npmrc')

if (!npmToken) {
    console.error('Error: NPM_TOKEN not defined.')
    process.exit(1)
}

writeFileSync(npmrcPath, `//registry.npmjs.org/:_authToken=${npmToken}\n`)

try {
    if (!packageName) {
        console.log('Updating and publishing all packages...')
        execSync('npm run build --workspaces', { stdio: 'inherit' })
        execSync('npm version patch --workspaces', { stdio: 'inherit' })
        execSync('npm run publish:all', { stdio: 'inherit' })
    } else {
        const packagePath = join(process.cwd(), 'src', 'packages', packageName)

        if (existsSync(packagePath)) {
            console.log(`Updating and publishing package: ${packageName}`)
            execSync(`npm run build --workspace ${packagePath}`, { stdio: 'inherit' })
            execSync(`npm version patch --workspace ${packagePath}`, { stdio: 'inherit' })
            execSync(`npm publish --workspace ${packagePath} --if-present --access public`, { stdio: 'inherit' })
        } else {
            console.error(`Error: Package "${packageName}" not found.`)
        }
    }
} catch (error) {
    console.error('Error executing the script:', error.message, error.stack)
} finally {
    if (existsSync(npmrcPath)) {
        unlinkSync(npmrcPath)
        console.log('Temporary .npmrc removed.')
    }
}