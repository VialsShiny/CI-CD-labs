SHELL := bash

hello:
	@echo "hello world"

install:
	@echo "Installing package..."
	@copy .env.example .env
	@copy .\frontend\.env.example .\frontend\.env
	@echo All done !

install-%:
	@echo "Installing package..."
	@cd $* && npm ci
	@echo All done !

start: 
	@echo Build App...
	@docker compose up -d --build
	@echo All done !

setup:
	@make install
	@make start

stop:
	@docker compose down $(or $(word 2,$(MAKECMDGOALS)), -v)

logs:
	@docker compose logs $(word 2,$(MAKECMDGOALS))

exec:
	@docker compose exec -T -it $(word 2,$(MAKECMDGOALS)) $(word 3,$(MAKECMDGOALS))

lint-%-docker:
	@docker compose exec -T $* npm run lint

lint-fix-%-docker:
	@docker compose exec -T $* npm run fix

lint-%:
	@cd $* && npm run lint

lint-fix-%:
	@cd $* && npm run fix

test:
	make lint-frontend; make lint-backend

jest-%:
	@cd $* && npm run test