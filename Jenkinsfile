pipeline {

    agent any
    stages{
        stage ("Building the application") {
        steps {
            bat 'docker compose up --build'
            bat 'docker ps'
        }
    }
}
}
// check
