#include<stdio.h>
#include<stdlib.h>

#define ROW 3
#define COL 4
int main(){
    int** m;
    m = (int**)malloc(sizeof(int*) * ROW);
    
    for(int i=0;i<ROW;i++){
        *(m+i) = (int*)malloc(sizeof(int) * COL);
    }
    
    for(int i=0;i<ROW;i++){
        for(int j=0;j<COL;j++){
            //*(*(m+j)+i) = i+j;
            m[i][j] = i + j;
        }
    }
    
    for(int i=0;i<ROW;i++){
        for(int j=0;j<COL;j++){
            //printf("%d ",*(*(m+j)+i));
            printf("%d ",m[i][j]);
        }
        printf("\n");
    }
    
    for(int i=0;i<ROW;i++){
        for(int j=0;j<COL;j++){
            //printf("%d ",(*(m+j)+i));
            printf("%d ",&m[i][j]);
        }
        printf("\n");
    }
    
    for(int i=0;i<ROW;i++){
        free(m[i]);
    }
    
    free(m);
}