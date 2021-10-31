#!/bin/bash
#Script para criação de arquivo com o id da raça identificada

venv/Scripts/activate.bat

print_in_file() {
	python3 classifier.py --image_path $1 > result.txt
}

print_in_file $1
