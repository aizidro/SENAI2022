#include<stdio.h>
#include<locale.h>
int main(){
	setlocale(LC_ALL,"");
	char nomes[5][10];
	float salarios[5];
	float percentual;
	int i;
	
	//Entradas
	printf("Digite os nomes dos 5 funcion�rios:\n");
	for(i = 0; i < 5; i++){
		scanf("%s",&nomes[i]);
	}
	printf("Digite os 5 sal�rios respectivamente:\n");
	for(i = 0; i < 5; i++){
		do{
			scanf("%f",&salarios[i]);
		}while(salarios[i] < 0 || salarios[i]>1000000);
	}
	printf("Digite percentual(%%) de Reajuste:\n");
	do{
		scanf("%f",&percentual);
	}while(percentual < 0 || percentual>1000);
	
	//Procesamento e Sa�da
	for(i = 0; i < 5; i++){
		salarios[i] = salarios[i] * percentual / 100 + salarios[i];
		printf("%s novo sal�rio R$%.2f\n",nomes[i],salarios[i]);
	}
}
