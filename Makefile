publish:
	npm publish --dry-run
install:
	npm install
brain-games:
	node bin/brain-games.js
brain-even:
	node bin/games/brain-even
brain-calc:
	node bin/games/brain-calc
brain-gcd:
	node bin/games/brain-gcd
brain-progression:
	node bin/games/brain-progression
brain-prime:
	node bin/games/brain-prime
make lint:
	npx eslint .
