import 'dotenv/config'
import { execSync } from 'child_process'
import { existsSync, unlinkSync, writeFileSync } from 'fs'
import { join } from 'path'

// Lê o nome do pacote e o token
const packageName = process.argv.find(arg => arg.startsWith('--package='))?.split('=')[1]
const npmToken = process.env.NPM_TOKEN

// Caminho do .npmrc
const npmrcPath = join(process.cwd(), '.npmrc')

// Verifica se o token está configurado
if (!npmToken) {
    console.error('Erro: NPM_TOKEN não definido.')
    process.exit(1)
}

writeFileSync(npmrcPath, `//registry.npmjs.org/:_authToken=${npmToken}\n`)

try {
    if (!packageName) {
        console.log('Atualizando e publicando todos os pacotes...')
        execSync('npm run build --workspaces', { stdio: 'inherit' })
        execSync('npm version patch --workspaces', { stdio: 'inherit' })
        execSync('npm run publish:all', { stdio: 'inherit' })
    } else {
        const packagePath = join(process.cwd(), 'src', 'packages', packageName)

        if (existsSync(packagePath)) {
            console.log(`Atualizando e publicando o pacote: ${packageName}`)
            execSync(`npm run build --workspace ${packagePath}`, { stdio: 'inherit' })
            execSync(`npm version patch --workspace ${packagePath}`, { stdio: 'inherit' })
            execSync(`npm publish --workspace ${packagePath} --if-present --access public`, { stdio: 'inherit' })
        } else {
            console.error(`Erro: Pacote "${packageName}" não encontrado.`)
        }
    }
} catch (error) {
    console.error('Erro ao executar o script:', error.message, error.stack)
} finally {
    // Remove o .npmrc temporário
    if (existsSync(npmrcPath)) {
        unlinkSync(npmrcPath)
        console.log('.npmrc temporário removido.')
    }
}