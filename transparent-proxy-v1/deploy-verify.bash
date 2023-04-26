hh run scripts/deploy.js --network sepolia 
read -p 'Deployed Contract Address: ' deployed
hh verify --network sepolia $deployed