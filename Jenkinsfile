pipeline {
  agent any

  tools {
    nodejs 'NodeJS 22.14' // MUST match the tool name in Jenkins
  }

  environment {
    CI = 'true' // Ensures Cypress runs in CI mode
  }

  stages {
    stage('Checkout') {
      steps {
        git 'https://your-repository-url.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm ci'
      }
    }

 stage('Run Cypress Tests') {
      steps {
        ansiColor('xterm') {
          sh 'npx cypress run'
        }
      }
    }
  }
    stage('Run Cypress Tests') {
      steps {
        sh 'npx cypress run'
      }
    }
  }

  post {
    always {
      echo 'Cleaning up and archiving results if needed'
      // Optional: Add test results archiving
    }
  }
}
