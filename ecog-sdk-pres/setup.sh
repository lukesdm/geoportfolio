# Prerequisites:
# quarto-cli
# [Quarto VS Code Extension]

# For notebook behaviour
python -m venv .venv
. .venv/Scripts/activate
pip install ipykernel

# Seem to need these as well for rendering:
pip install nbformat nbclient

# For Python examples - running blocks (maybe optional)
matplotlib plotly_express
