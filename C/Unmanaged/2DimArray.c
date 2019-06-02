#include<stdio.h>
#include<stdlib.h>

#define COL 3
#define ROW 4
int main(){
    int** m;
    m = (int**)malloc(sizeof(int**) * COL);
    
    for(int i=0;i<ROW;i++){
        *(m+i) = (int*)malloc(sizeof(int*) * ROW);
    }
    
    for(int i=0;i<COL;i++){
        for(int j=0;j<ROW;j++)
            *(*(m+j)+i) = i+j;
    }
    
    for(int i=0;i<COL;i++){
        for(int j=0;j<ROW;j++){
            printf("%d ",*(*(m+j)+i));
        }
        printf("\n");
    }
    
}