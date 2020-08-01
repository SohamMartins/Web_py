print("-=" * 20)
input("Python sendo executado a partir daqui. Pressione ENTER para continuar.")


with open('./bin/client.txt', 'r', encoding = 'utf-8') as file:
	string = ''.join(i for i in file).split(',')

	print(string)

