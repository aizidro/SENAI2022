#include<stdio.h>
#include<locale.h>
#include<time.h>

int main(){
	setlocale(LC_ALL,"");
	srand(time(NULL));
	int matriz[5][5];//Matriz
	int i, j;//Contadores para percorrer a matriz
	
	//Preencher a matriz com n�meros aleat�rios de 0 a 100
	for(i = 0; i < 5; i++)
		for(j = 0; j < 5; j++)
			matriz[i][j] = rand() % 100;

	//Mostrar a matriz preenchida			
	for(i = 0; i < 5; i++){
		for(j = 0; j < 5; j++)
			printf("[%d]\t",matriz[i][j]);
		printf("\n");
	}
	
}
