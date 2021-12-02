bootstrap:
	npm install -g expo eas-cli && expo install

build-development:
	eas build --platform ios --profile development

build-preview:
	eas build --platform ios --profile preview --no-wait

build-production:
	eas build --platform ios --profile production

start:
	expo start -i

start-debug:
	react-devtools && make start

test:
	npm test