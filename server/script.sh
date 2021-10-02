#!/bin/bash
#Script para criação de arquivo JSON com o nome da raça identificada

source ./venv/bin/activate

print_in_json() {
	python3 classifier.py --image_path $1 > result.json
}

print_in_json $1
