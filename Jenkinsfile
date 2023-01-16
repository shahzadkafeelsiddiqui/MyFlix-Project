pipeline {

    agent any
    stage ("Building the application") {
        steps {
            sh 'docker compose up --build'
            sh 'docker ps'
        }
    }
}
// check
