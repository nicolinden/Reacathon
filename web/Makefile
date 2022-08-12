image:
	docker build -t reactathon:dev .

common:
	docker compose up

shell:
	docker exec -it reactathon-web bash

stop:
	docker stop $$(docker ps -q)
