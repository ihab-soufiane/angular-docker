pipeline {
  agent any
  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm install --cache '
      }
    }

    stage('Build et Test') {
      steps {
        sh 'rm -rf node_modules'
        sh 'npm install'
        sh 'npm install @angular/cli'
        sh 'npm update @angular/cli @angular/core @angular/compiler @angular/compiler-cli'
        sh 'npm run build'
        sh 'CHROME_BIN=/var/lib/yum/repos/x86_64/7/google-chrome npm run test'
      }
    }

    stage('Run in Docker') {
      steps {
        echo 'Hello oui non yes'
        sh 'docker build -t my-angular-app .'
        sh 'docker run -p 4200:4200 -e NG_CLI_ANALYTICS=false my-angular-app'
      }
    }

  }
  tools {
    nodejs 'Nodejs_auto'
    dockerTool 'docker'
  }
}
