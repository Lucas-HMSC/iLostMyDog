#!/bin/bash
#Script para criação de arquivo TXT com o ID da raça identificada

source ./venv/bin/activate

print_in_file() {
	python3 classifier.py --image_path $1 > result.txt
}

print_in_file $1