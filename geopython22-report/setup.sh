# Prerequisites:
# quarto-cli
# [Quarto VS Code Extension]

# For notebook behaviour
python -m venv .venv
. .venv/Scripts/activate
pip install ipykernel

# May also need these as well for rendering:
pip install nbformat nbclient
