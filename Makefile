current_version = $$(git branch 2>/dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/\1/')
npm_bin= $$(npm bin)

all: test
clean:
	@rm -rf ./node_modules
install:
	@npm install
server: install
	@${npm_bin}/startserver -s
.PHONY: test
