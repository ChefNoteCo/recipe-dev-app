bootstrap:
	npm install -g expo eas-cli && expo install

build-preview:
	eas build --platform ios --profile preview

start:
	expo start -i

start-debug:
	react-devtools && make start

test:
	npm test
