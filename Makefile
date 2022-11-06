
all: compile

compile:
	mvn compile

run:
	mvn spring-boot:run

clean:
	mvn clean

docker:
	mvn spring-boot:build-image -Dspring-boot.build-image.imageName=duda-demo-api

up:
	docker compose up -d

down:
	docker compose down
