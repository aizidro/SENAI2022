#include<stdio.h>
#include<locale.h>
int main(){
	setlocale(LC_ALL,"");
	char mercadorias[5][10];
	float precos[5], novoPreco[5];
	int i;	
	//Entrada
	printf("Digite o nome e pre�o de 5 mercadorias:\n");
	for(i = 0; i < 5; i++){
		scanf("%s",&mercadorias[i]);
		scanf("%f",&precos[i]);
	}
	//Processamento
	for(i = 0; i < 5; i++)
		if(precos[i]>1000)
			novoPreco[i] = precos[i] + precos[i] * (float)5/100;
		else
			novoPreco[i] = precos[i] + precos[i] * 0.07;
	//Sa�da
	printf("Mercadoria\tNovo pre�o\n");
	for(i = 0; i < 5; i++){
		printf("%s\t%.2f\n",mercadorias[i],novoPreco[i]);
	}
}
