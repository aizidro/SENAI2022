#include<stdio.h>
#include<locale.h>
int main(){
	setlocale(LC_ALL,"");
	char times[5][15];
	int vitorias[5],empates[5], pontos[5];
	int i, j, aux;
	char auxt[15];
	
	//Entradas
	printf("Digite o nome, vit�rias e empates de 5 times\n");
	for(i = 0; i < 5; i++){
		scanf("%s",&times[i]);
		scanf("%d",&vitorias[i]);
		scanf("%d",&empates[i]);
	}
	//Processamento c�lculo dos pontos
	for(i = 0; i < 5; i++){
		pontos[i] = vitorias[i] * 3 + empates[i];
	}
	
	//Processamento - Algoritmo de classifica��o e troca
	for(i = 0; i < 5; i++){
		for(j = i + 1; j < 5; j++){
			if(pontos[i] < pontos[j]){//Os crit�rios s�o os pontos
				//Fazer a troca dos pontos
				aux = pontos[i];
				pontos[i] = pontos[j];
				pontos[j] = aux;
				//Fazer a troca dos times
				strcpy(auxt, times[i]);
				strcpy(times[i], times[j]);
				strcpy(times[j], auxt);
			}
		}
	}
	
	//Sa�das
	printf("------------------------------------------\n");
	printf("Times\tPontos\n");
	for(i = 0; i < 5; i++){
		printf("%s\t%d\n",times[i],pontos[i]);
	}
}
