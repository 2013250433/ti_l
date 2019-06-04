#include<stdio.h>
#include<stdlib.h>
#include<string.h>

int xArr[4] = {1, -1, 0, 0};
int yArr[4] = {0, 0, 1, -1};

void BFS(int x, int y, int** arr, int** check, int row, int col){
    for(int i=0;i<4;i++){ //TODO: get array size by sizeof()
        int xx = x+xArr[i];
        int yy = y+yArr[i];
        if(0 <= xx && xx <= row-1 && 0 <= yy && yy <= col-1){
            if(arr[xx][yy] == 1 && check[xx][yy] == 0){// TODO: why segment fault on if(arr[xx][yy]==1)
                check[xx][yy] = 1;
                //printf("d:%d%d ",xx,yy);
                BFS(xx,yy,arr,check,row,col);
            }
        }
        
    }
}

int main(){
    int T;
    scanf("%d",&T);
    
    while(T--){
        int res= 0;
        int M, N, K;
        scanf("%d %d %d",&M,&N,&K);
        
        int** arr= (int**)malloc(sizeof(int*) * N); //arr[N][M]
        int** check= (int**)malloc(sizeof(int*) * N);
        
        for(int i=0;i<M;i++){
            arr[i] = (int*)malloc(sizeof(int) * M);
            check[i] = (int*)malloc(sizeof(int) * M);
        }
        
        for(int i=0;i<K;i++){
            int x, y;
            scanf("%d %d",&x,&y);
            arr[x][y] = 1; // 1: true, 0: false
        }
        
        // check well mapped
        /*
        for(int i=0;i<M;i++){
            for(int j=0;j<N;j++){
                //printf("%d:%d ",arr[i][j],&arr[i][j]);
                printf("%d",arr[i][j]);
            }
            printf("\n");
        }
        
        for(int i=0;i<M;i++){
            for(int j=0;j<N;j++){
                printf("%d:%d ",check[i][j],&check[i][j]);
            }
            printf("\n");
        }
        */
        
        for(int i=0;i<N;i++){
            for(int j=0;j<M;j++){
                if(arr[i][j] == 1 && check[i][j] != 1){ // if true and not visited
                    //printf("hit:%d%d ",i,j);
                    res++;
                    BFS(i,j,arr,check,N,M);
                } 
            }
        }
        
        //TODO: free malloc well
        /*
        for(int i=0;i<M;i++){
            free(arr[i]);
            free(check[i]);
        }
        
        free(arr);
        free(check);
        */
        
        printf("%d\n",res);
        res = 0;
    }
}