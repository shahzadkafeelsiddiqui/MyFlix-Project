pipeline {

    agent any
    stages ("Building the application") {
        steps {
            sh 'docker compose up --build'
            sh 'docker ps'
        }
    }
}
// check
