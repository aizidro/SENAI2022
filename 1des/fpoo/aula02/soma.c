#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL,"");
	int a,b,c,d;
	printf("Digite um n�mero inteiro: ");
	scanf("%d",&a);
	printf("Digite outro n�mero inteiro: ");
	scanf("%d",&b);
	printf("Digite outro n�mero inteiro: ");
	scanf("%d",&c);
	d = a + b + c;
	printf("A soma dos tr�s n�meros � %d",d);	
}

