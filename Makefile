all: build run visit

build:
	docker build . -t challenge/udundi

run:
	docker run -d -p=8080:80 --name=udundi challenge/udundi
	
visit:
	open http://localhost:8080

stop:
	docker stop udundi

clean:
	docker container rm -f udundi
