delete:
	docker rmi -f thermo-node-red:latest
build:
	docker build -t thermo-node-red:latest -f dockerfile .
shellnodered:
	docker exec -it thermostat_thermonode_1 /bin/bash
shellsails:
	docker exec -it  thermostat_api_1 /bin/bash
start:
	docker-compose up -d --no-recreate --remove-orphans  
stop:
	docker-compose stop
