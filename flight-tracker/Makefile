# Flight Tracker — Build & Deploy
# Usage: make deploy

.PHONY: deploy

deploy:
	@echo "Syncing source to docs/..."
	cp index.html docs/index.html
	@echo "Committing and pushing..."
	git add docs/index.html
	git commit -m "Deploy: sync docs/ with latest changes"
	git push
	@echo "Done."
