pipeline {
  agent any
  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }

 
  }
  tools {
    nodejs 'Nodejs_auto'
    dockerTool 'docker'
  }
}
