web-up:
	docker run -it -p 8080:8080 react_clock

web-ini:
	make web-install
	make web-up

web-reset:
	make web-down
	make web-up

web-down:
	docker rm -f react_clock

web-install:
	docker build -t react_clock .