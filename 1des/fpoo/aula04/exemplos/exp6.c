#include <stdio.h>
#include <locale.h>

int main(){
	//Configura��es e Vari�veis
	setlocale(LC_ALL,"");
	int cor;
	//Entrada
	printf("Digite a cor do sem�foro \n[1.verde   ]\n[2.amarelo ]\n[3.vermelho]");
	scanf("%d",&cor);
	//Processamento e Sa�da
	switch(cor){
		case 1:
			printf("Voc� escolheu verde ent�o pode ir.\n");
			break;
		case 2:
			printf("Voc� escolheu amarelo ent�o fique atento.\n");	
			break;
		case 3:
			printf("Voc� escolheu vermelho ent�o espere.\n");
			break;
		default:
			printf("Op��o inv�lida\n");
	}

	printf("Fim.");
}

