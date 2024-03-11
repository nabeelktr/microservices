# Start the first Node.js server in the background
Start-Process -FilePath "npm" -ArgumentList "start" -WorkingDirectory "/Users/mac/vscode/microservice/E-Commerce_Web_Application/Cart/src" -NoNewWindow -PassThru | Out-Null

# Start the second Node.js server in the background
Start-Process -FilePath "npm" -ArgumentList "start" -WorkingDirectory "/Users/mac/vscode/microservice/E-Commerce_Web_Application/product/src" -NoNewWindow -PassThru | Out-Null

# Start the third Node.js server in the background
Start-Process -FilePath "npm" -ArgumentList "start" -WorkingDirectory "/Users/mac/vscode/microservice/E-Commerce_Web_Application/user/src" -NoNewWindow -PassThru | Out-Null
