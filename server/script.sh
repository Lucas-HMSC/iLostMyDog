#!/bin/bash
#Script para criação de arquivo TXT com o ID da raça identificada

source /home/lucas/Documentos/GitHub/iLostMyDog/server/venv/bin/activate

print_in_file() {
	python3 /home/lucas/Documentos/GitHub/iLostMyDog/server/classifier.py --image_path $1 > result.txt
}

print_in_file $1