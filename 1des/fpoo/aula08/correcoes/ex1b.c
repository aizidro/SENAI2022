#include<stdio.h>
#include<locale.h>
void decBin(int n); //Assinatura da fun��o
int main(){
	setlocale(LC_ALL,"");
	int num;
	printf("Digite o n�mero inteiro que ser� convertido em binario: ");
	scanf("%d",&num);
	printf("O n�mero %d em bin�rio � ",num);
	decBin(num);
}
//Fun��o que converte um n�mero inteiro em bin�rio
void decBin(int n){
	int bin = 0, digitos = 1;
	while(n > 0){
		bin += (n % 2) * digitos;
		digitos *= 10;
		n /= 2;
	}
	printf("%d",bin);
}
