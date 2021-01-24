publish:
	npm publish --dry-run
install:
	npm install
brain-games:
	node bin/brain-games
brain-even:
	node bin/brain-even
make lint:
	npx eslint .
