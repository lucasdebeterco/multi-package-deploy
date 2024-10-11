import { execSync } from 'child_process'
import { existsSync, unlinkSync,writeFileSync } from 'fs'
import { join } from 'path'

const packageName = process.argv.find(arg => arg.startsWith('--package='))?.split('=')[1]
//const npmToken = import.meta.env.VITE_NPM_TOKEN
const npmToken = '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'

// Cria um .npmrc temporário
const npmrcPath = join(process.cwd(), '.npmrc')
if (npmToken) {
    writeFileSync(npmrcPath, `//registry.npmjs.org/:_authToken=${npmToken}\n`)
} else {
    console.error('NPM_TOKEN não definido.')
    process.exit(1)
}

try {
    if (!packageName) {
        console.log('Atualizando e publicando todos os pacotes...')
        execSync(npm run build --workspaces, { stdio: 'inherit' })
        execSync('npm version patch --workspaces', { stdio: 'inherit' })
        execSync('npm publish --workspaces --if-present --access public', { stdio: 'inherit' })
    } else {
        const packagePath = join('src', 'packages', packageName)
        if (existsSync(packagePath)) {
            console.log(Atualizando e publicando o pacote: ${packageName})
            execSync(npm run build --workspace ${packagePath}, { stdio: 'inherit' })
            execSync(npm version patch --workspace ${packagePath}, { stdio: 'inherit' })
            execSync(npm publish --workspace ${packagePath} --if-present --access public, { stdio: 'inherit' })
        } else {
            console.log(Pacote "${packageName}" não encontrado.)
        }
    }
} catch (error) {
    console.error('Erro ao executar o script:', error)
} finally {
    // Remove o .npmrc temporário
    if (existsSync(npmrcPath)) {
        unlinkSync(npmrcPath)
    }
}