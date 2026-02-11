pipeline {
    agent any

    stages {
        // 1️⃣ Checkout на кода от GitHub
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Simeon51Velev/SVelev-Test-Playwright.git'
            }
        }

        // 2️⃣ Инсталиране на зависимости
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        // 3️⃣ Инсталиране на Playwright браузъри
        stage('Install Browsers') {
            steps {
                sh 'npx playwright install --with-deps'
            }
        }

        // 4️⃣ Стартиране на тестовете с HTML репорт
        stage('Run Tests') {
            steps {
                sh 'npm run test:ci'
            }
        }
    }

    // 5️⃣ Публикуване на HTML репорт
    post {
        always {
            publishHTML(target: [
                reportDir: 'playwright-report',      // папката, която Playwright генерира
                reportFiles: 'index.html',           // главният файл на репорта
                reportName: 'Playwright Report',     // име, което ще се показва в Jenkins
                keepAll: true,                        // запазва всички стари репорти
                alwaysLinkToLastBuild: true,          // линк към последния билд
                allowMissing: true                     // ако няма report, build пак минава
            ])
        }
    }
}
