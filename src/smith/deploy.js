const path = require('path')
const fs = require('fs-extra')
const childProcess = require('child_process')
const moment = require('moment')

const source = path.resolve(__dirname, '..', '..', 'build')
const target = path.resolve(__dirname, '..', '..', '.gh-pages')

function setGitCwd (cwd) {
  return async function git (...args) {
    childProcess.spawnSync('git', args, {
      cwd,
      stdio: 'inherit'
    })
  }
}

async function createRepoDir (dir, user, mail) {
  const git = setGitCwd(dir)

  await fs.ensureDir(dir)
  await git('init')
  await git('config', 'user.name', user)
  await git('config', 'user.email', mail)
}

async function emptyRepoDir (dir) {
  const files = await fs.readdir(dir)
  for (const file of files) {
    if (file !== '.git') {
      await fs.remove(path.join(dir, file))
    }
  }
}

function getCommitMessage () {
  return 'Update: ' + moment().format('YYYY-MM-DD HH:mm')
}

async function deploy (options) {
  const { repo, branch, user, mail } = options

  const git = setGitCwd(target)

  if (fs.existsSync(target)) {
    await emptyRepoDir(target)
  } else {
    await createRepoDir(target, user, mail)
  }
  await fs.copy(source, target, { overwrite: true })
  await git('add', '-A')
  await git('commit', '-m', getCommitMessage())
  await git('push', '-u', repo, 'HEAD:' + branch, '--force')
}

deploy({
  repo: 'git@github.com:greguz/personal-blog.git',
  branch: 'gh-pages',
  user: 'greguz',
  mail: 'gregolettogiacomo@gmail.com'
}).catch(err => console.error(err))
