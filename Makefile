ASSETS = assets.tar.gz

run:
	@cargo run --bin echo-server

validate:
	@cd smithy && smithy validate

update-smithy:
	@gh release download -R tyrchen/smithy-assets -p '$(ASSETS)'
	@rm -rf $HOME/.m2
	@tar -xzf $(ASSETS) -C $(HOME) --strip-components=2
	@rm $(ASSETS)

build-smithy:
	@cd smithy; rm -rf gen && mkdir -p gen && smithy build
	@cd smithy; cp -r build/smithy/source/openapi gen/openapi; \
	cp -r build/smithy/source/python-client-codegen gen/python-client-sdk; \
	cp -r build/smithy/source/rust-client-codegen gen/rust-client-sdk; \
	cp -r build/smithy/source/typescript-client-codegen gen/typescript-client-sdk; \
	cp -r build/smithy/source/swift-codegen gen/swift-client-sdk; \
	cp -r build/smithy/source/rust-server-codegen gen/rust-server-sdk
	@cargo fmt --all

build-smithy-js:
	@cd smithy/gen/typescript-client-sdk && yarn && yarn build
	@cd web; yarn add ../smithy/gen/typescript-client-sdk && yarn

watch:
	@watchexec --restart --exts rs -- cargo run --bin echo-server

client:
	@cargo run --bin echo-client

.PHONY: run validate update-smithy build-smithy build-smithy-js watch client
